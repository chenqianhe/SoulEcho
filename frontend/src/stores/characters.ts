import { defineStore } from "pinia";
import type { Character } from "@/types/character";
import { CharacterOP } from "@/apis/character";

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
    async initCharacters() {
      this.characters = await CharacterOP.getAllCharacter();
    },
    resortCharacters() {
      this.characters = this.characters.sort((a, b) => {
        return parseInt(b.createdTime) - parseInt(a.createdTime);
      });
    },
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
        this.resortCharacters();
      }
    },
    addCharacter(characterData: Character) {
      this.characters.push(characterData);
      this.resortCharacters();
    },
    updateCharacterCreatedTime(characterId: string, createdTime: string) {
      const character = this.characters.find(
        (character) => character.id === characterId
      );
      if (character) {
        character.createdTime = createdTime;
        this.resortCharacters();
      }
    },
    updateCharacterName(characterId: string, name: string) {
      const character = this.characters.find(
        (character) => character.id === characterId
      );
      if (character) {
        character.name = name;
        this.resortCharacters();
      }
    },
  },
});
