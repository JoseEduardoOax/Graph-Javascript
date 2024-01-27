// const roads = [[0, 1, 0],
// [4, 1, 2],
// [4, 3, 4],
// [2, 3, 1],
// [2, 0, 3]]
//
// const roads = [[2, 3, 1],
// [3, 0, 0],
// [2, 0, 2]]
//
const roads = [[1, 4, 2],
[6, 3, 3],
[2, 3, 1],
[0, 1, 0]]

const solution = roads => {
  const response = roads.reduce((acc, current) => {
    acc[0].add(current[0])
    acc[0].add(current[1])
    acc[1].add(current[2])

    return acc;

  }, [new Set(), new Set()])


  return ![...response[0]].some(e => !response[1].has(e))
}

console.log(solution(roads))
