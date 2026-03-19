/**
 * Midnight palette — deep indigo-violet hues with cool lavender accents.
 * Light: rich midnight-blue primaries on a pale periwinkle background.
 * Dark: near-black navy surfaces with soft lavender text and violet highlights.
 * Perfect for productivity tools, developer apps, and dark-first interfaces.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const lightMidnight: Theme = {
    dark: false,
    colors: {
        background: '#eef0ff',

        surfacePrimary: '#ffffff',
        surfaceSecondary: '#dde0ff',
        surfaceTertiary: '#eef0ff',

        primary: '#2d0fa8',
        secondary: '#4b35c4',
        tertiary: '#6c56e0',
        onPrimary: '#ffffff',
        onSecondary: '#ffffff',
        onTertiary: '#ffffff',

        textPrimary: '#0a0520',
        textSecondary: '#2d0fa8',
        textTertiary: '#4b35c4',
        textDisabled: '#b0b8f0',
        textInverse: '#ffffff',

        iconPrimary: '#0a0520',
        iconSecondary: '#2d0fa8',
        iconDisabled: '#b0b8f0',

        borderPrimary: '#c8ccf8',
        borderSecondary: '#dde0ff',
        borderFocused: '#4b35c4',
        separator: '#c8ccf8',

        inputBackground: '#ffffff',
        inputBorder: '#c8ccf8',
        inputPlaceholder: '#b0b8f0',

        accent: '#7c5cff',
        error: '#dc2626',
        success: '#16a34a',
        warning: '#d97706',
        info: '#2d0fa8',
        onError: '#ffffff',
        onSuccess: '#ffffff',
        onWarning: '#ffffff',
        onInfo: '#ffffff',

        overlay: `rgba(10,5,32,${opacity.overlayMedium})`,
        highlight: `rgba(75,53,196,${opacity.overlayLight})`,
        ripple: `rgba(10,5,32,${opacity.overlayLight})`,
        disabled: '#dde0ff',

        card: '#ffffff',
        notification: '#7c5cff',
        tabBarActive: '#2d0fa8',
        tabBarInactive: '#b0b8f0',

        shadow: '#0a0520',
        skeleton: '#dde0ff',
        backdrop: `rgba(10,5,32,${opacity.overlayMedium})`,
    },
};

const darkMidnight: Theme = {
    dark: true,
    colors: {
        background: '#04020f',

        surfacePrimary: '#0a0520',
        surfaceSecondary: '#140d30',
        surfaceTertiary: '#04020f',

        primary: '#a594ff',
        secondary: '#7c5cff',
        tertiary: '#4b35c4',
        onPrimary: '#04020f',
        onSecondary: '#04020f',
        onTertiary: '#ffffff',

        textPrimary: '#eef0ff',
        textSecondary: '#a594ff',
        textTertiary: '#7c5cff',
        textDisabled: '#140d30',
        textInverse: '#04020f',

        iconPrimary: '#eef0ff',
        iconSecondary: '#a594ff',
        iconDisabled: '#140d30',

        borderPrimary: '#4b35c4',
        borderSecondary: '#140d30',
        borderFocused: '#a594ff',
        separator: '#140d30',

        inputBackground: '#0a0520',
        inputBorder: '#4b35c4',
        inputPlaceholder: '#4b35c4',

        accent: '#c4b5ff',
        error: '#f87171',
        success: '#4ade80',
        warning: '#fbbf24',
        info: '#a594ff',
        onError: '#04020f',
        onSuccess: '#04020f',
        onWarning: '#04020f',
        onInfo: '#04020f',

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(165,148,255,${opacity.overlayLight})`,
        ripple: `rgba(238,240,255,${opacity.overlayLight})`,
        disabled: '#140d30',

        card: '#0a0520',
        notification: '#7c5cff',
        tabBarActive: '#eef0ff',
        tabBarInactive: '#4b35c4',

        shadow: '#000000',
        skeleton: '#140d30',
        backdrop: `rgba(0,0,0,${opacity.overlayHeavy})`,
    },
};

export const midnightPalette = { light: lightMidnight, dark: darkMidnight };
