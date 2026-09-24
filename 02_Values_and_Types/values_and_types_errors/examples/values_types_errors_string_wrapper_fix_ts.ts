// string, lower case, is the primitive type.
function productLabel(sku: string): string {
  return `${sku} (${typeof sku})`;
}
console.log(productLabel("A-1999"));
