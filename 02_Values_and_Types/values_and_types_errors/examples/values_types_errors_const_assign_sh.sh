#!/usr/bin/env bash
# TypeError: Assignment to constant variable.
#
# A program that points a const at a new object. The driver writes it to a
# temporary folder, shows it, runs it with node, and prints the error line and
# the exit status -- not the stack trace, which names paths.
dir=$(mktemp -d)
trap 'rm -rf "$dir"' EXIT
cd "$dir" || exit 1

show() { echo "\$ cat $1"; cat "$1"; }
run() {
  echo "\$ node $1"
  node "$1" 2> stderr.txt
  local status=$?
  grep -E '^[A-Za-z]*Error' stderr.txt
  echo "exit status: $status"
}

cat > add_item.mjs <<'EOF'
// Add a third item to the cart.
const cart = { items: 2, totalCents: 1999 };
cart = { ...cart, items: 3 };
console.log(JSON.stringify(cart));
EOF

show add_item.mjs
run add_item.mjs
