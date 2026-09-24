// Each object below has a readonly reference and a writable one. tsc accepts
// every line, and the readonly reference sees the write, because both names
// hold one object.
const order = { status: "open" };
const view: { readonly status: string } = order;
order.status = "paid";
console.log(`view.status            ${view.status}`);

const plan = { tier: "pro" } as const;
const loose: { tier: string } = plan;
loose.tier = "free";
console.log(`plan.tier              ${plan.tier}`);
console.log(`Object.isFrozen(plan)  ${Object.isFrozen(plan)}`);
