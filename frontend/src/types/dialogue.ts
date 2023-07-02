export interface Dialogue {
  id: string;
  contents: DialogueContent[];
}

export interface DialogueContent {
  id: string;
  type: SpeakingType;
  content: string;
}

export enum SpeakingType {
  SYSTEM = "system",
  USER = "user",
}

export const mockDialogues: Dialogue = {
  id: "1213",
  contents: [
    {
      id: "1",
      type: SpeakingType.SYSTEM,
      content: "好久不见",
    },
    {
      id: "2",
      type: SpeakingType.USER,
      content: "你好",
    },
    {
      id: "3",
      type: SpeakingType.SYSTEM,
      content:
        "你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才",
    },
    {
      id: "4",
      type: SpeakingType.USER,
      content: "你好",
    },
    {
      id: "1",
      type: SpeakingType.SYSTEM,
      content: "好久不见",
    },
    {
      id: "2",
      type: SpeakingType.USER,
      content: "你好",
    },
    {
      id: "3",
      type: SpeakingType.SYSTEM,
      content:
        "你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才",
    },
    {
      id: "4",
      type: SpeakingType.USER,
      content: "你好",
    },
    {
      id: "1",
      type: SpeakingType.SYSTEM,
      content: "好久不见",
    },
    {
      id: "2",
      type: SpeakingType.USER,
      content: "你好",
    },
    {
      id: "3",
      type: SpeakingType.SYSTEM,
      content:
        "你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才",
    },
    {
      id: "4",
      type: SpeakingType.USER,
      content: "你好",
    },
    {
      id: "1",
      type: SpeakingType.SYSTEM,
      content: "好久不见",
    },
    {
      id: "2",
      type: SpeakingType.USER,
      content: "你好",
    },
    {
      id: "3",
      type: SpeakingType.SYSTEM,
      content:
        "你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才",
    },
    {
      id: "4",
      type: SpeakingType.USER,
      content: "你好",
    },
    {
      id: "1",
      type: SpeakingType.SYSTEM,
      content: "好久不见",
    },
    {
      id: "2",
      type: SpeakingType.USER,
      content: "你好",
    },
    {
      id: "3",
      type: SpeakingType.SYSTEM,
      content:
        "你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才",
    },
    {
      id: "4",
      type: SpeakingType.USER,
      content: "你好",
    },
    {
      id: "1",
      type: SpeakingType.SYSTEM,
      content: "好久不见",
    },
    {
      id: "2",
      type: SpeakingType.USER,
      content: "你好",
    },
    {
      id: "3",
      type: SpeakingType.SYSTEM,
      content:
        "你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才你好长铲车噶还吃那刚才",
    },
    {
      id: "4",
      type: SpeakingType.USER,
      content: "你好",
    },
  ],
};
