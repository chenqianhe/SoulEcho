import { chatDB } from "@/db/chat";
import { useChatStore } from "@/stores/chats";
import type { Chat } from "@/types/chat";
import { genId } from "@/utils/genId";
import { DialogueOP } from "@/apis/dialogue";

export namespace ChatOP {
  export const loadChats = (characterId: string) => {
    chatDB.getItem(characterId).then((value) => {
      useChatStore().setChats(value as Chat);
    });
  };

  export const initChatRecord = (characterId: string) => {
    chatDB.setItem(characterId, {
      characterId: characterId,
      historyChats: [],
    });
  };

  export const addNewChat = async (characterId: string, datasetId: string) => {
    let id = genId();
    await chatDB
      .getItem(characterId)
      .then(async (value) => {
        const chat = value as Chat;
        chat.historyChats.push({
          dialogueId: id,
          title: "New Chat",
          date: `${new Date().getTime()}`,
          type: "dataset",
          datasetId: datasetId,
        });
        await chatDB
          .setItem(characterId, chat)
          .then(async () => {
            await DialogueOP.addNewDialogue(id).then(() => {
              useChatStore().addChat({
                dialogueId: id,
                title: "hello",
                date: `${new Date().getTime()}`,
                type: "dataset",
                datasetId: datasetId,
              });
            });
          })
          .catch((err) => {
            console.log(err);
            id = "";
          });
      })
      .catch((err) => {
        console.log(err);
        id = "";
      });
    return id;
  };
}
