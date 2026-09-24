// Hands a BigInt order id to code that wants a number.
const orderId = 9007199254740993n;
const asNumber = Number(orderId);
console.log(`${orderId}n became ${asNumber}`);
console.log(`converts back to the same BigInt: ${BigInt(asNumber) === orderId}`);
