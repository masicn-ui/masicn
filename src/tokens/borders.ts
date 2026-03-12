// File: src/tokens/borders.ts

import { StyleSheet } from 'react-native';

/**
 * Border width tokens
 * Consistent border widths for components
 */

export const borders = {
  none: 0,
  /** Platform hairline (0.5px on retina, 1px elsewhere) */
  hairline: StyleSheet.hairlineWidth,
  thin: 1,
  medium: 2,
  thick: 4,
} as const;

export type Borders = typeof borders;
