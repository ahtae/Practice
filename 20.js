const isValid = (s) => {
  const complementaryBrackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const currentBracket = s[i];

    if (!complementaryBrackets[currentBracket]) {
      const poppedBracket = stack.pop();

      if (complementaryBrackets[poppedBracket] !== currentBracket) {
        return false;
      }
    } else {
      stack.push(currentBracket);
    }
  }

  return stack.length === 0;
};
