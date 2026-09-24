// Called without new, each returns a primitive, and tsc types it as one.
const orderId: bigint = BigInt("9007199254740993");
const sessionKey: symbol = Symbol("session");
console.log(`${typeof orderId}: ${orderId}n`);
console.log(`${typeof sessionKey}: ${String(sessionKey)}`);
