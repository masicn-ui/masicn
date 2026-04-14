/**
 * Rose palette — romantic deep roses and blush pinks.
 * Light: crimson-rose primaries on a soft blush-white background with hot-pink accents.
 * Dark: deep burgundy surfaces with petal-pink text and magenta highlights.
 * Perfect for beauty, lifestyle, dating, and fashion-forward apps.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const c = {
    white:        '#ffffff',
    black:        '#000000',
    // Light backgrounds
    blush:        '#fff0f3',
    palePink:     '#ffd6df',
    // Dark backgrounds
    deepBurgundy: '#1a0008',
    darkRose:     '#2d0010',
    midBurgundy:  '#3d0018',
    // Brand
    crimsonRose:  '#9b1942',
    hotPink:      '#c94070',
    roseQuartz:   '#e8648a',
    petalPink:    '#f4a8bc',
    // Muted
    roseLace:     '#f4c0cc',
    // Accent
    hotCoral:     '#ff6b9d',
    // Status
    errorRed:     '#b91c1c',
    forestGreen:  '#15803d',
    warningBrown: '#b45309',
    softRed:      '#f87171',
    softGreen:    '#4ade80',
    softYellow:   '#fbbf24',
} as const;

const lightRose: Theme = {
    dark: false,
    colors: {
        background: c.blush,

        surfacePrimary: c.white,
        surfaceSecondary: c.palePink,
        surfaceTertiary: c.blush,
        surfaceOverlay: c.white,

        primary: c.crimsonRose,
        secondary: c.hotPink,
        tertiary: c.roseQuartz,
        onPrimary: c.white,
        onSecondary: c.white,
        onTertiary: c.white,
        primaryContainer: `rgba(155,25,66,${opacity.tint})`,

        textPrimary: c.darkRose,
        textSecondary: c.crimsonRose,
        textTertiary: c.hotPink,
        textDisabled: c.petalPink,
        textInverse: c.white,
        textLink: c.hotPink,

        iconPrimary: c.darkRose,
        iconSecondary: c.crimsonRose,
        iconDisabled: c.petalPink,

        borderPrimary: c.roseLace,
        borderSecondary: c.palePink,
        borderFocused: c.hotPink,
        separator: c.roseLace,

        inputBackground: c.white,
        inputBorder: c.roseLace,
        inputPlaceholder: c.petalPink,

        accent: c.hotCoral,
        error: c.errorRed,
        success: c.forestGreen,
        warning: c.warningBrown,
        info: c.crimsonRose,
        onError: c.white,
        onSuccess: c.white,
        onWarning: c.white,
        onInfo: c.white,
        onAccent: c.white,

        overlay: `rgba(45,0,16,${opacity.overlayMedium})`,
        highlight: `rgba(201,64,112,${opacity.overlayLight})`,
        ripple: `rgba(45,0,16,${opacity.overlayLight})`,
        disabled: c.palePink,

        card: c.white,
        notification: c.hotCoral,
        tabBarActive: c.crimsonRose,
        tabBarInactive: c.petalPink,
        tabBarBackground: c.white,

        shadow: c.darkRose,
        skeleton: c.palePink,
    },
};

const darkRose: Theme = {
    dark: true,
    colors: {
        background: c.deepBurgundy,

        surfacePrimary: c.darkRose,
        surfaceSecondary: c.midBurgundy,
        surfaceTertiary: c.deepBurgundy,
        surfaceOverlay: c.midBurgundy,

        primary: c.petalPink,
        secondary: c.roseQuartz,
        tertiary: c.hotPink,
        onPrimary: c.deepBurgundy,
        onSecondary: c.deepBurgundy,
        onTertiary: c.white,
        primaryContainer: `rgba(244,168,188,${opacity.tint})`,

        textPrimary: c.blush,
        textSecondary: c.petalPink,
        textTertiary: c.roseQuartz,
        textDisabled: c.midBurgundy,
        textInverse: c.deepBurgundy,
        textLink: c.roseQuartz,

        iconPrimary: c.blush,
        iconSecondary: c.petalPink,
        iconDisabled: c.midBurgundy,

        borderPrimary: c.hotPink,
        borderSecondary: c.midBurgundy,
        borderFocused: c.petalPink,
        separator: c.midBurgundy,

        inputBackground: c.darkRose,
        inputBorder: c.hotPink,
        inputPlaceholder: c.hotPink,

        accent: c.hotCoral,
        error: c.softRed,
        success: c.softGreen,
        warning: c.softYellow,
        info: c.petalPink,
        onError: c.deepBurgundy,
        onSuccess: c.deepBurgundy,
        onWarning: c.deepBurgundy,
        onInfo: c.deepBurgundy,
        onAccent: c.deepBurgundy,

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(244,168,188,${opacity.overlayLight})`,
        ripple: `rgba(255,240,243,${opacity.overlayLight})`,
        disabled: c.midBurgundy,

        card: c.darkRose,
        notification: c.hotCoral,
        tabBarActive: c.blush,
        tabBarInactive: c.hotPink,
        tabBarBackground: c.darkRose,

        shadow: c.black,
        skeleton: c.midBurgundy,
    },
};

export const rosePalette = { light: lightRose, dark: darkRose };
