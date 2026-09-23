# Running a file with Node — `node`, `-e`, `-p`, the REPL and `--check`

**Level:** 101 · for anyone about to run their first file with node

> **Stub — an outline, not a lesson.** There is no runnable example behind this page yet, so nothing on it has been through [the check that backs every other claim in this library](../../CONTRIBUTING.md). The questions below are what the finished page has to answer.

**One line:** `node -e '1 + 1'` prints nothing and `node -p '1 + 1'` prints `2`; `node --check` only parses, so it passes a file that calls a function that does not exist, and fails only on a syntax error.

**Keywords:** `node -e`, `node -p`, `--check`, `REPL`

## What the finished page will answer

- Why does `node -e '1 + 1'` print nothing while `node -p '1 + 1'` prints `2`, and what does `node -p 'let x = 5'` print?
- What exit status does `node --check` give a file that calls an undefined function, and a file with a syntax error?
- What does the REPL echo after `let y = 3` and after `y * 2`, and why is the first one `undefined`?
- Why is `typeof fs` `"object"` under `node -p` but `"undefined"` in a `.cjs` file?
- What happens when `--check` and `-e` are combined, and which exit status comes back?

## Examples it will need

- [ ] `running_a_file_eval_and_print_sh.sh` — node -e and node -p on the same three expressions, with each exit status
- [ ] `running_a_file_check_sh.sh` — node --check on a file with a runtime error and on one with a syntax error, then both files run, with exit statuses
- [ ] `running_a_file_repl_sh.sh` — three lines piped into node -i, with what the REPL echoes for each

## See also

- [Scripts and modules](../scripts_and_modules/README.md) — which rules `-e` code runs under
- [Running TypeScript](../../22_TypeScript_Basics/running_typescript/README.md) — running a `.ts` file with the same `node` command
- [`process`](../../19_Node_Runtime/process_argv_env_and_exit_codes/README.md) — the exit statuses these examples print
- [Debugging Node](../../31_Tooling/debugging_node/README.md) — the flags that pause a run in a debugger
- [Python: `-c` is not the prompt ↗](https://masiarek.github.io/python-learning-library/02_Projects_and_Environments/dash_c_is_not_the_prompt/index.html) — python3 -c is silent too, until you print
- [Perl: `-n` and `-p` are a loop ↗](https://masiarek.github.io/perl-learning-library/01_One_Liners/n_and_p_are_a_loop/index.html) — in Perl, `-p` means a loop, not print the value
- [Java text: Source-file mode ↗](https://masiarek.github.io/java-text-learning-library/05_The_Language_Itself/source_file_mode/index.html) — a single Java source file runs with no build step either

## Sources to start from

- [Node.js 24 — -e, --eval ↗](https://nodejs.org/docs/latest-v24.x/api/cli.html#-e---eval-script)
- [Node.js 24 — -c, --check ↗](https://nodejs.org/docs/latest-v24.x/api/cli.html#-c---check)
- [Node.js 24 — REPL ↗](https://nodejs.org/docs/latest-v24.x/api/repl.html)
