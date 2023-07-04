import datetime
import uuid

from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware

from func.chat import chat_with_history
from func.format_dataset import format_dataset
from type import RAW_DATASET, CHAT_DATA

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

datasets = {}


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}


@app.post("/dataset/{dataset_id}")
async def create_dataset(dataset_id: str, dataset: RAW_DATASET = Body(...)):
    try:
        data = format_dataset(dataset)
        datasets[dataset_id] = data
        return {"data": {"message": f"Dataset {dataset_id} created", "statue": 1}}
    except Exception as e:
        return {
            "data": {"message": f"Fail to create Dataset {dataset_id}", "statue": 0}
        }


@app.post("/chat/{chat_id}")
async def get_chat(chat_id: str, chat_data: CHAT_DATA = Body(...)):
    # try:
    if chat_data["dataset_id"] not in datasets.keys():
        return {
            "data": {
                "message": f"Dataset {chat_data['dataset_id']} not found",
                "statue": -1,
            }
        }
    res = chat_with_history(
        chat_data["content"],
        datasets[chat_data["dataset_id"]]["content"],
        chat_data["history"],
        chat_data["sys_name"],
    )
    res_id = str(uuid.uuid4())
    return {
        "data": {
            "message": f"Chat {chat_id} answered",
            "statue": 1,
            "id": res_id,
            "content": res,
            "date": str(int(datetime.datetime.now().timestamp())),
        }
    }
    # except Exception as e:
    #     return {"data": {"message": f"Fail to answer Chat {chat_id}", "statue": 0}}
