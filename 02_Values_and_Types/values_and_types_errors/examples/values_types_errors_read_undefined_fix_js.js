// ?. stops at undefined or null instead of reading on; ?? supplies a default.
const orders = [
  { id: 7, totalCents: 1999 },
  { id: 8, totalCents: 250, customer: null },
  { id: 9, totalCents: 500, customer: { city: "Oslo" } },
];
console.log(`order 7's customer: ${orders[0].customer}`);
for (const order of orders) {
  const city = order.customer?.city ?? "no address yet";
  console.log(`order ${order.id}: ${city}`);
}
