// The same expressions with x = null and with x = undefined. Arithmetic and
// < >= convert both to numbers first; == does not convert either one.
const expressions = [
  ["Number(x)", (x) => Number(x)],
  ["x + 1", (x) => x + 1],
  ["x * 10", (x) => x * 10],
  ["1999 - x", (x) => 1999 - x],
  ["Math.max(x, -1)", (x) => Math.max(x, -1)],
  ["x >= 0", (x) => x >= 0],
  ["x > 0", (x) => x > 0],
  ["x == 0", (x) => x == 0],
  ['x + " items"', (x) => x + " items"],
];

console.log("expression".padEnd(18) + "x = null".padEnd(18) + "x = undefined");
for (const [label, evaluate] of expressions) {
  console.log(label.padEnd(18) + String(evaluate(null)).padEnd(18) + String(evaluate(undefined)));
}
