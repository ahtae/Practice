const maxProfit = (prices) => {
  let minimumPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    if (minimumPrice > currentPrice) {
      minimumPrice = currentPrice;
    } else if (prices[i] - minimumPrice > maxProfit) {
      maxProfit = prices[i] - minimumPrice;
    }
  }

  return maxProfit;
};
