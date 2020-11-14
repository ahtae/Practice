const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    const currentDigit = digits[i];

    if (currentDigit !== 9) {
      digits[i]++;

      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);

  return digits;
};
