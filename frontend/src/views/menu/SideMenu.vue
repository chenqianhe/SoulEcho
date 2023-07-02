<template>
  <div id="menu" class="w-20 h-full flex flex-col bg-slate-300">
    <div id="logo" class="w-full flex-none h-16">
      <img src="../../assets/persona.png" alt="PersonaSim" />
      <img src="../../assets/sim.png" class="w-12 mx-auto" alt="PersonaSim" />
    </div>
    <div id="user" class="w-full flex-none h-18">
      <div
        id="user-icon"
        class="w-16 h-16 mx-auto bg-no-repeat bg-center bg-cover"
      ></div>
    </div>
    <div id="character" class="w-full flex-1 min-h-0 flex flex-col">
      <div
        id="character_add-btn-area"
        class="w-full flex-none h-18 flex flex-col"
      >
        <div
          id="character_add-btn"
          class="w-14 h-14 mx-auto flex-none bg-white rounded-lg"
        >
          <div
            id="character_add-btn-img"
            class="w-14 h-14 rounded-lg bg-no-repeat bg-center bg-cover shadow-inner hover:shadow-md"
          ></div>
        </div>
        <div
          id="character_add-btn-divide"
          class="mx-auto w-12 flex-1 border-2 border-transparent border-b-gray-400"
        ></div>
      </div>
      <Character class="flex-1"></Character>
    </div>
    <div
      id="setting"
      class="w-full flex-none h-18 bg-gradient-to-b from-slate-200 to-slate-300"
    >
      <div id="setting-btn" class="w-12 h-12 py-2 mx-auto rounded-lg">
        <div
          id="setting-btn-img"
          class="w-12 h-12 bg-no-repeat bg-center bg-cover"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Character from "@/views/menu/components/CharacterIcon.vue";
</script>

<style scoped>
#user-icon {
  background-image: url("../../assets/user_icon.svg");
}

#character_add-btn-img {
  background-image: url("../../assets/add_light.svg");
}

#setting-btn-img {
  background-image: url("../../assets/setting_light.svg");
}

#character_add-btn {
  transition: transform 0.3s;
}

#character_add-btn:active {
  transform: scale(0.9);
}
</style>
