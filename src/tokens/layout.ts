// File: src/tokens/layout.ts

/**
 * Layout tokens — responsive constraints for mobile, tablet, foldables.
 */

export const layout = {
    /**
     * Horizontal screen padding standard.
     */
    screenPadding: 16,

    /**
     * Max readable width for content.
     * Prevents giant line lengths on tablets.
     */
    contentMaxWidth: 720,

    /**
     * Breakpoints — useful for responsive RN.
     */
    breakpoints: {
        phone: 0,
        tablet: 768,
        largeTablet: 1024,
    },

    /**
     * Safe tap target guidelines.
     */
    minTouchTarget: 40,
    comfortableTouchTarget: 48,

    /**
     * Overlay / modal constraints.
     * Keeps modals from stretching edge-to-edge on wide tablets.
     */
    overlayMaxWidth: {
        narrow: 480,
        medium: 560,
    },
    overlayMaxHeight: 400,

    /**
     * Side-sheet max width — prevents full-width sheets on tablets.
     */
    sideSheetMaxWidth: 400,

    /**
     * Z-index scale — use these instead of raw numbers.
     */
    zIndex: {
        base: 0,
        dropdown: 10,
        sticky: 20,
        overlay: 30,
        modal: 40,
        toast: 50,
    },
} as const;

export type Layout = typeof layout;
