// Twelve values, sorted the way the language sorts them. Object(v) hands back
// v itself only when v is already an object; for a primitive it has to make a
// new object, so Object(v) === v is the test. No typeof anywhere.
function classify(value) {
  const made = Object(value);
  if (made === value) {
    return { same: true, made: "the same object", is: "object", type: "Object" };
  }
  if (Object.getPrototypeOf(made) === Object.prototype) {
    // Only undefined and null get a new, empty, ordinary object.
    return { same: false, made: "a new empty object", is: "primitive", type: value === null ? "Null" : "Undefined" };
  }
  // Every other primitive gets a wrapper, named after its type.
  const wrapper = made.constructor.name;
  return { same: false, made: `a ${wrapper} wrapper`, is: "primitive", type: wrapper };
}

const samples = [
  ["undefined", undefined],
  ["null", null],
  ["true", true],
  ["1", 1],
  ["1n", 1n],
  ['"s"', "s"],
  ["Symbol()", Symbol()],
  ["{}", {}],
  ["[]", []],
  ["() => {}", () => {}],
  ["new Date(0)", new Date(0)],
  ["/s/", /s/],
];

console.log(`${"value".padEnd(13)}${"Object(v) === v".padEnd(17)}${"Object(v) returns".padEnd(21)}${"so it is".padEnd(11)}type`);
const types = [];
let primitives = 0;
for (const [label, value] of samples) {
  const row = classify(value);
  // For an object, name the constructor that made it: a kind of object, not a type.
  const type = row.same ? `Object, made by ${value.constructor.name}` : row.type;
  console.log(`${label.padEnd(13)}${String(row.same).padEnd(17)}${row.made.padEnd(21)}${row.is.padEnd(11)}${type}`);
  if (!types.includes(row.type)) types.push(row.type);
  if (!row.same) primitives += 1;
}
console.log(`${samples.length} values: ${primitives} primitives, ${samples.length - primitives} objects`);
console.log(`${types.length} types: ${types.join(", ")}`);
