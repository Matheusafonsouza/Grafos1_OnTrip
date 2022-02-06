from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.graph import Graph
from src.utils import read_csv

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Ok!"}

@app.get("/airports")
async def airports():
    edges = read_csv("./data/routes.csv")
    graph = Graph(edges=edges)
    graph.init_graph()
    return dict(airports=graph.get_nodes())