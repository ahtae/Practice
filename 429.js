const levelOrder = (root) => {
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

      if (shiftedElement.children) {
        queue.push(...shiftedElement.children);
      }
    }

    arr.push(level);
  }

  return arr;
};
