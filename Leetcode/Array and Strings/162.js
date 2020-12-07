// 162. Find Peak Element

const findPeakElement = (nums) => {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    const middle = Math.floor((i + j) / 2);

    if (nums[middle] > nums[middle + 1]) {
      j = middle;
    } else {
      i = middle + 1;
    }
  }

  return i;
};

// Time Complexity: O(log n)
// Space Complexity: O(1)
