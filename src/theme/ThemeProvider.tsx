/**
 * ThemeProvider — dynamic light/dark/system theme with React state.
 *
 * Reads the OS color scheme via `useColorScheme` and exposes `setMode` /
 * `toggleTheme` for in-app overrides. Wrap your root component with this
 * (or use `MasicnProvider` which includes it automatically).
 *
 * ```tsx
 * <ThemeProvider theme="system">
 *   <App />
 * </ThemeProvider>
 * ```
 */
import React, { useMemo, useState, useCallback } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeContext, type ThemeContextValue, type ThemeMode } from './ThemeContext';
import { lightTheme } from './light';
import { darkTheme } from './dark';
import type { ThemePair } from './createTheme';

interface ThemeProviderProps {
    children: React.ReactNode;
    /** Starting theme mode. Defaults to `'system'`. */
    theme?: ThemeMode;
    /** Custom theme pair from `createTheme()`. Overrides built-in light/dark themes. */
    themes?: ThemePair;
}

export function ThemeProvider({ children, theme: initialTheme = 'system', themes }: ThemeProviderProps) {
    const systemScheme = useColorScheme();
    const [mode, setMode] = useState<ThemeMode>(initialTheme);

    const toggleTheme = useCallback(() => {
        setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
    }, []);

    const resolvedDark = mode === 'system' ? systemScheme === 'dark' : mode === 'dark';
    const base = resolvedDark ? darkTheme : lightTheme;
    const theme = themes ? (resolvedDark ? themes.dark : themes.light) : base;

    const value = useMemo<ThemeContextValue>(
        () => ({ theme, mode, setMode, toggleTheme }),
        [theme, mode, toggleTheme],
    );

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}
