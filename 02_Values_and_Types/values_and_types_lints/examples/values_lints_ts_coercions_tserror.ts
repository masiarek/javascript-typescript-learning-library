// The two shortcuts no-implicit-coercion flags that throw, with types.
const orderKey = Symbol("order");
const keyText = "" + orderKey;

const itemCount = 3n;
const count = +itemCount;
