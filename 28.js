const strStr = (haystack, needle) => {
  if (!haystack.length && !needle.length) {
    return 0;
  }

  if (needle.length > haystack.length) {
    return -1;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let currentStr = haystack.slice(i, i + needle.length);

    if (currentStr === needle) {
      return i;
    }
  }

  return -1;
};
