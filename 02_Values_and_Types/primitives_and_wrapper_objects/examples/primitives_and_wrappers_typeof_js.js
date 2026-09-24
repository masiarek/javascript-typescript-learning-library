// Three falsy primitives, each beside the wrapper object that `new` makes from
// it. Every value is built twice, so that it can be compared with its twin.
const rows = [
  ['""', () => "", String],
  ['new String("")', () => new String(""), String],
  ["0", () => 0, Number],
  ["new Number(0)", () => new Number(0), Number],
  ["false", () => false, Boolean],
  ["new Boolean(false)", () => new Boolean(false), Boolean],
];

console.log("value".padEnd(20) + "typeof".padEnd(10) + "truthy".padEnd(9) + "instanceof".padEnd(13) + "=== twin");
for (const [label, make, Wrapper] of rows) {
  const value = make();
  const twin = make();
  console.log(
    label.padEnd(20) +
      (typeof value).padEnd(10) +
      String(Boolean(value)).padEnd(9) +
      String(value instanceof Wrapper).padEnd(13) +
      String(value === twin),
  );
}

console.log("");
const expressions = [
  ['typeof "abc"', typeof "abc"],
  ['typeof new String("abc")', typeof new String("abc")],
  ['new String("a") === new String("a")', new String("a") === new String("a")],
  ['new String("abc") == "abc"', new String("abc") == "abc"],
  ['new String("abc") === "abc"', new String("abc") === "abc"],
  ["new Boolean(false) ? 1 : 2", new Boolean(false) ? 1 : 2],
  ['"abc" instanceof String', "abc" instanceof String],
  ["typeof String(42)", typeof String(42)],
];
for (const [expression, result] of expressions) {
  console.log(`${expression.padEnd(38)}${result}`);
}
