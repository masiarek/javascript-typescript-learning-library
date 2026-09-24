// const fixes which object the name refers to, not what is inside it.
const cart = { items: 2, totalCents: 1999 };
cart.items = 3;
console.log(`const, changed in place: ${JSON.stringify(cart)}`);

// let, when the name has to refer to a new object.
let order = { items: 2, totalCents: 1999 };
order = { ...order, items: 3 };
console.log(`let, given a new object:  ${JSON.stringify(order)}`);
