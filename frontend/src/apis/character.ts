import { characterDB } from "@/db/character";
import { genId } from "@/utils/genId";
import type { Character } from "@/types/character";
import { useCharacterStore } from "@/stores/characters";
import { ChatOP } from "@/apis/chat";

export namespace CharacterOP {
  export const getAllCharacter = async () => {
    const characters: Character[] = [];
    await characterDB.iterate((value) => {
      characters.push(value as Character);
    });
    return characters;
  };

  export const addCharacter = async (rawName: string, datasetId: string) => {
    let characters: Character[] = [];
    await getAllCharacter().then((res) => {
      characters = res;
    });
    let exist = false;
    for (const character of characters) {
      if (character.rawName === rawName) {
        exist = true;
        character.sourceDatasetId.push(datasetId);
        characterDB.setItem(character.id, character).then(() => {
          useCharacterStore().updateCharacterSourceDatasetId(
            character.id,
            datasetId
          );
        });
        break;
      }
    }
    if (!exist) {
      const id = genId();
      const newCharacter: Character = {
        rawName,
        name: "",
        id,
        createdTime: "0",
        sourceDatasetId: [datasetId],
      };
      characterDB.setItem(id, newCharacter).then(() => {
        useCharacterStore().addCharacter(newCharacter);
      });
      ChatOP.initChatRecord(id);
    }
  };

  export const deleteCharacter = (id: string) => {
    characterDB.getItem(id).then((character) => {
      if (character) {
        (character as Character).createdTime = "0";
        characterDB.setItem(id, character);
        useCharacterStore().updateCharacterCreatedTime(id, "0");
      }
    });
  };

  export const createCharacter = (id: string, name: string) => {
    characterDB.getItem(id).then((character) => {
      if (character) {
        (character as Character).name = name;
        (character as Character).createdTime = `${new Date().getTime()}`;
        characterDB.setItem(id, character);
        useCharacterStore().updateCharacterCreatedTime(
          id,
          `${new Date().getTime()}`
        );
        useCharacterStore().updateCharacterName(id, name);
      }
    });
  };
}
