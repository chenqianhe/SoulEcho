<template>
  <div
    id="chat-selection"
    class="w-80 h-full bg-slate-200 flex flex-col min-h-0"
  >
    <div
      id="chat-selection_op"
      class="w-full h-16 px-2.5 flex-none flex flex-row justify-between items-center mb-8"
    >
      <div
        id="chat-selection_op-delete-character"
        class="h-12 basis-3/12 bg-white rounded-lg"
      >
        <img
          src="../../assets/delete_profile_light.svg"
          alt="Delete"
          class="h-8 mx-auto my-2"
        />
      </div>
      <div
        id="chat-selection_op-add-chat"
        class="h-12 basis-8/12 bg-slate-50 rounded-lg flex flex-row items-center"
      >
        <img src="../../assets/add_light.svg" alt="Add" class="w-10 h-10" />
        <span class="font-mono text-x text-start">New Chat</span>
      </div>
    </div>
    <ChatList class="flex-1"></ChatList>
  </div>
</template>

<script setup lang="ts">
import ChatList from "@/views/ChatSlection/components/ChatList.vue";
</script>

<style scoped></style>
