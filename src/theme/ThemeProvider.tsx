// File: src/theme/ThemeProvider.tsx

// Zustand-backed ThemeProvider — persists theme preference to AsyncStorage.

import React, { useMemo } from 'react';
import { ThemeContext, type ThemeContextValue } from './ThemeContext';
import { useThemeStore, useResolvedTheme, type ThemeMode } from './themeStore';
import type { ThemePair } from './createTheme';

interface ThemeProviderProps {
    children: React.ReactNode;
    /** Initial theme mode. Defaults to 'system'. */
    theme?: ThemeMode;
    /** Custom theme pair from createTheme(). Overrides built-in light/dark themes. */
    themes?: ThemePair;
}

/**
 * ThemeProvider — Zustand-backed, persists theme preference to AsyncStorage.
 *
 * Use this at the root of your app (already included inside MasicnProvider).
 * Theme preference survives app restarts.
 *
 * @param theme - Optional initial mode ('light' | 'dark' | 'system'). Defaults to 'system'.
 * @param themes - Optional custom theme pair from createTheme(). Overrides built-in themes.
 */
export function ThemeProvider({ children, theme: initialTheme = 'system', themes }: ThemeProviderProps) {
    const mode = useThemeStore(state => state.mode);
    const setMode = useThemeStore(state => state.setMode);
    const toggleTheme = useThemeStore(state => state.toggleTheme);
    const resolvedTheme = useResolvedTheme();

    const initializedRef = React.useRef(false);
    React.useEffect(() => {
        if (!initializedRef.current) {
            initializedRef.current = true;
            if (initialTheme && mode !== initialTheme) {
                setMode(initialTheme);
            }
        }
    }, [initialTheme, mode, setMode]);

    const theme = themes
        ? (resolvedTheme.dark ? themes.dark : themes.light)
        : resolvedTheme;

    const value = useMemo<ThemeContextValue>(
        () => ({ theme, mode, setMode, toggleTheme }),
        [theme, mode, setMode, toggleTheme],
    );

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}
