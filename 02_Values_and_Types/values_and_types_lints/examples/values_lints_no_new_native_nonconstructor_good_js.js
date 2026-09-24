// Symbol() and BigInt() are called without new, and return primitives.
const orderKey = Symbol("order");
const itemCount = BigInt(10);
console.log(`${String(orderKey)} is a ${typeof orderKey}`);
console.log(`${itemCount}n is a ${typeof itemCount}`);
