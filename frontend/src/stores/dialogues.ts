import { defineStore } from "pinia";
import { mockDialogues } from "@/types/dialogue";

export const useDialoguesStore = defineStore("dialogues", {
  state: () => ({
    dialogue: mockDialogues,
  }),
  getters: {},
  actions: {},
});
