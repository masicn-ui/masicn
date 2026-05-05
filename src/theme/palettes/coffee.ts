/**
 * Coffee palette — espresso browns, warm cream, and caramel accents.
 * Light: deep roasted-brown primaries on a latte-cream background.
 * Dark: true espresso surfaces with caramel highlight text.
 * Ideal for lifestyle, food, and warm editorial apps.
 */
import type { Theme } from '../theme';
import { opacity } from '../../tokens/opacity';

const c = {
  white: '#ffffff',
  black: '#000000',
  // Light backgrounds
  latteCream: '#faf6f0',
  vanillaMilk: '#f0e8dc',
  // Dark backgrounds
  darkEspresso: '#100700',
  richEspresso: '#1e0c00',
  midEspresso: '#2c1400',
  // Brand
  darkRoast: '#3e1c00',
  mediumRoast: '#6b3a1f',
  lightRoast: '#9c5c38',
  caramelCream: '#e0b48a',
  caramel: '#c47a3c',
  // Muted
  milkyCoffee: '#c8a882',
  creamyBeige: '#e0ccb4',
  // Accent
  butterscotch: '#f0c070',
  // Status
  errorRed: '#b91c1c',
  forestGreen: '#15803d',
  warningBrown: '#b45309',
  softRed: '#f87171',
  softGreen: '#4ade80',
  softYellow: '#fbbf24',
} as const;

const lightCoffee: Theme = {
  dark: false,
  colors: {
    background: c.latteCream,

    surfacePrimary: c.white,
    surfaceSecondary: c.vanillaMilk,
    surfaceTertiary: c.latteCream,
    surfaceOverlay: c.white,

    primary: c.darkRoast,
    secondary: c.mediumRoast,
    tertiary: c.lightRoast,
    onPrimary: c.white,
    onSecondary: c.white,
    onTertiary: c.white,
    primaryContainer: `rgba(62,28,0,${opacity.tint})`,

    textPrimary: c.richEspresso,
    textSecondary: c.darkRoast,
    textTertiary: c.mediumRoast,
    textDisabled: c.milkyCoffee,
    textInverse: c.latteCream,
    textLink: c.lightRoast,

    iconPrimary: c.richEspresso,
    iconSecondary: c.darkRoast,
    iconDisabled: c.milkyCoffee,

    borderPrimary: c.creamyBeige,
    borderSecondary: c.vanillaMilk,
    borderFocused: c.lightRoast,
    separator: c.creamyBeige,

    inputBackground: c.white,
    inputBorder: c.creamyBeige,
    inputPlaceholder: c.milkyCoffee,

    accent: c.caramel,
    error: c.errorRed,
    success: c.forestGreen,
    warning: c.warningBrown,
    info: c.darkRoast,
    onError: c.white,
    onSuccess: c.white,
    onWarning: c.white,
    onInfo: c.white,
    onAccent: c.white,

    overlay: `rgba(30,12,0,${opacity.overlayMedium})`,
    highlight: `rgba(156,92,56,${opacity.overlayLight})`,
    ripple: `rgba(30,12,0,${opacity.overlayLight})`,
    disabled: c.vanillaMilk,

    card: c.white,
    notification: c.caramel,
    tabBarActive: c.darkRoast,
    tabBarInactive: c.milkyCoffee,
    tabBarBackground: c.white,

    shadow: c.richEspresso,
    skeleton: c.vanillaMilk,
  },
};

const darkCoffee: Theme = {
  dark: true,
  colors: {
    background: c.darkEspresso,

    surfacePrimary: c.richEspresso,
    surfaceSecondary: c.midEspresso,
    surfaceTertiary: c.darkEspresso,
    surfaceOverlay: c.midEspresso,

    primary: c.caramelCream,
    secondary: c.caramel,
    tertiary: c.lightRoast,
    onPrimary: c.darkEspresso,
    onSecondary: c.darkEspresso,
    onTertiary: c.white,
    primaryContainer: `rgba(224,180,138,${opacity.tint})`,

    textPrimary: c.latteCream,
    textSecondary: c.caramelCream,
    textTertiary: c.caramel,
    textDisabled: c.midEspresso,
    textInverse: c.darkEspresso,
    textLink: c.caramelCream,

    iconPrimary: c.latteCream,
    iconSecondary: c.caramelCream,
    iconDisabled: c.midEspresso,

    borderPrimary: c.lightRoast,
    borderSecondary: c.midEspresso,
    borderFocused: c.caramelCream,
    separator: c.midEspresso,

    inputBackground: c.richEspresso,
    inputBorder: c.lightRoast,
    inputPlaceholder: c.lightRoast,

    accent: c.butterscotch,
    error: c.softRed,
    success: c.softGreen,
    warning: c.softYellow,
    info: c.caramelCream,
    onError: c.darkEspresso,
    onSuccess: c.darkEspresso,
    onWarning: c.darkEspresso,
    onInfo: c.darkEspresso,
    onAccent: c.darkEspresso,

    overlay: `rgba(0,0,0,${opacity.overlayHeavy})`,
    highlight: `rgba(224,180,138,${opacity.overlayLight})`,
    ripple: `rgba(250,246,240,${opacity.overlayLight})`,
    disabled: c.midEspresso,

    card: c.richEspresso,
    notification: c.caramel,
    tabBarActive: c.latteCream,
    tabBarInactive: c.lightRoast,
    tabBarBackground: c.richEspresso,

    shadow: c.white,
    skeleton: c.midEspresso,
  },
};

export const coffeePalette = { light: lightCoffee, dark: darkCoffee };
