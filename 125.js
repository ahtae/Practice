const isPalindrome = (s) => {
  const alphaNum = '1234567890abcdefghijklmnopqrstuvwxyz';
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    while (i < j && alphaNum.indexOf(s[i].toLowerCase()) === -1) i++;
    while (i < j && alphaNum.indexOf(s[j].toLowerCase()) === -1) j--;

    console.log(s[i], s[j]);
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    } else {
      i++;
      j--;
    }
  }

  return true;
};
