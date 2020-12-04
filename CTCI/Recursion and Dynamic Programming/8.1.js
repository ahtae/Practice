/*
8.1. Triple Step: A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.
*/

const tripleStep = (n) => {
  const dp = {};

  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// Time Complexity: O(n)
// Space Complexity: O(n)

const climbStairs = function (n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  let a = 1;
  let b = 2;

  for (let i = 3; i <= n; i++) {
    let c = a + b;

    a = b;
    b = c;
  }

  return b;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
