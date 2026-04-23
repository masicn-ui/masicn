/**
 * Sunset palette — warm burnt orange and deep violet contrast.
 * Light: terracotta-orange primaries on a warm cream background with purple secondary.
 * Dark: near-black purple-tinted surfaces with coral-orange and lavender accents.
 * Vibrant and bold — great for entertainment, social, and creative apps.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const c = {
    white: '#ffffff',
    black: '#000000',
    // Light backgrounds
    cream: '#fff8f0',
    peach: '#fde8d0',
    // Dark backgrounds
    deepViolet: '#12001e',
    midViolet: '#1e0032',
    darkIndigo: '#2a0048',
    // Base tone (dark text / shadow in light mode)
    inkBrown: '#1a0a00',
    // Brand
    burntOrange: '#c0440a',
    violet: '#8b2fc9',
    terracotta: '#e85d24',
    coralOrange: '#ff9060',
    lavender: '#c88aff',
    // Muted
    blush: '#e8b89a',
    softPeach: '#f0c8a0',
    // Accents
    sunsetOrange: '#ff8c00',
    warmAmber: '#ffaa40',
    // Light text on dark
    warmWhite: '#fff0e8',
    // Status
    errorRed: '#b91c1c',
    successGreen: '#16a34a',
    warningAmber: '#d97706',
    softRed: '#f87171',
    softGreen: '#4ade80',
    softYellow: '#fbbf24',
} as const;

const lightSunset: Theme = {
    dark: false,
    colors: {
        background: c.cream,

        surfacePrimary: c.white,
        surfaceSecondary: c.peach,
        surfaceTertiary: c.cream,
        surfaceOverlay: c.white,

        primary: c.burntOrange,
        secondary: c.violet,
        tertiary: c.terracotta,
        onPrimary: c.white,
        onSecondary: c.white,
        onTertiary: c.white,
        primaryContainer: `rgba(192,68,10,${opacity.tint})`,

        textPrimary: c.inkBrown,
        textSecondary: c.burntOrange,
        textTertiary: c.violet,
        textDisabled: c.blush,
        textInverse: c.white,
        textLink: c.terracotta,

        iconPrimary: c.inkBrown,
        iconSecondary: c.burntOrange,
        iconDisabled: c.blush,

        borderPrimary: c.softPeach,
        borderSecondary: c.peach,
        borderFocused: c.terracotta,
        separator: c.softPeach,

        inputBackground: c.white,
        inputBorder: c.softPeach,
        inputPlaceholder: c.blush,

        accent: c.sunsetOrange,
        error: c.errorRed,
        success: c.successGreen,
        warning: c.warningAmber,
        info: c.violet,
        onError: c.white,
        onSuccess: c.white,
        onWarning: c.inkBrown,
        onInfo: c.white,
        onAccent: c.inkBrown,

        overlay: `rgba(26,10,0,${opacity.overlayMedium})`,
        highlight: `rgba(232,93,36,${opacity.overlayLight})`,
        ripple: `rgba(26,10,0,${opacity.overlayLight})`,
        disabled: c.peach,

        card: c.white,
        notification: c.sunsetOrange,
        tabBarActive: c.burntOrange,
        tabBarInactive: c.blush,
        tabBarBackground: c.white,

        shadow: c.inkBrown,
        skeleton: c.peach,
    },
};

const darkSunset: Theme = {
    dark: true,
    colors: {
        background: c.deepViolet,

        surfacePrimary: c.midViolet,
        surfaceSecondary: c.darkIndigo,
        surfaceTertiary: c.deepViolet,
        surfaceOverlay: c.darkIndigo,

        primary: c.coralOrange,
        secondary: c.lavender,
        tertiary: c.terracotta,
        onPrimary: c.deepViolet,
        onSecondary: c.deepViolet,
        onTertiary: c.white,
        primaryContainer: `rgba(255,144,96,${opacity.tint})`,

        textPrimary: c.warmWhite,
        textSecondary: c.coralOrange,
        textTertiary: c.lavender,
        textDisabled: c.darkIndigo,
        textInverse: c.deepViolet,
        textLink: c.coralOrange,

        iconPrimary: c.warmWhite,
        iconSecondary: c.coralOrange,
        iconDisabled: c.darkIndigo,

        borderPrimary: c.terracotta,
        borderSecondary: c.darkIndigo,
        borderFocused: c.coralOrange,
        separator: c.darkIndigo,

        inputBackground: c.midViolet,
        inputBorder: c.terracotta,
        inputPlaceholder: c.terracotta,

        accent: c.warmAmber,
        error: c.softRed,
        success: c.softGreen,
        warning: c.softYellow,
        info: c.lavender,
        onError: c.deepViolet,
        onSuccess: c.deepViolet,
        onWarning: c.deepViolet,
        onInfo: c.deepViolet,
        onAccent: c.deepViolet,

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(255,144,96,${opacity.overlayLight})`,
        ripple: `rgba(255,240,232,${opacity.overlayLight})`,
        disabled: c.darkIndigo,

        card: c.midViolet,
        notification: c.sunsetOrange,
        tabBarActive: c.warmWhite,
        tabBarInactive: c.terracotta,
        tabBarBackground: c.midViolet,

        shadow: c.white,
        skeleton: c.darkIndigo,
    },
};

export const sunsetPalette = { light: lightSunset, dark: darkSunset };
