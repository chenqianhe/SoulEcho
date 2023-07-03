import localForage from "localforage";

export const dialogueDB = localForage.createInstance({
  name: "soul_echo",
  storeName: "dialogue",
  description: "dialogue",
});
