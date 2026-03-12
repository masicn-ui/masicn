// File: src/hooks/useReducedMotion.ts

import { useEffect, useState } from 'react';
import { AccessibilityInfo } from 'react-native';

/**
 * Returns `true` when the user has enabled "Reduce Motion" in system settings.
 *
 * Usage:
 * ```ts
 * const reducedMotion = useReducedMotion();
 * const config = reducedMotion
 *   ? { duration: 0 }
 *   : { damping: 12, stiffness: 200 };
 * ```
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduced);

    const subscription = AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      setReduced,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return reduced;
}
