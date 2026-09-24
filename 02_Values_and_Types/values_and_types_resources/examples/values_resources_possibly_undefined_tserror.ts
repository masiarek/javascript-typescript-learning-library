// Two diagnostics that TypeScript books of 2022 describe differently. One book
// quotes the error for a value that may be undefined as "Object is possibly
// 'undefined'"; tsc now names the variable. The other says that with
// strictNullChecks on, null may still be assigned to a variable of type void.
function couponLabel(coupon: string | undefined): string {
  return coupon.toUpperCase();
}

const noResult: void = null;
const emptyResult: void = undefined;

export { couponLabel, noResult, emptyResult };
