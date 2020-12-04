// 257. Binary Tree Paths

var binaryTreePaths = function (root) {
  const arr = [];

  if (!root) {
    return [];
  }

  const binaryTreePathsHelper = (root, temp) => {
    temp.push(root.val);

    if (!root.left && !root.right) {
      arr.push(temp.join('->'));
    }

    if (root.left) {
      binaryTreePathsHelper(root.left, temp.slice());
    }

    if (root.right) {
      binaryTreePathsHelper(root.right, temp.slice());
    }
  };

  binaryTreePathsHelper(root, []);

  return arr;
};
// Time Complexity: O(n)
// Space Complexity: O(n)

const binaryTreePaths = (root) => {
  const arr = [];

  if (!root) {
    return [];
  }

  const binaryTreePathsHelper = (root, str) => {
    str += root.val;

    if (!root.left && !root.right) {
      arr.push(str);
    }

    if (root.left) {
      binaryTreePathsHelper(root.left, str + '->');
    }

    if (root.right) {
      binaryTreePathsHelper(root.right, str + '->');
    }
  };

  binaryTreePathsHelper(root, '');

  return arr;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
