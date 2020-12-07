// 1346. Check If N and Its Double Exist

var checkIfExist = function (arr) {
  const map = {};
  let countOfZeroes = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    map[currentElement] = true;

    if (currentElement === 0) {
      countOfZeroes++;
    }
  }

  if (countOfZeroes >= 2) {
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    const desiredNumber = currentElement * 2;
    const otherDesiredNumber = currentElement / 2;

    if (
      (map[desiredNumber] || map[otherDesiredNumber]) &&
      currentElement !== 0
    ) {
      return true;
    }
  }

  return false;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
