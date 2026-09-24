#!/usr/bin/env bash
# TypeError: BigInt is not a constructor
#
# A program that makes a BigInt with new. The driver writes it to a temporary
# folder, shows it, runs it with node, and prints the error line and the exit
# status -- not the stack trace, which names paths.
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

cat > order_id.mjs <<'EOF'
// An order number too big for a Number, read from text.
const orderId = new BigInt("9007199254740993");
console.log(`${orderId}n`);
EOF

show order_id.mjs
run order_id.mjs
