import React from 'react';
import { View, type ViewProps, type ViewStyle, type ColorValue } from 'react-native';
import { spacing, radius, borders, type Spacing, type Radius, type Borders } from '../tokens';

interface BoxProps extends ViewProps {
  // ── Spacing ─────────────────────────────────────────────────────────────────
  padding?: keyof Spacing;
  paddingHorizontal?: keyof Spacing;
  paddingVertical?: keyof Spacing;
  paddingTop?: keyof Spacing;
  paddingBottom?: keyof Spacing;
  paddingLeft?: keyof Spacing;
  paddingRight?: keyof Spacing;
  margin?: keyof Spacing;
  marginTop?: keyof Spacing;
  marginBottom?: keyof Spacing;
  marginLeft?: keyof Spacing;
  marginRight?: keyof Spacing;
  marginHorizontal?: keyof Spacing;
  marginVertical?: keyof Spacing;
  gap?: keyof Spacing;

  // ── Layout ──────────────────────────────────────────────────────────────────
  flex?: ViewStyle['flex'];
  flexDirection?: ViewStyle['flexDirection'];
  flexWrap?: ViewStyle['flexWrap'];
  alignItems?: ViewStyle['alignItems'];
  alignSelf?: ViewStyle['alignSelf'];
  justifyContent?: ViewStyle['justifyContent'];

  // ── Appearance ──────────────────────────────────────────────────────────────
  /**
   * Background color — prefer design-token values (e.g. `theme.colors.surfacePrimary`).
   * Accepts any `ColorValue` for flexibility, but raw hex/named strings bypass the
   * token system and won't respond to theme changes.
   */
  backgroundColor?: ColorValue;
  borderRadius?: keyof Radius;
  borderWidth?: keyof Borders;
  /** Border color — pass a theme color value */
  borderColor?: ColorValue;
  overflow?: ViewStyle['overflow'];
}

export function Box({
  children,
  style,
  // spacing
  padding,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginHorizontal,
  marginVertical,
  gap,
  // layout
  flex,
  flexDirection,
  flexWrap,
  alignItems,
  alignSelf,
  justifyContent,
  // appearance
  backgroundColor,
  borderRadius: borderRadiusProp,
  borderWidth: borderWidthProp,
  borderColor,
  overflow,
  ...rest
}: BoxProps) {
  return (
    <View
      style={[
        padding !== undefined && { padding: spacing[padding] },
        paddingHorizontal !== undefined && { paddingHorizontal: spacing[paddingHorizontal] },
        paddingVertical !== undefined && { paddingVertical: spacing[paddingVertical] },
        paddingTop !== undefined && { paddingTop: spacing[paddingTop] },
        paddingBottom !== undefined && { paddingBottom: spacing[paddingBottom] },
        paddingLeft !== undefined && { paddingLeft: spacing[paddingLeft] },
        paddingRight !== undefined && { paddingRight: spacing[paddingRight] },
        margin !== undefined && { margin: spacing[margin] },
        marginTop !== undefined && { marginTop: spacing[marginTop] },
        marginBottom !== undefined && { marginBottom: spacing[marginBottom] },
        marginLeft !== undefined && { marginLeft: spacing[marginLeft] },
        marginRight !== undefined && { marginRight: spacing[marginRight] },
        marginHorizontal !== undefined && { marginHorizontal: spacing[marginHorizontal] },
        marginVertical !== undefined && { marginVertical: spacing[marginVertical] },
        gap !== undefined && { gap: spacing[gap] },
        flex !== undefined && { flex },
        flexDirection !== undefined && { flexDirection },
        flexWrap !== undefined && { flexWrap },
        alignItems !== undefined && { alignItems },
        alignSelf !== undefined && { alignSelf },
        justifyContent !== undefined && { justifyContent },
        backgroundColor !== undefined && { backgroundColor },
        borderRadiusProp !== undefined && { borderRadius: radius[borderRadiusProp] },
        borderWidthProp !== undefined && { borderWidth: borders[borderWidthProp] },
        borderColor !== undefined && { borderColor },
        overflow !== undefined && { overflow },
        style,
      ]}
      {...rest}>
      {children}
    </View>
  );
}
