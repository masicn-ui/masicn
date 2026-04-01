Run a full type-check and summarize any errors.

!`npm run typecheck 2>&1`

If there are errors:
1. Group them by file
2. For each error, explain what the type problem is in plain English
3. Suggest the minimal fix (prefer `satisfies` over casting, prefer fixing the source over adding `as unknown`)
4. Flag any errors in `src/index.ts` first — public API type errors are highest priority

If there are no errors, confirm the build is clean and note the TypeScript version in use.
