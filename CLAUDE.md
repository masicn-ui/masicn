# CLAUDE.md — masicn (`@masicn/ui`)

## What This Is

`masicn/` is the **installable npm package** `@masicn/ui`. It is the runtime foundation that every masicn component depends on. Users install this once via `masicn init` and it never changes unless they upgrade.

It contains **only what components need to function**: tokens, theme, primitives, hooks, animation configs, and utilities. The actual UI components (Button, Card, Modal, etc.) live in the registry — they are copy-pasted into user projects and import from this package.

## Role in the Monorepo

```
@masicn/ui  ←  all registry components import from here
@masicn/ui  ←  Playground imports from here (via local path/symlink)
@masicn/ui  ←  Gallery imports from here (via local path/symlink)
@masicn/ui  ←  manishhXyz imports from here (via local path/symlink)
```

This package has **no internal masicn dependencies**. It only depends on React, React Native, and optional peers (Zustand, AsyncStorage).

## Commands

```bash
npm run build          # Build with tsup → dist/ (ESM + CJS + types)
npm run dev            # Watch mode build
npm run typecheck      # TypeScript type check without emit
```

## Architecture — Layer Order (bottom to top)

```
tokens/       → Raw values: spacing, radius, borders, sizes, elevation, iconSizes, opacity, layout, typography
theme/        → Color palettes (masi, ocean, sunset, forest, mono, rose, midnight, amber, nord, coffee)
              → ThemeProvider (Zustand-backed), StaticThemeProvider, createTheme(), useTheme()
animation/    → motion (durations + 7 spring presets), motionEasing (Reanimated easing functions)
primitives/   → Box, Stack, Row, Text, Spacer, Divider, Screen, SafeAreaScreen
hooks/        → useTheme, useTokens, useReducedMotion, useResponsive, useAccessibilityProps, useFocusTrap
utils/        → rgba(), clamp(), platform helpers
system/       → MasicnProvider, Masicn (portal), PortalHost
index.ts      → Single public API entry point
```

**Strict rule**: lower layers must never import from higher layers. `tokens/` cannot import from `theme/`. `theme/` cannot import from `primitives/`.

## What Goes Here

- New **tokens** (spacing values, size constants, color palette entries)
- New **theme semantic keys** (new `colors.*` keys added to light/dark themes)
- New **palettes** (`theme/palettes/`)
- New **hooks** that are shared across many components (e.g. `useReducedMotion`)
- New **primitives** — only if they are pure layout/typography with zero business logic
- Animation config additions (`motion.ts`, `motionEasing.ts`)

## What Does NOT Go Here

- UI components with business logic → those go in `registry/components/`
- App-specific code → stays in Playground/Gallery/manishhXyz
- CLI logic → that's in `cli/`

## Source of Truth for Component Development

`Playground/` is the source of truth. The `masicn/src/` directory is **overwritten** by `npm run sync` from Playground. Do not make changes directly here unless you are also updating Playground and running sync.

## Key Files

- `src/index.ts` — the complete public API; every export must be intentional
- `src/tokens/index.ts` — `MasiTokens` object aggregating all token namespaces
- `src/theme/createTheme.ts` — factory function used by all palette themes
- `src/system/MasicnProvider.tsx` — root provider that wraps every masicn app

## Build Output

tsup produces `dist/` with ESM + CJS + TypeScript declarations. The `exports` field in `package.json` handles module resolution. Never commit `dist/` to git.
