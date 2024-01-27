const roadRegister =
  [[false, true, false, false],
  [false, false, true, false],
  [true, false, false, true],
  [false, false, true, false]]

const converToGraph = (roadRegister) => roadRegister.reduce((acc, current, index) => {
  let val = acc.get(index) ?? 0

  for (let i = 0; i < current.length; i++) {
    if (current[i]) {
      val++;
      acc.set(i, ((acc.get(i) ?? 0) - 1))
    }
  }

  acc.set(index, val)
  return acc;
}, new Map())

const solution = (roadRegister) => ![...converToGraph(roadRegister).values()].some(val => val !== 0)
console.log(solution(roadRegister))
