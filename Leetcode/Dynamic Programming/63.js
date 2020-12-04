// 63. Unique Paths II

var uniquePathsWithObstacles = function (
  obstacleGrid,
  m = obstacleGrid.length,
  n = obstacleGrid[0].length,
  memo = {}
) {
  const key = `${m},${n}`;

  if (m <= 0 || n <= 0) {
    return 0;
  }

  if (m === 1 && n === 1 && !obstacleGrid[m - 1][n - 1]) {
    return 1;
  }

  if (m === 1 && n === 1 && obstacleGrid[m - 1][n - 1]) {
    return 0;
  }

  if (obstacleGrid[m - 1][n - 1]) {
    return 0;
  }

  if (key in memo) {
    return memo[key];
  }

  memo[key] =
    uniquePathsWithObstacles(obstacleGrid, m - 1, n, memo) +
    uniquePathsWithObstacles(obstacleGrid, m, n - 1, memo);

  return memo[key];
};

// Time Complexity: O(n * m)
// Space Complexity: O(n + m)
