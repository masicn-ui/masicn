import React from 'react';
import { View, type ViewProps, type ColorValue } from 'react-native';

export interface CircleProps extends ViewProps {
  /** Diameter in points */
  size: number;
  backgroundColor?: ColorValue;
}

/**
 * A perfectly circular container. Useful for avatars, status indicators,
 * icon badges, and any circular UI element.
 */
export function Circle({ size, backgroundColor, style, children, ...rest }: CircleProps) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
