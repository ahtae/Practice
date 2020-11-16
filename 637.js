const averageOfLevels = (root) => {
  const queue = [root];
  const arr = [];

  while (queue.length) {
    let sum = 0;
    let count = 0;
    const lengthOfQueue = queue.length;

    for (let i = 0; i < lengthOfQueue; i++) {
      const shiftedNode = queue.shift();

      sum += shiftedNode.val;
      count++;

      if (shiftedNode.left) {
        queue.push(shiftedNode.left);
      }

      if (shiftedNode.right) {
        queue.push(shiftedNode.right);
      }
    }

    const average = sum / count;

    arr.push(average);
  }

  return arr;
};
