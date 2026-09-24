// tsc gives each const made by Symbol() or Symbol.for() a type of its own, a
// `unique symbol`, and refuses to compare two of them. For Symbol() that is
// right: the comparison is always false. For Symbol.for() it is wrong: the
// registry hands back one symbol, and the comparison is true.
const billingId = Symbol("id");
const auditId = Symbol("id");
console.log(billingId === auditId);

const registeredA = Symbol.for("id");
const registeredB = Symbol.for("id");
console.log(registeredA === registeredB);
