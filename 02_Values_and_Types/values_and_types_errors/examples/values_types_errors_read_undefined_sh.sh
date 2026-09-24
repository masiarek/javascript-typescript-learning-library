#!/usr/bin/env bash
# TypeError: Cannot read properties of undefined (reading 'city')
#
# A program that reads a property through a property the object does not
# have. The driver writes it to a temporary folder, shows it, runs it with
# node, and prints the error line and the exit status -- not the stack trace,
# which names paths.
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

cat > ship_order.mjs <<'EOF'
// An order saved before anyone entered a delivery address.
const order = { id: 7, totalCents: 1999 };
console.log(`ship to ${order.customer.city}`);
EOF

show ship_order.mjs
run ship_order.mjs
