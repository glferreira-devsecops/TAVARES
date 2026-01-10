"use client";

import dynamic from "next/dynamic";

interface SmoothScrollerProps {
    children: React.ReactNode;
}

// Dynamic import with SSR disabled to prevent Vercel serverless errors
const ReactLenis = dynamic(
    () => import("@studio-freight/react-lenis").then((mod) => mod.ReactLenis),
    { ssr: false }
);

export function SmoothScroller({ children }: SmoothScrollerProps) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
            {/* @ts-expect-error - ReactLenis has incompatible @types/react version */}
            {children}
        </ReactLenis>
    );
}

