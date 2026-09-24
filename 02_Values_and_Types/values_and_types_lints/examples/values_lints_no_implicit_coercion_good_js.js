// String() takes a symbol and Number() takes a BigInt, and each names its conversion.
const orderKey = Symbol("order");
const itemCount = 3n;
console.log(`key: ${String(orderKey)}`);
console.log(`count: ${Number(itemCount)}`);
