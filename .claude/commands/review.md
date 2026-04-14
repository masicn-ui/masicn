Review the current changes to @masicn/ui for layer violations, API discipline, and correctness.

## Git diff:
!`git diff HEAD --stat`

!`git diff HEAD -- src/`

## Current public API exports:
!`grep "^export" src/index.ts 2>/dev/null | head -40`

Review the diff above and report:

**1. Layer violations** — does any file import from a layer above it?
- `tokens/` must not import from `theme/`, `primitives/`, `hooks/`, `system/`
- `theme/` must not import from `primitives/` or above
- `primitives/` must not import from `system/`

**2. Public API changes** — are any new exports added to `src/index.ts`? Are they intentional public API or internal utilities that slipped through?

**3. Peer dependency usage** — does any new code import from `zustand` or `@react-native-async-storage/async-storage` without gating it behind the optional peer pattern?

**4. TypeScript** — any `any` types? Exported types not using `export type`?

**5. Token immutability** — are token values `as const` or `satisfies` where needed to prevent runtime mutation?

Cite specific file and line for each issue.
