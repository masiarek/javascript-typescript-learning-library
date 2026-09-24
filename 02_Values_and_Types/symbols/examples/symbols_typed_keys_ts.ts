// What a `unique symbol` type is for: a symbol key that tsc can check. The
// const `audit` has a type of its own, so an interface can name it as a key.
const audit = Symbol("audit");
interface Order {
  id: string;
  [audit]?: string;
}
const order: Order = { id: "A-1001" };
order[audit] = "checked by Ada";
console.log(order[audit]);

// A registered symbol annotated as plain `symbol`: tsc lets the comparison
// through, and Node prints what the registry program printed.
const registeredA: symbol = Symbol.for("id");
const registeredB: symbol = Symbol.for("id");
console.log(registeredA === registeredB);
