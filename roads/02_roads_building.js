const roads = [[5, 8],
[6, 0], [0, 5], [4, 1], [0, 1],
[7, 0], [6, 8], [7, 3], [2, 6],
[0, 2], [0, 3], [8, 7], [5, 4],
[8, 4], [8, 2], [7, 1], [4, 6],
[5, 6], [4, 2], [4, 7], [2, 7],
[3, 6], [8, 0], [1, 6], [3, 2],
[3, 4], [4, 0], [6, 7], [5, 7]]

const converToGraph = (roads, numCities) => {
  const graph = new Map();

  for (let i = 0; i < roads.length; i++) {
    const [minVal, maxVal] = [Math.min(roads[i][0], roads[i][1]), Math.max(roads[i][0], roads[i][1])]
    graph.set(minVal, [...(graph.get(minVal) ?? []), maxVal])
  }

  const newRoads = []

  for (let i = 0; i < numCities; i++) {
    if (!graph.has(i)) {
      newRoads.push(...Array.from({ length: (numCities - (i + 1)) }, (_, index) => [i, (i + 1) + index]))
    } else {
      const oldRoads = graph.get(i)
      for (let j = i + 1; j < numCities; j++) {
        if (!oldRoads.includes(j))
          newRoads.push([i, j])
      }
    }
  }

  return newRoads;
}

const solution = (cities, roads) => converToGraph(roads, cities);

console.log(solution(9, roads))
