// 104. Maximum Depth of Binary Tree

const maxDepth = (root) => {
  if (!root) {
    return 0;
  } else {
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }
};

// Time Complexity: O(n)
// Space Complexity: O(n)

const maxDepth = (root) => {
  if (!root) {
    return 0;
  }

  const queue = [root];
  let depth = 0;

  while (queue.length) {
    const lengthOfQueue = queue.length;

    for (let i = 0; i < lengthOfQueue; i++) {
      const removedNode = queue.shift();

      if (removedNode.left) {
        queue.push(removedNode.left);
      }

      if (removedNode.right) {
        queue.push(removedNode.right);
      }
    }

    depth++;
  }

  return depth;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
