<template>
  <div id="chat-list" class="w-full h-full px-2 overflow-auto">
    <template v-if="chats?.historyChats && chats?.historyChats.length">
      <div
        id="chat-list_chat"
        :class="{
          'h-10 w-full px-1 flex flex-row items-center mb-2 rounded-lg cursor-pointer hover:bg-slate-50': true,
          'bg-slate-50': chat.dialogueId === selectedDialogueId,
        }"
        v-for="chat in chats.historyChats"
        :key="chat.dialogueId"
        @click="selectChat(chat)"
      >
        <div
          id="chat-list_chat-type-icon"
          class="w-6 h-6 se-div-bg-img-format"
        ></div>
        <div
          class="mx-1 flex-1 min-w-0 flex flex-row justify-between items-center"
        >
          <span
            class="card-title w-full whitespace-nowrap overflow-hidden text-ellipsis mr-1"
            >{{ chat.title }}</span
          >
          <div
            id="chat-list_chat-delete-icon"
            class="w-6 h-6 flex-none se-div-bg-img-format"
          ></div>
        </div>
      </div>
    </template>
    <div class="h-18 w-full px-1"></div>
  </div>
</template>

<script setup lang="ts">
import { useChatStore } from "@/stores/chats";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import type { ChatInfo } from "@/types/chat";

const chatStore = useChatStore();
const { chats } = storeToRefs(chatStore);

const selectedDialogueId = ref("");
const selectChat = (chat: ChatInfo) => {
  selectedDialogueId.value = chat.dialogueId;
  chatStore.setSelectedChat(chat);
};
</script>

<style scoped>
#chat-list_chat-type-icon {
  background-image: url("../../../assets/files.svg");
}

#chat-list_chat-delete-icon {
  background-image: url("../../../assets/trash_box_light.svg");
}
</style>
