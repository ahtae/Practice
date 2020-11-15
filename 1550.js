const threeConsecutiveOdds = (arr) => {
  let countOfOdds = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];

    if (currentNum % 2) {
      countOfOdds++;
    } else {
      countOfOdds = 0;
    }

    if (countOfOdds === 3) {
      return true;
    }
  }

  return false;
};
