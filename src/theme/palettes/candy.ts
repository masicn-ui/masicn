/**
 * Candy palette — hot pink & vivid sky blue.
 * Light: deep magenta-pink primaries on a soft petal-white canvas with sky-blue secondary.
 * Dark: near-black purple-tinted surfaces with bubblegum-pink text and ice-blue accents.
 * Bubbly, saturated, playful — social apps, beauty, Gen-Z products, pop culture.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const c = {
    white: '#ffffff',
    black: '#000000',
    // Light backgrounds
    petalWhite: '#fdf4ff',
    palePetal: '#fae8ff',
    // Dark backgrounds
    voidPink: '#080010',
    darkVoid: '#10001e',
    deepVoid: '#180030',
    // Brand — light
    crimsonPink: '#be185d',
    hotPink: '#db2777',
    brightPink: '#ec4899',
    // Brand — dark
    bubblegum: '#f9a8d4',
    cottonCandy: '#fbcfe8',
    snowPink: '#fce7f3',
    // Secondary — sky blue
    deepSky: '#0369a1',
    skyBlue: '#0284c7',
    brightSky: '#0ea5e9',
    iceSky: '#38bdf8',
    paleSky: '#bae6fd',
    // Muted
    roseMist: '#f472b6',
    lilacMist: '#e879f9',
    // Status
    errorRed: '#dc2626',
    successGreen: '#16a34a',
    softRed: '#f87171',
    softGreen: '#4ade80',
    softYellow: '#fbbf24',
    infoPurple: '#9333ea',
} as const;

const lightCandy: Theme = {
    dark: false,
    colors: {
        background: c.petalWhite,

        surfacePrimary: c.white,
        surfaceSecondary: c.palePetal,
        surfaceTertiary: c.petalWhite,
        surfaceOverlay: c.white,

        primary: c.hotPink,
        secondary: c.skyBlue,
        tertiary: c.brightPink,
        onPrimary: c.white,
        onSecondary: c.white,
        onTertiary: c.white,
        primaryContainer: `rgba(219,39,119,${opacity.tint})`,

        textPrimary: c.crimsonPink,
        textSecondary: c.hotPink,
        textTertiary: c.brightPink,
        textDisabled: c.roseMist,
        textInverse: c.white,
        textLink: c.hotPink,

        iconPrimary: c.crimsonPink,
        iconSecondary: c.hotPink,
        iconDisabled: c.roseMist,

        borderPrimary: c.palePetal,
        borderSecondary: c.petalWhite,
        borderFocused: c.brightPink,
        separator: c.palePetal,

        inputBackground: c.white,
        inputBorder: c.palePetal,
        inputPlaceholder: c.roseMist,

        accent: c.brightSky,
        error: c.errorRed,
        success: c.successGreen,
        warning: c.softYellow,
        info: c.skyBlue,
        onError: c.white,
        onSuccess: c.white,
        onWarning: c.crimsonPink,
        onInfo: c.white,
        onAccent: c.white,

        overlay: `rgba(8,0,16,${opacity.overlayMedium})`,
        highlight: `rgba(236,72,153,${opacity.overlayLight})`,
        ripple: `rgba(8,0,16,${opacity.overlayLight})`,
        disabled: c.palePetal,

        card: c.white,
        notification: c.brightSky,
        tabBarActive: c.hotPink,
        tabBarInactive: c.roseMist,
        tabBarBackground: c.white,

        shadow: c.crimsonPink,
        skeleton: c.palePetal,
    },
};

const darkCandy: Theme = {
    dark: true,
    colors: {
        background: c.voidPink,

        surfacePrimary: c.darkVoid,
        surfaceSecondary: c.deepVoid,
        surfaceTertiary: c.voidPink,
        surfaceOverlay: c.deepVoid,

        primary: c.bubblegum,
        secondary: c.iceSky,
        tertiary: c.cottonCandy,
        onPrimary: c.voidPink,
        onSecondary: c.voidPink,
        onTertiary: c.voidPink,
        primaryContainer: `rgba(249,168,212,${opacity.tint})`,

        textPrimary: c.snowPink,
        textSecondary: c.bubblegum,
        textTertiary: c.cottonCandy,
        textDisabled: c.deepVoid,
        textInverse: c.voidPink,
        textLink: c.bubblegum,

        iconPrimary: c.snowPink,
        iconSecondary: c.bubblegum,
        iconDisabled: c.deepVoid,

        borderPrimary: c.brightPink,
        borderSecondary: c.deepVoid,
        borderFocused: c.bubblegum,
        separator: c.deepVoid,

        inputBackground: c.darkVoid,
        inputBorder: c.brightPink,
        inputPlaceholder: c.brightPink,

        accent: c.paleSky,
        error: c.softRed,
        success: c.softGreen,
        warning: c.softYellow,
        info: c.iceSky,
        onError: c.voidPink,
        onSuccess: c.voidPink,
        onWarning: c.voidPink,
        onInfo: c.voidPink,
        onAccent: c.voidPink,

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(249,168,212,${opacity.overlayLight})`,
        ripple: `rgba(253,244,255,${opacity.overlayLight})`,
        disabled: c.deepVoid,

        card: c.darkVoid,
        notification: c.iceSky,
        tabBarActive: c.snowPink,
        tabBarInactive: c.brightPink,
        tabBarBackground: c.darkVoid,

        shadow: c.white,
        skeleton: c.deepVoid,
    },
};

export const candyPalette = { light: lightCandy, dark: darkCandy };