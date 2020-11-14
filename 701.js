const insertIntoBST = (root, val) => {
  const newNode = new TreeNode(val);

  if (!root) {
    return newNode;
  } else {
    let current = root;

    while (true) {
      if (current.val < val) {
        if (!current.right) {
          current.right = newNode;

          return root;
        } else {
          current = current.right;
        }
      } else {
        if (!current.left) {
          current.left = newNode;

          return root;
        } else {
          current = current.left;
        }
      }
    }
  }
};
