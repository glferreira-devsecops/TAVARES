"use client";

import { Suspense } from "react";
import { GoogleAdsTracking } from "./google-ads";
import { MetaPixel } from "./meta-pixel";

export function AnalyticsProvider() {
    return (
        <Suspense fallback={null}>
            <GoogleAdsTracking />
            <MetaPixel />
        </Suspense>
    );
}
