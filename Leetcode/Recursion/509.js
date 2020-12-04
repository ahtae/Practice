// 509. Fibonacci Number

const fib = (N) => {
  const arr = [];

  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i <= N; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[N];
};

// Time Complexity: O(n)
// Space Complexity: O(n)

var fib = function (N, memo = {}) {
  if (N === 0) {
    return 0;
  }

  if (N === 1) {
    return 1;
  }

  if (!memo[N]) {
    memo[N] = fib(N - 1, memo) + fib(N - 2, memo);
  }

  return memo[N];
};

// Time Complexity: O(n)
// Space Complexity: O(n)

var fib = function (N) {
  if (N === 0) {
    return 0;
  }

  if (N === 1) {
    return 1;
  }

  return fib(N - 1) + fib(N - 2);
};

// Time Complexity: O(n)
// Space Complexity: O(n)

var fib = function (N) {
  if (N === 0) {
    return 0;
  }

  let a = 0;
  let b = 1;

  for (let i = 2; i < N; i++) {
    let c = a + b;

    a = b;
    b = c;
  }

  return a + b;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
