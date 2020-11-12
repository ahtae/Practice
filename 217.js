const containsDuplicate = (nums) => {
  const mapOfNums = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const isFound = mapOfNums[currentNum];

    if (isFound) {
      return true;
    } else {
      mapOfNums[currentNum] = true;
    }
  }

  return false;
};
