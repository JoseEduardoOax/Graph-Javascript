const roadRegister = [[false, true, true, false],
[true, false, true, false],
[true, true, false, true],
[false, false, true, false]]


const variantsRoads = (roadRegister) => {
  const output = [];

  for (let i = 0; i < roadRegister.length; i++) {
    const road = [...roadRegister.slice(0, i), ...roadRegister.slice(i + 1)]
    output.push(road.map(e => [...e.slice(0, i), ...e.slice(i + 1)]))
  }

  return output;
}

const solution = (roadRegister) => variantsRoads(roadRegister)

console.log(solution(roadRegister))
