import React from 'react';
import {
  Pressable as RNPressable,
  type PressableProps as RNPressableProps,
} from 'react-native';
import { opacity as opacityTokens } from '../tokens';

export interface PressableProps extends Omit<RNPressableProps, 'style'> {
  /** Visual press feedback — 'opacity' dims on press, 'none' for custom handling */
  feedback?: 'opacity' | 'none';
  /** Extend touch area on all sides in points */
  hitSlop?: number;
  style?: RNPressableProps['style'];
}

/**
 * Themed Pressable with consistent press-opacity feedback and disabled styling.
 * Prefer this over raw RN Pressable everywhere in the design system.
 */
export function Pressable({
  children,
  style,
  feedback = 'opacity',
  disabled = false,
  hitSlop,
  ...rest
}: PressableProps) {
  return (
    <RNPressable
      disabled={disabled}
      hitSlop={hitSlop}
      style={({ pressed }) => [
        disabled && { opacity: opacityTokens.disabled },
        feedback === 'opacity' && pressed && { opacity: opacityTokens.pressed },
        typeof style === 'function' ? style({ pressed }) : style,
      ]}
      {...rest}
    >
      {children}
    </RNPressable>
  );
}
