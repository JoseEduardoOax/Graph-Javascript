// const roads = [[3, 0], [0, 4], [5, 0], [2, 1], [1, 4], [2, 3], [5, 2]]
const roads = [
  [
    4,
    0
  ],
  [
    0,
    6
  ],
  [
    0,
    9
  ],
  [
    12,
    2
  ],
  [
    8,
    7
  ],
  [
    16,
    10
  ],
  [
    2,
    1
  ],
  [
    3,
    12
  ],
  [
    4,
    11
  ],
  [
    6,
    2
  ],
  [
    5,
    12
  ],
  [
    16,
    6
  ],
  [
    0,
    10
  ],
  [
    16,
    8
  ],
  [
    13,
    16
  ],
  [
    6,
    14
  ],
  [
    9,
    11
  ],
  [
    9,
    15
  ],
  [
    5,
    8
  ],
  [
    1,
    7
  ],
  [
    11,
    0
  ],
  [
    15,
    13
  ],
  [
    4,
    10
  ],
  [
    6,
    5
  ],
  [
    9,
    10
  ],
  [
    14,
    13
  ],
  [
    7,
    16
  ],
  [
    2,
    13
  ],
  [
    7,
    12
  ],
  [
    4,
    16
  ],
  [
    11,
    8
  ],
  [
    11,
    2
  ],
  [
    14,
    4
  ],
  [
    13,
    0
  ],
  [
    9,
    6
  ],
  [
    9,
    4
  ],
  [
    15,
    1
  ],
  [
    7,
    14
  ],
  [
    5,
    1
  ],
  [
    8,
    14
  ],
  [
    6,
    7
  ],
  [
    8,
    12
  ],
  [
    9,
    14
  ],
  [
    9,
    5
  ],
  [
    3,
    11
  ],
  [
    7,
    11
  ],
  [
    5,
    4
  ],
  [
    12,
    6
  ],
  [
    10,
    14
  ],
  [
    5,
    16
  ],
  [
    10,
    6
  ],
  [
    3,
    8
  ],
  [
    1,
    4
  ],
  [
    2,
    9
  ],
  [
    7,
    0
  ],
  [
    3,
    9
  ],
  [
    12,
    1
  ],
  [
    11,
    5
  ],
  [
    3,
    7
  ],
  [
    15,
    6
  ],
  [
    14,
    12
  ],
  [
    15,
    2
  ],
  [
    8,
    10
  ],
  [
    16,
    2
  ],
  [
    12,
    4
  ],
  [
    13,
    3
  ],
  [
    0,
    12
  ],
  [
    10,
    1
  ],
  [
    9,
    1
  ]]

const converToGraph = (roads) => {
  const graph = new Map();

  for (let i = 0; i < roads.length; i++) {
    const [a, b] = roads[i]
    graph.set(a, [...(graph.get(a) ?? []), b])
    graph.set(b, [...(graph.get(b) ?? []), a])
  }

  return graph;
}

const convertToTree = (roads) => {

}

const isEfficientRoadSystem = (numcities, roads) => {
  if (numcities === 1) return true;

  const graph = converToGraph(roads);

  if (graph.size < numcities) return false;

  return ![...graph].map(([_, v]) => {
    return v.reduce((acc, curr) => {
      return new Set([...acc, ...(graph.get(curr) ?? [])]);
    }, new Set(v)).size === numcities
  }).some(e => e === false)
}

const solution = (numCities, roads) => isEfficientRoadSystem(numCities, roads)

console.log(solution(6, roads))


