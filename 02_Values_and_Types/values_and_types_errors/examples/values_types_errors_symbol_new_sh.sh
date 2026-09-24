#!/usr/bin/env bash
# TypeError: Symbol is not a constructor
#
# A program that makes a symbol with new. The driver writes it to a temporary
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

cat > session_key.mjs <<'EOF'
// A key for a cache entry that no string key can collide with.
const sessionKey = new Symbol("session");
console.log(String(sessionKey));
EOF

show session_key.mjs
run session_key.mjs
