/*
1.5. One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
*/

const isOneEditAway = (str1, str2) => {
  if (str1.length === str2.length) {
    return isOneCharReplacementAway(str1, str2);
  } else {
    return isOneCharInsertionOrDeletionAway(str1, str2);
  }
};


const isOneCharReplacementAway = (str1, str2) => {
  let foundDifference = false;

  for (let i = 0; i < str1.length; i++) {
    const currentLetterOfStr1 = str1[i];
    const currentLetterOfStr2 = str2[i];

    if (foundDifference) {
      return false;
    }

    if (currentLetterOfStr1 !== currentLetterOfStr2) {
      foundDifference = true;
    }
  }

  return foundDifference;
};

const isOneCharInsertionOrDeletionAway = (str1, str2) => {
  let foundDifference = false;
  let shorterStr = str1.length < str2.length ? str1 : str2;
  let longerStr = str1 !== shorterStr ? str1 : str2;
  let i = 0;
  let j = 0;

  for (let k = 0; k < longerStr.length; k++) {
    const currentLetterOfLongerStr = longerStr[i];
    const currentLetterOfShorterStr = shorterStr[j];

    if (foundDifference) {
      return false;
    }

    if (currentLetterOfLongerStr === currentLetterOfShorterStr) {
      i++;
      j++;
    } else {
      i++;
      foundDifference = true;
    }
  }

  return foundDifference;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
