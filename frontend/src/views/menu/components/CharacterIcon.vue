<template>
  <div id="characters" class="w-full overflow-auto">
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
      v-for="character in characters"
      :key="character.id"
      @click="selectCharacter(character)"
    >
      {{ character.name.slice(0, 1) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from "@/stores/characters";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import type { Character } from "@/types/character";

const characterStore = useCharacterStore();
const { characters } = storeToRefs(characterStore);

const selectedCharacterId = ref("");
const selectCharacter = (character: Character) => {
  selectedCharacterId.value = character.id;
  characterStore.setSelectedCharacter(character);
};
</script>

<style scoped>
#characters::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
