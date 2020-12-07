// 747. Largest Number At Least Twice of Others

const dominantIndex = (nums) => {
  if (nums.length === 1) {
    return 0;
  }

  let indexOfMax;
  let indexOfSecondMax;

  if (nums[0] > nums[1]) {
    indexOfMax = 0;
    indexOfSecondMax = 1;
  } else {
    indexOfMax = 1;
    indexOfSecondMax = 0;
  }

  for (let i = 2; i < nums.length; i++) {
    const currentNum = nums[i];

    if (currentNum > nums[indexOfMax]) {
      indexOfSecondMax = indexOfMax;
      indexOfMax = i;
    } else if (currentNum > nums[indexOfSecondMax]) {
      indexOfSecondMax = i;
    }
  }

  return nums[indexOfMax] >= nums[indexOfSecondMax] * 2 ? indexOfMax : -1;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
