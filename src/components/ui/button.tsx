"use client";

import { AnalyticsEvents } from "@/components/analytics/events";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    href?: string;
    external?: boolean;
    children: React.ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    icon,
    iconPosition = "left",
    href,
    external = false,
    className,
    disabled,
    children,
    ...props
}: ButtonProps) {
    const t = useTranslations("Common");
    const baseClasses = cn(
        "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        // Motion effects via CSS
        "hover:scale-[1.02] active:scale-[0.98]",
        "focus:outline-none focus:ring-4 focus:ring-primary-500/20",
        {
            // Sizes
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-base": size === "md",
            "px-8 py-4 text-lg": size === "lg",
            "w-full": fullWidth,

            // Variants
            "bg-primary-500 text-white hover:bg-primary-600 shadow-soft-md hover:shadow-soft-lg":
                variant === "primary",
            "bg-secondary-500 text-white hover:bg-secondary-600 shadow-soft-md hover:shadow-soft-lg":
                variant === "secondary",
            "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500/10":
                variant === "outline",
            "text-neutral-600 hover:bg-neutral-100": variant === "ghost",
            "bg-green-600 text-white hover:bg-green-700 shadow-soft-md hover:shadow-soft-lg":
                variant === "whatsapp",
        },
        className
    );

    const iconElement = icon && (
        <span className={iconPosition === "right" ? "ml-2" : "mr-2"}>
            {icon}
        </span>
    );

    const content = (
        <>
            {variant === "primary" && (
                <span className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                    <span className="absolute -inset-[100%] top-0 block w-[50%] -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:animate-shimmer" />
                </span>
            )}
            <span className="relative flex items-center justify-center gap-2">
                {icon && iconPosition === "left" && iconElement}
                {loading ? t("loading") : children}
                {icon && iconPosition === "right" && iconElement}
            </span>
        </>
    );

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(baseClasses, "group relative overflow-hidden")}
                >
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={cn(baseClasses, "group relative overflow-hidden")}>
                {content}
            </Link>
        );
    }

    return (
        <button
            className={cn(baseClasses, "group relative overflow-hidden")}
            disabled={disabled || loading}
            {...props}
        >
            {content}
        </button>
    );
}

// WhatsApp Button Component
interface WhatsAppButtonProps {
    phone: string;
    message?: string;
    label?: string;
    className?: string;
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    children?: React.ReactNode;
}

export function WhatsAppButton({
    phone,
    message = "Olá! Gostaria de saber mais sobre os tours no Favela-República.",
    label = "Agendar no WhatsApp",
    className,
    size = "md",
    fullWidth = false,
    children,
}: WhatsAppButtonProps) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodedMessage}`;

    return (
        <Button
            href={whatsappUrl}
            external
            variant="whatsapp"
            size={size}
            fullWidth={fullWidth}
            className={className}
            onClick={() => AnalyticsEvents.trackLead(label || "WhatsApp Button")}
            icon={
                <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 fill-current"
                >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            }
        >
            {children || label}
        </Button>
    );
}
