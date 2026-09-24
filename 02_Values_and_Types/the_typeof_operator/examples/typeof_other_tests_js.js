// typeof says "object" for null, for an array and for every other kind of
// object. The tests below tell them apart; the last column is the old trick
// of asking Object.prototype.toString for a value's tag.
class Order {}

// A plain object is one made by {} or Object.create(null): its prototype is
// Object.prototype or nothing at all.
function isPlainObject(value) {
  if (value === null || typeof value !== "object") return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

const samples = [
  ["null", null],
  ["[1999, 250]", [1999, 250]],
  ["{ cents: 1999 }", { cents: 1999 }],
  ["Object.create(null)", Object.create(null)],
  ["new Order()", new Order()],
  ["new Date(0)", new Date(0)],
];

const columns = [
  ["typeof", (value) => JSON.stringify(typeof value), 10],
  ["=== null", (value) => String(value === null), 10],
  ["Array.isArray", (value) => String(Array.isArray(value)), 15],
  ["isPlainObject", (value) => String(isPlainObject(value)), 15],
  ["toString tag", (value) => Object.prototype.toString.call(value), 0],
];

console.log("value".padEnd(21) + columns.map(([name, , width]) => name.padEnd(width)).join(""));
for (const [label, value] of samples) {
  console.log(label.padEnd(21) + columns.map(([, test, width]) => test(value).padEnd(width)).join(""));
}
