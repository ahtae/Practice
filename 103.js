const zigzagLevelOrder = (root) => {
  if (!root) {
    return [];
  }

  const queue = [root];
  const arr = [];

  while (queue.length) {
    const lengthOfQueue = queue.length;
    const level = [];
    const lengthOfArr = arr.length;

    for (let i = 0; i < lengthOfQueue; i++) {
      const shiftedElement = queue.shift();

      if ((lengthOfArr + 1) % 2 !== 0) {
        level.push(shiftedElement.val);
      } else {
        level.unshift(shiftedElement.val);
      }

      if (shiftedElement.left) {
        queue.push(shiftedElement.left);
      }

      if (shiftedElement.right) {
        queue.push(shiftedElement.right);
      }
    }

    arr.push(level);
  }

  return arr;
};
