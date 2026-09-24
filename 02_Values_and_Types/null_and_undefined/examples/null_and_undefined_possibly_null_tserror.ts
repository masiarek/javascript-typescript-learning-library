// Under strictNullChecks, which `strict` turns on (and TypeScript 7 turns on
// `strict` by default), null and undefined are types of their own. tsc will
// not let a value that may be either one reach a property access unchecked.
const skuDigits = "SKU-1042".match(/[0-9]+/); // RegExpMatchArray | null
console.log(skuDigits[0]);

const stock = new Map([["rice", 12]]);
const beans = stock.get("beans"); // number | undefined
console.log(beans.toFixed(0));
