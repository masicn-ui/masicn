import React from 'react';
import { View, type ViewProps, type ColorValue } from 'react-native';
import { radius, type Radius } from '../tokens';

export interface SquareProps extends ViewProps {
  /** Side length in points */
  size: number;
  backgroundColor?: ColorValue;
  /** Optional corner rounding via radius token */
  borderRadius?: keyof Radius;
}

/**
 * A fixed square container. Useful for icon wrappers, thumbnail placeholders,
 * and any UI element that must maintain equal width and height.
 */
export function Square({ size, backgroundColor, borderRadius: borderRadiusProp, style, children, ...rest }: SquareProps) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          backgroundColor,
        },
        borderRadiusProp !== undefined && { borderRadius: radius[borderRadiusProp] },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
