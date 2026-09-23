// The same function with its types written down. Node erases the annotations
// and runs what is left.
function total(prices: number[]): number {
  return prices.reduce((sum, price) => sum + price, 0);
}

console.log(total([1999, 250, 5]));
