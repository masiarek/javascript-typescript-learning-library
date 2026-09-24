# TypeScript books of 2022 say that null and undefined can be assigned to a
# variable of any type unless strictNullChecks is turned on. TypeScript 7 turns
# it on by default. Check one line with no tsconfig.json: first with tsc's
# defaults, then with the check turned off.
work=$(mktemp -d)
trap 'rm -rf "$work"' EXIT
cd "$work" || exit 1
printf 'const discountCode: string = null;\nexport {};\n' > order.ts

echo '$ tsc --version'
tsc --version
echo '$ cat order.ts'
cat order.ts
echo '$ tsc --noEmit order.ts'
tsc --noEmit order.ts
echo "exit status: $?"
echo '$ tsc --noEmit --strictNullChecks false order.ts'
tsc --noEmit --strictNullChecks false order.ts
echo "exit status: $?"
