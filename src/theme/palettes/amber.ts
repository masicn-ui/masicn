/**
 * Amber palette — warm golden amber tones.
 * Light: rich amber-brown primaries on a warm cream canvas.
 * Dark: deep espresso backgrounds with golden-yellow text and accents.
 * Great for productivity apps, journals, and premium warm-toned UIs.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const lightAmber: Theme = {
    dark: false,
    colors: {
        background: '#fffbeb',

        surfacePrimary: '#ffffff',
        surfaceSecondary: '#fef3c7',
        surfaceTertiary: '#fffbeb',

        primary: '#92400e',
        secondary: '#b45309',
        tertiary: '#d97706',
        onPrimary: '#ffffff',
        onSecondary: '#ffffff',
        onTertiary: '#1c0a00',

        textPrimary: '#1c0a00',
        textSecondary: '#92400e',
        textTertiary: '#b45309',
        textDisabled: '#fcd34d',
        textInverse: '#ffffff',

        iconPrimary: '#1c0a00',
        iconSecondary: '#92400e',
        iconDisabled: '#fcd34d',

        borderPrimary: '#fde68a',
        borderSecondary: '#fef3c7',
        borderFocused: '#d97706',
        separator: '#fde68a',

        inputBackground: '#ffffff',
        inputBorder: '#fde68a',
        inputPlaceholder: '#fcd34d',

        accent: '#f59e0b',
        error: '#b91c1c',
        success: '#15803d',
        warning: '#d97706',
        info: '#92400e',
        onError: '#ffffff',
        onSuccess: '#ffffff',
        onWarning: '#1c0a00',
        onInfo: '#ffffff',

        overlay: `rgba(28,10,0,${opacity.overlayMedium})`,
        highlight: `rgba(217,119,6,${opacity.overlayLight})`,
        ripple: `rgba(28,10,0,${opacity.overlayLight})`,
        disabled: '#fef3c7',

        card: '#ffffff',
        notification: '#f59e0b',
        tabBarActive: '#92400e',
        tabBarInactive: '#fcd34d',

        shadow: '#1c0a00',
        skeleton: '#fef3c7',
        backdrop: `rgba(28,10,0,${opacity.overlayMedium})`,
    },
};

const darkAmber: Theme = {
    dark: true,
    colors: {
        background: '#0f0700',

        surfacePrimary: '#1c0e00',
        surfaceSecondary: '#2a1800',
        surfaceTertiary: '#0f0700',

        primary: '#fcd34d',
        secondary: '#f59e0b',
        tertiary: '#d97706',
        onPrimary: '#0f0700',
        onSecondary: '#0f0700',
        onTertiary: '#0f0700',

        textPrimary: '#fffbeb',
        textSecondary: '#fcd34d',
        textTertiary: '#f59e0b',
        textDisabled: '#2a1800',
        textInverse: '#0f0700',

        iconPrimary: '#fffbeb',
        iconSecondary: '#fcd34d',
        iconDisabled: '#2a1800',

        borderPrimary: '#d97706',
        borderSecondary: '#2a1800',
        borderFocused: '#fcd34d',
        separator: '#2a1800',

        inputBackground: '#1c0e00',
        inputBorder: '#d97706',
        inputPlaceholder: '#d97706',

        accent: '#fbbf24',
        error: '#f87171',
        success: '#4ade80',
        warning: '#fcd34d',
        info: '#fcd34d',
        onError: '#0f0700',
        onSuccess: '#0f0700',
        onWarning: '#0f0700',
        onInfo: '#0f0700',

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(252,211,77,${opacity.overlayLight})`,
        ripple: `rgba(255,251,235,${opacity.overlayLight})`,
        disabled: '#2a1800',

        card: '#1c0e00',
        notification: '#f59e0b',
        tabBarActive: '#fffbeb',
        tabBarInactive: '#d97706',

        shadow: '#000000',
        skeleton: '#2a1800',
        backdrop: `rgba(0,0,0,${opacity.overlayHeavy})`,
    },
};

export const amberPalette = { light: lightAmber, dark: darkAmber };
