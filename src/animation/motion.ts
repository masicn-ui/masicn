// File: src/animation/motion.ts

import { Easing } from 'react-native';
import { Easing as ReanimatedEasing } from 'react-native-reanimated';

/**
 * Motion tokens — ensures consistent animation timing across the app.
 * Works with Reanimated, Animated, LayoutAnimation, and gesture transitions.
 *
 * For Reanimated-specific easing, import from `motionEasing` instead.
 */

export const motion = {
    duration: {
        instant: 0,
        fast: 120,
        normal: 200,
        slow: 300,
        slower: 500,
        dramatic: 700,
    },

    /**
     * Easing functions — compatible with React Native's Animated API.
     * Use `motionEasing` from motionEasing.ts for Reanimated withTiming().
     */
    easing: {
        standard: Easing.inOut(Easing.ease),
        accelerate: Easing.in(Easing.ease),
        decelerate: Easing.out(Easing.ease),
        linear: Easing.linear,
    },

    /**
     * Spring presets for gestures & physics animations.
     *
     * Damping ratio ζ = damping / (2 × √(stiffness × mass)).
     * ζ ≥ 1.0 → critically damped (no overshoot).
     * ζ ∈ [0.7, 1.0) → slight overshoot, snappy feel.
     * ζ < 0.7 → noticeable bounce (use only for `bouncy`).
     */
    spring: {
        /** Smooth settle — ζ ≈ 1.06, no overshoot. Default for most UI elements. */
        gentle: {
            damping: 26,
            stiffness: 150,
        },
        /** Fast + crisp — ζ ≈ 0.74, minimal overshoot. Good for swipe snap. */
        snappy: {
            damping: 22,
            stiffness: 220,
        },
        /** Intentionally bouncy — ζ ≈ 0.37. Use sparingly for playful moments. */
        bouncy: {
            damping: 10,
            stiffness: 180,
        },
        /** Balanced layout transitions — ζ ≈ 0.99, almost no overshoot. */
        responsive: {
            damping: 28,
            stiffness: 200,
        },
        /** Bottom/side sheets — ζ ≈ 0.90, crisp settle. */
        sheet: {
            damping: 28,
            stiffness: 300,
            mass: 0.8,
        },
        /** Carousel & list snap — ζ ≈ 1.29, over-damped for instant locking. */
        snap: {
            damping: 40,
            stiffness: 300,
            mass: 0.8,
        },
        /** Dialogs & modals scale-in — ζ ≈ 0.87, subtle spring feel. */
        dialog: {
            damping: 28,
            stiffness: 260,
        },
    },
} as const;

export type Motion = typeof motion;


/**
 * Reanimated-specific easing functions, isolated from motion.ts so that
 * environments without react-native-reanimated don't crash on import.
 *
 * Use these with withTiming() / runWithTiming() in Reanimated animations:
 * ```ts
 * withTiming(1, { duration: motion.duration.normal, easing: motionEasing.standard })
 * ```
 */
export const motionEasing = {
    /** Smooth in-out — default for most UI transitions */
    standard: ReanimatedEasing.inOut(ReanimatedEasing.ease),

    /** Starts slow, accelerates — use for elements leaving the screen */
    accelerate: ReanimatedEasing.in(ReanimatedEasing.ease),

    /** Starts fast, decelerates — use for elements entering the screen */
    decelerate: ReanimatedEasing.out(ReanimatedEasing.ease),

    /** Constant rate — use for progress indicators, loaders */
    linear: ReanimatedEasing.linear,
} as const;

export type MotionEasing = typeof motionEasing;
