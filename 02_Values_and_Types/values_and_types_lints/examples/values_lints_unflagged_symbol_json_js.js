// Saves an order whose id sits under a symbol key.
const orderId = Symbol("orderId");
const order = { [orderId]: 7, total: 100 };
console.log(`own keys: ${Reflect.ownKeys(order).map(String).join(", ")}`);
console.log(`saved:    ${JSON.stringify(order)}`);
