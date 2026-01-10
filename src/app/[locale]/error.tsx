"use client";

import { ErrorScreen } from "@/components/screens/error-screen";

export default function LocalizedError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return <ErrorScreen digest={error.digest} reset={reset} />;
}
