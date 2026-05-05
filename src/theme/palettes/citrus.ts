/**
 * Citrus palette — juicy lime green & golden yellow.
 * Light: deep olive-green primaries on a fresh lime-white canvas with yellow accents.
 * Dark: near-black green surfaces with bright lime text and golden highlights.
 * Great for health, food, fitness, and high-energy lifestyle apps.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const c = {
  white: '#ffffff',
  black: '#000000',
  // Light backgrounds
  limeWhite: '#f7fee7',
  paleLime: '#ecfccb',
  // Dark backgrounds
  voidGreen: '#020800',
  darkOlive: '#0c1a00',
  deepOlive: '#162400',
  // Brand — light
  oliveGreen: '#3a5c0a',
  leafGreen: '#4d7c0f',
  limeGreen: '#65a30d',
  // Brand — shared/accent
  limeYellow: '#84cc16',
  brightLime: '#bef264',
  goldenYellow: '#ca8a04',
  sunYellow: '#facc15',
  paleYellow: '#fde047',
  // Muted
  sageLight: '#a3c963',
  sageMid: '#d9f099',
  // Status
  errorRed: '#dc2626',
  successGreen: '#16a34a',
  softRed: '#f87171',
  softGreen: '#4ade80',
  softYellow: '#fbbf24',
  infoBlue: '#0284c7',
  skyBlue: '#38bdf8',
} as const;

const lightCitrus: Theme = {
  dark: false,
  colors: {
    background: c.limeWhite,

    surfacePrimary: c.white,
    surfaceSecondary: c.paleLime,
    surfaceTertiary: c.limeWhite,
    surfaceOverlay: c.white,

    primary: c.leafGreen,
    secondary: c.goldenYellow,
    tertiary: c.limeGreen,
    onPrimary: c.white,
    onSecondary: c.white,
    onTertiary: c.white,
    primaryContainer: `rgba(77,124,15,${opacity.tint})`,

    textPrimary: c.oliveGreen,
    textSecondary: c.leafGreen,
    textTertiary: c.limeGreen,
    textDisabled: c.sageLight,
    textInverse: c.white,
    textLink: c.limeGreen,

    iconPrimary: c.oliveGreen,
    iconSecondary: c.leafGreen,
    iconDisabled: c.sageLight,

    borderPrimary: c.paleLime,
    borderSecondary: c.limeWhite,
    borderFocused: c.limeGreen,
    separator: c.paleLime,

    inputBackground: c.white,
    inputBorder: c.paleLime,
    inputPlaceholder: c.sageLight,

    accent: c.sunYellow,
    error: c.errorRed,
    success: c.successGreen,
    warning: c.goldenYellow,
    info: c.infoBlue,
    onError: c.white,
    onSuccess: c.white,
    onWarning: c.white,
    onInfo: c.white,
    onAccent: c.oliveGreen,

    overlay: `rgba(10,26,0,${opacity.overlayMedium})`,
    highlight: `rgba(101,163,13,${opacity.overlayLight})`,
    ripple: `rgba(10,26,0,${opacity.overlayLight})`,
    disabled: c.paleLime,

    card: c.white,
    notification: c.sunYellow,
    tabBarActive: c.leafGreen,
    tabBarInactive: c.sageLight,
    tabBarBackground: c.white,

    shadow: c.oliveGreen,
    skeleton: c.paleLime,
  },
};

const darkCitrus: Theme = {
  dark: true,
  colors: {
    background: c.voidGreen,

    surfacePrimary: c.darkOlive,
    surfaceSecondary: c.deepOlive,
    surfaceTertiary: c.voidGreen,
    surfaceOverlay: c.deepOlive,

    primary: c.brightLime,
    secondary: c.sunYellow,
    tertiary: c.limeYellow,
    onPrimary: c.voidGreen,
    onSecondary: c.voidGreen,
    onTertiary: c.voidGreen,
    primaryContainer: `rgba(190,242,100,${opacity.tint})`,

    textPrimary: c.limeWhite,
    textSecondary: c.brightLime,
    textTertiary: c.sunYellow,
    textDisabled: c.deepOlive,
    textInverse: c.voidGreen,
    textLink: c.brightLime,

    iconPrimary: c.limeWhite,
    iconSecondary: c.brightLime,
    iconDisabled: c.deepOlive,

    borderPrimary: c.limeYellow,
    borderSecondary: c.deepOlive,
    borderFocused: c.brightLime,
    separator: c.deepOlive,

    inputBackground: c.darkOlive,
    inputBorder: c.limeYellow,
    inputPlaceholder: c.limeYellow,

    accent: c.paleYellow,
    error: c.softRed,
    success: c.softGreen,
    warning: c.softYellow,
    info: c.skyBlue,
    onError: c.voidGreen,
    onSuccess: c.voidGreen,
    onWarning: c.voidGreen,
    onInfo: c.voidGreen,
    onAccent: c.voidGreen,

    overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
    highlight: `rgba(190,242,100,${opacity.overlayLight})`,
    ripple: `rgba(247,254,231,${opacity.overlayLight})`,
    disabled: c.deepOlive,

    card: c.darkOlive,
    notification: c.sunYellow,
    tabBarActive: c.limeWhite,
    tabBarInactive: c.limeYellow,
    tabBarBackground: c.darkOlive,

    shadow: c.white,
    skeleton: c.deepOlive,
  },
};

export const citrusPalette = { light: lightCitrus, dark: darkCitrus };
