import { useMemo } from 'react';
import type { AccessibilityRole, AccessibilityState } from 'react-native';

interface AccessibilityConfig {
  role?: AccessibilityRole;
  label?: string;
  hint?: string;
  state?: AccessibilityState;
  liveRegion?: 'none' | 'polite' | 'assertive';
  modal?: boolean;
}

interface AccessibilityProps {
  accessibilityRole?: AccessibilityRole;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityState?: AccessibilityState;
  accessibilityLiveRegion?: 'none' | 'polite' | 'assertive';
  accessibilityViewIsModal?: boolean;
  accessible: boolean;
}

/**
 * Builds a spread-ready set of accessibility props from a declarative config.
 *
 * Usage:
 * ```tsx
 * const a11y = useAccessibilityProps({
 *   role: 'button',
 *   label: 'Submit form',
 *   state: { disabled: false },
 * });
 * return <Pressable {...a11y} />;
 * ```
 */
export function useAccessibilityProps(config: AccessibilityConfig): AccessibilityProps {
  return useMemo(() => {
    const props: AccessibilityProps = {
      accessible: true,
    };

    if (config.role) {
      props.accessibilityRole = config.role;
    }
    if (config.label) {
      props.accessibilityLabel = config.label;
    }
    if (config.hint) {
      props.accessibilityHint = config.hint;
    }
    if (config.state) {
      props.accessibilityState = config.state;
    }
    if (config.liveRegion && config.liveRegion !== 'none') {
      props.accessibilityLiveRegion = config.liveRegion;
    }
    if (config.modal) {
      props.accessibilityViewIsModal = true;
    }

    return props;
  }, [
    config.role,
    config.label,
    config.hint,
    config.state,
    config.liveRegion,
    config.modal,
  ]);
}
