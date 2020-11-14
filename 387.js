const firstUniqChar = function (s) {
  const mapOfLetters = {};

  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];

    if (mapOfLetters[currentLetter]) {
      mapOfLetters[currentLetter]++;
    } else {
      mapOfLetters[currentLetter] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];
    const countOfCurrentLetter = mapOfLetters[currentLetter];

    if (countOfCurrentLetter === 1) {
      return i;
    }
  }

  return -1;
};
