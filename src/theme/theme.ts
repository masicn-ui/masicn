/**
 * Semantic theme shape — both light and dark must satisfy this interface.
 *
 * Naming convention: primary / secondary / tertiary
 * consistently across all token groups.
 *
 * Token groups:
 *   Background   – full-screen canvas
 *   Surface      – cards, sheets, modals
 *   Brand        – actionable / branded elements
 *   Text         – typographic hierarchy
 *   Icon         – iconography hierarchy
 *   Border       – strokes & dividers
 *   Input        – form controls
 *   Status       – feedback colours
 *   Interactive  – overlays, ripples, highlights
 *   Navigation   – nav-bar, tab-bar, cards
 *   Misc         – shadows, skeletons, badges
 */
export interface Theme {
    dark: boolean;
    colors: {
        // ── Background ──
        background: string;

        // ── Surfaces ──
        surfacePrimary: string;
        surfaceSecondary: string;
        surfaceTertiary: string;

        // ── Brand ──
        primary: string;
        secondary: string;
        tertiary: string;
        onPrimary: string;
        onSecondary: string;
        onTertiary: string;

        // ── Text ──
        textPrimary: string;
        textSecondary: string;
        textTertiary: string;
        textDisabled: string;
        textInverse: string;

        // ── Icons ──
        iconPrimary: string;
        iconSecondary: string;
        iconDisabled: string;

        // ── Borders ──
        borderPrimary: string;
        borderSecondary: string;
        borderFocused: string;
        separator: string;

        // ── Inputs ──
        inputBackground: string;
        inputBorder: string;
        inputPlaceholder: string;

        // ── Status ──
        accent: string;
        error: string;
        success: string;
        warning: string;
        info: string;
        onError: string;
        onSuccess: string;
        onWarning: string;
        onInfo: string;

        // ── Interactive ──
        overlay: string;
        highlight: string;
        ripple: string;
        disabled: string;

        // ── Navigation ──
        card: string;
        notification: string;
        tabBarActive: string;
        tabBarInactive: string;

        // ── Misc ──
        shadow: string;
        skeleton: string;
        backdrop: string;
    };
}
