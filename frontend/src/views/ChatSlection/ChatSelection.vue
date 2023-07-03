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
        class="h-12 basis-3/12 bg-white rounded-lg se-clickable-btn"
      >
        <div
          id="chat-selection_op-delete-character-img"
          class="h-8 mx-auto my-2 se-div-bg-img-format bg-auto"
        ></div>
      </div>
      <div
        id="chat-selection_op-add-chat"
        class="h-12 basis-8/12 bg-slate-50 rounded-lg flex flex-row items-center se-clickable-btn"
      >
        <div
          id="chat-selection_op-add-chat-img"
          class="w-10 h-10 se-div-bg-img-format"
        ></div>
        <span class="font-mono text-x text-start">New Chat</span>
      </div>
    </div>
    <ChatList class="flex-1"></ChatList>
  </div>
</template>

<script setup lang="ts">
import ChatList from "@/views/ChatSlection/components/ChatList.vue";
</script>

<style scoped>
#chat-selection_op-delete-character-img {
  background-image: url("../../assets/delete_profile_light.svg");
}

#chat-selection_op-add-chat-img {
  background-image: url("../../assets/add_light.svg");
}
</style>
