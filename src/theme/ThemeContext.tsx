// File: src/masicn/theme/ThemeContext.tsx
// Shared theme context and hook — consumed by both ThemeProvider and StaticThemeProvider.

import { createContext, useContext } from 'react';
import type { Theme } from './theme';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeContextValue {
    theme: Theme;
    mode: ThemeMode;
    setMode: (mode: ThemeMode) => void;
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
