<template>
  <div
    id="chat"
    class="w-full h-full ps-1 xl:px-36 pb-16 bg-slate-100 flex flex-col min-h-0"
  >
    <div id="chat_head" class="w-full h-16 flex-none">
      <!--TODO: BACK ICON-->
    </div>
    <div id="chat_content" class="w-full flex-1 overflow-auto">
      <Dialogue></Dialogue>
    </div>
    <div
      id="chat_input"
      class="w-full h-14 flex-none flex flex-row justify-between items-center"
    >
      <textarea
        class="textarea h-full w-auto resize-none flex-1 mr-2 bg-slate-100 text-xl border-2 border-solid border-slate-300 focus:outline-0"
        placeholder=""
        v-model="input"
      ></textarea>
      <div
        id="chat_input_upload-btn"
        class="h-8 w-8 flex-none se-div-bg-img-format"
        @click="chat"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Dialogue from "@/views/Chat/components/DialogueArea.vue";
import { ref, watch } from "vue";
import { useChatStore } from "@/stores/chats";
import { storeToRefs } from "pinia";
import { DialogueOP } from "@/apis/dialogue";
import { useDialoguesStore } from "@/stores/dialogues";

const input = ref("");
const chatStore = useChatStore();
const { selectedChat } = storeToRefs(chatStore);

const dialogueStore = useDialoguesStore();
const { sendEnabled } = storeToRefs(dialogueStore);

watch(
  selectedChat,
  (newVal) => {
    if (newVal) {
      DialogueOP.loadDialogue(newVal.dialogueId);
      input.value = "";
    }
  },
  { immediate: true }
);

const chat = () => {
  if (input.value && sendEnabled.value) {
    DialogueOP.sendContent(
      selectedChat.value.dialogueId,
      selectedChat.value.datasetId,
      input.value
    );
    input.value = "";
    dialogueStore.stopSend();
  }
};
</script>

<style scoped>
#chat_input_upload-btn {
  background-image: url("../../assets/send.svg");
}
</style>
