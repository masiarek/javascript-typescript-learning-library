// tsc keeps the primitive type `string` apart from the wrapper type `String`.
function shout(text: string): string {
  return text.toUpperCase();
}

const label: String = "sku-1042"; // a primitive where a String is expected
const wrapper = new String("sku-1042");
console.log(shout(wrapper)); // a String object where a string is expected
console.log(label.length);
