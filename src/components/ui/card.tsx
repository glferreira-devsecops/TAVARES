"use client";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Badge, DifficultyBadge, DurationBadge } from "./badge";
import { Button } from "./button";

interface CardProps {
    className?: string;
    children: React.ReactNode;
    hoverable?: boolean;
    onClick?: () => void;
}

export function Card({ className, children, hoverable = true, onClick }: CardProps) {
    const Component = onClick ? "button" : "div";

    return (
        <Component
            onClick={onClick}
            className={cn(
                "bg-white rounded-2xl overflow-hidden shadow-soft-md border border-neutral-100",
                hoverable && "transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-xl",
                onClick && "cursor-pointer w-full text-left",
                className
            )}
        >
            {children}
        </Component>
    );
}

export function CardImage({
    src,
    alt,
    aspectRatio = "video",
    overlay = false,
    priority = false,
    className,
    children,
}: {
    src: string;
    alt: string;
    aspectRatio?: "video" | "square" | "portrait";
    overlay?: boolean;
    className?: string;
    priority?: boolean;
    children?: React.ReactNode;
}) {
    const aspectClasses = {
        video: "aspect-[16/9]",
        square: "aspect-square",
        portrait: "aspect-[3/4]",
    };

    return (
        <div className={cn("relative overflow-hidden", aspectClasses[aspectRatio], className)}>
            <Image
                src={src}
                alt={alt}
                fill
                priority={priority}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {overlay && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            )}
            {children}
        </div>
    );
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <h3 className={cn("font-heading text-xl font-semibold text-neutral-900 mb-2", className)}>
            {children}
        </h3>
    );
}

export function CardDescription({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <p className={cn("text-neutral-600 text-sm leading-relaxed", className)}>
            {children}
        </p>
    );
}

// Tour Card - Specialized card for displaying tours
interface TourCardProps {
    slug: string;
    title: string;
    shortDescription: string;
    image: string;
    duration: string;
    difficulty: "easy" | "moderate" | "challenging";
    priceFrom: number;
    featured?: boolean;
    priority?: boolean;
    className?: string;
    locale?: string;
}

export function TourCard({
    slug,
    title,
    shortDescription,
    image,
    duration,
    difficulty,
    priceFrom,
    featured = false,
    priority = false,
    className,
    locale = 'pt'
}: TourCardProps) {
    const t = useTranslations("Common");
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
        >
            <Link href={`/${locale === 'pt' ? 'pt' : locale}/tours/${slug}`} className="group block">
                <Card className={cn("h-full", featured && "ring-2 ring-primary-500", className)}>
                    <div className="relative">
                        <CardImage src={image} alt={title} overlay priority={priority}>
                            {featured && (
                                <div className="absolute top-4 left-4">
                                    <Badge variant="primary" size="sm">
                                        {t("highlights.featured")}
                                    </Badge>
                                </div>
                            )}
                            <div className="absolute bottom-4 left-4 flex gap-2">
                                <DurationBadge duration={duration} className="bg-white/90 backdrop-blur-sm" />
                                <DifficultyBadge difficulty={difficulty} className="bg-white/90 backdrop-blur-sm" />
                            </div>
                        </CardImage>
                    </div>

                    <CardContent>
                        <CardTitle className="group-hover:text-primary-500 transition-colors">
                            {title}
                        </CardTitle>
                        <CardDescription className="mb-4 line-clamp-2">
                            {shortDescription}
                        </CardDescription>

                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-xs text-neutral-500">{t("price_from")}</span>
                                <p className="text-xl font-bold text-primary-500">
                                    R$ {priceFrom.toLocaleString("pt-BR")}
                                </p>
                            </div>
                            <Button variant="primary" size="sm">
                                {t("view_tour")}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </motion.div >
    );
}

// Testimonial Card
interface TestimonialCardProps {
    name: string;
    country: string;
    countryCode: string;
    quote: string;
    rating: number;
    avatar?: string;
    className?: string;
}

export function TestimonialCard({
    name,
    country,
    countryCode,
    quote,
    rating,
    avatar,
    className,
}: TestimonialCardProps) {
    // Get country flag emoji
    const flag = countryCode
        .toUpperCase()
        .split("")
        .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
        .join("");

    return (
        <Card className={cn("p-6", className)} hoverable={false}>
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={cn(
                            "w-5 h-5",
                            i < rating ? "text-accent-500 fill-current" : "text-neutral-200 fill-current"
                        )}
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-neutral-700 mb-6 italic leading-relaxed">
                &ldquo;{quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
                {avatar ? (
                    <Image
                        src={avatar}
                        alt={name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-primary-600 font-semibold text-lg">
                            {name.charAt(0)}
                        </span>
                    </div>
                )}
                <div>
                    <p className="font-semibold text-neutral-900">{name}</p>
                    <p className="text-sm text-neutral-500">
                        {flag} {country}
                    </p>
                </div>
            </div>
        </Card>
    );
}

export default Card;
