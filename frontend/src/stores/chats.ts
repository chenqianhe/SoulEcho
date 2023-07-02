import { defineStore } from "pinia";
import { type Chat, type ChatInfo, mockChats } from "@/types/chat";

export const useChatStore = defineStore("chat", {
  state: () => ({
    chats: mockChats as Chat,
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
  },
});
