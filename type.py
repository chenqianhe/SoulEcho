from typing import TypedDict, List

RAW_DATASET = TypedDict(
    "RAW_DATASET", {"id": str, "content": str, "nickName": str, "date": str}
)

DATASET_CONTENT = TypedDict(
    "DATASET_CONTENT", {"name": str, "date": str, "time": str, "content": str}
)

FORMAT_DATASET = TypedDict(
    "FORMAT_DATASET",
    {"id": str, "content": List[DATASET_CONTENT], "nickName": str, "date": str},
)

CHAT_CONTENT = TypedDict(
    "CHAT_CONTENT", {"id": str, "date": str, "type": str, "content": str}
)

CHAT_DATA = TypedDict(
    "CHAT_DATA",
    {
        "dialogue_id": str,
        "dataset_id": str,
        "content_id": str,
        "sys_name": str,
        "history": List[CHAT_CONTENT],
        "content": str,
        "date": str,
    },
)
