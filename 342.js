const isPowerOfFour = (n) => {
  let i = 1;

  while (i < n) {
    i = i * 4;
  }

  return i === n;
};
