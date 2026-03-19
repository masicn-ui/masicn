import { TextStyle } from 'react-native';

/**
 * Installed Font Families
 */
export const fontFamilies = {
  inter: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    bold: 'Inter-Bold',
  },
  dmSans: {
    regular: 'DMSans-Regular',
    medium: 'DMSans-Medium',
    bold: 'DMSans-Bold',
  },
  manrope: {
    regular: 'Manrope-Regular',
    medium: 'Manrope-Medium',
    bold: 'Manrope-Bold',
  },
  outfit: {
    regular: 'Outfit-Regular',
    medium: 'Outfit-Medium',
    bold: 'Outfit-Bold',
  },
  poppins: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
  },
} as const;

export type FontFamilyKey = keyof typeof fontFamilies;
export type FontWeightKey = 'regular' | 'medium' | 'bold';

/**
 * Active Font Roles
 * You can switch these to any of the families above.
 */
export const fonts = {
  display: fontFamilies.poppins,  // Headings
  ui: fontFamilies.inter,         // Body / core UI
  accent: fontFamilies.outfit,    // Buttons / labels
} as const;

export type FontRole = keyof typeof fonts;

/**
 * Typography Scale
 */
export const typography = {
  // Display
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: fonts.display.bold,
  } satisfies TextStyle,

  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fonts.display.bold,
  } satisfies TextStyle,

  h3: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: fonts.display.medium,
  } satisfies TextStyle,

  // Body
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  bodySmall: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  bodyLarge: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  // Labels
  label: {
    fontSize: 13,
    lineHeight: 18,
    fontFamily: fonts.accent.medium,
  } satisfies TextStyle,

  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  captionSmall: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  // Titles
  titleSmall: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: fonts.display.medium,
  } satisfies TextStyle,

  titleMedium: {
    fontSize: 22,
    lineHeight: 30,
    fontFamily: fonts.display.bold,
  } satisfies TextStyle,

  // Section header
  sectionHeader: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.2,
    fontFamily: fonts.accent.bold,
  } satisfies TextStyle,

  // Buttons
  button: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: fonts.accent.bold,
  } satisfies TextStyle,

  buttonSmall: {
    fontSize: 13,
    lineHeight: 18,
    fontFamily: fonts.accent.medium,
  } satisfies TextStyle,
} as const;

export type Typography = typeof typography;
export type TypographyVariant = keyof Typography;
