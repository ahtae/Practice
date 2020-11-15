const fib = (N) => {
  const arr = [];

  arr[0] = 0;
  arr[1] = 1;

  for (let i = 2; i <= N; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr[N];
};
