import { datasetDB } from "@/db/dataset";
import { genId } from "@/utils/genId";
import type { Dataset } from "@/types/dataset";

export namespace DatasetOP {
  export const uploadDataset = async (
    content: string,
    nickName: string = ""
  ) => {
    let id = genId();
    await datasetDB
      .setItem(id, {
        id,
        content,
        nickName,
        date: `${new Date().getTime()}`,
      })
      .then(() => {
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
