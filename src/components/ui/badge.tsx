import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

interface BadgeProps {
    variant?: "primary" | "secondary" | "accent" | "success" | "neutral" | "outline";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

const variantStyles = {
    primary: "bg-gradient-to-r from-primary-50 to-primary-100 text-primary-800 border-primary-200 shadow-xs",
    secondary: "bg-gradient-to-r from-secondary-50 to-secondary-100 text-secondary-800 border-secondary-200 shadow-xs",
    accent: "bg-gradient-to-r from-accent-50 to-accent-100 text-accent-800 border-accent-200 shadow-xs",
    success: "bg-gradient-to-r from-green-50 to-green-100 text-green-800 border-green-200 shadow-xs",
    neutral: "bg-white text-neutral-700 border-neutral-200 shadow-sm",
    outline: "bg-transparent text-neutral-600 border-neutral-300 hover:bg-neutral-50 transition-colors",
};

const sizeStyles = {
    sm: "px-3 py-1 text-xs gap-1.5",
    md: "px-4 py-1.5 text-sm gap-2",
    lg: "px-5 py-2 text-base gap-2.5",
};

export function Badge({
    variant = "primary",
    size = "md",
    icon,
    children,
    className,
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center font-semibold rounded-full border transition-all duration-200 tracking-wide",
                variantStyles[variant],
                sizeStyles[size],
                className
            )}
        >
            {icon && <span className="shrink-0 opacity-80">{icon}</span>}
            {children}
        </span>
    );
}

// Preset badges for common use cases
export function TrustBadge({
    type,
    className,
}: {
    type: "local-conductor" | "safe" | "rating" | "verified";
    className?: string;
}) {
    const t = useTranslations("Common");
    const badges = {
        "local-conductor": {
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: t("badges.local_conductor"),
            variant: "primary" as const,
        },
        safe: {
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            label: t("badges.safe"),
            variant: "success" as const,
        },
        rating: {
            icon: (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ),
            label: "4.8+ ★",
            variant: "accent" as const,
        },
        verified: {
            icon: (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            ),
            label: t("badges.verified"),
            variant: "secondary" as const,
        },
    };

    const badge = badges[type];

    return (
        <Badge variant={badge.variant} icon={badge.icon} className={className}>
            {badge.label}
        </Badge>
    );
}

// Duration badge
export function DurationBadge({ duration, className }: { duration: string; className?: string }) {
    return (
        <Badge
            variant="outline"
            icon={
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            }
            className={className}
        >
            {duration}
        </Badge>
    );
}

// Difficulty badge
export function DifficultyBadge({
    difficulty,
    className,
}: {
    difficulty: "easy" | "moderate" | "challenging";
    className?: string;
}) {
    const t = useTranslations("Common");
    const config = {
        easy: { label: t("difficulty.easy"), variant: "success" as const },
        moderate: { label: t("difficulty.moderate"), variant: "accent" as const },
        challenging: { label: t("difficulty.challenging"), variant: "primary" as const },
    };

    return (
        <Badge variant={config[difficulty].variant} className={className}>
            {config[difficulty].label}
        </Badge>
    );
}

export default Badge;
