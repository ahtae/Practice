const findNumbers = (nums) => {
  let countOfEvenNums = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    const stringOfCurrentNum = String(currentNum);
    const lengthOfStringOfCurrentNum = stringOfCurrentNum.length;

    if (!(lengthOfStringOfCurrentNum % 2)) {
      countOfEvenNums++;
    }
  }

  return countOfEvenNums;
};
