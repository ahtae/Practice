/*
1.4. Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.
 */

const isPalindromePermutation = (str) => {
  const map = buildFrequencyTable(str);
  const hasOnlyOneMaxOdd = checkOneMaxOdd(map);

  return hasOnlyOneMaxOdd;
};

const buildFrequencyTable = (str) => {
  const map = {};

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];

    if (map[currentLetter]) {
      map[currentLetter]++;
    } else if (currentLetter !== ' ') {
      map[currentLetter] = 1;
    }
  }

  return map;
};

const checkOneMaxOdd = (map) => {
  let countOfOddMax = 0;

  for (let key in map) {
    const value = map[key];

    if (value % 2) {
      countOfOddMax++;
    }
  }

  return countOfOddMax <= 1;
}

// Time Complexity: O(n)
// Space Complexity: O(1)

const isPalindromePermutation = (str) => {
  const map = {}
  let countOfOddMax = 0;

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];

    if (map[currentLetter]) {
      map[currentLetter]++;

      if (map[currentLetter] % 2) {
        countOfOddMax++;
      } else {
        countOfOddMax--;
      }
    } else if (currentLetter !== ' ') {
      map[currentLetter] = 1;
      countOfOddMax++;
    }
  }

  return countOfOddMax <= 1;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
