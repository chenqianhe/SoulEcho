export interface Chat {
  characterId: string;
  historyChats: ChatInfo[];
}

export interface ChatInfo {
  dialogueId: string;
  title: string;
  date: string;
  type: string;
  datasetId: string;
}
