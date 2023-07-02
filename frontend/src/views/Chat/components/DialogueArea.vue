<template>
  <div id="dialogue-container" class="w-full h-full">
    <template v-for="content in dialogue.contents" :key="content.id">
      <div class="chat chat-start" v-if="content.type === SpeakingType.SYSTEM">
        <div class="chat-header">
          {{ selectedCharacter?.name }}
        </div>
        <div class="chat-bubble bg-slate-500 text-xl">
          {{ content.content }}
        </div>
      </div>
      <div class="chat chat-end" v-else>
        <div class="chat-header">Me</div>
        <div class="chat-bubble bg-slate-700 text-xl">
          {{ content.content }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useDialoguesStore } from "@/stores/dialogues";
import { storeToRefs } from "pinia";
import { SpeakingType } from "@/types/dialogue";
import { useCharacterStore } from "@/stores/characters";

const dialogueStore = useDialoguesStore();
const { dialogue } = storeToRefs(dialogueStore);

const characterStore = useCharacterStore();
const { selectedCharacter } = storeToRefs(characterStore);
</script>

<style scoped></style>
