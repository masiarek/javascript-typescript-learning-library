// A program cannot add a ninth type. What it writes instead is a class, and a
// class is a function that builds objects. Everything else a program can make
// passes the same test as {} did: Object(v) is v itself.
class Money {
  constructor(cents, currency) {
    this.cents = cents;
    this.currency = currency;
  }
}
const price = new Money(1999, "USD");

const facts = [
  ["typeof Money", JSON.stringify(typeof Money)],
  ["typeof price", JSON.stringify(typeof price)],
  ["Object.getPrototypeOf(price) === Money.prototype", String(Object.getPrototypeOf(price) === Money.prototype)],
];
for (const [expression, result] of facts) {
  console.log(`${expression.padEnd(50)}${result}`);
}
console.log("");

const made = [
  ["Money", Money],
  ["price", price],
  ["new Map()", new Map()],
  ["new Set()", new Set()],
  ['new Error("out of stock")', new Error("out of stock")],
  ["Promise.resolve(price)", Promise.resolve(price)],
  ["new Proxy(price, {})", new Proxy(price, {})],
  ["new Uint8Array(4)", new Uint8Array(4)],
  ["Object.create(null)", Object.create(null)],
  ["Object(1999n)", Object(1999n)],
  ["Math", Math],
  ["globalThis", globalThis],
];
console.log(`${"value".padEnd(27)}Object(v) === v`);
let objects = 0;
for (const [label, value] of made) {
  const isObject = Object(value) === value;
  if (isObject) objects += 1;
  console.log(`${label.padEnd(27)}${isObject}`);
}
console.log(`${objects} of ${made.length} are objects: one type, Object`);
