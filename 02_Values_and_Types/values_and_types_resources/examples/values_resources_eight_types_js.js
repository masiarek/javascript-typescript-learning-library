// Older books count five, six or seven types. Ask the language instead: one
// value of each kind, what typeof answers, and whether the value is a
// primitive. Object(value) returns an object unchanged but wraps a primitive
// (and makes a new empty object for null and undefined), so the two differ
// exactly when the value is a primitive.
const samples = [
  ["undefined", undefined],
  ["null", null],
  ["true", true],
  ["42", 42],
  ['"SKU-1"', "SKU-1"],
  ['Symbol("id")', Symbol("id")],
  ["42n", 42n],
  ["{ price: 5 }", { price: 5 }],
  ["() => 5", () => 5],
];

console.log(`${"value".padEnd(15)}${"typeof".padEnd(11)}primitive`);
for (const [label, value] of samples) {
  const primitive = Object(value) !== value;
  console.log(`${label.padEnd(15)}${(typeof value).padEnd(11)}${primitive ? "yes" : "no"}`);
}

const primitives = samples.filter(([, value]) => Object(value) !== value);
const answers = new Set(samples.map(([, value]) => typeof value));
console.log(`primitives in this table: ${primitives.length}`);
console.log(`different typeof answers: ${answers.size}`);
