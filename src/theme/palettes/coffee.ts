/**
 * Coffee palette — espresso browns, warm cream, and caramel accents.
 * Light: deep roasted-brown primaries on a latte-cream background.
 * Dark: true espresso surfaces with caramel highlight text.
 * Ideal for lifestyle, food, and warm editorial apps.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const lightCoffee: Theme = {
    dark: false,
    colors: {
        background: '#faf6f0',

        surfacePrimary: '#ffffff',
        surfaceSecondary: '#f0e8dc',
        surfaceTertiary: '#faf6f0',

        primary: '#3e1c00',
        secondary: '#6b3a1f',
        tertiary: '#9c5c38',
        onPrimary: '#ffffff',
        onSecondary: '#ffffff',
        onTertiary: '#ffffff',

        textPrimary: '#1e0c00',
        textSecondary: '#3e1c00',
        textTertiary: '#6b3a1f',
        textDisabled: '#c8a882',
        textInverse: '#faf6f0',

        iconPrimary: '#1e0c00',
        iconSecondary: '#3e1c00',
        iconDisabled: '#c8a882',

        borderPrimary: '#e0ccb4',
        borderSecondary: '#f0e8dc',
        borderFocused: '#9c5c38',
        separator: '#e0ccb4',

        inputBackground: '#ffffff',
        inputBorder: '#e0ccb4',
        inputPlaceholder: '#c8a882',

        accent: '#c47a3c',
        error: '#b91c1c',
        success: '#15803d',
        warning: '#b45309',
        info: '#3e1c00',
        onError: '#ffffff',
        onSuccess: '#ffffff',
        onWarning: '#ffffff',
        onInfo: '#ffffff',

        overlay: `rgba(30,12,0,${opacity.overlayMedium})`,
        highlight: `rgba(156,92,56,${opacity.overlayLight})`,
        ripple: `rgba(30,12,0,${opacity.overlayLight})`,
        disabled: '#f0e8dc',

        card: '#ffffff',
        notification: '#c47a3c',
        tabBarActive: '#3e1c00',
        tabBarInactive: '#c8a882',

        shadow: '#1e0c00',
        skeleton: '#f0e8dc',
        backdrop: `rgba(30,12,0,${opacity.overlayMedium})`,
    },
};

const darkCoffee: Theme = {
    dark: true,
    colors: {
        background: '#100700',

        surfacePrimary: '#1e0c00',
        surfaceSecondary: '#2c1400',
        surfaceTertiary: '#100700',

        primary: '#e0b48a',
        secondary: '#c47a3c',
        tertiary: '#9c5c38',
        onPrimary: '#100700',
        onSecondary: '#100700',
        onTertiary: '#ffffff',

        textPrimary: '#faf6f0',
        textSecondary: '#e0b48a',
        textTertiary: '#c47a3c',
        textDisabled: '#2c1400',
        textInverse: '#100700',

        iconPrimary: '#faf6f0',
        iconSecondary: '#e0b48a',
        iconDisabled: '#2c1400',

        borderPrimary: '#9c5c38',
        borderSecondary: '#2c1400',
        borderFocused: '#e0b48a',
        separator: '#2c1400',

        inputBackground: '#1e0c00',
        inputBorder: '#9c5c38',
        inputPlaceholder: '#9c5c38',

        accent: '#f0c070',
        error: '#f87171',
        success: '#4ade80',
        warning: '#fbbf24',
        info: '#e0b48a',
        onError: '#100700',
        onSuccess: '#100700',
        onWarning: '#100700',
        onInfo: '#100700',

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(224,180,138,${opacity.overlayLight})`,
        ripple: `rgba(250,246,240,${opacity.overlayLight})`,
        disabled: '#2c1400',

        card: '#1e0c00',
        notification: '#c47a3c',
        tabBarActive: '#faf6f0',
        tabBarInactive: '#9c5c38',

        shadow: '#000000',
        skeleton: '#2c1400',
        backdrop: `rgba(0,0,0,${opacity.overlayHeavy})`,
    },
};

export const coffeePalette = { light: lightCoffee, dark: darkCoffee };
