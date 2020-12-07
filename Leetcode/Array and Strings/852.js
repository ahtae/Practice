// 852. Peak Index in a Mountain Array

var peakIndexInMountainArray = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      return i;
    }
  }
};

// Time Complexity: O(n)
// Space Complexity: O(1)
