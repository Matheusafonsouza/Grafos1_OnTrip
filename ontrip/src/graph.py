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
