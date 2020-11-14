const numJewelsInStones = (J, S) => {
  const mapOfJewels = {};
  let countOfJewels = 0;

  for (let i = 0; i < J.length; i++) {
    const currentJewel = J[i];

    mapOfJewels[currentJewel] = true;
  }

  for (let i = 0; i < S.length; i++) {
    const currentStone = S[i];

    if (mapOfJewels[currentStone]) {
      countOfJewels++;
    }
  }

  return countOfJewels;
};
