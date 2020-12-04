// 1137. N-th Tribonacci Number

const tribonacci = (n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
};

// Time Complexity: O(n)
// Space Complexity: O(n)

const tribonacci = (n) => {
  if (n === 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  let a = 0;
  let b = 1;
  let c = 1;

  for (let i = 3; i <= n; i++) {
    let d = a + b + c;

    a = b;
    b = c;
    c = d;
  }

  return c;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
