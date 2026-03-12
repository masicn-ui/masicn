// File: src/tokens/spacing.ts

/**
 * Spacing scale — 4pt base grid.
 * Use these tokens for padding, margin, and gap values.
 */

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,

  // Negative counterparts — for breakout effects and overlap layouts.
  negXxs: -2,
  negXs: -4,
  negSm: -8,
  negMd: -12,
  negLg: -16,
  negXl: -24,
  negXxl: -32,
  negXxxl: -48,
} as const;

export type Spacing = typeof spacing;
