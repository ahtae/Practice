const maxLevelSum = function (root) {
  if (!root) {
    return null;
  }

  const queue = [root];
  let maxLevelSum = 0;
  let maxSum = -Infinity;
  let currentLevel = 0;

  while (queue.length) {
    const lengthOfQueue = queue.length;
    let sum = 0;

    for (let i = 0; i < lengthOfQueue; i++) {
      const shiftedElement = queue.shift();
      sum += shiftedElement.val;

      if (shiftedElement.left) {
        queue.push(shiftedElement.left);
      }

      if (shiftedElement.right) {
        queue.push(shiftedElement.right);
      }
    }

    currentLevel++;

    if (sum > maxSum) {
      maxLevelSum = currentLevel;
      maxSum = sum;
    }
  }

  return maxLevelSum;
};
