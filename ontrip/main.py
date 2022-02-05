from fastapi import FastAPI
from src.graph import Graph
from src.utils import read_csv

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Ok!"}

@app.get("/airports")
async def airports():
    edges = read_csv("./data/routes.csv")
    graph = Graph(edges=edges)
    return dict(airports=graph.get_edges())