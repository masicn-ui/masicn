/**
 * Mono palette — pure grayscale with no chromatic hue.
 * Light: near-black text on zinc-50 backgrounds; status colors are the only accents.
 * Dark: true-black surfaces with off-white text — maximal contrast.
 * Ideal for minimalist, typographic-first, or accessibility-critical apps.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

// Zinc scale — light (950) → dark (50)
const c = {
  // Zinc scale
  zinc50: '#fafafa',
  zinc100: '#f4f4f5',
  zinc200: '#e4e4e7',
  zinc300: '#d4d4d8',
  zinc400: '#a1a1aa',
  zinc500: '#71717a',
  zinc700: '#3f3f46',
  zinc800: '#27272a',
  zinc900: '#18181b',
  zinc950: '#09090b',
  // Status — light mode
  errorRed: '#dc2626',
  successGreen: '#16a34a',
  warningAmber: '#d97706',
  infoBlue: '#2563eb',
  // Status — dark mode
  softRed: '#f87171',
  softGreen: '#4ade80',
  softYellow: '#fbbf24',
  skyBlue: '#60a5fa',
} as const;

const lightMono: Theme = {
  dark: false,
  colors: {
    background: c.zinc100,

    surfacePrimary: c.zinc50,
    surfaceSecondary: c.zinc200,
    surfaceTertiary: c.zinc100,
    surfaceOverlay: c.zinc50,

    primary: c.zinc900,
    secondary: c.zinc700,
    tertiary: c.zinc500,
    onPrimary: c.zinc50,
    onSecondary: c.zinc50,
    onTertiary: c.zinc50,
    primaryContainer: `rgba(24,24,27,${opacity.tint})`,

    textPrimary: c.zinc950,
    textSecondary: c.zinc700,
    textTertiary: c.zinc500,
    textDisabled: c.zinc400,
    textInverse: c.zinc50,
    textLink: c.infoBlue,

    iconPrimary: c.zinc950,
    iconSecondary: c.zinc700,
    iconDisabled: c.zinc400,

    borderPrimary: c.zinc300,
    borderSecondary: c.zinc200,
    borderFocused: c.zinc900,
    separator: c.zinc300,

    inputBackground: c.zinc50,
    inputBorder: c.zinc300,
    inputPlaceholder: c.zinc400,

    accent: c.zinc900,
    error: c.errorRed,
    success: c.successGreen,
    warning: c.warningAmber,
    info: c.infoBlue,
    onError: c.zinc50,
    onSuccess: c.zinc50,
    onWarning: c.zinc50,
    onInfo: c.zinc50,
    onAccent: c.zinc50,

    overlay: `rgba(9,9,11,${opacity.overlayMedium})`,
    highlight: `rgba(24,24,27,${opacity.overlayLight})`,
    ripple: `rgba(9,9,11,${opacity.overlayLight})`,
    disabled: c.zinc200,

    card: c.zinc50,
    notification: c.zinc900,
    tabBarActive: c.zinc950,
    tabBarInactive: c.zinc400,
    tabBarBackground: c.zinc50,

    shadow: c.zinc50,
    skeleton: c.zinc200,
  },
};

const darkMono: Theme = {
  dark: true,
  colors: {
    background: c.zinc950,

    surfacePrimary: c.zinc900,
    surfaceSecondary: c.zinc800,
    surfaceTertiary: c.zinc950,
    surfaceOverlay: c.zinc800,

    primary: c.zinc50,
    secondary: c.zinc300,
    tertiary: c.zinc400,
    onPrimary: c.zinc950,
    onSecondary: c.zinc950,
    onTertiary: c.zinc950,
    primaryContainer: `rgba(250,250,250,${opacity.tint})`,

    textPrimary: c.zinc50,
    textSecondary: c.zinc300,
    textTertiary: c.zinc400,
    textDisabled: c.zinc800,
    textInverse: c.zinc950,
    textLink: c.skyBlue,

    iconPrimary: c.zinc50,
    iconSecondary: c.zinc300,
    iconDisabled: c.zinc800,

    borderPrimary: c.zinc400,
    borderSecondary: c.zinc800,
    borderFocused: c.zinc50,
    separator: c.zinc800,

    inputBackground: c.zinc900,
    inputBorder: c.zinc400,
    inputPlaceholder: c.zinc500,

    accent: c.zinc200,
    error: c.softRed,
    success: c.softGreen,
    warning: c.softYellow,
    info: c.skyBlue,
    onError: c.zinc950,
    onSuccess: c.zinc950,
    onWarning: c.zinc950,
    onInfo: c.zinc950,
    onAccent: c.zinc950,

    overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
    highlight: `rgba(250,250,250,${opacity.overlayLight})`,
    ripple: `rgba(250,250,250,${opacity.overlayLight})`,
    disabled: c.zinc800,

    card: c.zinc900,
    notification: c.zinc50,
    tabBarActive: c.zinc50,
    tabBarInactive: c.zinc500,
    tabBarBackground: c.zinc900,

    shadow: c.zinc950,
    skeleton: c.zinc800,
  },
};

export const monoPalette = { light: lightMono, dark: darkMono };
