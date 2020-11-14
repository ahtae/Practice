const pivotIndex = (nums) => {
  let sum = 0;
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    sum += currentNum;
  }

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) {
      return i;
    }

    leftSum += nums[i];
  }

  return -1;
};
