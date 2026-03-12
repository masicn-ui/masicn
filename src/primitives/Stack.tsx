// File: src/primitives/Stack.tsx

import React from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import { spacing, type Spacing } from '../tokens';

interface StackProps extends ViewProps {
  /** Gap between children — defaults to md (12) */
  gap?: keyof Spacing;
}

/**
 * Vertical stack with consistent spacing between children.
 */
export function Stack({ children, gap = 'md', style, ...rest }: StackProps) {
  return (
    <View style={[styles.root, { gap: spacing[gap] }, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
});
