#!/usr/bin/env bash
# Two of the _tserror files beside this one, checked by tsc from the command
# line: first as it comes, then with strict switched off, then with no --strict
# flag at all.
file=values_lints_ts_strict_tserror.ts
echo "\$ tsc --noEmit --pretty false $file"
tsc --noEmit --pretty false "$file"
echo "exit status: $?"
for file in values_lints_ts_strict_tserror.ts values_lints_ts_constructors_tserror.ts; do
  echo "\$ tsc --ignoreConfig --noEmit --pretty false --strict false $file"
  tsc --ignoreConfig --noEmit --pretty false --strict false "$file"
  echo "exit status: $?"
  echo "\$ tsc --ignoreConfig --noEmit --pretty false $file"
  tsc --ignoreConfig --noEmit --pretty false "$file"
  echo "exit status: $?"
done
