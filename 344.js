const reverseString = (s) => {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    const currentLetter = s[i];
    const lastLetter = s[s.length - 1 - i];

    s[i] = lastLetter;
    s[s.length - 1 - i] = currentLetter;
  }

  return s;
};
