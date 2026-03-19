import { createContext, useContext } from 'react';
import type { Theme } from './theme';

/** The three supported theme modes. `'system'` follows the OS preference. */
export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
    /** The fully resolved Theme object for the current mode. */
    theme: Theme;
    /** The currently active mode setting (`'light'`, `'dark'`, or `'system'`). */
    mode: ThemeMode;
    /** Explicitly set the theme mode. Has no effect in StaticThemeProvider. */
    setMode: (mode: ThemeMode) => void;
    /** Toggle between `'light'` and `'dark'`. Has no effect in StaticThemeProvider. */
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * Access the current theme and controls.
 *
 * Usage:
 *   const { theme, toggleTheme } = useTheme();
 *
 * Works inside both ThemeProvider (Zustand-backed) and StaticThemeProvider.
 */
export function useTheme(): ThemeContextValue {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error('useTheme must be used within a ThemeProvider or StaticThemeProvider');
    }
    return ctx;
}
