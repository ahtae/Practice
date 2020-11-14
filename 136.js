const singleNumber = (nums) => {
  const mapOfNums = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    if (mapOfNums[currentNum]) {
      delete mapOfNums[currentNum];
    } else {
      mapOfNums[currentNum] = 1;
    }
  }

  return Object.keys(mapOfNums)[0];
};
