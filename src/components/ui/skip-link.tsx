"use client";

import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

interface SkipLinkProps {
    className?: string;
}

export function SkipLink({ className }: SkipLinkProps) {
    const locale = useLocale();

    const content = {
        pt: "Pular para o conteúdo principal",
        en: "Skip to main content",
        es: "Saltar al contenido principal",
        fr: "Passer au contenu principal"
    };

    const text = content[locale as keyof typeof content] || content.pt;

    return (
        <a
            href="#main-content"
            className={cn(
                "sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3",
                "focus:bg-white focus:text-neutral-900 focus:font-bold focus:shadow-2xl focus:rounded-full",
                "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
                "transition-all duration-300 ease-out",
                className
            )}
        >
            {text}
        </a>
    );
}
