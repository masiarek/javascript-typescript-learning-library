// Kata solution: unwrap a String, Number or Boolean wrapper to the primitive
// inside it, and hand back every other value unchanged.
function unwrap(value) {
  if (value instanceof String || value instanceof Number || value instanceof Boolean) {
    return value.valueOf();
  }
  return value;
}

const rows = [
  ['""', () => ""],
  ['new String("")', () => new String("")],
  ["0", () => 0],
  ["new Number(0)", () => new Number(0)],
  ["false", () => false],
  ["new Boolean(false)", () => new Boolean(false)],
  ["{ count: 0 }", () => ({ count: 0 })],
];

console.log("unwrap(value)".padEnd(20) + "typeof".padEnd(10) + "truthy".padEnd(9) + "=== twin");
for (const [label, make] of rows) {
  const value = unwrap(make());
  const twin = unwrap(make());
  console.log(label.padEnd(20) + (typeof value).padEnd(10) + String(Boolean(value)).padEnd(9) + String(value === twin));
}
