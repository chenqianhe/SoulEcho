import { defineStore } from "pinia";
import type { Character } from "@/types/character";
import { CharacterOP } from "@/apis/character";
import { ChatOP } from "@/apis/chat";
import type { Dataset } from "@/types/dataset";

export const useCharacterStore = defineStore("counter", {
  state: () => ({
    characters: [] as Character[],
    selectedCharacter: null as unknown as Character,
    selectedCharacterDatasets: [] as Dataset[],
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
      this.resortCharacters();
      if (this.characters.length) {
        this.selectedCharacter = this.characters[0];
        ChatOP.loadChats(this.selectedCharacter.id);
      }
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
    setDataset(datasets: Dataset[]) {
      this.selectedCharacterDatasets = datasets;
    },
    addDataset(dataset: Dataset) {
      this.selectedCharacterDatasets.push(dataset);
    },
  },
});
