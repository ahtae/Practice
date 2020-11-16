const removeDuplicates = (S) => {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
    const currentLetter = S[i];
    const lastLetterOfStack = stack[stack.length - 1];

    if (lastLetterOfStack === currentLetter) {
      stack.pop();
    } else {
      stack.push(currentLetter);
    }
  }

  return stack.join('');
};
