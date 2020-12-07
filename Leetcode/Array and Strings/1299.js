// 1299. Replace Elements with Greatest Element on Right Side

const replaceElements = (arr) => {
  if (arr.length === 1) {
    arr[0] = -1;

    return arr;
  }

  let i = 0;

  while (i < arr.length) {
    let maxSeen = -Infinity;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > maxSeen) {
        maxSeen = arr[j];
      }
    }

    if (i < arr.length - 1) {
      arr[i] = maxSeen;
    } else {
      arr[i] = -1;
    }

    i++;
  }

  return arr;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
