// 1.2. Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.

const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const hash = {};

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];

    if (hash[letter]) {
      hash[letter]++;
    } else {
      hash[letter] = 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    const value = hash[letter];

    if (value > 0) {
      hash[letter]--;
    } else {
      return false;
    }
  }

  return true;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
