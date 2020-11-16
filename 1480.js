const runningSum = (nums) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentSum = nums[i];

    sum += currentSum;

    nums[i] = sum;
  }

  return nums;
};
