// An order id past 2^53, written as a number literal and turned into a BigInt.
const orderId = BigInt(9007199254740993);
console.log(`order ${orderId}`);
