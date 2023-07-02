<template>
  <div id="main-container" class="w-full h-full flex flex-row">
    <div
      id="menus"
      class="flex-none flex flex-row sm:w-100 sm:flex-none"
      v-if="showMenuBox"
    >
      <Menu class="flex-none"></Menu>
      <ChatSelection class="flex-1 sm:flex-none"></ChatSelection>
    </div>
    <div
      id="chat-area"
      class="hidden sm:flex-1 sm:block sm:w-full sm:h-full"
      v-if="showDialogBox"
    >
      <Chat></Chat>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/views/menu/SideMenu.vue";
import Chat from "@/views/Chat/ChatArea.vue";
import ChatSelection from "@/views/ChatSlection/ChatSelection.vue";
import { ref } from "vue";

const showMenuBox = ref(true);
const showDialogBox = ref(true);
</script>

<style scoped></style>
