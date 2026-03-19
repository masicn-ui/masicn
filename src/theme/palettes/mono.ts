/**
 * Mono palette — pure grayscale with no chromatic hue.
 * Light: near-black text on zinc-50 backgrounds; status colors are the only accents.
 * Dark: true-black surfaces with off-white text — maximal contrast.
 * Ideal for minimalist, typographic-first, or accessibility-critical apps.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const lightMono: Theme = {
    dark: false,
    colors: {
        background: '#f4f4f5',

        surfacePrimary: '#ffffff',
        surfaceSecondary: '#e4e4e7',
        surfaceTertiary: '#f4f4f5',

        primary: '#18181b',
        secondary: '#3f3f46',
        tertiary: '#71717a',
        onPrimary: '#ffffff',
        onSecondary: '#ffffff',
        onTertiary: '#ffffff',

        textPrimary: '#09090b',
        textSecondary: '#3f3f46',
        textTertiary: '#71717a',
        textDisabled: '#a1a1aa',
        textInverse: '#fafafa',

        iconPrimary: '#09090b',
        iconSecondary: '#3f3f46',
        iconDisabled: '#a1a1aa',

        borderPrimary: '#d4d4d8',
        borderSecondary: '#e4e4e7',
        borderFocused: '#18181b',
        separator: '#d4d4d8',

        inputBackground: '#ffffff',
        inputBorder: '#d4d4d8',
        inputPlaceholder: '#a1a1aa',

        accent: '#18181b',
        error: '#dc2626',
        success: '#16a34a',
        warning: '#d97706',
        info: '#2563eb',
        onError: '#ffffff',
        onSuccess: '#ffffff',
        onWarning: '#ffffff',
        onInfo: '#ffffff',

        overlay: `rgba(9,9,11,${opacity.overlayMedium})`,
        highlight: `rgba(24,24,27,${opacity.overlayLight})`,
        ripple: `rgba(9,9,11,${opacity.overlayLight})`,
        disabled: '#e4e4e7',

        card: '#ffffff',
        notification: '#18181b',
        tabBarActive: '#09090b',
        tabBarInactive: '#a1a1aa',

        shadow: '#09090b',
        skeleton: '#e4e4e7',
        backdrop: `rgba(9,9,11,${opacity.overlayMedium})`,
    },
};

const darkMono: Theme = {
    dark: true,
    colors: {
        background: '#09090b',

        surfacePrimary: '#18181b',
        surfaceSecondary: '#27272a',
        surfaceTertiary: '#09090b',

        primary: '#fafafa',
        secondary: '#d4d4d8',
        tertiary: '#a1a1aa',
        onPrimary: '#09090b',
        onSecondary: '#09090b',
        onTertiary: '#09090b',

        textPrimary: '#fafafa',
        textSecondary: '#d4d4d8',
        textTertiary: '#a1a1aa',
        textDisabled: '#27272a',
        textInverse: '#09090b',

        iconPrimary: '#fafafa',
        iconSecondary: '#d4d4d8',
        iconDisabled: '#27272a',

        borderPrimary: '#a1a1aa',
        borderSecondary: '#27272a',
        borderFocused: '#fafafa',
        separator: '#27272a',

        inputBackground: '#18181b',
        inputBorder: '#a1a1aa',
        inputPlaceholder: '#a1a1aa',

        accent: '#e4e4e7',
        error: '#f87171',
        success: '#4ade80',
        warning: '#fbbf24',
        info: '#60a5fa',
        onError: '#09090b',
        onSuccess: '#09090b',
        onWarning: '#09090b',
        onInfo: '#09090b',

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(250,250,250,${opacity.overlayLight})`,
        ripple: `rgba(250,250,250,${opacity.overlayLight})`,
        disabled: '#27272a',

        card: '#18181b',
        notification: '#fafafa',
        tabBarActive: '#fafafa',
        tabBarInactive: '#71717a',

        shadow: '#000000',
        skeleton: '#27272a',
        backdrop: `rgba(0,0,0,${opacity.overlayHeavy})`,
    },
};

export const monoPalette = { light: lightMono, dark: darkMono };
