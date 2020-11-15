const shuffle = (nums, n) => {
  const shuffledArr = [];

  for (let i = 0; i < n; i++) {
    const currentNum = nums[i];
    const nthOfCurrentNum = nums[n + i];

    shuffledArr.push(currentNum);
    shuffledArr.push(nthOfCurrentNum);
  }

  return shuffledArr;
};
