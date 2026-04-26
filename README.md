# @masicn/ui

Core design system for [masicn](https://github.com/masicn-ui) — the copy-paste React Native UI ecosystem.

This package provides the design foundation that all masicn components are built on: tokens, theme system, primitives, hooks, and utilities. You don't use `@masicn/ui` directly to build UIs — you use the [masicn CLI](https://www.npmjs.com/package/masicn) to copy component source code into your project, and those components import from this package.

[![npm version](https://img.shields.io/npm/v/@masicn/ui.svg?style=flat-square)](https://www.npmjs.com/package/@masicn/ui)
[![npm downloads](https://img.shields.io/npm/dm/@masicn/ui.svg?style=flat-square)](https://www.npmjs.com/package/@masicn/ui)
[![license](https://img.shields.io/npm/l/@masicn/ui.svg?style=flat-square)](./LICENSE)

**Built from scratch by [Manish Kumar](https://manishh.in) ([@lordofthemind](https://github.com/lordofthemind))**

> **मसि** (masi) means _ink_ in Sanskrit and several Indian languages. Just as ink is the medium for writing anything, masicn is the medium for building anything in React Native.

## Installation

`@masicn/ui` is set up automatically when you run `npx masicn@latest init`. **You do not install it manually** — the CLI copies the design system source files directly into your project under `src/masicn/`. Your components then import from that local copy, not from this npm package.

> **Supported project type:** masicn currently works with **React Native CLI** projects only — scaffolded via `npx @react-native-community/cli@latest init`. Expo is not supported yet.

```bash
# This is the only install command you need:
npx masicn@latest init
```

## Setup

Wrap your app with `MasicnProvider`:

```tsx
import { MasicnProvider } from '@masicn/ui';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MasicnProvider>
        {/* your app */}
      </MasicnProvider>
    </GestureHandlerRootView>
  );
}
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `theme` | `'system' \| 'light' \| 'dark'` | `'system'` | Force a color mode or follow OS |
| `palettes` | `PaletteEntry[]` | built-in palettes | Provide custom palettes for runtime switching |

## Theme

### `useTheme()`

Access the current theme and controls inside any component:

```tsx
import { useTheme } from '@masicn/ui';

const {
  theme,          // fully resolved Theme object for the current mode + palette
  mode,           // 'light' | 'dark' | 'system'
  setMode,        // (mode: 'light' | 'dark' | 'system') => void
  toggleTheme,    // toggle between light and dark (ignores system pref)
  resetToSystem,  // resume following the OS preference
  palettes,       // PaletteEntry[] — all available palettes
  activePalette,  // name of the currently active palette
  setPalette,     // (name: string) => void — switch to a named palette
} = useTheme();

// use semantic color tokens — never raw hex
const backgroundColor = theme.colors.background;
const textColor = theme.colors.textPrimary;
```

### `createTheme(overrides?)`

Creates a `{ light, dark }` theme pair. Accepts a deep partial override — only the keys you provide are changed, everything else stays from the base palette.

```ts
import { createTheme } from '@masicn/ui';

const myTheme = createTheme({
  light: {
    colors: {
      primary: '#6200ee',
      onPrimary: '#ffffff',
      background: '#f5f5f5',
    },
  },
  dark: {
    colors: {
      primary: '#bb86fc',
      onPrimary: '#000000',
      background: '#121212',
    },
  },
});
// myTheme.light and myTheme.dark are fully resolved Theme objects
```

Pass the result to `MasicnProvider` via a `PaletteEntry`:

```tsx
const brandPalette: PaletteEntry = {
  name: 'brand',
  label: 'Brand',
  pair: myTheme,
};

<MasicnProvider palettes={[brandPalette]}>
  <App />
</MasicnProvider>
```

### Built-in Palettes

15 palettes are available out of the box. Pick one during `npx masicn init`:

| Palette | Description |
|---------|-------------|
| `masi` | Warm papaya + deep teal (default) |
| `ocean` | Deep blues + aqua |
| `sunset` | Warm oranges + purples |
| `forest` | Earthy greens + warm browns |
| `mono` | Monochrome slate |
| `rose` | Soft pinks + cranberry |
| `midnight` | Deep indigo + electric violet |
| `amber` | Golden honey + espresso |
| `nord` | Arctic blue-grays + frost |
| `coffee` | Espresso browns + caramel |
| `candy` | Hot pink + vivid sky blue |
| `citrus` | Lime green + golden yellow |
| `grapeSoda` | Violet-purple + acid lime |
| `jade` | Deep emerald + warm gold |
| `neonTeal` | Electric teal + vivid violet |

## Tokens

Access raw design tokens via `useTokens()`:

```tsx
import { useTokens } from '@masicn/ui';

const { spacing, radius, borders, typography, motion, sizes, elevation, opacity, iconSizes } = useTokens();

// spacing
{ padding: spacing.md }           // 12
{ gap: spacing.lg }               // 16
// radius
{ borderRadius: radius.md }       // 8
{ borderRadius: radius.full }     // 9999
// typography
{ ...typography.body }            // fontFamily, fontSize, lineHeight
// motion
withSpring(1, motion.spring.snappy)
withTiming(1, { duration: motion.duration.normal, easing: motionEasing.standard })
```

| Token group | Description |
|-------------|-------------|
| `spacing` | Spacing scale (4pt grid) |
| `radius` | Border radius values |
| `borders` | Border widths |
| `sizes` | Touch targets, avatar sizes, icon sizes, min widths |
| `elevation` | Shadow/elevation levels (apply inline — not inside `StyleSheet.create`) |
| `opacity` | Opacity values |
| `layout` | Layout constants |
| `iconSizes` | Icon dimension presets |
| `typography` | Font families, sizes, line heights |
| `motion` | Spring presets + duration constants |
| `motionEasing` | Easing functions (standard, accelerate, decelerate, linear) |
| `gradients` | Gradient helpers (via `useGradients()`) |

## Primitives

15 layout and base components. All masicn components are built from these.

```tsx
import { Box, Stack, Row, Text, Pressable, Surface, Icon } from '@masicn/ui';
```

| Component | Description |
|-----------|-------------|
| `Box` | Base layout container |
| `Text` | Typography with variant + color token support |
| `Stack` | Vertical flex layout with gap |
| `Row` | Horizontal flex layout with gap |
| `Wrap` | Wrapping flex layout |
| `Center` | Centered content |
| `Spacer` | Flexible space filler |
| `Divider` | Visual separator |
| `Surface` | Themed surface with optional elevation |
| `Pressable` | Pressable with ripple and hit slop |
| `AspectRatio` | Aspect ratio container |
| `Circle` | Circular container |
| `Square` | Square container |
| `Screen` | Full-screen container |
| `SafeAreaScreen` | Safe area aware screen |
| `Icon` | SVG icon renderer |

## Hooks

```tsx
import {
  useTheme,              // current theme, mode controls, palette switching
  useTokens,             // raw design tokens
  useReducedMotion,      // boolean — true when OS prefers reduced motion
  useResponsive,         // responsive breakpoints (Breakpoint, ResponsiveInfo)
  useAccessibilityProps, // accessibility prop helpers
  useFocusTrap,          // focus management for modals/dialogs
  useGradients,          // gradient helpers derived from active theme
} from '@masicn/ui';
```

## Utilities

```tsx
import { rgba, clamp } from '@masicn/ui';

rgba('#FF6B00', 0.5)     // → 'rgba(255, 107, 0, 0.5)'
clamp(value, 0, 100)     // clamp a number between min and max
```

## System

```tsx
import { MasicnProvider, Masicn, PortalHost } from '@masicn/ui';

// Masicn — imperative portal (for toasts, overlays)
Masicn.show(<Toast message="Saved!" />);
Masicn.hide();
```

## Using with the masicn CLI

`@masicn/ui` is designed to be used alongside the masicn CLI. The CLI copies component source files into your project — those files import primitives and tokens from this package.

```bash
# Sets up @masicn/ui and copies the design system locally
npx masicn init

# Copies Button.tsx into your project
npx masicn add button
```

See the [masicn CLI docs](https://www.npmjs.com/package/masicn) for the full workflow.

## License

[MIT](./LICENSE) — free to use, modify, and distribute. Copyright © 2026 [Manish Kumar](https://manishh.in).

When you copy components into your project with `masicn add`, those files become part of your project and are also MIT licensed — you can change them, ship them, or sell them without restriction.
