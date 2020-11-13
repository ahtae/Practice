const findMaxConsecutiveOnes = (nums) => {
  let currentMax = 0;
  let max = 0;
  let i = 0;

  while (i < nums.length) {
    const currentNum = nums[i];

    if (currentNum === 1) {
      currentMax++;

      if (currentMax > max) {
        max = currentMax;
      }
    } else {
      currentMax = 0;
    }

    i++;
  }

  return max;
};
