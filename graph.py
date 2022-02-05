from dataclasses import dataclass
from typing import List


@dataclass
class Graph:
    edges: List[tuple[str, str]]
    graph: dict

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
        return self.graph.keys()

    def get_graph(self) -> dict:
        """
        Returns the graph dict
        """
        return self.graph
