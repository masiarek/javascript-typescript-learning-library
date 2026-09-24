// The order-number program, in TypeScript: match may find nothing.
const label = "order #pending";
const found = label.match(/\d+/);
console.log(`order number ${found[0]}`);
