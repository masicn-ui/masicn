import { useWindowDimensions } from 'react-native';
import { layout } from '../tokens';

export type Breakpoint = 'phone' | 'tablet' | 'largeTablet';

export interface ResponsiveInfo {
    /** Current classified breakpoint */
    breakpoint: Breakpoint;
    /** True when device width ≥ tablet breakpoint */
    isTablet: boolean;
    /** True when device width ≥ largeTablet breakpoint */
    isLargeTablet: boolean;
    /** Current window width */
    width: number;
    /** Current window height */
    height: number;
    /**
     * Returns value matching the current breakpoint.
     * Falls back to smaller breakpoint values if the current one is not specified.
     *
     * ```ts
     * const padding = select({ phone: 16, tablet: 24, largeTablet: 32 });
     * ```
     */
    select: <T>(values: Partial<Record<Breakpoint, T>> & { phone: T }) => T;
}

export function useResponsive(): ResponsiveInfo {
    const { width, height } = useWindowDimensions();

    const isLargeTablet = width >= layout.breakpoints.largeTablet;
    const isTablet = width >= layout.breakpoints.tablet;

    const breakpoint: Breakpoint = isLargeTablet
        ? 'largeTablet'
        : isTablet
            ? 'tablet'
            : 'phone';

    function select<T>(values: Partial<Record<Breakpoint, T>> & { phone: T }): T {
        if (isLargeTablet && values.largeTablet !== undefined) {
            return values.largeTablet;
        }
        if (isTablet && values.tablet !== undefined) {
            return values.tablet;
        }
        return values.phone;
    }

    return { breakpoint, isTablet, isLargeTablet, width, height, select };
}
