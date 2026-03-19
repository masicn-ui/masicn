/**
 * Raw color palette — the only place hex values should live.
 * Components never import this directly; they consume semantic
 * tokens via the theme object instead.
 *
 * New vibrant palette with warm and cool tones
 */

export const palette = {
  // Dark base tones (Set 1)
  inkBlack: '#001219',
  darkTeal: '#005f73',
  darkCyan: '#0a9396',
  pearlAqua: '#94d2bd',

  // Warm tones (Set 1)
  vanillaCustard: '#e9d8a6',
  goldenOrange: '#ee9b00',
  burntCaramel: '#ca6702',
  rustySpice: '#bb3e03',
  oxidizedIron: '#ae2012',
  brownRed: '#9b2226',

  // Navy & blue tones (Set 2)
  inkBlackAlt: '#000814',
  prussianBlue: '#001d3d',
  regalNavy: '#003566',

  // Bright accents (Set 2)
  schoolBusYellow: '#ffc300',
  gold: '#ffd60a',

  // Additional tones (Set 3)
  inkBlackDeep: '#001524',
  stormyTeal: '#15616d',
  papayaWhip: '#ffecd1',
  vividTangerine: '#ff7d00',
  brandy: '#78290f',

  // Absolute values — use sparingly via rgba() utility
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',

  // Pre-built overlay colours (use rgba() in light/dark instead of hardcoding)
  overlayBlack: 'rgba(0,0,0,0.5)',
  overlayInk: 'rgba(0,18,25,0.4)',
  overlayHighlight: 'rgba(238,155,0,0.12)',
} as const;

export type Palette = typeof palette;
