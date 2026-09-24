// Kata solution: sort twelve values into primitives and objects without typeof.
// Object(value) returns value itself only when value is already an object.
const isPrimitive = (value) => Object(value) !== value;

const values = [
  ["1999", 1999],
  ['"1999"', "1999"],
  ["1999n", 1999n],
  ["true", true],
  ["null", null],
  ["undefined", undefined],
  ['Symbol("sku")', Symbol("sku")],
  ["[1999]", [1999]],
  ["{ cents: 1999 }", { cents: 1999 }],
  ["() => 1999", () => 1999],
  ["new Date(0)", new Date(0)],
  ["new Number(1999)", new Number(1999)],
];

const primitives = values.filter(([, value]) => isPrimitive(value)).map(([label]) => label);
const objects = values.filter(([, value]) => !isPrimitive(value)).map(([label]) => label);
console.log(`primitives (${primitives.length}): ${primitives.join(", ")}`);
console.log(`objects (${objects.length}): ${objects.join(", ")}`);
