import { datasetDB } from "@/db/dataset";
import { genId } from "@/utils/genId";
import type { Dataset } from "@/types/dataset";
import { sendDataset } from "@/apis/request";
import { useCharacterStore } from "@/stores/characters";

export namespace DatasetOP {
  export const uploadDataset = async (
    content: string,
    nickName: string = ""
  ) => {
    let id = genId();
    const dataset = {
      id,
      content,
      nickName,
      date: `${new Date().getTime()}`,
    };
    sendDataset(dataset);
    await datasetDB
      .setItem(id, dataset)
      .then(() => {
        useCharacterStore().addDataset(dataset);
        console.log("upload success");
      })
      .catch((err) => {
        console.log(err);
        id = "";
      });
    return id;
  };

  export const getDatasetById = (id: string) => {
    return datasetDB.getItem(id);
  };

  export const getAllDataset = async () => {
    const datasets: Dataset[] = [];
    await datasetDB.iterate((value) => {
      datasets.push(value as Dataset);
    });
    return datasets;
  };
}
