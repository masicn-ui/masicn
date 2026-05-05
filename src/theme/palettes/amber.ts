/**
 * Amber palette — warm golden amber tones.
 * Light: rich amber-brown primaries on a warm cream canvas.
 * Dark: deep espresso backgrounds with golden-yellow text and accents.
 * Great for productivity apps, journals, and premium warm-toned UIs.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const c = {
  white: '#ffffff',
  black: '#000000',
  // Light backgrounds
  creamYellow: '#fffbeb',
  paleSunshine: '#fef3c7',
  // Dark backgrounds
  darkEspresso: '#0f0700',
  deepChestnut: '#1c0e00',
  chestnut: '#2a1800',
  // Base tone (dark text / shadow in light mode)
  inkDark: '#1c0a00',
  // Brand
  mahogany: '#92400e',
  caramel: '#b45309',
  goldenAmber: '#d97706',
  sunYellow: '#fcd34d',
  honey: '#f59e0b',
  paleGold: '#fbbf24',
  // Accent
  amberGlow: '#fbbf24',
  // Status
  errorRed: '#b91c1c',
  forestGreen: '#15803d',
  softRed: '#f87171',
  softGreen: '#4ade80',
} as const;

const lightAmber: Theme = {
  dark: false,
  colors: {
    background: c.creamYellow,

    surfacePrimary: c.white,
    surfaceSecondary: c.paleSunshine,
    surfaceTertiary: c.creamYellow,
    surfaceOverlay: c.white,

    primary: c.mahogany,
    secondary: c.caramel,
    tertiary: c.goldenAmber,
    onPrimary: c.white,
    onSecondary: c.white,
    onTertiary: c.inkDark,
    primaryContainer: `rgba(146,64,14,${opacity.tint})`,

    textPrimary: c.inkDark,
    textSecondary: c.mahogany,
    textTertiary: c.caramel,
    textDisabled: c.sunYellow,
    textInverse: c.white,
    textLink: c.caramel,

    iconPrimary: c.inkDark,
    iconSecondary: c.mahogany,
    iconDisabled: c.sunYellow,

    borderPrimary: c.paleSunshine,
    borderSecondary: c.creamYellow,
    borderFocused: c.goldenAmber,
    separator: c.paleSunshine,

    inputBackground: c.white,
    inputBorder: c.paleSunshine,
    inputPlaceholder: c.sunYellow,

    accent: c.honey,
    error: c.errorRed,
    success: c.forestGreen,
    warning: c.goldenAmber,
    info: c.mahogany,
    onError: c.white,
    onSuccess: c.white,
    onWarning: c.inkDark,
    onInfo: c.white,
    onAccent: c.inkDark,

    overlay: `rgba(28,10,0,${opacity.overlayMedium})`,
    highlight: `rgba(217,119,6,${opacity.overlayLight})`,
    ripple: `rgba(28,10,0,${opacity.overlayLight})`,
    disabled: c.paleSunshine,

    card: c.white,
    notification: c.honey,
    tabBarActive: c.mahogany,
    tabBarInactive: c.sunYellow,
    tabBarBackground: c.white,

    shadow: c.inkDark,
    skeleton: c.paleSunshine,
  },
};

const darkAmber: Theme = {
  dark: true,
  colors: {
    background: c.darkEspresso,

    surfacePrimary: c.deepChestnut,
    surfaceSecondary: c.chestnut,
    surfaceTertiary: c.darkEspresso,
    surfaceOverlay: c.chestnut,

    primary: c.sunYellow,
    secondary: c.honey,
    tertiary: c.goldenAmber,
    onPrimary: c.darkEspresso,
    onSecondary: c.darkEspresso,
    onTertiary: c.darkEspresso,
    primaryContainer: `rgba(252,211,77,${opacity.tint})`,

    textPrimary: c.creamYellow,
    textSecondary: c.sunYellow,
    textTertiary: c.honey,
    textDisabled: c.chestnut,
    textInverse: c.darkEspresso,
    textLink: c.honey,

    iconPrimary: c.creamYellow,
    iconSecondary: c.sunYellow,
    iconDisabled: c.chestnut,

    borderPrimary: c.goldenAmber,
    borderSecondary: c.chestnut,
    borderFocused: c.sunYellow,
    separator: c.chestnut,

    inputBackground: c.deepChestnut,
    inputBorder: c.goldenAmber,
    inputPlaceholder: c.goldenAmber,

    accent: c.paleGold,
    error: c.softRed,
    success: c.softGreen,
    warning: c.sunYellow,
    info: c.honey,
    onError: c.darkEspresso,
    onSuccess: c.darkEspresso,
    onWarning: c.darkEspresso,
    onInfo: c.darkEspresso,
    onAccent: c.darkEspresso,

    overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
    highlight: `rgba(252,211,77,${opacity.overlayLight})`,
    ripple: `rgba(255,251,235,${opacity.overlayLight})`,
    disabled: c.chestnut,

    card: c.deepChestnut,
    notification: c.honey,
    tabBarActive: c.creamYellow,
    tabBarInactive: c.goldenAmber,
    tabBarBackground: c.deepChestnut,

    shadow: c.white,
    skeleton: c.chestnut,
  },
};

export const amberPalette = { light: lightAmber, dark: darkAmber };
