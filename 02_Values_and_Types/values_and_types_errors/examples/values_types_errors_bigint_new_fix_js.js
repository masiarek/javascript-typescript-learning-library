// BigInt is called, never constructed, and the call returns a primitive.
const orderId = BigInt("9007199254740993");
console.log(`${typeof orderId}: ${orderId}n`);
