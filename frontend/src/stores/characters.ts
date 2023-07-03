import { defineStore } from "pinia";
import type { Character } from "@/types/character";

export const useCharacterStore = defineStore("counter", {
  state: () => ({
    characters: [] as Character[],
    selectedCharacter: null as unknown as Character,
  }),
  getters: {
    getCharacters(): Character[] {
      return this.characters;
    },
    getSelectedCharacter(): Character {
      return this.selectedCharacter;
    },
  },
  actions: {
    setSelectedCharacter(characterData: Character) {
      if (this.characters.includes(characterData)) {
        this.selectedCharacter = characterData;
      }
    },
    updateCharacterSourceDatasetId(characterId: string, datasetId: string) {
      const character = this.characters.find(
        (character) => character.id === characterId
      );
      if (character) {
        character.sourceDatasetId.push(datasetId);
      }
    },
    addCharacter(characterData: Character) {
      this.characters.push(characterData);
    },
    updateCharacterCreatedTime(characterId: string, createdTime: string) {
      const character = this.characters.find(
        (character) => character.id === characterId
      );
      if (character) {
        character.createdTime = createdTime;
      }
    },
  },
});
