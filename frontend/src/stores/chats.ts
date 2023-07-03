import { defineStore } from "pinia";
import type { Chat, ChatInfo } from "@/types/chat";

export const useChatStore = defineStore("chat", {
  state: () => ({
    chats: null as unknown as Chat,
    selectedChat: null as unknown as ChatInfo,
  }),
  getters: {
    getChats(): Chat {
      return this.chats;
    },
    getSelectedChat(): ChatInfo {
      return this.selectedChat;
    },
  },
  actions: {
    setSelectedChat(chatData: ChatInfo) {
      if (this.chats.historyChats.includes(chatData)) {
        this.selectedChat = chatData;
      }
    },
    setChats(chats: Chat) {
      this.chats = chats;
    },
    addChat(chatData: ChatInfo) {
      this.chats.historyChats.push(chatData);
    },
  },
});
