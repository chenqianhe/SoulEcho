import * as localForage from "localforage";

export const characterDB = localForage.createInstance({
  name: "soul_echo",
  storeName: "character",
  description: "character",
});
