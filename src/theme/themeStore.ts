// File: src/theme/themeStore.ts

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';
import type { Theme } from './theme';
import { lightTheme } from './light';
import { darkTheme } from './dark';

export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

/**
 * Zustand store for theme management with AsyncStorage persistence.
 * Theme preference persists across app restarts.
 */
export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      mode: 'system',
      setMode: (mode: ThemeMode) => set({ mode }),
      toggleTheme: () => {
        const { mode } = get();
        // Cycle: system/light -> dark -> light
        if (mode === 'dark') {
          set({ mode: 'light' });
        } else {
          set({ mode: 'dark' });
        }
      },
    }),
    {
      name: 'mashi-ui-theme', // AsyncStorage key
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

/**
 * Reconfigure the AsyncStorage key and rehydrate.
 * Call once at app startup, before any component mounts.
 *
 * ```ts
 * configureThemeStorage('my-app-theme');
 * ```
 */
export function configureThemeStorage(storageKey: string): void {
  useThemeStore.persist.setOptions({ name: storageKey });
  // eslint-disable-next-line no-void
  void useThemeStore.persist.rehydrate();
}

/**
 * Hook to get the resolved theme based on mode and system preference
 */
export function useResolvedTheme(): Theme {
  const mode = useThemeStore(state => state.mode);
  const systemScheme = useColorScheme();

  const resolvedDark =
    mode === 'system' ? systemScheme === 'dark' : mode === 'dark';

  return resolvedDark ? darkTheme : lightTheme;
}
