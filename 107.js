const levelOrderBottom = (root) => {
  if (!root) {
    return [];
  }

  const queue = [root];
  const arr = [];

  while (queue.length) {
    const level = [];
    const lengthOfQueue = queue.length;

    for (let i = 0; i < lengthOfQueue; i++) {
      const shiftedElement = queue.shift();

      level.push(shiftedElement.val);

      if (shiftedElement.left) {
        queue.push(shiftedElement.left);
      }

      if (shiftedElement.right) {
        queue.push(shiftedElement.right);
      }
    }

    arr.unshift(level);
  }

  return arr;
};
