// 102. Binary Tree Level Order Traversal

const levelOrder = (root) => {
  if (!root) {
    return [];
  }

  const queue = [root];
  const arr = [];

  while (queue.length) {
    const lengthOfQueue = queue.length;
    const temp = [];

    for (let i = 0; i < lengthOfQueue; i++) {
      const removedNode = queue.shift();

      temp.push(removedNode.val);

      if (removedNode.left) {
        queue.push(removedNode.left);
      }

      if (removedNode.right) {
        queue.push(removedNode.right);
      }
    }

    arr.push(temp);
  }

  return arr;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
