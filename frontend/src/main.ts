import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "./assets/main.css";
import { useCharacterStore } from "@/stores/characters";

const app = createApp(App);

app.use(createPinia());

useCharacterStore().initCharacters().then(() => {
    app.mount("#app");
});
