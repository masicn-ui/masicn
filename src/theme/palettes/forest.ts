// File: src/theme/palettes/forest.ts

import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const lightForest: Theme = {
    dark: false,
    colors: {
        background: '#f2ede4',

        surfacePrimary: '#ffffff',
        surfaceSecondary: '#e0d5c4',
        surfaceTertiary: '#f2ede4',

        primary: '#1a4d2e',
        secondary: '#7a4f2a',
        tertiary: '#2d7a4f',
        onPrimary: '#ffffff',
        onSecondary: '#ffffff',
        onTertiary: '#ffffff',

        textPrimary: '#0f1e14',
        textSecondary: '#1a4d2e',
        textTertiary: '#7a4f2a',
        textDisabled: '#b4a882',
        textInverse: '#ffffff',

        iconPrimary: '#0f1e14',
        iconSecondary: '#1a4d2e',
        iconDisabled: '#b4a882',

        borderPrimary: '#c8b896',
        borderSecondary: '#e0d5c4',
        borderFocused: '#2d7a4f',
        separator: '#c8b896',

        inputBackground: '#ffffff',
        inputBorder: '#c8b896',
        inputPlaceholder: '#b4a882',

        accent: '#6aab4a',
        error: '#b91c1c',
        success: '#2d7a4f',
        warning: '#b45309',
        info: '#1a4d2e',
        onError: '#ffffff',
        onSuccess: '#ffffff',
        onWarning: '#ffffff',
        onInfo: '#ffffff',

        overlay: `rgba(15,30,20,${opacity.overlayMedium})`,
        highlight: `rgba(45,122,79,${opacity.overlayLight})`,
        ripple: `rgba(15,30,20,${opacity.overlayLight})`,
        disabled: '#e0d5c4',

        card: '#ffffff',
        notification: '#6aab4a',
        tabBarActive: '#1a4d2e',
        tabBarInactive: '#b4a882',

        shadow: '#0f1e14',
        skeleton: '#e0d5c4',
        backdrop: `rgba(15,30,20,${opacity.overlayMedium})`,
    },
};

const darkForest: Theme = {
    dark: true,
    colors: {
        background: '#060e08',

        surfacePrimary: '#0d1f10',
        surfaceSecondary: '#162a1a',
        surfaceTertiary: '#060e08',

        primary: '#7ec89a',
        secondary: '#c8966a',
        tertiary: '#4aaa72',
        onPrimary: '#060e08',
        onSecondary: '#060e08',
        onTertiary: '#ffffff',

        textPrimary: '#e8ede4',
        textSecondary: '#7ec89a',
        textTertiary: '#c8966a',
        textDisabled: '#162a1a',
        textInverse: '#060e08',

        iconPrimary: '#e8ede4',
        iconSecondary: '#7ec89a',
        iconDisabled: '#162a1a',

        borderPrimary: '#4aaa72',
        borderSecondary: '#162a1a',
        borderFocused: '#7ec89a',
        separator: '#162a1a',

        inputBackground: '#0d1f10',
        inputBorder: '#4aaa72',
        inputPlaceholder: '#4aaa72',

        accent: '#8cd46a',
        error: '#f87171',
        success: '#4ade80',
        warning: '#fbbf24',
        info: '#7ec89a',
        onError: '#060e08',
        onSuccess: '#060e08',
        onWarning: '#060e08',
        onInfo: '#060e08',

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(126,200,154,${opacity.overlayLight})`,
        ripple: `rgba(232,237,228,${opacity.overlayLight})`,
        disabled: '#162a1a',

        card: '#0d1f10',
        notification: '#6aab4a',
        tabBarActive: '#e8ede4',
        tabBarInactive: '#4aaa72',

        shadow: '#000000',
        skeleton: '#162a1a',
        backdrop: `rgba(0,0,0,${opacity.overlayHeavy})`,
    },
};

export const forestPalette = { light: lightForest, dark: darkForest };
