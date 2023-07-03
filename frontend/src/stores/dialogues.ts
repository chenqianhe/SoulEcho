import { defineStore } from "pinia";
import type { Dialogue } from "@/types/dialogue";

export const useDialoguesStore = defineStore("dialogues", {
  state: () => ({
    dialogue: null as unknown as Dialogue,
  }),
  getters: {},
  actions: {
    setDialogue(dialogue: Dialogue) {
      this.dialogue = dialogue;
    },
  },
});
