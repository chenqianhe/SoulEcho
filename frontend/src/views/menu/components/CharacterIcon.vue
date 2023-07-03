<template>
  <div id="characters" class="w-full overflow-auto">
    <template v-if="characters && characters.length">
      <div
        :class="{
          'w-14 h-14 mx-auto': true,
          'se-clickable-btn': true,
          'flex flex-col justify-center': true,
          'bg-slate-400 rounded-2xl': true,
          'my-2': true,
          'font-mono text-3xl text-center': true,
          'border-4 border-solid border-slate-800':
            character.id === selectedCharacterId,
        }"
        v-show="character.createdTime !== '0'"
        v-for="character in characters"
        :key="character.id"
        @click="selectCharacter(character)"
      >
        {{ character.name.slice(0, 1) }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from "@/stores/characters";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import type { Character } from "@/types/character";
import { ChatOP } from "@/apis/chat";

const characterStore = useCharacterStore();
const { characters, selectedCharacter } = storeToRefs(characterStore);

const selectedCharacterId = ref(selectedCharacter.value?.id || "");
const selectCharacter = (character: Character) => {
  selectedCharacterId.value = character.id;
  characterStore.setSelectedCharacter(character);
  ChatOP.loadChats(character.id);
};
</script>

<style scoped>
#characters::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
