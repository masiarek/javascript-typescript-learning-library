// Reports the empty orders, by comparing each item list with [].
const orders = [
  { id: 1, items: [] },
  { id: 2, items: ["tea"] },
];
for (const order of orders) {
  console.log(`order ${order.id}: ${order.items === [] ? "empty" : "has items"}`);
}
