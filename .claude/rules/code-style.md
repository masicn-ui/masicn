---
paths:
  - "src/**/*.ts"
  - "src/**/*.tsx"
---

# Code Style — @masicn/ui

## Strict layer isolation
Lower layers must never import from higher layers:
- `tokens/` → no imports from `theme/`, `primitives/`, `hooks/`, `system/`
- `theme/` → can import from `tokens/`, `utils/`; not from `primitives/` or above
- `primitives/` → can import from `tokens/`, `theme/`, `utils/`; not from `system/`
- `system/` → can import from anything below it

Violating this will create circular deps and break tree-shaking.

## Public API discipline
Every export from `src/index.ts` is a public contract. Before adding to it:
- Is this actually needed by registry components? If only needed internally, don't export it.
- Types must be explicitly exported with `export type`.

## TypeScript conventions
- Named exports only — no `export default`.
- `satisfies` for palette objects (catches typos in color key names at compile time).
- `as const` for fixed-shape configs like spring presets.

## No React Native APIs in `tokens/` or `utils/`
These modules must be pure TypeScript — no RN imports. They need to be importable at module level without a React context.

## Primitive component rules
- Accept `style` prop and forward it (never block style overrides).
- Use tokens for all default values — no hardcoded numbers.
- Do not import from `system/` — primitives render standalone.
