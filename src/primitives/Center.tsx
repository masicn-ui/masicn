// File: src/primitives/Center.tsx

import React from 'react';
import { View, StyleSheet, type ViewProps, type ViewStyle } from 'react-native';
import { spacing, type Spacing } from '../tokens';

export interface CenterProps extends ViewProps {
  flex?: ViewStyle['flex'];
  padding?: keyof Spacing;
}

/**
 * Centers its children both horizontally and vertically.
 */
export function Center({ children, style, flex, padding, ...rest }: CenterProps) {
  return (
    <View
      style={[
        styles.root,
        flex !== undefined && { flex },
        padding !== undefined && { padding: spacing[padding] },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
