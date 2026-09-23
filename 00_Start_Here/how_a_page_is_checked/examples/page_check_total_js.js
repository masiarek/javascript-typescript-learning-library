// One function, called twice: once with numbers, once with a string among them.
function total(prices) {
  return prices.reduce((sum, price) => sum + price, 0);
}

console.log(total([1999, 250, 5]));
console.log(total(["1999", 250, 5]));
