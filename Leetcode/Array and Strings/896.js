// 896. Monotonic Array

var isMonotonic = function (A) {
  return isDecreasing(A) || isIncreasing(A);
};

const isDecreasing = function (A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] < A[i + 1]) {
      return false;
    }
  }

  return true;
};

const isIncreasing = function (A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] > A[i + 1]) {
      return false;
    }
  }

  return true;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
