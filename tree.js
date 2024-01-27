//      1
//    /   \
//   2     3
//  / \   / \
// 4   5 6   7
//

function createNode(value, left = null, right = null) {
  return { value, left, right };
}

const tree = createNode(1,
  createNode(2,
    createNode(4),
    createNode(5)
  ),
  createNode(3,
    createNode(6),
    createNode(7)
  )
);

function bfs(node) {
  if (!node) {
    return [];
  }

  const queue = [node];
  const result = [];

  while (queue.length) {
    const current = queue.shift();
    result.push(current.value);

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }

  return result;
}

function dfs(node) {
  if (!node) {
    return [];
  }

  const stack = [node];
  const result = [];

  while (stack.length > 0) {
    const current = stack.pop();
    result.push(current.value);

    if (current.right) {
      stack.push(current.right);
    }

    if (current.left) {
      stack.push(current.left);
    }
  }

  return result;
}


console.log(bfs(tree)); // [1, 2, 3, 4, 5, 6, 7]
console.log(dfs(tree)); // [1, 2, 4, 5, 3, 6, 7]

