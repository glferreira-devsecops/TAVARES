"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

interface SmoothScrollerProps {
    children: React.ReactNode;
}

export function SmoothScroller({ children }: SmoothScrollerProps) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {/* @ts-expect-error - ReactLenis has incompatible @types/react version */}
            {children}
        </ReactLenis>
    );
}
