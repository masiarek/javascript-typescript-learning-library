// Makes an order key and an item count with new, as if they were objects.
// The try/catch is only here so that the example prints each error and carries on.
try {
  const orderKey = new Symbol("order");
  console.log(String(orderKey));
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
try {
  const itemCount = new BigInt(10);
  console.log(`${itemCount}n`);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
