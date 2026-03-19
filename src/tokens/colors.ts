/**
 * Raw color palette — the only place hex values should live.
 * Components never import this directly; they consume semantic
 * tokens via the theme object instead.
 *
 * New vibrant palette with warm and cool tones
 */

export const palette = {
  // Dark base tones (Set 1)
  /** `#001219` — Deepest dark teal-black. Primary dark surface. */
  inkBlack: '#001219',
  /** `#005f73` — Deep teal. Dark accent / brand mid-tone. */
  darkTeal: '#005f73',
  /** `#0a9396` — Bright teal-cyan. Interactive accent. */
  darkCyan: '#0a9396',
  /** `#94d2bd` — Soft aqua. Light accent, highlight tint. */
  pearlAqua: '#94d2bd',

  // Warm tones (Set 1)
  /** `#e9d8a6` — Warm cream. Light background tint, card fill. */
  vanillaCustard: '#e9d8a6',
  /** `#ee9b00` — Vivid golden orange. Primary brand accent. */
  goldenOrange: '#ee9b00',
  /** `#ca6702` — Burnt amber. Warning / caution tone. */
  burntCaramel: '#ca6702',
  /** `#bb3e03` — Deep rust. Strong warning, error-adjacent. */
  rustySpice: '#bb3e03',
  /** `#ae2012` — Oxidized red. Error / destructive action. */
  oxidizedIron: '#ae2012',
  /** `#9b2226` — Deep brownish-red. Critical / danger tone. */
  brownRed: '#9b2226',

  // Navy & blue tones (Set 2)
  /** `#000814` — Near-black navy. Alternate dark base. */
  inkBlackAlt: '#000814',
  /** `#001d3d` — Prussian blue. Deep dark surface for navy palette. */
  prussianBlue: '#001d3d',
  /** `#003566` — Regal navy. Dark navy accent / surface. */
  regalNavy: '#003566',

  // Bright accents (Set 2)
  /** `#ffc300` — School bus yellow. High-visibility accent. */
  schoolBusYellow: '#ffc300',
  /** `#ffd60a` — Pure gold. Bright accent, badge highlights. */
  gold: '#ffd60a',

  // Additional tones (Set 3)
  /** `#001524` — Deep navy-black. Darkest surface in Set 3. */
  inkBlackDeep: '#001524',
  /** `#15616d` — Stormy teal. Mid-range teal surface / accent. */
  stormyTeal: '#15616d',
  /** `#ffecd1` — Papaya whip. Warm off-white background. */
  papayaWhip: '#ffecd1',
  /** `#ff7d00` — Vivid tangerine. Strong warm accent. */
  vividTangerine: '#ff7d00',
  /** `#78290f` — Deep brandy brown. Earthy accent / error tone. */
  brandy: '#78290f',

  // Absolute values — use sparingly via rgba() utility
  /** `#ffffff` — Pure white. */
  white: '#ffffff',
  /** `#000000` — Pure black. */
  black: '#000000',
  /** Fully transparent. */
  transparent: 'transparent',

  // Pre-built overlay colours (use rgba() in light/dark instead of hardcoding)
  /** `rgba(0,0,0,0.5)` — Semi-transparent black overlay. */
  overlayBlack: 'rgba(0,0,0,0.5)',
  /** `rgba(0,18,25,0.4)` — Semi-transparent inkBlack overlay. */
  overlayInk: 'rgba(0,18,25,0.4)',
  /** `rgba(238,155,0,0.12)` — Warm highlight tint (goldenOrange at 12%). */
  overlayHighlight: 'rgba(238,155,0,0.12)',
} as const;

export type Palette = typeof palette;
