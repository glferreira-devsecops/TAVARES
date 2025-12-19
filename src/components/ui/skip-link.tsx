"use client";

import { cn } from "@/lib/utils";

interface SkipLinkProps {
    className?: string;
}

export function SkipLink({ className }: SkipLinkProps) {
    return (
        <a
            href="#main-content"
            className={cn(
                "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3",
                "focus:bg-white focus:text-neutral-900 focus:font-bold focus:shadow-xl focus:rounded-full",
                "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                "transition-transform duration-200 ease-in-out",
                className
            )}
        >
            Pular para o conteúdo principal
        </a>
    );
}
