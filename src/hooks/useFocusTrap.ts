// File: src/hooks/useFocusTrap.ts

import { useRef, useEffect, useCallback } from 'react';
import { AccessibilityInfo, findNodeHandle, type View } from 'react-native';

interface FocusTrapOptions {
  /** Whether the trap is currently active */
  active: boolean;
}

/**
 * Manages focus trapping for overlays (Modal, BottomSheet, ActionSheet).
 *
 * - On open: sets accessibility focus to the container via AccessibilityInfo
 * - On close: restores focus to the element that was focused before opening
 *
 * ## Platform limitation
 * React Native has no DOM-equivalent focus management. This hook uses
 * `AccessibilityInfo.setAccessibilityFocus`, which moves the screen reader
 * cursor (VoiceOver / TalkBack) to the container, but it does NOT trap keyboard
 * focus or prevent sighted-keyboard users from tabbing outside the overlay.
 * True tab-cycle trapping is only achievable on React Native Web where the
 * underlying DOM APIs are available.
 *
 * For native iOS/Android, pairing this hook with `accessibilityViewIsModal={true}`
 * on the container is the correct approach — the OS modal flag prevents screen
 * readers from navigating to elements outside the overlay.
 *
 * Usage:
 * ```tsx
 * const { containerRef } = useFocusTrap({ active: visible });
 * return (
 *   <View ref={containerRef} accessible accessibilityViewIsModal>...</View>
 * );
 * ```
 */
export function useFocusTrap({ active }: FocusTrapOptions) {
  const containerRef = useRef<View>(null);
  const previousFocusRef = useRef<View>(null);

  const setFocusToContainer = useCallback(() => {
    if (containerRef.current) {
      const node = findNodeHandle(containerRef.current);
      if (node) {
        AccessibilityInfo.setAccessibilityFocus(node);
      }
    }
  }, []);

  const restoreFocus = useCallback(() => {
    if (previousFocusRef.current) {
      const node = findNodeHandle(previousFocusRef.current);
      if (node) {
        AccessibilityInfo.setAccessibilityFocus(node);
      }
    }
  }, []);

  useEffect(() => {
    if (active) {
      // Small delay to allow the overlay to mount and layout
      const timeout = setTimeout(setFocusToContainer, 100);
      return () => clearTimeout(timeout);
    } else {
      restoreFocus();
    }
  }, [active, setFocusToContainer, restoreFocus]);

  return {
    containerRef,
    previousFocusRef,
  };
}
