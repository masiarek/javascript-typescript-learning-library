// A parameter is a variable of the function's own, and the call copies the
// argument into it, as `const b = a` does. So the function can write to the
// caller's object, but assigning to the parameter moves only its own variable.
const show = (label, value) => console.log(`  ${label.padEnd(14)}${value}`);

function markPaid(order) {
  order.status = "paid"; // a write to the object the caller also holds
}

function cancel(order) {
  order = { status: "cancelled" }; // points this function's variable elsewhere
  return order.status;
}

function swap(first, second) {
  const held = first;
  first = second;
  second = held;
  return `${first.id} ${second.id}`;
}

// let, not const: nothing below is held back by const.
let order = { status: "open" };
console.log("markPaid(order);");
markPaid(order);
show("order.status", order.status);

console.log("cancel(order);");
show("returned", cancel(order));
show("order.status", order.status);

let left = { id: 1 };
let right = { id: 2 };
console.log("swap(left, right);");
show("returned", swap(left, right));
show("left.id", left.id);
show("right.id", right.id);
