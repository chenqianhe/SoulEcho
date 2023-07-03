import { dialogueDB } from "@/db/dialogue";
import { useDialoguesStore } from "@/stores/dialogues";
import type { Dialogue } from "@/types/dialogue";

export namespace DialogueOP {
  export const loadDialogue = (id: string) => {
    dialogueDB.getItem(id).then((value) => {
      useDialoguesStore().setDialogue(value as unknown as Dialogue);
    });
  };

  export const addNewDialogue = (id: string) => {
    return dialogueDB.setItem(id, {
      id: id,
      contents: [],
    });
  };

  export const saveDialogue = (id: string, dialogue: Dialogue) => {
    dialogueDB.setItem(id, dialogue);
  };
}
