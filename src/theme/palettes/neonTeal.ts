/**
 * Neon Teal palette — electric teal & vivid violet on near-black.
 * Light: deep teal primaries on a fresh aqua-tinted canvas with violet secondary.
 * Dark: true black surfaces with neon #00f5d4 teal and soft violet accents.
 * Perfect for fintech dashboards, crypto, dev tools, and dark-native UIs.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const c = {
    white: '#ffffff',
    black: '#000000',
    // Light backgrounds
    aquaWhite: '#f0fdfb',
    paleTeal: '#ccfbf1',
    // Dark backgrounds
    voidTeal: '#030f0e',
    darkAbyss: '#071a18',
    deepAbyss: '#0d2420',
    // Brand — light
    deepTeal: '#0f766e',
    midTeal: '#0d9488',
    brightTeal: '#14b8a6',
    // Brand — dark / neon
    neonTeal: '#00f5d4',
    glowTeal: '#00c9a7',
    softTeal: '#5eead4',
    // Secondary — violet
    deepViolet: '#6d28d9',
    midViolet: '#7c3aed',
    softViolet: '#a78bfa',
    paleLavender: '#ddd6fe',
    // Muted
    mistTeal: '#99f6e4',
    slateTeal: '#2dd4bf',
    // Status
    errorRed: '#dc2626',
    successGreen: '#16a34a',
    softRed: '#f87171',
    softGreen: '#4ade80',
    softYellow: '#fbbf24',
    infoBlue: '#0284c7',
} as const;

const lightNeonTeal: Theme = {
    dark: false,
    colors: {
        background: c.aquaWhite,

        surfacePrimary: c.white,
        surfaceSecondary: c.paleTeal,
        surfaceTertiary: c.aquaWhite,
        surfaceOverlay: c.white,

        primary: c.deepTeal,
        secondary: c.deepViolet,
        tertiary: c.midTeal,
        onPrimary: c.white,
        onSecondary: c.white,
        onTertiary: c.white,
        primaryContainer: `rgba(15,118,110,${opacity.tint})`,

        textPrimary: c.deepTeal,
        textSecondary: c.midTeal,
        textTertiary: c.brightTeal,
        textDisabled: c.mistTeal,
        textInverse: c.white,
        textLink: c.midTeal,

        iconPrimary: c.deepTeal,
        iconSecondary: c.midTeal,
        iconDisabled: c.mistTeal,

        borderPrimary: c.paleTeal,
        borderSecondary: c.aquaWhite,
        borderFocused: c.midTeal,
        separator: c.paleTeal,

        inputBackground: c.white,
        inputBorder: c.paleTeal,
        inputPlaceholder: c.mistTeal,

        accent: c.midViolet,
        error: c.errorRed,
        success: c.successGreen,
        warning: c.softYellow,
        info: c.infoBlue,
        onError: c.white,
        onSuccess: c.white,
        onWarning: c.deepTeal,
        onInfo: c.white,
        onAccent: c.white,

        overlay: `rgba(3,15,14,${opacity.overlayMedium})`,
        highlight: `rgba(13,148,136,${opacity.overlayLight})`,
        ripple: `rgba(3,15,14,${opacity.overlayLight})`,
        disabled: c.paleTeal,

        card: c.white,
        notification: c.midViolet,
        tabBarActive: c.deepTeal,
        tabBarInactive: c.mistTeal,
        tabBarBackground: c.white,

        shadow: c.deepTeal,
        skeleton: c.paleTeal,
    },
};

const darkNeonTeal: Theme = {
    dark: true,
    colors: {
        background: c.voidTeal,

        surfacePrimary: c.darkAbyss,
        surfaceSecondary: c.deepAbyss,
        surfaceTertiary: c.voidTeal,
        surfaceOverlay: c.deepAbyss,

        primary: c.neonTeal,
        secondary: c.softViolet,
        tertiary: c.glowTeal,
        onPrimary: c.voidTeal,
        onSecondary: c.voidTeal,
        onTertiary: c.voidTeal,
        primaryContainer: `rgba(0,245,212,${opacity.tint})`,

        textPrimary: c.aquaWhite,
        textSecondary: c.neonTeal,
        textTertiary: c.softViolet,
        textDisabled: c.deepAbyss,
        textInverse: c.voidTeal,
        textLink: c.neonTeal,

        iconPrimary: c.aquaWhite,
        iconSecondary: c.neonTeal,
        iconDisabled: c.deepAbyss,

        borderPrimary: c.glowTeal,
        borderSecondary: c.deepAbyss,
        borderFocused: c.neonTeal,
        separator: c.deepAbyss,

        inputBackground: c.darkAbyss,
        inputBorder: c.glowTeal,
        inputPlaceholder: c.glowTeal,

        accent: c.paleLavender,
        error: c.softRed,
        success: c.softGreen,
        warning: c.softYellow,
        info: c.softViolet,
        onError: c.voidTeal,
        onSuccess: c.voidTeal,
        onWarning: c.voidTeal,
        onInfo: c.voidTeal,
        onAccent: c.voidTeal,

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(0,245,212,${opacity.overlayLight})`,
        ripple: `rgba(240,253,251,${opacity.overlayLight})`,
        disabled: c.deepAbyss,

        card: c.darkAbyss,
        notification: c.neonTeal,
        tabBarActive: c.aquaWhite,
        tabBarInactive: c.glowTeal,
        tabBarBackground: c.darkAbyss,

        shadow: c.white,
        skeleton: c.deepAbyss,
    },
};

export const neonTealPalette = { light: lightNeonTeal, dark: darkNeonTeal };