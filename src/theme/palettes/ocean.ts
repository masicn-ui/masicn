import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const lightOcean: Theme = {
    dark: false,
    colors: {
        background: '#e8f4f8',

        surfacePrimary: '#ffffff',
        surfaceSecondary: '#d1eaf4',
        surfaceTertiary: '#e8f4f8',

        primary: '#005f8a',
        secondary: '#0096b4',
        tertiary: '#00c4d4',
        onPrimary: '#ffffff',
        onSecondary: '#ffffff',
        onTertiary: '#00202a',

        textPrimary: '#00202a',
        textSecondary: '#005f8a',
        textTertiary: '#0096b4',
        textDisabled: '#90c4d4',
        textInverse: '#ffffff',

        iconPrimary: '#00202a',
        iconSecondary: '#005f8a',
        iconDisabled: '#90c4d4',

        borderPrimary: '#b8dce8',
        borderSecondary: '#d1eaf4',
        borderFocused: '#0096b4',
        separator: '#b8dce8',

        inputBackground: '#ffffff',
        inputBorder: '#b8dce8',
        inputPlaceholder: '#90c4d4',

        accent: '#00d4e8',
        error: '#c0392b',
        success: '#00b4a0',
        warning: '#e67e22',
        info: '#0096b4',
        onError: '#ffffff',
        onSuccess: '#ffffff',
        onWarning: '#ffffff',
        onInfo: '#ffffff',

        overlay: `rgba(0,32,42,${opacity.overlayMedium})`,
        highlight: `rgba(0,150,180,${opacity.overlayLight})`,
        ripple: `rgba(0,32,42,${opacity.overlayLight})`,
        disabled: '#d1eaf4',

        card: '#ffffff',
        notification: '#00c4d4',
        tabBarActive: '#005f8a',
        tabBarInactive: '#90c4d4',

        shadow: '#00202a',
        skeleton: '#d1eaf4',
        backdrop: `rgba(0,32,42,${opacity.overlayMedium})`,
    },
};

const darkOcean: Theme = {
    dark: true,
    colors: {
        background: '#000d14',

        surfacePrimary: '#001a28',
        surfaceSecondary: '#00263d',
        surfaceTertiary: '#000d14',

        primary: '#7ed6e8',
        secondary: '#00c4d4',
        tertiary: '#0096b4',
        onPrimary: '#000d14',
        onSecondary: '#000d14',
        onTertiary: '#ffffff',

        textPrimary: '#e8f4f8',
        textSecondary: '#7ed6e8',
        textTertiary: '#00c4d4',
        textDisabled: '#00263d',
        textInverse: '#000d14',

        iconPrimary: '#e8f4f8',
        iconSecondary: '#7ed6e8',
        iconDisabled: '#00263d',

        borderPrimary: '#0096b4',
        borderSecondary: '#00263d',
        borderFocused: '#00c4d4',
        separator: '#00263d',

        inputBackground: '#001a28',
        inputBorder: '#0096b4',
        inputPlaceholder: '#0096b4',

        accent: '#00d4e8',
        error: '#e74c3c',
        success: '#00c4a0',
        warning: '#f39c12',
        info: '#0096b4',
        onError: '#ffffff',
        onSuccess: '#000d14',
        onWarning: '#000d14',
        onInfo: '#ffffff',

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(126,214,232,${opacity.overlayLight})`,
        ripple: `rgba(232,244,248,${opacity.overlayLight})`,
        disabled: '#00263d',

        card: '#001a28',
        notification: '#00c4d4',
        tabBarActive: '#e8f4f8',
        tabBarInactive: '#0096b4',

        shadow: '#000000',
        skeleton: '#00263d',
        backdrop: `rgba(0,0,0,${opacity.overlayHeavy})`,
    },
};

export const oceanPalette = { light: lightOcean, dark: darkOcean };
