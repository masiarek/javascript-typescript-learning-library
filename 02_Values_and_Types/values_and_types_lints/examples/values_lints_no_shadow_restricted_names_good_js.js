// The same check, with undefined left as the language's own.
function isMissing(value) {
  return value === undefined;
}
console.log(isMissing(undefined));
// map passes each element's index as the second argument.
console.log(JSON.stringify(["tea", undefined].map(isMissing)));
