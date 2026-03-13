// File: src/index.ts

// ─── System ───────────────────────────────────────
export { MasicnProvider, Masicn } from './system';

// ─── Theme ────────────────────────────────────────
export {
  useTheme,
  ThemeProvider,
  StaticThemeProvider,
  createTheme,
  lightTheme,
  darkTheme,
} from './theme';

export type { Theme, ThemeMode, ThemePair } from './theme';

// ─── Tokens ───────────────────────────────────────
export {
  palette,
  spacing,
  radius,
  borders,
  sizes,
  elevation,
  opacity,
  layout,
  iconSizes,
  typography,
  fonts,
  fontFamilies,
  MasiTokens,
} from './tokens';

export type { Spacing, Radius, Borders, Elevation, Layout, Opacity, IconSizes, Typography, TypographyVariant } from './tokens';

// ─── Animation ────────────────────────────────────
export { motion, motionEasing } from './animation';

export type { Motion, MotionEasing } from './animation';

// ─── Primitives ───────────────────────────────────
export { Box, Text, Stack, Row, Spacer, Divider, Screen, SafeAreaScreen } from './primitives';

// ─── Hooks ────────────────────────────────────────
export {
  useAccessibilityProps,
  useFocusTrap,
  useReducedMotion,
  useResponsive,
  useTokens,
} from './hooks';

export type { Breakpoint, ResponsiveInfo } from './hooks';

// ─── Utils ────────────────────────────────────────
export { rgba, clamp } from './utils';
