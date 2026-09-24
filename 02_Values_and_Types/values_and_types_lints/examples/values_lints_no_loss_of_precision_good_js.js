// A BigInt literal, or a string handed to BigInt(), keeps every digit.
const orderId = 9007199254740993n;
const fromText = BigInt("9007199254740993");
console.log(`order ${orderId}`);
console.log(`order ${fromText}`);
