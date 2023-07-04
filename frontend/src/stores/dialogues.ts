import { defineStore } from "pinia";
import type { Dialogue, DialogueContent } from "@/types/dialogue";

export const useDialoguesStore = defineStore("dialogues", {
  state: () => ({
    dialogue: null as unknown as Dialogue,
    sendEnabled: true,
  }),
  getters: {
    getHistory(): DialogueContent[] {
      return this.dialogue.contents;
    },
  },
  actions: {
    setDialogue(dialogue: Dialogue) {
      this.dialogue = dialogue;
    },
    addContent(content: DialogueContent) {
      this.dialogue.contents.push(content);
    },
    stopSend() {
      this.sendEnabled = false;
    },
    enableSend() {
      this.sendEnabled = true;
    },
  },
});
