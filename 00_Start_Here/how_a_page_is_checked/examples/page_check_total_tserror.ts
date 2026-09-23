// The call the JavaScript version accepted without a word. tsc refuses it
// before anything runs.
function total(prices: number[]): number {
  return prices.reduce((sum, price) => sum + price, 0);
}

console.log(total(["1999", 250, 5]));
