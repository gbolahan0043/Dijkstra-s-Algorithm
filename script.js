const dijkstra = (graph, start) => {
    const unvisitedNodes = new Set(Object.keys(graph));
    const distances = {};
    const previousNodes = {};
  
    Object.entries(graph).forEach(([node, neighbors]) => {
      if (node === start) {
        distances[node] = 0;
      } else {
        distances[node] = Infinity;
      }
      previousNodes[node] = null;
    });
  
    while (unvisitedNodes.size > 0) {
      const currentNode = Array.from(unvisitedNodes)
        .sort((a, b) => distances[a] - distances[b])[0];
  
      if (distances[currentNode] === Infinity) break;
  
      unvisitedNodes.delete(currentNode);
  
        for (const [neighbor, weight] of Object.entries(graph[currentNode])) {
            const tentativeDistance = distances[currentNode] + weight;
            if (tentativeDistance < distances < distances[neighbor]) {
                distances[neighbor] = tentativeDistance;
                previousNodes[neighbor] = currentNode;
            }
        }
    }
  
    return distances;
};
  
// Example usage
const graph = {
    'A': { 'B': 4, 'C': 2 },
  
    'B': { 'A': 4, 'C': 5, 'D': 10 },
  
    'C': { 'A': 2, 'B': 5, 'D': 3 },
  
    'D': { 'B': 10, 'C': 3 }
  
};
  
console.log(dijkstra(graph, 'A'));

