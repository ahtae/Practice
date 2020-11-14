const isPowerOfTwo = (n) => {
  let i = 1;

  while (i < n) {
    i *= 2;
  }

  return n === i;
};
