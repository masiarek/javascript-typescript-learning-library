// readonly and as const belong to one reference: the one whose type carries
// them. tsc refuses a write through that reference.
const order = { status: "open" };
const view: { readonly status: string } = order;
view.status = "paid";

const plan = { tier: "pro" } as const;
plan.tier = "free";
