const longestCommonPrefix = (strs) => {
  if (!strs.length) {
    return '';
  }

  strs.sort((a, b) => a.length - b.length);

  const minimumLengthStr = strs[0];
  let longestPrefix = '';

  for (let i = 0; i < minimumLengthStr.length; i++) {
    const currentLetter = minimumLengthStr[i];

    for (let j = 1; j < strs.length; j++) {
      const currentStr = strs[j];
      const currentLetterOfCurrentStr = currentStr[i];

      if (currentLetterOfCurrentStr !== currentLetter) {
        return longestPrefix;
      }
    }

    longestPrefix += currentLetter;
  }

  return longestPrefix;
};
