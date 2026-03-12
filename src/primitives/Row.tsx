// File: src/primitives/Row.tsx

import React from 'react';
import { StyleSheet, View, type ViewProps, type ViewStyle } from 'react-native';
import { spacing, type Spacing } from '../tokens';

interface RowProps extends ViewProps {
  /** Gap between children — defaults to sm (8) */
  gap?: keyof Spacing;
  /** Main axis alignment */
  justify?: ViewStyle['justifyContent'];
  /** Cross axis alignment */
  align?: ViewStyle['alignItems'];
  /** Allow wrapping */
  wrap?: boolean;
}

/**
 * Horizontal row with consistent spacing between children.
 */
export function Row({
  children,
  gap = 'sm',
  justify,
  align = 'center',
  wrap = false,
  style,
  ...rest
}: RowProps) {
  return (
    <View
      style={[
        styles.root,
        { gap: spacing[gap] },
        justify !== undefined && { justifyContent: justify },
        { alignItems: align },
        wrap && styles.wrap,
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  wrap: {
    flexWrap: 'wrap',
  },
});
