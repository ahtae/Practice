const preorderTraversal = (root) => {
  if (!root) {
    return [];
  }

  const stack = [root];
  const arr = [];

  while (stack.length) {
    const poppedNode = stack.pop();

    arr.push(poppedNode.val);

    if (poppedNode.right) {
      stack.push(poppedNode.right);
    }

    if (poppedNode.left) {
      stack.push(poppedNode.left);
    }
  }

  return arr;
};
