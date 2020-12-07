// 414. Third Maximum Number

const thirdMax = function (nums) {
  let firstMax = nums[0];
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i];

    if (firstMax < currentElement) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = currentElement;
    } else if (secondMax < currentElement && currentElement < firstMax) {
      thirdMax = secondMax;
      secondMax = currentElement;
    } else if (thirdMax < currentElement && currentElement < secondMax) {
      thirdMax = currentElement;
    }
  }

  return thirdMax === -Infinity ? firstMax : thirdMax;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
