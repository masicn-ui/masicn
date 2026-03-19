/**
 * Masi palette — the default masicn theme.
 * Warm papayaWhip backgrounds with deep teal-inkBlack primaries and vivid tangerine accents.
 * Re-exports the built-in `lightTheme` / `darkTheme` directly; use `masiPalette` when
 * choosing a palette by name (e.g. from the palette picker).
 */
import { lightTheme } from '../light';
import { darkTheme } from '../dark';

export const masiPalette = { light: lightTheme, dark: darkTheme };
