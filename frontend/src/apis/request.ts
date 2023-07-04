import axios from "axios";
import type { Dataset } from "@/types/dataset";
import type { DialogueContent } from "@/types/dialogue";

const BASE_URL = "http://127.0.0.1:8000";

export const sendDataset = (data: Dataset) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/dataset/${data.id}`,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const chat = (
  dialogueId: string,
  datasetID: string,
  contentId: string,
  sys_name: string,
  content: string,
  date: string,
  history: DialogueContent[]
) => {
  const config = {
    method: "post",
    url: `${BASE_URL}/chat/${dialogueId}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      dialogue_id: dialogueId,
      dataset_id: datasetID,
      content_id: contentId,
      sys_name,
      content,
      date,
      history,
    },
  };
  return axios(config);
};
