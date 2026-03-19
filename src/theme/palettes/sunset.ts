/**
 * Sunset palette — warm burnt orange and deep violet contrast.
 * Light: terracotta-orange primaries on a warm cream background with purple secondary.
 * Dark: near-black purple-tinted surfaces with coral-orange and lavender accents.
 * Vibrant and bold — great for entertainment, social, and creative apps.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const lightSunset: Theme = {
    dark: false,
    colors: {
        background: '#fff8f0',

        surfacePrimary: '#ffffff',
        surfaceSecondary: '#fde8d0',
        surfaceTertiary: '#fff8f0',

        primary: '#c0440a',
        secondary: '#8b2fc9',
        tertiary: '#e85d24',
        onPrimary: '#ffffff',
        onSecondary: '#ffffff',
        onTertiary: '#ffffff',

        textPrimary: '#1a0a00',
        textSecondary: '#c0440a',
        textTertiary: '#8b2fc9',
        textDisabled: '#e8b89a',
        textInverse: '#ffffff',

        iconPrimary: '#1a0a00',
        iconSecondary: '#c0440a',
        iconDisabled: '#e8b89a',

        borderPrimary: '#f0c8a0',
        borderSecondary: '#fde8d0',
        borderFocused: '#e85d24',
        separator: '#f0c8a0',

        inputBackground: '#ffffff',
        inputBorder: '#f0c8a0',
        inputPlaceholder: '#e8b89a',

        accent: '#ff8c00',
        error: '#b91c1c',
        success: '#16a34a',
        warning: '#d97706',
        info: '#8b2fc9',
        onError: '#ffffff',
        onSuccess: '#ffffff',
        onWarning: '#1a0a00',
        onInfo: '#ffffff',

        overlay: `rgba(26,10,0,${opacity.overlayMedium})`,
        highlight: `rgba(232,93,36,${opacity.overlayLight})`,
        ripple: `rgba(26,10,0,${opacity.overlayLight})`,
        disabled: '#fde8d0',

        card: '#ffffff',
        notification: '#ff8c00',
        tabBarActive: '#c0440a',
        tabBarInactive: '#e8b89a',

        shadow: '#1a0a00',
        skeleton: '#fde8d0',
        backdrop: `rgba(26,10,0,${opacity.overlayMedium})`,
    },
};

const darkSunset: Theme = {
    dark: true,
    colors: {
        background: '#12001e',

        surfacePrimary: '#1e0032',
        surfaceSecondary: '#2a0048',
        surfaceTertiary: '#12001e',

        primary: '#ff9060',
        secondary: '#c88aff',
        tertiary: '#e85d24',
        onPrimary: '#12001e',
        onSecondary: '#12001e',
        onTertiary: '#ffffff',

        textPrimary: '#fff0e8',
        textSecondary: '#ff9060',
        textTertiary: '#c88aff',
        textDisabled: '#2a0048',
        textInverse: '#12001e',

        iconPrimary: '#fff0e8',
        iconSecondary: '#ff9060',
        iconDisabled: '#2a0048',

        borderPrimary: '#e85d24',
        borderSecondary: '#2a0048',
        borderFocused: '#ff9060',
        separator: '#2a0048',

        inputBackground: '#1e0032',
        inputBorder: '#e85d24',
        inputPlaceholder: '#e85d24',

        accent: '#ffaa40',
        error: '#f87171',
        success: '#4ade80',
        warning: '#fbbf24',
        info: '#c88aff',
        onError: '#12001e',
        onSuccess: '#12001e',
        onWarning: '#12001e',
        onInfo: '#12001e',

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(255,144,96,${opacity.overlayLight})`,
        ripple: `rgba(255,240,232,${opacity.overlayLight})`,
        disabled: '#2a0048',

        card: '#1e0032',
        notification: '#ff8c00',
        tabBarActive: '#fff0e8',
        tabBarInactive: '#e85d24',

        shadow: '#000000',
        skeleton: '#2a0048',
        backdrop: `rgba(0,0,0,${opacity.overlayHeavy})`,
    },
};

export const sunsetPalette = { light: lightSunset, dark: darkSunset };
