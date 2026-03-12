// File: src/tokens/iconSizes.ts

/**
 * Semantic icon sizes — maps intent instead of raw numbers.
 */

export const iconSizes = {
    decorative: 16,
    action: 20,
    nav: 22,
    default: 24,
    large: 32,
    hero: 48,
} as const;

export type IconSizes = typeof iconSizes;
