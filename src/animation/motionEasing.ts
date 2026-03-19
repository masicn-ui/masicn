//
// Reanimated-specific easing functions — kept in a separate file so that
// animation/motion.ts (pure tokens) can be imported without triggering the
// Reanimated worklet runtime. Only import this file from components that
// actually run Reanimated animations.

import { Easing as ReanimatedEasing } from 'react-native-reanimated';

/**
 * Use these with withTiming() in Reanimated animations:
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
