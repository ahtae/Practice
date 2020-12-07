// 941. Valid Mountain Array

var validMountainArray = function (arr) {
  const lengthOfArray = arr.length;

  if (lengthOfArray < 3) {
    return false;
  }

  let i = 0;

  while (i + 1 < lengthOfArray && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i === 0 || i === lengthOfArray - 1) {
    return false;
  }

  while (i + 1 < lengthOfArray && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === lengthOfArray - 1;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
