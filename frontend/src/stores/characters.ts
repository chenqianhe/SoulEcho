import { defineStore } from "pinia";
import {
  type Character,
  mockCharacters,
  mockSelectedCharacter,
} from "@/types/character";

export const useCharacterStore = defineStore("counter", {
  state: () => ({
    characters: mockCharacters,
    selectedCharacter: mockSelectedCharacter,
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
  },
});
