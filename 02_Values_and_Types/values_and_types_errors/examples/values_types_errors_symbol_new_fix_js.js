// Symbol is called, never constructed, and the call returns a primitive.
const sessionKey = Symbol("session");
console.log(`${typeof sessionKey}: ${String(sessionKey)}`);
