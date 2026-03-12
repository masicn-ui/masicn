// File: tsup.config.ts

import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-native',
    'react-native-reanimated',
    'react-native-safe-area-context',
    'zustand',
    '@react-native-async-storage/async-storage',
  ],
});
