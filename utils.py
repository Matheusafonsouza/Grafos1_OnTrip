import pandas as pd


def read_csv() -> None:
    """
    This function read the routes csv file and returns a list of tuple with
    the source airport and the destination airport
    :returns List[tuple[str, str]]: A list of source and destination airports tuple
    """
    cols = ["source", "destination"]
    df = pd.read_csv("./routes.csv", usecols=cols)
    return df.to_records(index=False)