/**
 * Ocean palette — deep teals, aqua cyans, and cool sea-blue tones.
 * Light: navy-teal primaries on a pale aqua background with electric cyan accents.
 * Dark: near-black deep-sea surfaces with bright aqua text and teal highlights.
 * Great for fintech, health, and any app that wants a calm, professional feel.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const c = {
    white: '#ffffff',
    black: '#000000',
    // Light backgrounds
    iceBlue: '#e8f4f8',
    skyMist: '#d1eaf4',
    // Dark backgrounds
    abyss: '#000d14',
    deepNavy: '#001a28',
    navySlate: '#00263d',
    // Base tone (dark text / shadow in light mode)
    deepSea: '#00202a',
    // Brand
    oceanBlue: '#005f8a',
    seaBlue: '#0096b4',
    aquaCyan: '#00c4d4',
    frostBlue: '#7ed6e8',
    // Muted
    mistAqua: '#90c4d4',
    seafoam: '#b8dce8',
    // Accents & success
    electricCyan: '#00d4e8',
    tealGreen: '#00b4a0',
    mintTeal: '#00c4a0',
    // Status
    errorRed: '#c0392b',
    coralOrange: '#e67e22',
    crimsonRed: '#e74c3c',
    goldenAmber: '#f39c12',
} as const;

const lightOcean: Theme = {
    dark: false,
    colors: {
        background: c.iceBlue,

        surfacePrimary: c.white,
        surfaceSecondary: c.skyMist,
        surfaceTertiary: c.iceBlue,
        surfaceOverlay: c.white,

        primary: c.oceanBlue,
        secondary: c.seaBlue,
        tertiary: c.aquaCyan,
        onPrimary: c.white,
        onSecondary: c.white,
        onTertiary: c.deepSea,
        primaryContainer: `rgba(0,95,138,${opacity.tint})`,

        textPrimary: c.deepSea,
        textSecondary: c.oceanBlue,
        textTertiary: c.seaBlue,
        textDisabled: c.mistAqua,
        textInverse: c.white,
        textLink: c.seaBlue,

        iconPrimary: c.deepSea,
        iconSecondary: c.oceanBlue,
        iconDisabled: c.mistAqua,

        borderPrimary: c.seafoam,
        borderSecondary: c.skyMist,
        borderFocused: c.seaBlue,
        separator: c.seafoam,

        inputBackground: c.white,
        inputBorder: c.seafoam,
        inputPlaceholder: c.mistAqua,

        accent: c.electricCyan,
        error: c.errorRed,
        success: c.tealGreen,
        warning: c.coralOrange,
        info: c.seaBlue,
        onError: c.white,
        onSuccess: c.white,
        onWarning: c.white,
        onInfo: c.white,
        onAccent: c.deepSea,

        overlay: `rgba(0,32,42,${opacity.overlayMedium})`,
        highlight: `rgba(0,150,180,${opacity.overlayLight})`,
        ripple: `rgba(0,32,42,${opacity.overlayLight})`,
        disabled: c.skyMist,

        card: c.white,
        notification: c.aquaCyan,
        tabBarActive: c.oceanBlue,
        tabBarInactive: c.mistAqua,
        tabBarBackground: c.white,

        shadow: c.deepSea,
        skeleton: c.skyMist,
    },
};

const darkOcean: Theme = {
    dark: true,
    colors: {
        background: c.abyss,

        surfacePrimary: c.deepNavy,
        surfaceSecondary: c.navySlate,
        surfaceTertiary: c.abyss,
        surfaceOverlay: c.navySlate,

        primary: c.frostBlue,
        secondary: c.aquaCyan,
        tertiary: c.seaBlue,
        onPrimary: c.abyss,
        onSecondary: c.abyss,
        onTertiary: c.white,
        primaryContainer: `rgba(126,214,232,${opacity.tint})`,

        textPrimary: c.iceBlue,
        textSecondary: c.frostBlue,
        textTertiary: c.aquaCyan,
        textDisabled: c.navySlate,
        textInverse: c.abyss,
        textLink: c.aquaCyan,

        iconPrimary: c.iceBlue,
        iconSecondary: c.frostBlue,
        iconDisabled: c.navySlate,

        borderPrimary: c.seaBlue,
        borderSecondary: c.navySlate,
        borderFocused: c.aquaCyan,
        separator: c.navySlate,

        inputBackground: c.deepNavy,
        inputBorder: c.seaBlue,
        inputPlaceholder: c.seaBlue,

        accent: c.electricCyan,
        error: c.crimsonRed,
        success: c.mintTeal,
        warning: c.goldenAmber,
        info: c.seaBlue,
        onError: c.white,
        onSuccess: c.abyss,
        onWarning: c.abyss,
        onInfo: c.white,
        onAccent: c.abyss,

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(126,214,232,${opacity.overlayLight})`,
        ripple: `rgba(232,244,248,${opacity.overlayLight})`,
        disabled: c.navySlate,

        card: c.deepNavy,
        notification: c.aquaCyan,
        tabBarActive: c.iceBlue,
        tabBarInactive: c.seaBlue,
        tabBarBackground: c.deepNavy,

        shadow: c.white,
        skeleton: c.navySlate,
    },
};

export const oceanPalette = { light: lightOcean, dark: darkOcean };
