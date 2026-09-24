"""Build-time fixes that would otherwise cost a pinned plugin dependency.

Three jobs, all about the sidebar. The shape is the Go library's hook, with
labels taken from each README's H1 as the ABAP library does:

1. **Clean labels.** MkDocs derives a section label from the folder name on
   disk, so `03_Equality_and_Coercion/` would read "03 Equality And Coercion"
   and `the_typeof_operator/` "The typeof operator" with no backticks to say
   which word is code. Instead every section is labelled from its own
   README's `# H1`:

   - a chapter's H1 is "03 — Equality and coercion"; the number is dropped,
     because it exists to set order in a file listing, not to be read;
   - a lesson's H1 is "Subject — what it teaches"; the sidebar shows only the
     subject, the part before the em dash, because the whole title reads right
     at the top of the page and is far too long down the side of it.

   Backticks are dropped: the sidebar prints them as literal characters.
   `LABEL_OVERRIDES` holds the exceptions.

2. **Order the sections.** `NAV_ORDER` states the intended reading order per
   folder, keyed by folder path, listing children by their on-disk name.

3. **Re-chain prev/next.** The footer arrows follow the sidebar order, not
   the alphabet (see `on_nav`).

Why order here rather than by renaming files: a filename is a permanent URL.
Renumbering `03_` to `04_` to insert a chapter would move every page after it
and break any link anyone saved. Ordering is presentation, so it belongs in the
presentation layer. Unlisted pages keep their alphabetical slot at the bottom,
and tools/check_pages.py fails on a lesson folder that is not listed.

One structural note that is easy to get wrong: the top-level object MkDocs hands
`on_nav` is a `Navigation`, whose children live on `.items`. Only `Section` has
`.children`. A hook that reaches for `.children` at the top level silently does
nothing at all -- the build still succeeds, and the sidebar is simply never
touched.
"""

from __future__ import annotations

import html
import re

PREFIX = re.compile(r"^(\d+)[_-]")
# "03 — Equality and coercion" -> "Equality and coercion"
CHAPTER_H1 = re.compile(r"^\d+\s+—\s+")

# Sections whose sidebar label is deliberately not taken from their H1. Keyed
# by on-disk folder name. An entry naming a folder that no longer exists is a
# silent no-op, which tools/check_nav_chain.py reports.
LABEL_OVERRIDES: dict[str, str] = {}

# Reading order per folder path. Children named by on-disk name; anything not
# listed sorts alphabetically after the listed ones.
NAV_ORDER: dict[str, list[str]] = {
    "": [
        "index.md",
        "00_Start_Here",
        "KEYWORDS.md",
        "KATAS.md",
        "01_Running_JavaScript",
        "02_Values_and_Types",
        "03_Equality_and_Coercion",
        "04_Variables_and_Scope",
        "05_Functions",
        "06_Objects",
        "07_Prototypes_and_Classes",
        "08_Arrays_and_Collections",
        "09_Strings_and_Unicode",
        "10_Numbers_and_Math",
        "11_Control_Flow_and_Iteration",
        "12_Errors",
        "13_Async_and_the_Event_Loop",
        "14_Modules",
        "15_Regular_Expressions",
        "16_Dates_and_Time",
        "17_Metaprogramming",
        "18_Memory_and_Garbage_Collection",
        "19_Node_Runtime",
        "20_Workers_and_Parallelism",
        "21_The_Browser",
        "22_TypeScript_Basics",
        "23_Everyday_Types",
        "24_Narrowing",
        "25_Type_Compatibility",
        "26_Generics",
        "27_Type_Operators",
        "28_Classes_in_TypeScript",
        "29_Declaration_Files_and_Module_Resolution",
        "30_Where_Types_Lie",
        "31_Tooling",
        "32_Resources",
    ],
    "00_Start_Here": [
        "README.md",
        "how_a_page_is_checked",
    ],
    "01_Running_JavaScript": [
        "README.md",
        "the_language_and_the_host",
        "running_a_file_with_node",
        "scripts_and_modules",
        "strict_mode",
        "semicolons_and_asi",
        "ecmascript_versions",
        "which_features_your_node_has",
    ],
    "02_Values_and_Types": [
        "README.md",
        "eight_types",
        "the_typeof_operator",
        "null_and_undefined",
        "primitives_and_wrapper_objects",
        "symbols",
        "bigint",
        "values_and_references",
        # The chapter's companions: every error message, every lint, and
        # where to read further, each pointing back at the lessons above.
        "values_and_types_errors",
        "values_and_types_lints",
        "values_and_types_resources",
    ],
    "03_Equality_and_Coercion": [
        "README.md",
        "strict_and_loose_equality",
        "samevalue_and_samevaluezero",
        "truthy_and_falsy",
        "the_plus_operator",
        "toprimitive",
        "comparing_with_less_than",
        "explicit_conversion",
    ],
    "04_Variables_and_Scope": [
        "README.md",
        "var_let_and_const",
        "const_is_not_frozen",
        "hoisting_and_the_tdz",
        "closures",
        "closures_in_loops",
        "the_global_object",
        "destructuring",
    ],
    "05_Functions": [
        "README.md",
        "three_ways_to_write_a_function",
        "this_is_set_by_the_call",
        "arrow_functions_and_this",
        "call_apply_and_bind",
        "parameters_defaults_and_rest",
        "functions_are_objects",
        "higher_order_functions",
        "recursion_and_the_call_stack",
    ],
    "06_Objects": [
        "README.md",
        "object_literals",
        "property_keys",
        "property_descriptors",
        "freeze_seal_and_prevent_extensions",
        "getters_and_setters",
        "copying_objects",
        "optional_chaining_and_nullish_coalescing",
        "json",
    ],
    "07_Prototypes_and_Classes": [
        "README.md",
        "the_prototype_chain",
        "own_and_inherited_properties",
        "classes_are_functions",
        "constructors_and_new",
        "private_fields",
        "static_members",
        "inheritance_and_super",
        "instanceof",
    ],
    "08_Arrays_and_Collections": [
        "README.md",
        "array_basics",
        "sort_compares_strings",
        "holes_and_sparse_arrays",
        "mutating_and_copying_methods",
        "map_filter_reduce",
        "map_and_set",
        "weakmap_and_weakset",
        "typed_arrays",
        "grouping_and_set_operations",
    ],
    "09_Strings_and_Unicode": [
        "README.md",
        "strings_are_utf16",
        "code_points_and_iteration",
        "graphemes_and_intl_segmenter",
        "normalization",
        "template_literals",
        "comparing_and_sorting_strings",
        "strings_and_bytes",
        "string_methods",
        "case_conversion",
    ],
    "10_Numbers_and_Math": [
        "README.md",
        "every_number_is_a_double",
        "safe_integers",
        "nan_infinity_and_negative_zero",
        "parsing_numbers",
        "rounding_and_formatting",
        "bitwise_operators",
        "random_numbers",
        "money_and_decimals",
    ],
    "11_Control_Flow_and_Iteration": [
        "README.md",
        "if_switch_and_the_conditional_operator",
        "loops",
        "short_circuit_evaluation",
        "for_in_and_for_of",
        "the_iteration_protocol",
        "generators",
        "iterator_helpers",
        "async_iteration",
    ],
    "12_Errors": [
        "README.md",
        "throw_and_try_catch",
        "error_types",
        "finally",
        "custom_errors_and_cause",
        "stack_traces",
        "unhandled_errors_in_node",
    ],
    "13_Async_and_the_Event_Loop": [
        "README.md",
        "run_to_completion",
        "the_event_loop",
        "microtasks_and_tasks",
        "callbacks",
        "promises",
        "async_and_await",
        "sequential_or_parallel_awaits",
        "promise_combinators",
        "timers",
        "cancellation_with_abortcontroller",
        "blocking_the_event_loop",
    ],
    "14_Modules": [
        "README.md",
        "esm_and_commonjs",
        "import_and_export",
        "live_bindings",
        "dynamic_import_and_top_level_await",
        "import_meta",
        "package_json_type_and_exports",
        "require_and_esm_interop",
        "module_cycles",
    ],
    "15_Regular_Expressions": [
        "README.md",
        "regex_literals_and_flags",
        "the_g_flag_and_lastindex",
        "match_matchall_and_exec",
        "named_groups_and_replacements",
        "unicode_mode",
        "lookbehind_in_javascript",
        "regexp_escape",
    ],
    "16_Dates_and_Time": [
        "README.md",
        "months_start_at_zero",
        "date_parsing",
        "time_zones",
        "formatting_dates_with_intl",
        "temporal",
        "measuring_elapsed_time",
    ],
    "17_Metaprogramming": [
        "README.md",
        "well_known_symbols",
        "proxy_and_reflect",
        "tagged_templates",
        "decorators",
        "explicit_resource_management",
        "eval_and_new_function",
    ],
    "18_Memory_and_Garbage_Collection": [
        "README.md",
        "reachability",
        "memory_leaks",
        "weakref_and_finalizationregistry",
        "measuring_memory_in_node",
    ],
    "19_Node_Runtime": [
        "README.md",
        "process_argv_env_and_exit_codes",
        "reading_and_writing_files",
        "paths_and_file_urls",
        "stdin_stdout_and_pipes",
        "buffers",
        "streams_and_backpressure",
        "events_and_eventemitter",
        "http_server_and_fetch",
        "the_built_in_test_runner",
    ],
    "20_Workers_and_Parallelism": [
        "README.md",
        "one_thread_per_agent",
        "worker_threads",
        "message_passing_and_structured_clone",
        "sharedarraybuffer_and_atomics",
        "child_processes",
    ],
    "21_The_Browser": [
        "README.md",
        "the_dom_is_not_javascript",
        "events_bubbling_and_delegation",
        "the_rendering_loop",
        "fetch_and_cors",
        "web_storage_and_cookies",
        "script_loading",
    ],
    "22_TypeScript_Basics": [
        "README.md",
        "what_typescript_adds",
        "types_are_erased",
        "running_typescript",
        "erasable_syntax",
        "tsc_and_tsconfig",
        "strict_mode_in_typescript",
        "annotations_and_inference",
        "typescript_7",
    ],
    "23_Everyday_Types": [
        "README.md",
        "primitive_and_literal_types",
        "arrays_and_tuples",
        "object_types",
        "union_and_intersection_types",
        "type_aliases_and_interfaces",
        "function_types_and_overloads",
        "null_and_undefined_in_types",
        "any_unknown_and_never",
        "enums_and_alternatives",
    ],
    "24_Narrowing": [
        "README.md",
        "narrowing_by_control_flow",
        "truthiness_narrowing",
        "discriminated_unions",
        "exhaustiveness_with_never",
        "type_predicates_and_assertion_functions",
        "satisfies_as_and_annotations",
    ],
    "25_Type_Compatibility": [
        "README.md",
        "structural_typing",
        "excess_property_checks",
        "object_and_empty_object_types",
        "branded_types",
        "variance",
    ],
    "26_Generics": [
        "README.md",
        "generic_functions",
        "generic_constraints",
        "generic_types_and_defaults",
        "const_type_parameters",
        "when_inference_fails",
    ],
    "27_Type_Operators": [
        "README.md",
        "keyof_and_typeof",
        "indexed_access_types",
        "utility_types",
        "mapped_types",
        "conditional_types_and_infer",
        "template_literal_types",
        "recursive_types",
    ],
    "28_Classes_in_TypeScript": [
        "README.md",
        "private_versus_hash_private",
        "parameter_properties",
        "abstract_classes_and_implements",
        "readonly_and_override",
        "this_types",
    ],
    "29_Declaration_Files_and_Module_Resolution": [
        "README.md",
        "declaration_files",
        "types_for_packages",
        "type_only_imports",
        "module_resolution",
        "declaration_merging_and_augmentation",
    ],
    "30_Where_Types_Lie": [
        "README.md",
        "any_is_contagious",
        "type_assertions_are_unchecked",
        "index_access_and_nouncheckedindexedaccess",
        "json_parse_and_external_data",
        "runtime_validation",
        "array_covariance_is_unsound",
    ],
    "31_Tooling": [
        "README.md",
        "npm_and_package_json",
        "npm_scripts_and_npx",
        "editor_setup",
        "linting_with_eslint",
        "formatting_with_prettier",
        "bundlers_and_transpilers",
        "debugging_node",
        "deno_and_bun",
    ],
    "32_Resources": [
        "README.md",
        "books",
        "documentation",
        "crosswalk",
    ],
}


def _label(name: str) -> str:
    """Folder name on disk -> a fallback label, for a section with no H1."""
    words = PREFIX.sub("", name).replace("_", " ").replace("-", " ").split()
    text = " ".join(words)
    return text[:1].upper() + text[1:]


def _is_section(item) -> bool:
    return getattr(item, "children", None) is not None


def _first_src(item) -> str:
    """Source path of `item`, or of the first page anywhere beneath it."""
    page_file = getattr(item, "file", None)
    if page_file is not None:
        return page_file.src_uri
    for child in getattr(item, "children", None) or []:
        found = _first_src(child)
        if found:
            return found
    return ""


def _on_disk_name(item, depth: int) -> str:
    """The name NAV_ORDER lists this child by: a filename, or a folder segment."""
    src = _first_src(item)
    if not src:
        return (getattr(item, "title", "") or "").lower()
    parts = src.split("/")
    if not _is_section(item):
        return parts[-1]
    return parts[depth] if depth < len(parts) - 1 else parts[-1]


def _order_key(path: str, name: str) -> tuple[int, str]:
    listed = NAV_ORDER.get(path, [])
    if name in listed:
        return (listed.index(name), "")
    return (len(listed), name.lower())


def _readme_h1(section) -> str:
    """The H1 of a section's own README.md, read from disk ("" if it has none).

    Read from disk because MkDocs fills in a page's title only when it renders
    the page, long after `on_nav`. Backticks are dropped.
    """
    for child in section.children:
        page_file = getattr(child, "file", None)
        if page_file is None or page_file.src_uri.rsplit("/", 1)[-1] != "README.md":
            continue
        with open(page_file.abs_src_path, encoding="utf-8") as fh:
            for line in fh:
                if line.startswith("# "):
                    return line[2:].strip().replace("`", "")
    return ""


def section_label(folder: str, h1: str) -> str:
    """The sidebar label for a section: chapter H1 minus its number, lesson H1 up to the em dash."""
    if folder in LABEL_OVERRIDES:
        return LABEL_OVERRIDES[folder]
    if not h1:
        return _label(folder)
    if PREFIX.match(folder):
        return CHAPTER_H1.sub("", h1) or _label(folder)
    return h1.split(" — ", 1)[0].strip() or h1


def _visit(items: list, path: str, depth: int) -> None:
    for child in items:
        if not _is_section(child):
            continue
        name = _on_disk_name(child, depth)
        # The theme writes a section title into the sidebar as HTML, unescaped:
        # the subject "< and >" survived only because "< " cannot open a tag,
        # and a subject like "Array<T>" would vanish into an unknown element.
        child.title = html.escape(section_label(name, _readme_h1(child)), quote=False)

    items.sort(key=lambda c: _order_key(path, _on_disk_name(c, depth)))

    for child in items:
        if not _is_section(child):
            continue
        name = _on_disk_name(child, depth)
        _visit(child.children, f"{path}/{name}".lstrip("/"), depth + 1)


def _pages_in_nav_order(items: list) -> list:
    """Every page under `items`, depth-first, in the order the sidebar shows."""
    out = []
    for item in items:
        if item.is_page:
            out.append(item)
        elif item.is_section:
            out.extend(_pages_in_nav_order(item.children))
    return out


def on_nav(nav, config, files):
    """Relabel sections, apply NAV_ORDER, and re-chain prev/next."""
    _visit(nav.items, "", 0)

    # Sorting nav.items fixes the sidebar and nothing else. MkDocs computes every
    # page's previous_page/next_page inside get_navigation(), which runs BEFORE
    # this hook -- so without the re-chain below, the arrows at the foot of a
    # lesson walk the reader alphabetically while the sidebar beside them reads
    # in order. For a library with a reading order, the arrow IS the order.
    ordered = _pages_in_nav_order(nav.items)
    # Compared by source path, not by identity: MkDocs' Page defines __eq__
    # without __hash__, so a Page cannot go in a set.
    walked = {page.file.src_uri for page in ordered}
    known = {page.file.src_uri for page in nav.pages}
    assert walked == known, (
        "_pages_in_nav_order is out of step with mkdocs.structure.nav: "
        f"missed {sorted(known - walked)}, invented {sorted(walked - known)}"
    )
    for i, page in enumerate(ordered):
        page.previous_page = ordered[i - 1] if i else None
        page.next_page = ordered[i + 1] if i + 1 < len(ordered) else None
    nav.pages[:] = ordered

    return nav
