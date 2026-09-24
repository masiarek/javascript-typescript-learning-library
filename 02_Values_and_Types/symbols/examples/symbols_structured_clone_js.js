// structuredClone on a symbol, on a registered symbol, on an object holding a
// symbol, and on an object with a symbol key. A thrown error prints as
// name: message; a clone that succeeds prints its own keys.
const audit = Symbol("audit");
const order = { id: "A-1001", [audit]: "checked by Ada" };
const keys = (object) => Reflect.ownKeys(object).map(String).join(", ");

const attempts = [
  ['structuredClone(Symbol("audit"))', () => String(structuredClone(audit))],
  ['structuredClone(Symbol.for("audit"))', () => String(structuredClone(Symbol.for("audit")))],
  ["structuredClone({ checkedBy: audit })", () => JSON.stringify(structuredClone({ checkedBy: audit }))],
  ["keys of order", () => keys(order)],
  ["keys of structuredClone(order)", () => keys(structuredClone(order))],
];
for (const [code, attempt] of attempts) {
  let result;
  try {
    result = attempt();
  } catch (error) {
    result = `${error.name}: ${error.message}`;
  }
  console.log(`${code.padEnd(39)}${result}`);
}
