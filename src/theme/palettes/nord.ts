/**
 * Nord palette — arctic blue-grays, cool whites, and frost accents.
 * Based on the popular Nord color scheme (nordtheme.com).
 * Light: dark slate-blue primaries on an icy Polar Night–inspired canvas.
 * Dark: true Nord dark Polar Night surfaces with Snow Storm text.
 * Excellent for developer tools, code editors, and cool-toned productivity apps.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

// Official Nord color names — https://www.nordtheme.com/docs/colors-and-palettes
const c = {
    white: '#ffffff',
    // Polar Night (dark surfaces)
    nord0: '#2e3440',
    nord1: '#3b4252',
    nord2: '#434c5e',
    nord3: '#4c566a',
    // Snow Storm (light backgrounds / text)
    nord4: '#d8dee9',
    nord5: '#e5e9f0',
    nord6: '#eceff4',
    // Frost (brand / interactive)
    nord7: '#8fbcbb',
    nord8: '#88c0d0',
    nord9: '#81a1c1',
    nord10: '#5e81ac',
    // Aurora (status)
    nord11: '#bf616a',  // red
    nord13: '#ebcb8b',  // yellow
    nord14: '#a3be8c',  // green
    // Muted
    softBlue: '#adbac7',
} as const;

const lightNord: Theme = {
    dark: false,
    colors: {
        background: c.nord6,

        surfacePrimary: c.white,
        surfaceSecondary: c.nord5,
        surfaceTertiary: c.nord6,
        surfaceOverlay: c.white,

        primary: c.nord0,
        secondary: c.nord1,
        tertiary: c.nord10,
        onPrimary: c.nord6,
        onSecondary: c.nord6,
        onTertiary: c.white,
        primaryContainer: `rgba(46,52,64,${opacity.tint})`,

        textPrimary: c.nord0,
        textSecondary: c.nord1,
        textTertiary: c.nord3,
        textDisabled: c.softBlue,
        textInverse: c.nord6,
        textLink: c.nord10,

        iconPrimary: c.nord0,
        iconSecondary: c.nord3,
        iconDisabled: c.softBlue,

        borderPrimary: c.nord4,
        borderSecondary: c.nord5,
        borderFocused: c.nord10,
        separator: c.nord4,

        inputBackground: c.white,
        inputBorder: c.nord4,
        inputPlaceholder: c.softBlue,

        accent: c.nord8,
        error: c.nord11,
        success: c.nord14,
        warning: c.nord13,
        info: c.nord10,
        onError: c.white,
        onSuccess: c.nord0,
        onWarning: c.nord0,
        onInfo: c.white,
        onAccent: c.nord0,

        overlay: `rgba(46,52,64,${opacity.overlayMedium})`,
        highlight: `rgba(136,192,208,${opacity.overlayLight})`,
        ripple: `rgba(46,52,64,${opacity.overlayLight})`,
        disabled: c.nord5,

        card: c.white,
        notification: c.nord8,
        tabBarActive: c.nord0,
        tabBarInactive: c.softBlue,
        tabBarBackground: c.white,

        shadow: c.nord0,
        skeleton: c.nord5,
    },
};

const darkNord: Theme = {
    dark: true,
    colors: {
        background: c.nord0,

        surfacePrimary: c.nord1,
        surfaceSecondary: c.nord2,
        surfaceTertiary: c.nord0,
        surfaceOverlay: c.nord2,

        primary: c.nord8,
        secondary: c.nord9,
        tertiary: c.nord10,
        onPrimary: c.nord0,
        onSecondary: c.nord0,
        onTertiary: c.nord6,
        primaryContainer: `rgba(136,192,208,${opacity.tint})`,

        textPrimary: c.nord6,
        textSecondary: c.nord5,
        textTertiary: c.nord4,
        textDisabled: c.nord2,
        textInverse: c.nord0,
        textLink: c.nord9,

        iconPrimary: c.nord6,
        iconSecondary: c.nord4,
        iconDisabled: c.nord2,

        borderPrimary: c.nord3,
        borderSecondary: c.nord2,
        borderFocused: c.nord8,
        separator: c.nord2,

        inputBackground: c.nord1,
        inputBorder: c.nord3,
        inputPlaceholder: c.nord3,

        accent: c.nord7,
        error: c.nord11,
        success: c.nord14,
        warning: c.nord13,
        info: c.nord9,
        onError: c.nord6,
        onSuccess: c.nord0,
        onWarning: c.nord0,
        onInfo: c.nord0,
        onAccent: c.nord0,

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(136,192,208,${opacity.overlayLight})`,
        ripple: `rgba(236,239,244,${opacity.overlayLight})`,
        disabled: c.nord2,

        card: c.nord1,
        notification: c.nord8,
        tabBarActive: c.nord6,
        tabBarInactive: c.nord3,
        tabBarBackground: c.nord1,

        shadow: c.white,
        skeleton: c.nord2,
    },
};

export const nordPalette = { light: lightNord, dark: darkNord };
