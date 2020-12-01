/*
1.1. Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 */

const isUnique = (str) => {
  const hashOfLetters = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (hashOfLetters[letter]) {
      return false;
    } else {
      return true;
    }
  }
};

// Time Complexity: O(n)
// Space Complexity: O(1)

const isUnique = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    const letter = str[i];

    for (let j = i + 1; j < str.length; j++) {
      const nextLetter = str[j];

      if (letter === nextLetter) {
        return false;
      }

      console.log(letter, nextLetter);
    }
  }

  return true;
};

// Time Complexity: O(n^2)
// Space Complexity: O(1)

const isUnique = (str) => {
  const sortedStr = str.split('').sort().join('');

  for (let i = 0; i < str.length - 1; i++) {
    const letter = str[i];

    for (let j = i + 1; j < str.length - 1; j++) {
      const nextLetter = str[j];

      if (letter === nextLetter) {
        return false;
      }
    }
  }

  return true;
};

// Time Complexity: O(n log n)
// Space Complexity: O(1)
