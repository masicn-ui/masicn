// Prop-driven ThemeProvider — no Zustand, no AsyncStorage dependency.

import React, { useMemo } from 'react';
import { ThemeContext, type ThemeContextValue } from './ThemeContext';
import type { Theme } from './theme';

interface StaticThemeProviderProps {
    theme: Theme;
    children: React.ReactNode;
}

/**
 * StaticThemeProvider — zero-dependency, prop-driven alternative to ThemeProvider.
 *
 * Pass a resolved Theme object directly. No Zustand store, no AsyncStorage.
 * Ideal for:
 * - Library consumers with their own state management
 * - Storybook / testing environments
 * - Server-side rendering (Expo Web / Next.js)
 * - Embedding masicn components inside a host app with its own theme system
 *
 * ```tsx
 * import { StaticThemeProvider, lightTheme } from '@masicn/ui';
 *
 * <StaticThemeProvider theme={lightTheme}>
 *   <YourApp />
 * </StaticThemeProvider>
 * ```
 *
 * For dynamic switching, manage the theme in your own state and swap the prop:
 * ```tsx
 * const [theme, setTheme] = useState(lightTheme);
 * <StaticThemeProvider theme={theme}>
 *   <Button onPress={() => setTheme(t => t.dark ? lightTheme : darkTheme)}>
 *     Toggle
 *   </Button>
 * </StaticThemeProvider>
 * ```
 *
 * Note: `setMode` and `toggleTheme` from `useTheme()` are no-ops here.
 * Drive switching through your own state instead.
 */
export function StaticThemeProvider({ theme, children }: StaticThemeProviderProps) {
    const value = useMemo<ThemeContextValue>(
        () => ({
            theme,
            mode: theme.dark ? 'dark' : 'light',
            setMode: () => { },
            toggleTheme: () => { },
        }),
        [theme],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
