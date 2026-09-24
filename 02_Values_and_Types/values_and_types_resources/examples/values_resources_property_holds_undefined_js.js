// "A property's value can be anything except undefined": a property can hold
// undefined, and it is then still there, unlike a property that was never set.
const order = { id: 1001, coupon: undefined };

console.log(`order.coupon:                   ${String(order.coupon)}`);
console.log(`"coupon" in order:              ${"coupon" in order}`);
console.log(`Object.hasOwn(order, "coupon"): ${Object.hasOwn(order, "coupon")}`);
console.log(`Object.keys(order):             ${JSON.stringify(Object.keys(order))}`);
console.log(`order.gift:                     ${String(order.gift)}`);
console.log(`"gift" in order:                ${"gift" in order}`);
