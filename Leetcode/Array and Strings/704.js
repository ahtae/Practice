// 704. Binary Search

const search = (nums, target) => {
  if (nums.length === 1 && target === nums[0]) {
    return 0;
  }

  let i = 0;
  let j = nums.length - 1;

  while (i <= j) {
    const middle = Math.floor((i + j) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      i = middle + 1;
    } else {
      j = middle - 1;
    }
  }

  return -1;
};

// Time Complexity: O(log n)
// Space Complexity: O(1)
