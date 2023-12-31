<template>
  <div id="menu" class="w-20 h-full flex flex-col bg-slate-300">
    <div id="logo" class="w-full flex-none h-16">
      <img
        src="../../assets/icon.png"
        alt="SoulEcho"
        class="h-12 w-14 mx-auto mt-2"
      />
    </div>
    <div id="user" class="w-full flex-none h-18">
      <div id="user-icon" class="w-16 h-16 mx-auto se-div-bg-img-format"></div>
    </div>
    <div id="character" class="w-full flex-1 min-h-0 flex flex-col">
      <div
        id="character_add-btn-area"
        class="w-full flex-none h-18 flex flex-col"
      >
        <div
          id="character_add-btn"
          class="w-14 h-14 mx-auto se-clickable-btn flex-none bg-white rounded-2xl"
          onclick="add_character_modal.showModal()"
        >
          <div
            id="character_add-btn-img"
            class="w-14 h-14 rounded-2xl se-clickable-btn se-div-bg-img-format shadow-inner"
          ></div>
        </div>
        <div
          id="character_add-btn-divide"
          class="mx-auto w-12 flex-1 border-2 border-transparent border-b-gray-400"
        ></div>
      </div>
      <Character class="flex-1 mt-2"></Character>
    </div>
    <div
      id="setting"
      class="w-full flex-none h-18 bg-gradient-to-b from-slate-200 to-slate-300"
    >
      <div
        id="setting-btn"
        class="w-12 h-12 py-2 mx-auto rounded-lg"
        onclick="setting_modal.showModal()"
      >
        <div id="setting-btn-img" class="w-12 h-12 se-div-bg-img-format"></div>
      </div>
    </div>
    <dialog id="setting_modal" class="modal modal-bottom sm:modal-middle">
      <form method="dialog" class="modal-box">
        <h1 class="font-bold text-2xl">Upload Dataset</h1>
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <h2 class="text-xl mt-4">Dataset Content</h2>
        <textarea
          class="textarea h-40 w-full resize-none mr-2 bg-slate-100 text-xl border-2 border-solid border-slate-300 focus:outline-0"
          placeholder=""
          v-model="inputContent"
        ></textarea>
        <h2 class="text-xl mt-4">Dataset Nickname</h2>
        <input
          type="text"
          v-model="inputNickname"
          placeholder=""
          class="input w-full mb-4 bg-slate-100 text-xl border-2 border-solid border-slate-300 focus:outline-0"
        />
        <button class="btn mt-2 float-right" @click="uploadDataSet">
          Upload
        </button>
      </form>
    </dialog>
    <dialog id="add_character_modal" class="modal modal-bottom sm:modal-middle">
      <form method="dialog" class="modal-box">
        <h1 class="font-bold text-2xl">Add Character</h1>
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <h2 class="text-xl mt-4">Select Character</h2>
        <select
          class="select w-full bg-slate-100 text-xl"
          v-model="createCharacter"
        >
          <option
            v-for="character in characters"
            :key="character.id"
            v-show="character.createdTime === '0'"
          >
            {{ character.rawName }}
          </option>
        </select>
        <h2 class="text-xl mt-4">Set Nickname</h2>
        <input
          type="text"
          v-model="inputCharacterNickname"
          placeholder=""
          class="input w-full mb-4 bg-slate-100 text-xl border-2 border-solid border-slate-300 focus:outline-0"
        />
        <button class="btn mt-2 float-right" @click="createNewCharacter">
          Create
        </button>
      </form>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import Character from "@/views/menu/components/CharacterIcon.vue";
import { ref } from "vue";
import { DatasetOP } from "@/apis/dataset";
import { CharacterOP } from "@/apis/character";
import { useCharacterStore } from "@/stores/characters";
import { storeToRefs } from "pinia";

const inputContent = ref("");
const inputNickname = ref("");

const createCharacter = ref("");
const inputCharacterNickname = ref("");

const characterStore = useCharacterStore();
const { characters } = storeToRefs(characterStore);

const uploadDataSet = async () => {
  const rawNames: string[] = [];
  console.log(inputContent.value);
  // check input
  if (inputContent.value == "" || inputNickname.value == "") {
    return;
  }
  // check valid content
  {
    let invalid = false;
    const splitItems = inputContent.value
      .split("\n\n")
      .filter((item) => item != "");
    for (const splitItem of splitItems) {
      // userinfo content(contains \n)
      if (splitItem.split("\n").length < 1) {
        invalid = true;
        break;
      }
      const userInfo = splitItem.split("\n")[0];
      // name date time
      if (
        userInfo.split(" ").length != 3 &&
        !userInfo.includes(" ") &&
        !userInfo.includes(":")
      ) {
        invalid = true;
        break;
      }
      const name = userInfo.split(" ")[0];
      if (!rawNames.includes(name)) {
        rawNames.push(name);
      }
    }
    if (invalid) {
      return;
    }
  }
  const id = await DatasetOP.uploadDataset(
    inputContent.value,
    inputNickname.value
  );
  if (id !== "") {
    rawNames.forEach((name) => {
      CharacterOP.addCharacter(name, id);
    });
    inputContent.value = "";
    inputNickname.value = "";
  }
};

const createNewCharacter = () => {
  if (inputCharacterNickname.value === "") {
    return;
  }

  const character = characters.value.find(
    (character) => character.rawName === createCharacter.value
  );

  if (character) {
    CharacterOP.createCharacter(character.id, inputCharacterNickname.value);
    createCharacter.value = "";
    inputCharacterNickname.value = "";
  }
};
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
</style>
