// The mixing rules with types written down. tsc refuses two lines: the product,
// which throws a TypeError at run time, and the ==, which JavaScript answers
// with true. It accepts the < and the explicit conversion on the last line.
function lineTotal(unitPrice: bigint, quantity: number): bigint {
  return unitPrice * quantity;
}

const unitPrice: bigint = 1999n;
console.log(unitPrice == 1999);
console.log(unitPrice < 2000, lineTotal(unitPrice, 3), unitPrice * BigInt(3));
