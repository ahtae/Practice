/*
 1.3. URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)
*/

const URLify = (str, length) => {
  const trimmedStr = str.trim();
  let newStr = '';

  for (let i = 0; i < trimmedStr.length; i++) {
    const currentLetter = trimmedStr[i];

    if (currentLetter === ' ') {
      newStr += '%20';
    } else {
      newStr += currentLetter;
    }
  }

  return newStr;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
