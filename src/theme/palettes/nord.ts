// File: src/theme/palettes/nord.ts

import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

// Nord palette: arctic blue-grays, cool whites, frost accents

const lightNord: Theme = {
    dark: false,
    colors: {
        background: '#eceff4',

        surfacePrimary: '#ffffff',
        surfaceSecondary: '#e5e9f0',
        surfaceTertiary: '#eceff4',

        primary: '#2e3440',
        secondary: '#3b4252',
        tertiary: '#5e81ac',
        onPrimary: '#eceff4',
        onSecondary: '#eceff4',
        onTertiary: '#ffffff',

        textPrimary: '#2e3440',
        textSecondary: '#3b4252',
        textTertiary: '#4c566a',
        textDisabled: '#adbac7',
        textInverse: '#eceff4',

        iconPrimary: '#2e3440',
        iconSecondary: '#4c566a',
        iconDisabled: '#adbac7',

        borderPrimary: '#d8dee9',
        borderSecondary: '#e5e9f0',
        borderFocused: '#5e81ac',
        separator: '#d8dee9',

        inputBackground: '#ffffff',
        inputBorder: '#d8dee9',
        inputPlaceholder: '#adbac7',

        accent: '#88c0d0',
        error: '#bf616a',
        success: '#a3be8c',
        warning: '#ebcb8b',
        info: '#5e81ac',
        onError: '#ffffff',
        onSuccess: '#2e3440',
        onWarning: '#2e3440',
        onInfo: '#ffffff',

        overlay: `rgba(46,52,64,${opacity.overlayMedium})`,
        highlight: `rgba(136,192,208,${opacity.overlayLight})`,
        ripple: `rgba(46,52,64,${opacity.overlayLight})`,
        disabled: '#e5e9f0',

        card: '#ffffff',
        notification: '#88c0d0',
        tabBarActive: '#2e3440',
        tabBarInactive: '#adbac7',

        shadow: '#2e3440',
        skeleton: '#e5e9f0',
        backdrop: `rgba(46,52,64,${opacity.overlayMedium})`,
    },
};

const darkNord: Theme = {
    dark: true,
    colors: {
        background: '#2e3440',

        surfacePrimary: '#3b4252',
        surfaceSecondary: '#434c5e',
        surfaceTertiary: '#2e3440',

        primary: '#88c0d0',
        secondary: '#81a1c1',
        tertiary: '#5e81ac',
        onPrimary: '#2e3440',
        onSecondary: '#2e3440',
        onTertiary: '#eceff4',

        textPrimary: '#eceff4',
        textSecondary: '#e5e9f0',
        textTertiary: '#d8dee9',
        textDisabled: '#434c5e',
        textInverse: '#2e3440',

        iconPrimary: '#eceff4',
        iconSecondary: '#d8dee9',
        iconDisabled: '#434c5e',

        borderPrimary: '#4c566a',
        borderSecondary: '#434c5e',
        borderFocused: '#88c0d0',
        separator: '#434c5e',

        inputBackground: '#3b4252',
        inputBorder: '#4c566a',
        inputPlaceholder: '#4c566a',

        accent: '#8fbcbb',
        error: '#bf616a',
        success: '#a3be8c',
        warning: '#ebcb8b',
        info: '#81a1c1',
        onError: '#eceff4',
        onSuccess: '#2e3440',
        onWarning: '#2e3440',
        onInfo: '#2e3440',

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(136,192,208,${opacity.overlayLight})`,
        ripple: `rgba(236,239,244,${opacity.overlayLight})`,
        disabled: '#434c5e',

        card: '#3b4252',
        notification: '#88c0d0',
        tabBarActive: '#eceff4',
        tabBarInactive: '#4c566a',

        shadow: '#000000',
        skeleton: '#434c5e',
        backdrop: `rgba(0,0,0,${opacity.overlayHeavy})`,
    },
};

export const nordPalette = { light: lightNord, dark: darkNord };
