// Turns an order key into text and an item count into a number, the short way.
// The try/catch is only here so that the example prints each error and carries on.
const orderKey = Symbol("order");
const itemCount = 3n;
try {
  const keyText = "" + orderKey;
  console.log(`key: ${keyText}`);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
try {
  const count = +itemCount;
  console.log(`count: ${count}`);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
