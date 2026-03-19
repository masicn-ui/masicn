/**
 * Opacity tokens — consistent transparency across overlays and states.
 */

export const opacity = {
    disabled: 0.4,
    subtle: 0.7,
    overlayLight: 0.2,
    overlayMedium: 0.4,
    overlayHeavy: 0.6,
    overlayDark: 0.5,
    pressed: 0.8,
    hover: 0.9,
} as const;

export type Opacity = typeof opacity;
