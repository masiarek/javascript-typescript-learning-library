#!/usr/bin/env bash
# no-undef-init: run the bad program and the good one, and lint each with only this
# rule switched on (--no-config-lookup: no eslint.config.js is read). ESLint
# prints each file's absolute path above its report; sed strips this folder's
# part of it, so the output is the same on every machine.
rule='{"no-undef-init": "error"}'
here=$(pwd -P)
for program in values_lints_no_undef_init_bad_js.js values_lints_no_undef_init_good_js.js; do
  echo "\$ node $program"
  node "$program"
  echo "\$ eslint --no-config-lookup --rule '$rule' $program"
  eslint --no-config-lookup --rule "$rule" "$program" | sed "s|$here/||"
  echo "exit status: ${PIPESTATUS[0]}"
done
