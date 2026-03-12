// File: src/theme/createTheme.ts

import type { Theme } from './theme';
import { lightTheme } from './light';
import { darkTheme } from './dark';

/**
 * Override shape — every key is optional so you only provide what you want to change.
 */
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Record<string, unknown> ? DeepPartial<T[K]> : T[K];
};

type ThemeOverride = DeepPartial<Theme>;

function mergeTheme(base: Theme, override: ThemeOverride): Theme {
  return {
    ...base,
    ...override,
    colors: {
      ...base.colors,
      ...(override.colors ?? {}),
    },
  };
}

export interface ThemePair {
  light: Theme;
  dark: Theme;
}

/**
 * createTheme — merge overrides onto the default light/dark themes.
 *
 * Returns a typed `{ light, dark }` pair ready to pass to ThemeProvider.
 *
 * ```ts
 * // swap brand + surface colors, keep everything else
 * const { light, dark } = createTheme({
 *   light: {
 *     colors: {
 *       primary: '#6200ee',
 *       onPrimary: '#ffffff',
 *       background: '#f5f5f5',
 *     },
 *   },
 *   dark: {
 *     colors: {
 *       primary: '#bb86fc',
 *       onPrimary: '#000000',
 *       background: '#121212',
 *     },
 *   },
 * });
 * ```
 */
export function createTheme(overrides: { light?: ThemeOverride; dark?: ThemeOverride } = {}): ThemePair {
  return {
    light: mergeTheme(lightTheme, overrides.light ?? {}),
    dark: mergeTheme(darkTheme, overrides.dark ?? {}),
  };
}
