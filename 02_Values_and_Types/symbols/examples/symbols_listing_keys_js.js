// One order with a string key and a symbol key, handed to six ways of listing
// or copying keys (and the one built for symbols). Each row prints what came
// out; String() writes a symbol key as Symbol(audit).
const audit = Symbol("audit");
const order = { id: "A-1001", [audit]: "checked by Ada" };
const keys = (list) => list.map(String).join(", ");

const forIn = [];
for (const key in order) forIn.push(key);

const rows = [
  ["Object.keys(order)", keys(Object.keys(order))],
  ["for (const key in order)", keys(forIn)],
  ["JSON.stringify(order)", JSON.stringify(order)],
  ["keys of Object.assign({}, order)", keys(Reflect.ownKeys(Object.assign({}, order)))],
  ["keys of { ...order }", keys(Reflect.ownKeys({ ...order }))],
  ["Reflect.ownKeys(order)", keys(Reflect.ownKeys(order))],
  ["Object.getOwnPropertySymbols(order)", keys(Object.getOwnPropertySymbols(order))],
];
for (const [code, result] of rows) console.log(`${code.padEnd(37)}${result}`);
