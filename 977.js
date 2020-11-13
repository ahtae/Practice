const sortedSquares = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const squareOfCurrentNum = currentNum ** 2;

    arr[i] = squareOfCurrentNum;
  }

  arr.sort((a, b) => a - b);

  return arr;
};
