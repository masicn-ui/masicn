// File: src/WelcomeScreen.tsx

// Copied to your project by `masicn init`. Feel free to edit or delete.

import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTheme, spacing, radius, borders } from '.';
import { lightTheme } from './theme/light';
import { darkTheme } from './theme/dark';
import {
  SafeAreaScreen,
  Box,
  Stack,
  Row,
  Wrap,
  Center,
  Spacer,
  Divider,
  Surface,
  Circle,
  Square,
  Pressable,
  Text,
} from './primitives';

// ── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    title: 'Typed tokens',
    description: 'Spacing, radius, elevation, color, and typography — every value typed and scale-driven.',
  },
  {
    title: '10 palettes · light & dark',
    description: 'Pick a palette at init. Both themes are generated and written to your project, ready to edit.',
  },
  {
    title: '60+ components',
    description: 'Copy-paste source, no runtime dependency. Yours to read, edit, and ship.',
  },
  {
    title: 'CLI first',
    description: 'One command to init, one to add. Components land in your codebase, not a node_modules black box.',
  },
];

const PRIMITIVES_LIST = [
  'Box', 'Stack', 'Row', 'Wrap', 'Center',
  'Spacer', 'Divider', 'Surface', 'Circle',
  'Square', 'AspectRatio', 'Pressable', 'Text', 'Screen',
];

const PALETTE_KEYS = [
  { key: 'primary' },
  { key: 'secondary' },
  { key: 'background' },
  { key: 'surfacePrimary' },
  { key: 'accent' },
  { key: 'error' },
  { key: 'success' },
] as const;

// ── Shared ────────────────────────────────────────────────────────────────────

function LogoMark() {
  const { theme } = useTheme();
  return (
    <Row gap="xs" align="center">
      <Circle size={18} backgroundColor={theme.colors.primary}>
        <Center flex={1}>
          <Square size={7} backgroundColor={theme.colors.onPrimary} borderRadius="xs" />
        </Center>
      </Circle>
      <Text variant="label" color="textSecondary">masicn</Text>
    </Row>
  );
}

function SectionLabel({ label }: { label: string }) {
  return <Text variant="sectionHeader" color="textTertiary">{label.toUpperCase()}</Text>;
}

// ── Sections ──────────────────────────────────────────────────────────────────

function Hero() {
  const { theme } = useTheme();
  return (
    <Box style={styles.section}>
      <LogoMark />
      <Box style={styles.heroGap} />
      <Stack gap="md">
        <Text variant="h1" color="textPrimary">{'Design system\nfor React Native.'}</Text>
        <Text variant="bodyLarge" color="textSecondary">Copy components. Own your code.</Text>
      </Stack>
      <Box style={styles.tagGap} />
      <Row gap="sm">
        <Surface level="sm" borderRadius="full" style={styles.pill}>
          <Row gap="xs" align="center">
            <Circle size={6} backgroundColor={theme.colors.success} />
            <Text variant="captionSmall" color="textSecondary">v0.1.0 · MIT</Text>
          </Row>
        </Surface>
        <Surface level="sm" borderRadius="full" style={styles.pill}>
          <Text variant="captionSmall" color="textSecondary">React Native CLI</Text>
        </Surface>
      </Row>
    </Box>
  );
}

function Features() {
  const { theme } = useTheme();
  return (
    <Box style={styles.section}>
      <SectionLabel label="What's inside" />
      <Box style={styles.labelGap} />
      <Stack gap="xl">
        {FEATURES.map(f => (
          <Row key={f.title} gap="md" align="flex-start">
            <Box style={[styles.accentBar, { backgroundColor: theme.colors.primary }]} />
            <Stack gap="xxs" style={styles.flex1}>
              <Text variant="titleSmall" bold color="textPrimary">{f.title}</Text>
              <Text variant="bodySmall" color="textSecondary">{f.description}</Text>
            </Stack>
          </Row>
        ))}
      </Stack>
    </Box>
  );
}

function Terminal() {
  const { theme } = useTheme();
  const cmds = ['$ npx masicn init', '$ masicn add button card avatar'];
  return (
    <Box style={[styles.terminal, { backgroundColor: theme.colors.textPrimary }]}>
      <Row gap="xs" style={styles.terminalHeader} align="center">
        <Circle size={10} backgroundColor="#ff5f57" />
        <Circle size={10} backgroundColor="#ffbd2e" />
        <Circle size={10} backgroundColor="#28ca41" />
        <Spacer />
        <Text variant="captionSmall" style={styles.terminalDimLabel}>terminal</Text>
      </Row>
      <Divider style={styles.terminalDivider} />
      <Stack gap="sm" style={styles.terminalBody}>
        {cmds.map(cmd => (
          <Row key={cmd} gap="sm" align="center">
            <Text variant="caption" style={styles.terminalPrompt}>›</Text>
            <Text variant="caption" style={styles.terminalCmd}>{cmd}</Text>
          </Row>
        ))}
      </Stack>
    </Box>
  );
}

function QuickStart() {
  return (
    <Box style={styles.section}>
      <SectionLabel label="Get started" />
      <Box style={styles.labelGap} />
      <Terminal />
    </Box>
  );
}

function PrimitivesSection() {
  const { theme } = useTheme();
  return (
    <Box style={styles.section}>
      <Row align="center">
        <SectionLabel label="Primitives" />
        <Spacer />
        <Surface level="sm" borderRadius="full" style={styles.countBadge}>
          <Text variant="captionSmall" color="textTertiary">{PRIMITIVES_LIST.length} built-in</Text>
        </Surface>
      </Row>
      <Box style={styles.labelGap} />
      <Wrap gap="sm">
        {PRIMITIVES_LIST.map(name => (
          <Pressable key={name} feedback="opacity">
            <Box style={[styles.chip, { borderColor: theme.colors.borderPrimary }]}>
              <Text variant="caption" color="textSecondary">{name}</Text>
            </Box>
          </Pressable>
        ))}
      </Wrap>
    </Box>
  );
}

function PaletteSection() {
  return (
    <Box style={styles.section}>
      <SectionLabel label="Your palette" />
      <Box style={styles.labelGap} />
      <Surface level="sm" borderRadius="xl" padding="lg">
        <Stack gap="lg">
          {[
            { emoji: '☀️', label: 'Light', colors: lightTheme.colors },
            { emoji: '🌙', label: 'Dark', colors: darkTheme.colors },
          ].map(({ emoji, label, colors }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <Divider />}
              <Row gap="md" align="center">
                <Row gap="xs" align="center" style={styles.paletteLabel}>
                  <Text variant="caption">{emoji}</Text>
                  <Text variant="captionSmall" color="textTertiary">{label}</Text>
                </Row>
                <Row gap="sm" style={styles.flex1}>
                  {PALETTE_KEYS.map(({ key }) => (
                    <Circle key={key} size={28} backgroundColor={colors[key]} style={styles.swatch} />
                  ))}
                </Row>
              </Row>
            </React.Fragment>
          ))}
        </Stack>
      </Surface>
    </Box>
  );
}

function Footer() {
  return (
    <Box style={styles.footer}>
      <Divider style={styles.footerDivider} />
      <Row align="center">
        <LogoMark />
        <Spacer />
        <Text variant="captionSmall" color="textTertiary">masicn.dev</Text>
      </Row>
    </Box>
  );
}

// ── Screen ────────────────────────────────────────────────────────────────────

export function MasicnWelcomeScreen() {
  const { theme } = useTheme();
  return (
    <SafeAreaScreen>
      <ScrollView
        style={{ backgroundColor: theme.colors.background }}
        showsVerticalScrollIndicator={false}>
        <Hero />
        <Divider inset style={styles.sectionDivider} />
        <Features />
        <Divider inset style={styles.sectionDivider} />
        <QuickStart />
        <Divider inset style={styles.sectionDivider} />
        <PrimitivesSection />
        <Divider inset style={styles.sectionDivider} />
        <PaletteSection />
        <Footer />
      </ScrollView>
    </SafeAreaScreen>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  flex1: { flex: 1 },

  // Layout
  section: { paddingHorizontal: spacing.xl, paddingBottom: spacing.xxl },
  sectionDivider: { marginBottom: spacing.xxl },
  labelGap: { height: spacing.lg },
  heroGap: { height: spacing.xxl },
  tagGap: { height: spacing.xl },

  // Hero tags
  pill: { paddingHorizontal: spacing.md, paddingVertical: spacing.sm },

  // Features
  accentBar: { width: borders.medium, alignSelf: 'stretch', marginTop: spacing.xs, borderRadius: radius.xs },

  // Terminal
  terminal: { borderRadius: radius.xl, overflow: 'hidden' },
  terminalHeader: { padding: spacing.md, paddingBottom: spacing.sm },
  terminalBody: { padding: spacing.lg },
  terminalDimLabel: { color: 'rgba(255,255,255,0.3)' },
  terminalDivider: { backgroundColor: 'rgba(255,255,255,0.08)' },
  terminalPrompt: { color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' },
  terminalCmd: { color: '#fff', fontFamily: 'monospace' },

  // Primitives
  countBadge: { paddingHorizontal: spacing.sm, paddingVertical: spacing.xs },
  chip: { borderWidth: borders.thin, borderRadius: radius.md, paddingHorizontal: spacing.md, paddingVertical: spacing.xs },

  // Palette
  paletteLabel: { width: 68 },
  swatch: { borderWidth: borders.thin, borderColor: 'rgba(0,0,0,0.07)' },

  // Footer
  footer: { paddingHorizontal: spacing.xl, paddingBottom: spacing.xxxl },
  footerDivider: { marginBottom: spacing.xl },
});
