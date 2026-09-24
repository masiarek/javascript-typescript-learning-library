// Each check applied to null and to undefined. A string result is printed in
// single quotes, so that the string 'null' cannot pass for the value null, and
// a check that throws prints the error's name.
const show = (value) => (typeof value === "string" ? `'${value}'` : String(value));
const attempt = (check, x) => {
  try {
    return show(check(x));
  } catch (error) {
    return `throws ${error.name}`;
  }
};

function withDefault(x = "fallback") {
  return x;
}

const checks = [
  ["x == null", (x) => x == null],
  ["x === null", (x) => x === null],
  ['x ?? "fallback"', (x) => x ?? "fallback"],
  ["x?.length", (x) => x?.length],
  ["x.length", (x) => x.length],
  ["withDefault(x)", (x) => withDefault(x)],
  ["JSON.stringify({ x })", (x) => JSON.stringify({ x })],
  ["JSON.stringify([x])", (x) => JSON.stringify([x])],
  ["typeof x", (x) => typeof x],
  ["String(x)", (x) => String(x)],
];

console.log("check".padEnd(24) + "x = null".padEnd(18) + "x = undefined".padEnd(18) + "verdict");
for (const [label, check] of checks) {
  const forNull = attempt(check, null);
  const forUndefined = attempt(check, undefined);
  const verdict = forNull === forUndefined ? "alike" : "differ";
  console.log(label.padEnd(24) + forNull.padEnd(18) + forUndefined.padEnd(18) + verdict);
}

// Loose equality with null picks out exactly these two values: not 0, not "",
// not false, not NaN.
console.log("");
for (const value of [null, undefined, 0, "", false, NaN]) {
  console.log(`${show(value).padEnd(10)}== null  ${value == null}`);
}
