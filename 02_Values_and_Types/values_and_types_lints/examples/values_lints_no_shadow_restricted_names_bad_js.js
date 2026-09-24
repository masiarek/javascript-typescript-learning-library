// An old idiom: a parameter named undefined, which callers are meant to leave out.
function isMissing(value, undefined) {
  return value === undefined;
}
console.log(isMissing(undefined));
// map passes each element's index as the second argument.
console.log(JSON.stringify(["tea", undefined].map(isMissing)));
