"use client";

import "@/app/globals.css"; // CRITICAL for root layout fallback
import { NotFoundScreen } from "@/components/screens/not-found-screen";

// This root Not Found component handles 404s that occur OUTSIDE of a locale context.
// For example: /unknown-route (if middleware doesn't catch it) or when locale is invalid.
// It MUST render its own <html> and <body> tags because RootLayout is a passthrough.
export default function NotFound() {
    return (
        <html lang="pt">
            <body className="bg-neutral-950 text-white antialiased">
                <NotFoundScreen isRoot={true} />
            </body>
        </html>
    );
}
