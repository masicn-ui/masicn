/**
 * Grape Soda palette — saturated violet-purple & acid lime green.
 * Light: rich purple primaries on a soft lavender-white canvas with lime secondary.
 * Dark: near-black purple surfaces with soft violet text and acid-lime accents.
 * Loud, confident, creative — music, social, entertainment, and bold brand apps.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const c = {
    white: '#ffffff',
    black: '#000000',
    // Light backgrounds
    lavenderWhite: '#faf5ff',
    paleLavender: '#f3e8ff',
    // Dark backgrounds
    voidPurple: '#08001c',
    darkPurple: '#120030',
    deepPurple: '#1c0048',
    // Brand — light
    royalPurple: '#6d28d9',
    vivid: '#7c3aed',
    medPurple: '#8b5cf6',
    // Brand — dark
    softViolet: '#c084fc',
    paleViolet: '#d8b4fe',
    mistViolet: '#ede9fe',
    // Secondary — lime
    limeGreen: '#65a30d',
    brightLime: '#84cc16',
    acidLime: '#a3e635',
    paleLime: '#d9f99d',
    // Muted
    lilac: '#a78bfa',
    duskPurple: '#7c3aed',
    // Status
    errorRed: '#dc2626',
    successGreen: '#16a34a',
    softRed: '#f87171',
    softGreen: '#4ade80',
    softYellow: '#fbbf24',
    infoBlue: '#0284c7',
} as const;

const lightGrapeSoda: Theme = {
    dark: false,
    colors: {
        background: c.lavenderWhite,

        surfacePrimary: c.white,
        surfaceSecondary: c.paleLavender,
        surfaceTertiary: c.lavenderWhite,
        surfaceOverlay: c.white,

        primary: c.royalPurple,
        secondary: c.limeGreen,
        tertiary: c.vivid,
        onPrimary: c.white,
        onSecondary: c.white,
        onTertiary: c.white,
        primaryContainer: `rgba(109,40,217,${opacity.tint})`,

        textPrimary: c.royalPurple,
        textSecondary: c.vivid,
        textTertiary: c.medPurple,
        textDisabled: c.lilac,
        textInverse: c.white,
        textLink: c.vivid,

        iconPrimary: c.royalPurple,
        iconSecondary: c.vivid,
        iconDisabled: c.lilac,

        borderPrimary: c.paleLavender,
        borderSecondary: c.lavenderWhite,
        borderFocused: c.vivid,
        separator: c.paleLavender,

        inputBackground: c.white,
        inputBorder: c.paleLavender,
        inputPlaceholder: c.lilac,

        accent: c.brightLime,
        error: c.errorRed,
        success: c.successGreen,
        warning: c.softYellow,
        info: c.infoBlue,
        onError: c.white,
        onSuccess: c.white,
        onWarning: c.royalPurple,
        onInfo: c.white,
        onAccent: c.royalPurple,

        overlay: `rgba(8,0,28,${opacity.overlayMedium})`,
        highlight: `rgba(124,58,237,${opacity.overlayLight})`,
        ripple: `rgba(8,0,28,${opacity.overlayLight})`,
        disabled: c.paleLavender,

        card: c.white,
        notification: c.brightLime,
        tabBarActive: c.royalPurple,
        tabBarInactive: c.lilac,
        tabBarBackground: c.white,

        shadow: c.royalPurple,
        skeleton: c.paleLavender,
    },
};

const darkGrapeSoda: Theme = {
    dark: true,
    colors: {
        background: c.voidPurple,

        surfacePrimary: c.darkPurple,
        surfaceSecondary: c.deepPurple,
        surfaceTertiary: c.voidPurple,
        surfaceOverlay: c.deepPurple,

        primary: c.paleViolet,
        secondary: c.acidLime,
        tertiary: c.softViolet,
        onPrimary: c.voidPurple,
        onSecondary: c.voidPurple,
        onTertiary: c.voidPurple,
        primaryContainer: `rgba(216,180,254,${opacity.tint})`,

        textPrimary: c.mistViolet,
        textSecondary: c.paleViolet,
        textTertiary: c.softViolet,
        textDisabled: c.deepPurple,
        textInverse: c.voidPurple,
        textLink: c.paleViolet,

        iconPrimary: c.mistViolet,
        iconSecondary: c.paleViolet,
        iconDisabled: c.deepPurple,

        borderPrimary: c.medPurple,
        borderSecondary: c.deepPurple,
        borderFocused: c.paleViolet,
        separator: c.deepPurple,

        inputBackground: c.darkPurple,
        inputBorder: c.medPurple,
        inputPlaceholder: c.medPurple,

        accent: c.acidLime,
        error: c.softRed,
        success: c.softGreen,
        warning: c.softYellow,
        info: c.lilac,
        onError: c.voidPurple,
        onSuccess: c.voidPurple,
        onWarning: c.voidPurple,
        onInfo: c.voidPurple,
        onAccent: c.voidPurple,

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(216,180,254,${opacity.overlayLight})`,
        ripple: `rgba(250,245,255,${opacity.overlayLight})`,
        disabled: c.deepPurple,

        card: c.darkPurple,
        notification: c.acidLime,
        tabBarActive: c.mistViolet,
        tabBarInactive: c.medPurple,
        tabBarBackground: c.darkPurple,

        shadow: c.black,
        skeleton: c.deepPurple,
    },
};

export const grapeSodaPalette = { light: lightGrapeSoda, dark: darkGrapeSoda };