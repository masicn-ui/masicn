/**
 * Forest palette — deep greens, earthy tawny browns, and natural off-white.
 * Light: forest-green primaries on a warm parchment background with brown secondary.
 * Dark: near-black forest floor surfaces with sage-green text and accents.
 * Great for nature, wellness, and outdoor-focused apps.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const c = {
  white: '#ffffff',
  black: '#000000',
  // Light backgrounds
  parchment: '#f2ede4',
  sand: '#e0d5c4',
  // Dark backgrounds
  forestFloor: '#060e08',
  darkMoss: '#0d1f10',
  deepMoss: '#162a1a',
  // Base tone (dark text / shadow in light mode)
  inkForest: '#0f1e14',
  // Brand
  forestGreen: '#1a4d2e',
  tawnyBrown: '#7a4f2a',
  midGreen: '#2d7a4f',
  sageGreen: '#7ec89a',
  caramelBrown: '#c8966a',
  leafGreen: '#4aaa72',
  // Muted
  warmSand: '#b4a882',
  paleGold: '#c8b896',
  // Accents
  appleGreen: '#6aab4a',
  limeGreen: '#8cd46a',
  // Light text on dark
  pearlWhite: '#e8ede4',
  // Status
  errorRed: '#b91c1c',
  warningBrown: '#b45309',
  softRed: '#f87171',
  softGreen: '#4ade80',
  softYellow: '#fbbf24',
} as const;

const lightForest: Theme = {
  dark: false,
  colors: {
    background: c.parchment,

    surfacePrimary: c.white,
    surfaceSecondary: c.sand,
    surfaceTertiary: c.parchment,
    surfaceOverlay: c.white,

    primary: c.forestGreen,
    secondary: c.tawnyBrown,
    tertiary: c.midGreen,
    onPrimary: c.white,
    onSecondary: c.white,
    onTertiary: c.white,
    primaryContainer: `rgba(26,77,46,${opacity.tint})`,

    textPrimary: c.inkForest,
    textSecondary: c.forestGreen,
    textTertiary: c.tawnyBrown,
    textDisabled: c.warmSand,
    textInverse: c.white,
    textLink: c.midGreen,

    iconPrimary: c.inkForest,
    iconSecondary: c.forestGreen,
    iconDisabled: c.warmSand,

    borderPrimary: c.paleGold,
    borderSecondary: c.sand,
    borderFocused: c.midGreen,
    separator: c.paleGold,

    inputBackground: c.white,
    inputBorder: c.paleGold,
    inputPlaceholder: c.warmSand,

    accent: c.appleGreen,
    error: c.errorRed,
    success: c.midGreen,
    warning: c.warningBrown,
    info: c.forestGreen,
    onError: c.white,
    onSuccess: c.white,
    onWarning: c.white,
    onInfo: c.white,
    onAccent: c.inkForest,

    overlay: `rgba(15,30,20,${opacity.overlayMedium})`,
    highlight: `rgba(45,122,79,${opacity.overlayLight})`,
    ripple: `rgba(15,30,20,${opacity.overlayLight})`,
    disabled: c.sand,

    card: c.white,
    notification: c.appleGreen,
    tabBarActive: c.forestGreen,
    tabBarInactive: c.warmSand,
    tabBarBackground: c.white,

    shadow: c.inkForest,
    skeleton: c.sand,
  },
};

const darkForest: Theme = {
  dark: true,
  colors: {
    background: c.forestFloor,

    surfacePrimary: c.darkMoss,
    surfaceSecondary: c.deepMoss,
    surfaceTertiary: c.forestFloor,
    surfaceOverlay: c.deepMoss,

    primary: c.sageGreen,
    secondary: c.caramelBrown,
    tertiary: c.leafGreen,
    onPrimary: c.forestFloor,
    onSecondary: c.forestFloor,
    onTertiary: c.white,
    primaryContainer: `rgba(126,200,154,${opacity.tint})`,

    textPrimary: c.pearlWhite,
    textSecondary: c.sageGreen,
    textTertiary: c.caramelBrown,
    textDisabled: c.deepMoss,
    textInverse: c.forestFloor,
    textLink: c.sageGreen,

    iconPrimary: c.pearlWhite,
    iconSecondary: c.sageGreen,
    iconDisabled: c.deepMoss,

    borderPrimary: c.leafGreen,
    borderSecondary: c.deepMoss,
    borderFocused: c.sageGreen,
    separator: c.deepMoss,

    inputBackground: c.darkMoss,
    inputBorder: c.leafGreen,
    inputPlaceholder: c.leafGreen,

    accent: c.limeGreen,
    error: c.softRed,
    success: c.softGreen,
    warning: c.softYellow,
    info: c.sageGreen,
    onError: c.forestFloor,
    onSuccess: c.forestFloor,
    onWarning: c.forestFloor,
    onInfo: c.forestFloor,
    onAccent: c.forestFloor,

    overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
    highlight: `rgba(126,200,154,${opacity.overlayLight})`,
    ripple: `rgba(232,237,228,${opacity.overlayLight})`,
    disabled: c.deepMoss,

    card: c.darkMoss,
    notification: c.appleGreen,
    tabBarActive: c.pearlWhite,
    tabBarInactive: c.leafGreen,
    tabBarBackground: c.darkMoss,

    shadow: c.white,
    skeleton: c.deepMoss,
  },
};

export const forestPalette = { light: lightForest, dark: darkForest };
