#!/usr/bin/env bash
# TypeError: Cannot read properties of null (reading '0')
#
# A program that indexes the result of a match that found nothing. The driver
# writes it to a temporary folder, shows it, runs it with node, and prints the
# error line and the exit status -- not the stack trace, which names paths.
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

cat > order_number.mjs <<'EOF'
// Take the number out of an order label; this one has not been numbered yet.
const label = "order #pending";
const orderNumber = label.match(/\d+/)[0];
console.log(`order number ${orderNumber}`);
EOF

show order_number.mjs
run order_number.mjs
