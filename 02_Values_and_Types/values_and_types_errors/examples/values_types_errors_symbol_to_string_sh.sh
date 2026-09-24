#!/usr/bin/env bash
# TypeError: Cannot convert a Symbol value to a string
#
# Two programs that put a symbol into text: one with +, one with a template
# literal. The driver writes them to a temporary folder, shows each, runs it
# with node, and prints the error line and the exit status -- not the stack
# trace, which names paths.
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

cat > log_key_plus.mjs <<'EOF'
// Log the key a cache entry is stored under.
const sessionKey = Symbol("session");
console.log("stored under " + sessionKey);
EOF

cat > log_key_template.mjs <<'EOF'
// The same, with a template literal.
const sessionKey = Symbol("session");
console.log(`stored under ${sessionKey}`);
EOF

show log_key_plus.mjs
run log_key_plus.mjs
show log_key_template.mjs
run log_key_template.mjs
