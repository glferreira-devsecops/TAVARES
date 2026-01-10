"use client";

import "@/app/globals.css"; // CRITICAL: Import CSS for global error
import { ErrorScreen } from "@/components/screens/error-screen";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="pt">
            <body className="bg-neutral-950 text-white antialiased">
                <ErrorScreen digest={error.digest} reset={reset} />
            </body>
        </html>
    );
}
