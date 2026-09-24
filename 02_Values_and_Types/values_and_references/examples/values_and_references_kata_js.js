// Kata solution. withItem hands back a new cart and leaves the one it was
// given alone. `{ ...cart }` by itself would still share the items array,
// so the array is copied too.
function withItem(cart, item) {
  return { ...cart, items: [...cart.items, item] };
}

const cart = { owner: "ana", items: ["milk"] };
const next = withItem(cart, "eggs");

const row = (label, value) => console.log(`${label.padEnd(27)}${value}`);
row("cart", JSON.stringify(cart));
row("next", JSON.stringify(next));
row("next === cart", next === cart);
row("next.items === cart.items", next.items === cart.items);
