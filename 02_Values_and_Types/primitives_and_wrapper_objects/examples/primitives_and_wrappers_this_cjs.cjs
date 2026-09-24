// A .cjs file is sloppy-mode code unless a function says "use strict".
const sku = "SKU-1042";

// The primitive has no methods of its own; the lookup finds String.prototype's.
console.log(`sku.toUpperCase === String.prototype.toUpperCase  ${sku.toUpperCase === String.prototype.toUpperCase}`);

// Two methods added to String.prototype, one sloppy and one strict, each
// returning the `this` it was called with.
String.prototype.sloppySelf = function () {
  return this;
};
String.prototype.strictSelf = function () {
  "use strict";
  return this;
};

const first = sku.sloppySelf();
const second = sku.sloppySelf();
console.log("sloppy method, called twice:");
console.log(`  typeof this                 ${typeof first}`);
console.log(`  this instanceof String      ${first instanceof String}`);
console.log(`  this.valueOf() === sku      ${first.valueOf() === sku}`);
console.log(`  first this === second this  ${first === second}`);

const strictThis = sku.strictSelf();
console.log("strict method:");
console.log(`  typeof this                 ${typeof strictThis}`);
console.log(`  this === sku                ${strictThis === sku}`);

// Leave String.prototype as it was found.
delete String.prototype.sloppySelf;
delete String.prototype.strictSelf;
