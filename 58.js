const lengthOfLastWord = (s) => {
  s = s.trim();

  if (!s.length) {
    return 0;
  }

  let lengthCounter = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentLetter = s[i];

    if (currentLetter === ' ') {
      return lengthCounter;
    } else {
      lengthCounter++;
    }
  }

  return lengthCounter;
};
