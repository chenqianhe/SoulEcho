import { dialogueDB } from "@/db/dialogue";
import { useDialoguesStore } from "@/stores/dialogues";
import type { Dialogue, DialogueContent } from "@/types/dialogue";
import { SpeakingType } from "@/types/dialogue";
import { genId } from "@/utils/genId";
import { chat } from "@/apis/request";
import { useCharacterStore } from "@/stores/characters";
import cloneDeep from "lodash.clonedeep";

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

  export const sendContent = (
    dialogueId: string,
    datasetId: string,
    content: string
  ) => {
    const id1 = genId();
    const d1 = `${new Date().getTime()}`;
    const user_content: DialogueContent = {
      id: id1,
      type: SpeakingType.USER,
      content,
      date: d1,
    };
    const history = cloneDeep(useDialoguesStore().getHistory);
    useDialoguesStore().addContent(user_content);
    addContentById(dialogueId, user_content);
    chat(
      dialogueId,
      datasetId,
      id1,
      useCharacterStore().getSelectedCharacter.rawName,
      content,
      d1,
      history
    )
      .then((res) => {
        const resData = res.data.data;
        if (resData.statue === 1) {
          const systemContent = {
            id: resData.id,
            type: SpeakingType.SYSTEM,
            content: resData.content,
            date: resData.date,
          };
          useDialoguesStore().addContent(systemContent);
          addContentById(dialogueId, systemContent);
        }
      })
      .catch((err) => {
        console.log(err);
        const id2 = genId();
        const d2 = `${new Date().getTime()}`;
        const systemContent: DialogueContent = {
          id: id2,
          type: SpeakingType.SYSTEM,
          content: "Error",
          date: d2,
        };
        useDialoguesStore().addContent(systemContent);
        addContentById(dialogueId, systemContent);
      })
      .finally(() => {
        useDialoguesStore().enableSend();
      });
  };

  const addContentById = (dialogueId: string, content: DialogueContent) => {
    dialogueDB.getItem(dialogueId).then((value) => {
      const dialogue = value as unknown as Dialogue;
      dialogue.contents.push(content);
      dialogueDB.setItem(dialogueId, dialogue);
    });
  };
}
