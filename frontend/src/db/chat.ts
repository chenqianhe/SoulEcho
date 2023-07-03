import localForage from "localforage";

export const chatDB = localForage.createInstance({
  name: "soul_echo",
  storeName: "chat",
  description: "chat",
});
