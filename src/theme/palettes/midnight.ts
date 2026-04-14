/**
 * Midnight palette — deep indigo-violet hues with cool lavender accents.
 * Light: rich midnight-blue primaries on a pale periwinkle background.
 * Dark: near-black navy surfaces with soft lavender text and violet highlights.
 * Perfect for productivity tools, developer apps, and dark-first interfaces.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const c = {
    white:         '#ffffff',
    black:         '#000000',
    // Light backgrounds
    periwinkle:    '#eef0ff',
    lavenderMist:  '#dde0ff',
    // Dark backgrounds
    deepMidnight:  '#04020f',
    darkIndigo:    '#0a0520',
    midIndigo:     '#140d30',
    // Brand
    royalIndigo:   '#2d0fa8',
    indigoBlue:    '#4b35c4',
    softViolet:    '#6c56e0',
    lavender:      '#a594ff',
    purple:        '#7c5cff',
    paleLavender:  '#c4b5ff',
    // Muted
    blueGray:      '#b0b8f0',
    mistBlue:      '#c8ccf8',
    // Status
    errorRed:      '#dc2626',
    successGreen:  '#16a34a',
    warningAmber:  '#d97706',
    softRed:       '#f87171',
    softGreen:     '#4ade80',
    softYellow:    '#fbbf24',
} as const;

const lightMidnight: Theme = {
    dark: false,
    colors: {
        background: c.periwinkle,

        surfacePrimary: c.white,
        surfaceSecondary: c.lavenderMist,
        surfaceTertiary: c.periwinkle,
        surfaceOverlay: c.white,

        primary: c.royalIndigo,
        secondary: c.indigoBlue,
        tertiary: c.softViolet,
        onPrimary: c.white,
        onSecondary: c.white,
        onTertiary: c.white,
        primaryContainer: `rgba(45,15,168,${opacity.tint})`,

        textPrimary: c.darkIndigo,
        textSecondary: c.royalIndigo,
        textTertiary: c.indigoBlue,
        textDisabled: c.blueGray,
        textInverse: c.white,
        textLink: c.royalIndigo,

        iconPrimary: c.darkIndigo,
        iconSecondary: c.royalIndigo,
        iconDisabled: c.blueGray,

        borderPrimary: c.mistBlue,
        borderSecondary: c.lavenderMist,
        borderFocused: c.indigoBlue,
        separator: c.mistBlue,

        inputBackground: c.white,
        inputBorder: c.mistBlue,
        inputPlaceholder: c.blueGray,

        accent: c.purple,
        error: c.errorRed,
        success: c.successGreen,
        warning: c.warningAmber,
        info: c.royalIndigo,
        onError: c.white,
        onSuccess: c.white,
        onWarning: c.white,
        onInfo: c.white,
        onAccent: c.white,

        overlay: `rgba(10,5,32,${opacity.overlayMedium})`,
        highlight: `rgba(75,53,196,${opacity.overlayLight})`,
        ripple: `rgba(10,5,32,${opacity.overlayLight})`,
        disabled: c.lavenderMist,

        card: c.white,
        notification: c.purple,
        tabBarActive: c.royalIndigo,
        tabBarInactive: c.blueGray,
        tabBarBackground: c.white,

        shadow: c.darkIndigo,
        skeleton: c.lavenderMist,
    },
};

const darkMidnight: Theme = {
    dark: true,
    colors: {
        background: c.deepMidnight,

        surfacePrimary: c.darkIndigo,
        surfaceSecondary: c.midIndigo,
        surfaceTertiary: c.deepMidnight,
        surfaceOverlay: c.midIndigo,

        primary: c.lavender,
        secondary: c.purple,
        tertiary: c.indigoBlue,
        onPrimary: c.deepMidnight,
        onSecondary: c.deepMidnight,
        onTertiary: c.white,
        primaryContainer: `rgba(165,148,255,${opacity.tint})`,

        textPrimary: c.periwinkle,
        textSecondary: c.lavender,
        textTertiary: c.purple,
        textDisabled: c.midIndigo,
        textInverse: c.deepMidnight,
        textLink: c.lavender,

        iconPrimary: c.periwinkle,
        iconSecondary: c.lavender,
        iconDisabled: c.midIndigo,

        borderPrimary: c.indigoBlue,
        borderSecondary: c.midIndigo,
        borderFocused: c.lavender,
        separator: c.midIndigo,

        inputBackground: c.darkIndigo,
        inputBorder: c.indigoBlue,
        inputPlaceholder: c.indigoBlue,

        accent: c.paleLavender,
        error: c.softRed,
        success: c.softGreen,
        warning: c.softYellow,
        info: c.lavender,
        onError: c.deepMidnight,
        onSuccess: c.deepMidnight,
        onWarning: c.deepMidnight,
        onInfo: c.deepMidnight,
        onAccent: c.deepMidnight,

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(165,148,255,${opacity.overlayLight})`,
        ripple: `rgba(238,240,255,${opacity.overlayLight})`,
        disabled: c.midIndigo,

        card: c.darkIndigo,
        notification: c.purple,
        tabBarActive: c.periwinkle,
        tabBarInactive: c.indigoBlue,
        tabBarBackground: c.darkIndigo,

        shadow: c.black,
        skeleton: c.midIndigo,
    },
};

export const midnightPalette = { light: lightMidnight, dark: darkMidnight };
