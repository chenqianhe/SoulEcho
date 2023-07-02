<template>
  <div id="chat-list" class="w-full h-full px-2 overflow-auto">
    <div
      class="h-10 w-full px-1 flex flex-row items-center mb-2 rounded-lg bg-slate-50 cursor-pointer"
      v-for="chat in chats.historyChats.slice(0, 1)"
      :key="chat.dialogueId"
    >
      <img src="../../../assets/files.svg" alt="Type" class="w-6 h-6" />
      <div
        class="mx-1 flex-1 min-w-0 flex flex-row justify-between items-center"
      >
        <span
          class="card-title whitespace-nowrap overflow-hidden text-ellipsis"
          >{{ chat.title }}</span
        >
        <img
          src="../../../assets/trash_box_light.svg"
          class="w-6 h-6 flex-none"
          alt="Delete"
        />
      </div>
    </div>
    <div
      class="h-10 w-full px-1 flex flex-row items-center mb-2 rounded-lg cursor-pointer"
      v-for="chat in chats.historyChats"
      :key="chat.dialogueId"
    >
      <img src="../../../assets/files.svg" alt="Type" class="w-6 h-6" />
      <div
        class="mx-1 flex-1 min-w-0 flex flex-row justify-between items-center"
      >
        <span
          class="card-title whitespace-nowrap overflow-hidden text-ellipsis mr-1"
          >{{ chat.title }}</span
        >
        <img
          src="../../../assets/trash_box_light.svg"
          class="w-6 h-6 flex-none"
          alt="Delete"
        />
      </div>
    </div>
    <div class="h-18 w-full px-1"></div>
  </div>
</template>

<script setup lang="ts">
import { useChatStore } from "@/stores/chats";
import { storeToRefs } from "pinia";

const chatStore = useChatStore();
const { chats } = storeToRefs(chatStore);
</script>

<style scoped></style>
