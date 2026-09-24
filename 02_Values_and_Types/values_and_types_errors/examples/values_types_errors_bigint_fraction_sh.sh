#!/usr/bin/env bash
# RangeError: The number 1998.9999999999998 cannot be converted to a BigInt
# because it is not an integer
#
# A program that turns dollars into BigInt cents by multiplying by 100. The
# driver writes it to a temporary folder, shows it, runs it with node, and
# prints the error line and the exit status -- not the stack trace, which
# names paths.
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

cat > price_to_cents.mjs <<'EOF'
// A price in dollars, turned into exact integer cents.
const priceDollars = 19.99;
const cents = BigInt(priceDollars * 100);
console.log(`${cents}n`);
EOF

show price_to_cents.mjs
run price_to_cents.mjs
