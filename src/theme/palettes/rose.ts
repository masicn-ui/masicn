import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const lightRose: Theme = {
    dark: false,
    colors: {
        background: '#fff0f3',

        surfacePrimary: '#ffffff',
        surfaceSecondary: '#ffd6df',
        surfaceTertiary: '#fff0f3',

        primary: '#9b1942',
        secondary: '#c94070',
        tertiary: '#e8648a',
        onPrimary: '#ffffff',
        onSecondary: '#ffffff',
        onTertiary: '#ffffff',

        textPrimary: '#2d0010',
        textSecondary: '#9b1942',
        textTertiary: '#c94070',
        textDisabled: '#f4a8bc',
        textInverse: '#ffffff',

        iconPrimary: '#2d0010',
        iconSecondary: '#9b1942',
        iconDisabled: '#f4a8bc',

        borderPrimary: '#f4c0cc',
        borderSecondary: '#ffd6df',
        borderFocused: '#c94070',
        separator: '#f4c0cc',

        inputBackground: '#ffffff',
        inputBorder: '#f4c0cc',
        inputPlaceholder: '#f4a8bc',

        accent: '#ff6b9d',
        error: '#b91c1c',
        success: '#15803d',
        warning: '#b45309',
        info: '#9b1942',
        onError: '#ffffff',
        onSuccess: '#ffffff',
        onWarning: '#ffffff',
        onInfo: '#ffffff',

        overlay: `rgba(45,0,16,${opacity.overlayMedium})`,
        highlight: `rgba(201,64,112,${opacity.overlayLight})`,
        ripple: `rgba(45,0,16,${opacity.overlayLight})`,
        disabled: '#ffd6df',

        card: '#ffffff',
        notification: '#ff6b9d',
        tabBarActive: '#9b1942',
        tabBarInactive: '#f4a8bc',

        shadow: '#2d0010',
        skeleton: '#ffd6df',
        backdrop: `rgba(45,0,16,${opacity.overlayMedium})`,
    },
};

const darkRose: Theme = {
    dark: true,
    colors: {
        background: '#1a0008',

        surfacePrimary: '#2d0010',
        surfaceSecondary: '#3d0018',
        surfaceTertiary: '#1a0008',

        primary: '#f4a8bc',
        secondary: '#e8648a',
        tertiary: '#c94070',
        onPrimary: '#1a0008',
        onSecondary: '#1a0008',
        onTertiary: '#ffffff',

        textPrimary: '#fff0f3',
        textSecondary: '#f4a8bc',
        textTertiary: '#e8648a',
        textDisabled: '#3d0018',
        textInverse: '#1a0008',

        iconPrimary: '#fff0f3',
        iconSecondary: '#f4a8bc',
        iconDisabled: '#3d0018',

        borderPrimary: '#c94070',
        borderSecondary: '#3d0018',
        borderFocused: '#f4a8bc',
        separator: '#3d0018',

        inputBackground: '#2d0010',
        inputBorder: '#c94070',
        inputPlaceholder: '#c94070',

        accent: '#ff6b9d',
        error: '#f87171',
        success: '#4ade80',
        warning: '#fbbf24',
        info: '#f4a8bc',
        onError: '#1a0008',
        onSuccess: '#1a0008',
        onWarning: '#1a0008',
        onInfo: '#1a0008',

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(244,168,188,${opacity.overlayLight})`,
        ripple: `rgba(255,240,243,${opacity.overlayLight})`,
        disabled: '#3d0018',

        card: '#2d0010',
        notification: '#ff6b9d',
        tabBarActive: '#fff0f3',
        tabBarInactive: '#c94070',

        shadow: '#000000',
        skeleton: '#3d0018',
        backdrop: `rgba(0,0,0,${opacity.overlayHeavy})`,
    },
};

export const rosePalette = { light: lightRose, dark: darkRose };
