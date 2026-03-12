// File: src/tokens/sizes.ts

/**
 * Component size tokens — raw scale.
 * Semantic mappings like iconSizes should be used for icons.
 */

export const sizes = {
  // Input controls (checkbox, radio, switch)
  controlSm: 20,
  control: 24,
  controlLg: 28,

  // Switch dimensions
  switchTrackWidth: 52,
  switchTrackHeight: 32,
  switchThumb: 28,

  // Touch targets
  touchTarget: 40,
  touchTargetLg: 48,

  // Button sizes
  buttonHeight: 48,

  // FAB sizes
  fabSm: 40,
  fabMd: 56,
  fabLg: 72,

  // Avatar sizes
  avatarSm: 32,
  avatarMd: 40,
  avatarLg: 56,
  avatarXl: 72,

  // Misc components
  sliderThumb: 24,
  sliderTrack: 4,
  progressBarDefault: 8,
  bottomSheetHandle: 4,
  bottomSheetHandleWidth: 36,

  emptyStateIcon: 64,
  emptyStateIconLineHeight: 80,
  tooltipMaxWidth: 250,
  menuMinWidth: 200,
  menuMaxWidth: 320,
  swipeActionMinWidth: 80,
  actionSheetMaxHeight: 400,

  // Skeleton placeholder dimensions
  skeletonButtonWidth: 120,
  skeletonCardHeight: 160,
  skeletonImageHeight: 200,

  // Progress circle default diameter
  progressCircleDefault: 120,

  // OTP input box height
  otpBoxHeight: 56,

  // Loading overlay
  loadingOverlayMinWidth: 150,

  // Badge
  badge: 20,

  // Carousel dots
  carouselDot: 6,
  carouselDotActive: 18,
  carouselSlideDefaultHeight: 200,

  // Pagination button
  paginationButton: 36,

  // Input heights
  inputSm: 32,
  inputMd: 44,
  inputLg: 52,
} as const;

export type Sizes = typeof sizes;
