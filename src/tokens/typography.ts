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
  /** `32/40` — Page title. Top-level screen heading. Poppins Bold. */
  h1: {
    fontSize: 32,
    lineHeight: 40,
    fontFamily: fonts.display.bold,
  } satisfies TextStyle,

  /** `24/32` — Section heading. Major content sections. Poppins Bold. */
  h2: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: fonts.display.bold,
  } satisfies TextStyle,

  /** `20/28` — Sub-section heading. Card titles, dialog headings. Poppins Medium. */
  h3: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: fonts.display.medium,
  } satisfies TextStyle,

  /** `16/24` — Default reading text. The standard body copy size. Inter Regular. */
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  /** `14/20` — Secondary body text. Descriptions, supporting copy. Inter Regular. */
  bodySmall: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  /** `18/28` — Larger body text. Intro paragraphs, featured copy. Inter Regular. */
  bodyLarge: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  /** `13/18` — Input labels, tab labels, form hints. Outfit Medium. */
  label: {
    fontSize: 13,
    lineHeight: 18,
    fontFamily: fonts.accent.medium,
  } satisfies TextStyle,

  /** `12/16` — Metadata, timestamps, helper text. Inter Regular. */
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  /** `11/14` — Legal text, disclaimers, fine print. Inter Regular. */
  captionSmall: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: fonts.ui.regular,
  } satisfies TextStyle,

  /** `18/24` — Small card / list item title. Poppins Medium. */
  titleSmall: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: fonts.display.medium,
  } satisfies TextStyle,

  /** `22/30` — Dialog / bottom sheet title. Poppins Bold. */
  titleMedium: {
    fontSize: 22,
    lineHeight: 30,
    fontFamily: fonts.display.bold,
  } satisfies TextStyle,

  /** `12/16` — Uppercase section label with wide letter-spacing (1.2px). Outfit Bold. */
  sectionHeader: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1.2,
    fontFamily: fonts.accent.bold,
  } satisfies TextStyle,

  /** `15/20` — Default button label. Outfit Bold. */
  button: {
    fontSize: 15,
    lineHeight: 20,
    fontFamily: fonts.accent.bold,
  } satisfies TextStyle,

  /** `13/18` — Small button label. Outfit Medium. */
  buttonSmall: {
    fontSize: 13,
    lineHeight: 18,
    fontFamily: fonts.accent.medium,
  } satisfies TextStyle,
} as const;

export type Typography = typeof typography;
export type TypographyVariant = keyof Typography;
