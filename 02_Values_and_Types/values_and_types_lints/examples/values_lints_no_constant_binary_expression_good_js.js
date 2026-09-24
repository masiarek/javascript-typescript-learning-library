// Reports the empty orders: an empty list is one whose length is 0.
const orders = [
  { id: 1, items: [] },
  { id: 2, items: ["tea"] },
];
for (const order of orders) {
  console.log(`order ${order.id}: ${order.items.length === 0 ? "empty" : "has items"}`);
}
