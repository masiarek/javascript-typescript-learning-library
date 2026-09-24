// Fills in a quantity of 1 when an order line gives none.
const lines = [{ sku: "tea", quantity: 0 }, { sku: "cake" }];
for (const line of lines) {
  console.log(`${line.sku}: || gives ${line.quantity || 1}, ?? gives ${line.quantity ?? 1}`);
}
