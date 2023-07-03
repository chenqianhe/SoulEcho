import * as localForage from "localforage";

export const datasetDB = localForage.createInstance({
  name: "soul_echo",
  storeName: "dataset",
  description: "dataset",
});
