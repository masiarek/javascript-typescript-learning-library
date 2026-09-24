// "Setting a property on a string is ignored without an error": true in the
// sloppy-mode scripts those books were written for. Strict code throws, and
// every ES module (this file included) is strict.
const oldScript = new Function(`
  const sku = "SKU-1";
  sku.discount = 5;
  return String(sku.discount);
`);
console.log(`sloppy code: no error, sku.discount is ${oldScript()}`);

const sku = "SKU-1";
try {
  sku.discount = 5;
  console.log("module code: no error");
} catch (error) {
  console.log(`module code: ${error.name}: ${error.message}`);
}
