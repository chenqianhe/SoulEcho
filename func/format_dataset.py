from type import RAW_DATASET, FORMAT_DATASET


def format_dataset(raw_dataset: RAW_DATASET) -> FORMAT_DATASET:
    """
    :param raw_dataset: RAW_DATASET
    :return: FORMAT_DATASET
    """
    res = {
        "id": raw_dataset["id"],
        "content": [],
        "nickName": raw_dataset["nickName"],
        "date": raw_dataset["date"],
    }
    for data in raw_dataset["content"].split("\n\n"):
        if data != "":
            info = data.split("\n")[0]
            if len(info.split(" ")) == 3:
                user = info.split(" ")[0]
                date = info.split(" ")[1]
                time = info.split(" ")[2]
            else:
                user = info[:-1]
                date = ""
                time = ""
            content = data.replace(info, "")[1:]
            res["content"].append(
                {"name": user, "date": date, "time": time, "content": content}
            )
    return res
