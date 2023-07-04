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
        onclick="add_dialogue_modal.showModal()"
      >
        <div
          id="chat-selection_op-add-chat-img"
          class="w-10 h-10 se-div-bg-img-format"
        ></div>
        <span class="font-mono text-x text-start">New Chat</span>
      </div>
    </div>
    <ChatList class="flex-1"></ChatList>
    <dialog id="add_dialogue_modal" class="modal modal-bottom sm:modal-middle">
      <form method="dialog" class="modal-box">
        <h1 class="font-bold text-2xl">Add New Chat</h1>
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <h2 class="text-xl mt-4">Select Dataset</h2>
        <select
          class="select w-full bg-slate-100 text-xl"
          v-model="selectedDatasetId"
        >
          <option
            v-for="dataset in selectedCharacterDatasets"
            :key="dataset.id"
          >
            {{ `${dataset.nickName}(${dataset.id})` }}
          </option>
        </select>
        <button class="btn mt-2 float-right" @click="createNewChat">
          New Chat
        </button>
      </form>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import ChatList from "@/views/ChatSlection/components/ChatList.vue";
import { ref, watch } from "vue";
import { useCharacterStore } from "@/stores/characters";
import { storeToRefs } from "pinia";
import type { Dataset } from "@/types/dataset";
import { DatasetOP } from "@/apis/dataset";
import { ChatOP } from "@/apis/chat";

const characterStore = useCharacterStore();
const { selectedCharacter, selectedCharacterDatasets } =
  storeToRefs(characterStore);

watch(
  selectedCharacter,
  async (newVal) => {
    if (newVal) {
      const datasetsId = newVal.sourceDatasetId;
      const newDatasets: Dataset[] = [];
      await DatasetOP.getAllDataset().then((res) => {
        res.forEach((data) => {
          if (datasetsId.includes(data.id)) {
            newDatasets.push(data);
          }
        });
        characterStore.setDataset(newDatasets);
      });
    }
  },
  { immediate: true }
);

const selectedDatasetId = ref("");

const createNewChat = () => {
  ChatOP.addNewChat(
    selectedCharacter.value.id,
    selectedDatasetId.value.split("(")[1].split(")")[0]
  );
};
</script>

<style scoped>
#chat-selection_op-delete-character-img {
  background-image: url("../../assets/delete_profile_light.svg");
}

#chat-selection_op-add-chat-img {
  background-image: url("../../assets/add_light.svg");
}
</style>
