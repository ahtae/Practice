const twoSum = (nums, target) => {
  const mapOfNums = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    mapOfNums[currentNum] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const diff = target - currentNum;
    const isFound = diff in mapOfNums && i !== mapOfNums[diff];

    if (isFound) {
      const indexOfDiff = mapOfNums[diff];

      return [i, indexOfDiff];
    }
  }
};
