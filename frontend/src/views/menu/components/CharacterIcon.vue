<template>
  <div id="characters" class="w-full overflow-auto">
    <div
      class="w-14 h-14 mx-auto flex flex-col justify-center bg-slate-400 rounded-lg my-2 font-mono text-3xl text-center"
      v-for="character in characters"
      :key="character.id"
    >
      {{ character.name.slice(0, 1) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from "@/stores/characters";
import { storeToRefs } from "pinia";

const characterStore = useCharacterStore();
const { characters } = storeToRefs(characterStore);
</script>

<style scoped></style>
