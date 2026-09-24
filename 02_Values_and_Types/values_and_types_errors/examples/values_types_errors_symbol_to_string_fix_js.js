// A symbol becomes text only when asked by name.
const sessionKey = Symbol("session");
console.log("stored under " + String(sessionKey));
console.log(`description: ${sessionKey.description}`);
