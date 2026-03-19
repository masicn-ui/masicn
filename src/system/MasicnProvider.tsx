/**
 * MasicnProvider — root provider for the entire masicn design system.
 *
 * Composes `ThemeProvider` + a map-based portal registry. Wrap your app root
 * with this once; all masicn components will pick up the theme and portals.
 *
 * ```tsx
 * <MasicnProvider theme="system">
 *   <App />
 * </MasicnProvider>
 * ```
 *
 * To use a custom palette, pass a theme pair from `createTheme()`:
 * ```tsx
 * const themes = createTheme({ light: { colors: { primary: '#6200ee' } } });
 * <MasicnProvider themes={themes}>
 *   <App />
 * </MasicnProvider>
 * ```
 */
import React from 'react';
import { ThemeProvider } from '../theme';
import type { ThemeMode, ThemePair } from '../theme';
import { PortalHost } from './PortalHost';

/** Internal context shape used by `Masicn` to mount/update/unmount portal nodes. */
interface MasicnContextValue {
    /** Register a new portal node under `key`. */
    mount: (key: string, node: React.ReactNode) => void;
    /** Replace an existing portal node under `key`. */
    update: (key: string, node: React.ReactNode) => void;
    /** Remove the portal node registered under `key`. */
    unmount: (key: string) => void;
}

export const MasicnContext =
    React.createContext<MasicnContextValue | null>(null);

interface MasicnProviderProps {
    children: React.ReactNode;
    /** Initial theme mode. Defaults to `'system'`. */
    theme?: ThemeMode;
    /** Custom theme pair from `createTheme()`. Overrides built-in light/dark themes. */
    themes?: ThemePair;
}

export function MasicnProvider({
    children,
    theme = 'system',
    themes,
}: MasicnProviderProps) {
    // Map-based portal storage: O(1) mount/update/unmount, no array allocations.
    const portalsRef = React.useRef<Map<string, React.ReactNode>>(new Map());
    const listenersRef = React.useRef<Set<() => void>>(new Set());

    const notify = React.useCallback(() => {
        listenersRef.current.forEach(l => l());
    }, []);

    const mount = React.useCallback(
        (key: string, node: React.ReactNode) => {
            portalsRef.current.set(key, node);
            notify();
        },
        [notify],
    );

    const update = React.useCallback(
        (key: string, node: React.ReactNode) => {
            portalsRef.current.set(key, node);
            notify();
        },
        [notify],
    );

    const unmount = React.useCallback((key: string) => {
        portalsRef.current.delete(key);
        notify();
    }, [notify]);

    const subscribe = React.useCallback((listener: () => void) => {
        listenersRef.current.add(listener);
        return () => { listenersRef.current.delete(listener); };
    }, []);

    const contextValue = React.useMemo(
        () => ({ mount, update, unmount }),
        [mount, update, unmount],
    );

    return (
        <ThemeProvider theme={theme} themes={themes}>
            <MasicnContext.Provider value={contextValue}>
                {children}

                {/* Global overlay layer — rendered by its own component so that
                    portal updates only re-render this subtree, not all children. */}
                <PortalHost portalsRef={portalsRef} subscribe={subscribe} />
            </MasicnContext.Provider>
        </ThemeProvider>
    );
}
