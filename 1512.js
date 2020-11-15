const numIdenticalPairs = (nums) => {
  let countOfGoodPairs = 0;
  let mapOfNums = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    if (mapOfNums[currentNum]) {
      countOfGoodPairs += mapOfNums[currentNum];
      mapOfNums[currentNum] += 1;
    } else {
      mapOfNums[currentNum] = 1;
    }
  }

  return countOfGoodPairs;
};
