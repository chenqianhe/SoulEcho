export interface Dialogue {
  id: string;
  contents: DialogueContent[];
}

export interface DialogueContent {
  id: string;
  type: SpeakingType;
  content: string;
  date: string;
}

export enum SpeakingType {
  SYSTEM = "system",
  USER = "user",
}
