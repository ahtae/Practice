const repeatedSubstringPattern = (s) => {
  let substring = '';

  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    substring += s[i];

    if (substring.repeat(s.length / substring.length) === s) {
      return true;
    }
  }

  return false;
};
