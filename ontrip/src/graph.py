from dataclasses import dataclass, field
from typing import List, Optional


@dataclass
class Graph:
    """
    This class implements the Graph structure in python
    """
    edges: List[tuple[str, str]]
    graph: Optional[dict] = field(default_factory=dict)

    def init_graph(self) -> None:
        """
        Created the graph dict struct with source and destination airports
        """
        for x, y in self.edges:
            self.graph.setdefault(x, list()).append(y)

    def get_edges(self) -> List[tuple[str, str]]:
        """
        Returns all airports edges connections on graph structure
        """
        return self.edges

    def get_nodes(self) -> List[str]:
        """
        Returns all airports names
        """
        return list(self.graph.keys())

    def get_graph(self) -> dict:
        """
        Returns the graph dict
        """
        return self.graph

    def bfs(self, start: str, end: str, path: list = []): 
        """
        Makes a BFS search on the graph
        """
        visited = list()
        queue = list()
        shortest_path = list()

        visited.append(start)
        queue.append(start)
        while queue:
            node = queue.pop(0)
            shortest_path.append(node)

            if node == end:
                return shortest_path

            for neighbour in self.graph.get(node, []):
                if neighbour not in visited:
                    visited.append(neighbour)
                    queue.append(neighbour)
