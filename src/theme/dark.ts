import { palette } from '../tokens/colors';
import { opacity } from '../tokens/opacity';
import { Theme } from './theme';

export const darkTheme: Theme = {
    dark: true,

    colors: {
        background: palette.inkBlackDeep,

        surfacePrimary: palette.prussianBlue,
        surfaceSecondary: palette.regalNavy,
        surfaceTertiary: palette.inkBlackAlt,

        primary: palette.papayaWhip,
        secondary: palette.pearlAqua,
        tertiary: palette.darkCyan,
        onPrimary: palette.inkBlack,
        onSecondary: palette.inkBlack,
        onTertiary: palette.white,

        textPrimary: palette.papayaWhip,
        textSecondary: palette.pearlAqua,
        textTertiary: palette.darkCyan,
        textDisabled: palette.regalNavy,
        textInverse: palette.inkBlack,

        iconPrimary: palette.papayaWhip,
        iconSecondary: palette.pearlAqua,
        iconDisabled: palette.regalNavy,

        borderPrimary: palette.darkCyan,
        borderSecondary: palette.regalNavy,
        borderFocused: palette.pearlAqua,
        separator: palette.regalNavy,

        inputBackground: palette.prussianBlue,
        inputBorder: palette.darkCyan,
        inputPlaceholder: palette.darkCyan,

        accent: palette.vividTangerine,
        error: palette.oxidizedIron,
        success: palette.pearlAqua,
        warning: palette.schoolBusYellow,
        info: palette.darkTeal,
        onError: palette.white,
        onSuccess: palette.inkBlack,
        onWarning: palette.inkBlack,
        onInfo: palette.white,

        overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
        highlight: `rgba(148,210,189,${opacity.overlayLight})`,
        ripple: `rgba(255,236,209,${opacity.overlayLight})`,
        disabled: palette.regalNavy,

        card: palette.prussianBlue,
        notification: palette.vividTangerine,
        tabBarActive: palette.papayaWhip,
        tabBarInactive: palette.darkCyan,

        shadow: palette.inkBlack,
        skeleton: palette.regalNavy,
        backdrop: `rgba(0,0,0,${opacity.overlayHeavy})`,
    },
};
