// Three things an object can do, tried on an object and then on a string.
// This file is an ES module, so it runs in strict mode: an assignment that
// cannot happen throws a TypeError instead of being ignored.
function attempt(label, action) {
  let result;
  try {
    result = action();
  } catch (error) {
    result = `${error.name}: ${error.message}`;
  }
  console.log(`   ${label.padEnd(28)}${result}`);
}

const order = { code: "ab-100" }; // an object
let code = "ab-100"; // a string, one of the seven primitives

console.log("1. hold a property of its own");
attempt('order.note = "fragile"', () => {
  order.note = "fragile";
  return `order.note is "${order.note}"`;
});
attempt('code.note = "fragile"', () => {
  code.note = "fragile";
  return `code.note is "${code.note}"`;
});

console.log("2. change in place");
attempt('order.code = "AB-100"', () => {
  order.code = "AB-100";
  return `order is ${JSON.stringify(order)}`;
});
attempt('code[0] = "A"', () => {
  code[0] = "A";
  return `code is "${code}"`;
});
attempt("code.toUpperCase()", () => `returns "${code.toUpperCase()}"; code is still "${code}"`);
attempt("code = code.toUpperCase()", () => {
  code = code.toUpperCase();
  return `code is "${code}": a new string in the same variable`;
});

console.log("3. be compared by identity");
const first = { code: "ab-100" };
const second = { code: "ab-100" };
attempt("first === second", () => `${first === second}: two objects, built alike`);
attempt("first === first", () => `${first === first}: one object`);
attempt('"ab-100" === "ab-" + "100"', () => `${"ab-100" === "ab-" + "100"}: two strings, same characters`);
