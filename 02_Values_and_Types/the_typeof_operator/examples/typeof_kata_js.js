// Kata solution: typeof's answer, except "null" for null and "array" for an
// array -- the two cases typeof cannot tell apart from other objects.
function kindOf(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  return typeof value;
}

const values = [
  ["null", null],
  ["[1999, 250]", [1999, 250]],
  ["{ cents: 1999 }", { cents: 1999 }],
  ['"1999"', "1999"],
  ["1999", 1999],
  ["1999n", 1999n],
  ["undefined", undefined],
  ["() => 1999", () => 1999],
];

for (const [label, value] of values) {
  console.log(`${label.padEnd(17)}${kindOf(value)}`);
}
