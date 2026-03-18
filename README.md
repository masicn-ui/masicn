# @masicn/ui

Core framework for [masicn](https://masicn.dev) — the copy-paste React Native UI ecosystem.

This package provides the design foundation that all masicn components are built on: tokens, theme system, primitives, hooks, and utilities. You don't use `@masicn/ui` directly to build UIs — you use the [masicn CLI](https://www.npmjs.com/package/masicn) to copy component source code into your project, and those components import from this package.

## Installation

`@masicn/ui` is set up automatically when you run `npx masicn init`. You don't need to install it manually.

If you need to install it yourself:

```bash
npm install @masicn/ui
# peer deps
npm install react-native-reanimated react-native-safe-area-context
```

**Peer dependencies:**
- `react >= 18`
- `react-native >= 0.73`
- `react-native-reanimated >= 3` *(optional)*
- `react-native-safe-area-context >= 4` *(optional)*

## Setup

Wrap your app with `MasicnProvider` and pass in a theme:

```tsx
import { MasicnProvider, createTheme } from '@masicn/ui';

const theme = createTheme(); // uses masi palette defaults

export default function App() {
  return (
    <MasicnProvider theme={theme}>
      {/* your app */}
    </MasicnProvider>
  );
}
```

## Theme

### `createTheme(overrides?)`

Creates a `{ light, dark }` theme pair. Accepts a deep partial override — only the keys you provide are changed, everything else stays default.

```ts
import { createTheme } from '@masicn/ui';

const theme = createTheme({
  colors: {
    brand: { primary: '#FF6B00' }
  }
});
```

### `useTheme()`

Access the current theme and color mode inside any component:

```tsx
import { useTheme } from '@masicn/ui';

const { theme, colorMode } = useTheme();
// theme.colors.brand.primary
// colorMode: 'light' | 'dark'
```

### Built-in Palettes

10 palettes are available out of the box. Pick one during `npx masicn init`:

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

## Tokens

Access raw design tokens via `useTokens()`:

```tsx
import { useTokens } from '@masicn/ui';

const tokens = useTokens();
// tokens.spacing[4]
// tokens.radius.md
// tokens.typography.body
// tokens.motion.duration.normal
```

| Token | Description |
|-------|-------------|
| `spacing` | Spacing scale |
| `radius` | Border radius values |
| `borders` | Border widths and styles |
| `sizes` | Size presets |
| `elevation` | Shadow/elevation levels |
| `opacity` | Opacity values |
| `layout` | Layout constants |
| `iconSizes` | Icon dimension presets |
| `typography` | Font families, sizes, line heights |
| `motion` | Animation durations and configs |
| `motionEasing` | Easing functions |

## Primitives

15 layout and base components. These are the building blocks all masicn components are composed from.

```tsx
import { Box, Stack, Row, Text, Pressable, Surface } from '@masicn/ui';
```

| Component | Description |
|-----------|-------------|
| `Box` | Base layout container |
| `Text` | Text with typography token support |
| `Stack` | Vertical flex layout |
| `Row` | Horizontal flex layout |
| `Wrap` | Wrapping flex layout |
| `Center` | Centered content |
| `Spacer` | Flexible space filler |
| `Divider` | Visual separator |
| `Surface` | Themed surface with elevation |
| `Pressable` | Interactive pressable with ripple |
| `AspectRatio` | Aspect ratio container |
| `Circle` | Circular container |
| `Square` | Square container |
| `Screen` | Full-screen container |
| `SafeAreaScreen` | Safe area aware screen |

## Hooks

```tsx
import {
  useTheme,
  useTokens,
  useReducedMotion,
  useResponsive,
  useAccessibilityProps,
  useFocusTrap,
} from '@masicn/ui';
```

| Hook | Description |
|------|-------------|
| `useTheme()` | Current theme + color mode |
| `useTokens()` | Raw design tokens |
| `useReducedMotion()` | Respects `prefers-reduced-motion` |
| `useResponsive()` | Responsive breakpoints (`Breakpoint`, `ResponsiveInfo`) |
| `useAccessibilityProps()` | Accessibility prop helpers |
| `useFocusTrap()` | Focus management for modals/dialogs |

## Utilities

```tsx
import { rgba, clamp } from '@masicn/ui';

rgba('#FF6B00', 0.5)   // → 'rgba(255, 107, 0, 0.5)'
clamp(value, 0, 100)
```

## Using with the masicn CLI

`@masicn/ui` is designed to be used alongside the masicn CLI, not standalone. The CLI copies component source files into your project — those files import primitives and tokens from this package.

```bash
# Sets up @masicn/ui and copies the design system locally
npx masicn init

# Copies Button.tsx into your project (imports from @masicn/ui)
npx masicn add button
```

See the [masicn CLI docs](https://www.npmjs.com/package/masicn) for the full workflow.

## License

MIT
