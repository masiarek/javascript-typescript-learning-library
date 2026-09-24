// A primitive cannot hold a property: keep the flag in an object beside it.
const product = { sku: "A-1999", discontinued: false };
product.discontinued = true;
console.log(`${product.sku} discontinued: ${product.discontinued}`);
