from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from src.graph import Graph
from src.utils import read_csv
from src.schemas import Path

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

@app.get("/graph")
async def graph():
    edges = read_csv("./data/routes.csv")
    graph = Graph(edges=edges)
    graph.init_graph()
    return dict(graph=graph.graph)

@app.post("/path")
async def find_path(path: Path):
    edges = read_csv("./data/routes.csv")
    graph = Graph(edges=edges)
    graph.init_graph()
    path = graph.bfs(
        start=path.source,
        end=path.destination
    )

    if not path:
        raise HTTPException(status_code=404, detail="Esse caminho não foi possível")
    return dict(airports=path)
