// Symbol.for looks its key up in one registry and makes the symbol only the
// first time it is asked. Two modules that ask for "id" get the same symbol,
// so their writes collide, just as string keys do.
import vm from "node:vm";

const row = (code, value) => console.log(`${code.padEnd(48)}${String(value)}`);

row('Symbol.for("id") === Symbol.for("id")', Symbol.for("id") === Symbol.for("id"));
row('Symbol.for("id") === Symbol("id")', Symbol.for("id") === Symbol("id"));

const order = { id: "A-1001" };
order[Symbol.for("id")] = "INV-7"; // the billing module
order[Symbol.for("id")] = "checked by Ada"; // the audit module
row("Object.getOwnPropertySymbols(order).length", Object.getOwnPropertySymbols(order).length);
row('order[Symbol.for("id")]', order[Symbol.for("id")]);

// Symbol.keyFor answers with the registry key, or undefined.
row('Symbol.keyFor(Symbol.for("id"))', Symbol.keyFor(Symbol.for("id")));
row('Symbol.keyFor(Symbol("id"))', Symbol.keyFor(Symbol("id")));
row("Symbol.keyFor(Symbol.iterator)", Symbol.keyFor(Symbol.iterator));

// A node:vm context is a second realm, with a Symbol function of its own.
const realm = vm.createContext({});
const theirSymbol = vm.runInContext("Symbol", realm);
const theirId = vm.runInContext('Symbol.for("id")', realm);
row("theirSymbol === Symbol", theirSymbol === Symbol);
row('theirId === Symbol.for("id")', theirId === Symbol.for("id"));

// A WeakMap takes a symbol as a key only if it is not registered.
for (const [code, key] of [['Symbol("id")', Symbol("id")], ['Symbol.for("id")', Symbol.for("id")]]) {
  let result = "accepted";
  try {
    new WeakMap().set(key, "cached");
  } catch (error) {
    result = `${error.name}: ${error.message}`;
  }
  row(`new WeakMap().set(${code}, "cached")`, result);
}
