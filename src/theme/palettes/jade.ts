/**
 * Jade palette — premium deep emerald & warm gold.
 * Light: dark forest-green primaries on a crisp jade-white canvas with gold secondary.
 * Dark: near-black void-green surfaces with mint-green text and golden accents.
 * Luxury, premium fintech, jewellery, editorial, and high-end lifestyle apps.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const c = {
    white: '#ffffff',
    black: '#000000',
    // Light backgrounds
    jadeWhite: '#ecfdf5',
    paleJade: '#d1fae5',
    // Dark backgrounds
    voidJade: '#001208',
    darkJade: '#002e14',
    deepJade: '#00401c',
    // Brand — light
    forestEmerald: '#065f46',
    deepEmerald: '#047857',
    midEmerald: '#059669',
    // Brand — dark
    mintGreen: '#6ee7b7',
    pearlMint: '#a7f3d0',
    iceGreen: '#d1fae5',
    // Secondary — gold
    deepGold: '#92400e',
    warmGold: '#b45309',
    brightGold: '#d97706',
    sunGold: '#fcd34d',
    paleGold: '#fde68a',
    // Muted
    sageGreen: '#34d399',
    mistGreen: '#6ee7b7',
    // Status
    errorRed: '#dc2626',
    successGreen: '#16a34a',
    softRed: '#f87171',
    softGreen: '#4ade80',
    softYellow: '#fbbf24',
    infoTeal: '#0d9488',
} as const;

const lightJade: Theme = {
    dark: false,
    colors: {
        background: c.jadeWhite,

        surfacePrimary: c.white,
        surfaceSecondary: c.paleJade,
        surfaceTertiary: c.jadeWhite,
        surfaceOverlay: c.white,

        primary: c.forestEmerald,
        secondary: c.warmGold,
        tertiary: c.deepEmerald,
        onPrimary: c.white,
        onSecondary: c.white,
        onTertiary: c.white,
        primaryContainer: `rgba(6,95,70,${opacity.tint})`,

        textPrimary: c.forestEmerald,
        textSecondary: c.deepEmerald,
        textTertiary: c.midEmerald,
        textDisabled: c.sageGreen,
        textInverse: c.white,
        textLink: c.deepEmerald,

        iconPrimary: c.forestEmerald,
        iconSecondary: c.deepEmerald,
        iconDisabled: c.sageGreen,

        borderPrimary: c.paleJade,
        borderSecondary: c.jadeWhite,
        borderFocused: c.midEmerald,
        separator: c.paleJade,

        inputBackground: c.white,
        inputBorder: c.paleJade,
        inputPlaceholder: c.sageGreen,

        accent: c.brightGold,
        error: c.errorRed,
        success: c.successGreen,
        warning: c.warmGold,
        info: c.infoTeal,
        onError: c.white,
        onSuccess: c.white,
        onWarning: c.white,
        onInfo: c.white,
        onAccent: c.forestEmerald,

        overlay: `rgba(0,18,8,${opacity.overlayMedium})`,
        highlight: `rgba(5,150,105,${opacity.overlayLight})`,
        ripple: `rgba(0,18,8,${opacity.overlayLight})`,
        disabled: c.paleJade,

        card: c.white,
        notification: c.brightGold,
        tabBarActive: c.forestEmerald,
        tabBarInactive: c.sageGreen,
        tabBarBackground: c.white,

        shadow: c.forestEmerald,
        skeleton: c.paleJade,
    },
};

const darkJade: Theme = {
    dark: true,
    colors: {
        background: c.voidJade,

        surfacePrimary: c.darkJade,
        surfaceSecondary: c.deepJade,
        surfaceTertiary: c.voidJade,
        surfaceOverlay: c.deepJade,

        primary: c.mintGreen,
        secondary: c.sunGold,
        tertiary: c.sageGreen,
        onPrimary: c.voidJade,
        onSecondary: c.voidJade,
        onTertiary: c.voidJade,
        primaryContainer: `rgba(110,231,183,${opacity.tint})`,

        textPrimary: c.iceGreen,
        textSecondary: c.mintGreen,
        textTertiary: c.sageGreen,
        textDisabled: c.deepJade,
        textInverse: c.voidJade,
        textLink: c.mintGreen,

        iconPrimary: c.iceGreen,
        iconSecondary: c.mintGreen,
        iconDisabled: c.deepJade,

        borderPrimary: c.midEmerald,
        borderSecondary: c.deepJade,
        borderFocused: c.mintGreen,
        separator: c.deepJade,

        inputBackground: c.darkJade,
        inputBorder: c.midEmerald,
        inputPlaceholder: c.midEmerald,

        accent: c.paleGold,
        error: c.softRed,
        success: c.softGreen,
        warning: c.softYellow,
        info: c.pearlMint,
        onError: c.voidJade,
        onSuccess: c.voidJade,
        onWarning: c.voidJade,
        onInfo: c.voidJade,
        onAccent: c.voidJade,

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(110,231,183,${opacity.overlayLight})`,
        ripple: `rgba(236,253,245,${opacity.overlayLight})`,
        disabled: c.deepJade,

        card: c.darkJade,
        notification: c.sunGold,
        tabBarActive: c.iceGreen,
        tabBarInactive: c.midEmerald,
        tabBarBackground: c.darkJade,

        shadow: c.black,
        skeleton: c.deepJade,
    },
};

export const jadePalette = { light: lightJade, dark: darkJade };