import React from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../theme';
import { layout } from '../tokens';

interface ScreenProps extends ViewProps {
  /** Horizontal padding — defaults to lg (16) */
  padded?: boolean;
  /** Respect safe area insets */
  safe?: boolean;
}

export function Screen({
  children,
  style,
  padded = true,
  safe = true,
  ...rest
}: ScreenProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.root,
        { backgroundColor: theme.colors.background },
        safe && {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        padded && styles.padded,
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  padded: {
    paddingHorizontal: layout.screenPadding,
  },
});
