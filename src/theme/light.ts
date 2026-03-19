/**
 * Default light theme — built on the masi palette.
 * Warm off-whites, teal accents, and deep inkBlack primaries.
 *
 * Use `createTheme()` to override individual tokens while keeping everything else.
 */
import { palette } from '../tokens/colors';
import { opacity } from '../tokens/opacity';
import { Theme } from './theme';

export const lightTheme: Theme = {
    dark: false,

    colors: {
        background: palette.papayaWhip,

        surfacePrimary: palette.white,
        surfaceSecondary: palette.vanillaCustard,
        surfaceTertiary: palette.papayaWhip,

        primary: palette.inkBlack,
        secondary: palette.darkTeal,
        tertiary: palette.darkCyan,
        onPrimary: palette.papayaWhip,
        onSecondary: palette.white,
        onTertiary: palette.white,

        textPrimary: palette.inkBlack,
        textSecondary: palette.stormyTeal,
        textTertiary: palette.darkCyan,
        textDisabled: palette.pearlAqua,
        textInverse: palette.white,

        iconPrimary: palette.inkBlack,
        iconSecondary: palette.darkTeal,
        iconDisabled: palette.pearlAqua,

        borderPrimary: palette.vanillaCustard,
        borderSecondary: palette.papayaWhip,
        borderFocused: palette.darkCyan,
        separator: palette.vanillaCustard,

        inputBackground: palette.white,
        inputBorder: palette.vanillaCustard,
        inputPlaceholder: palette.pearlAqua,

        accent: palette.vividTangerine,
        error: palette.oxidizedIron,
        success: palette.darkCyan,
        warning: palette.goldenOrange,
        info: palette.darkTeal,
        onError: palette.white,
        onSuccess: palette.white,
        onWarning: palette.inkBlack,
        onInfo: palette.white,

        overlay: `rgba(0,18,25,${opacity.overlayMedium})`,
        highlight: `rgba(10,147,150,${opacity.overlayLight})`,
        ripple: `rgba(0,18,25,${opacity.overlayLight})`,
        disabled: palette.papayaWhip,

        card: palette.white,
        notification: palette.vividTangerine,
        tabBarActive: palette.inkBlack,
        tabBarInactive: palette.pearlAqua,

        shadow: palette.inkBlack,
        skeleton: palette.vanillaCustard,
        backdrop: `rgba(0,18,25,${opacity.overlayMedium})`,
    },
};
