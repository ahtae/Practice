const rob = (nums) => {
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  const arr = [];

  arr[0] = nums[0];
  arr[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    arr[i] = Math.max(nums[i] + arr[i - 2], arr[i - 1]);
  }

  return arr[nums.length - 1];
};
