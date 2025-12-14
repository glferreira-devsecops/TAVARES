"use client";

import { ErrorScreen } from "@/components/screens/error-screen";
import { useEffect } from "react";

export default function LocalizedError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Localized Error Caught:", error);
    }, [error]);

    return <ErrorScreen digest={error.digest} reset={reset} />;
}
