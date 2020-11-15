const decompressRLElist = (nums) => {
  const arr = [];

  for (let i = 0; i < nums.length; i += 2) {
    const currentFrequency = nums[i];
    const currentValue = nums[i + 1];

    for (let i = 0; i < currentFrequency; i++) {
      arr.push(currentValue);
    }
  }

  return arr;
};
