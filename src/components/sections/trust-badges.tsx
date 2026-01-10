"use client";

import { MotionBox } from "@/components/ui/motion-box";
import { MapPin, Star, Trophy, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export function TrustBadges() {
    const t = useTranslations("AboutPreview");

    const badges = [
        {
            icon: Trophy,
            color: "text-yellow-400",
            bg: "bg-yellow-500/10",
            border: "group-hover:border-yellow-500/50",
            shadow: "group-hover:shadow-yellow-500/20",
            title: t("highlights.fifa.title"),
            subtitle: t("highlights.fifa.subtitle")
        },
        {
            icon: Star,
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "group-hover:border-amber-500/50",
            shadow: "group-hover:shadow-amber-500/20",
            title: t("highlights.google.title"),
            subtitle: t("highlights.google.subtitle")
        },
        {
            icon: Users,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "group-hover:border-emerald-500/50",
            shadow: "group-hover:shadow-emerald-500/20",
            title: t("highlights.visitors.title"),
            subtitle: t("highlights.visitors.subtitle")
        },
        {
            icon: MapPin,
            color: "text-rose-400",
            bg: "bg-rose-500/10",
            border: "group-hover:border-rose-500/50",
            shadow: "group-hover:shadow-rose-500/20",
            title: t("highlights.local.title"),
            subtitle: t("highlights.local.subtitle")
        }
    ];

    return (
        <section className="relative z-20 pb-20 overflow-hidden gpu-accelerated">
            {/* Cinematic Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-full bg-orange-500/10 blur-[150px] pointer-events-none opacity-50" />
            <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay pointer-events-none gpu-accelerated" />

            <div className="container-custom relative z-10 px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 justify-center items-center">
                    {badges.map((badge, index) => (
                        <MotionBox key={index} delay={index * 0.1}>
                            <div className={`
                                group relative w-full aspect-square
                                flex flex-col items-center justify-center text-center p-2 sm:p-4
                                bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl
                                border border-white/10 ${badge.border}
                                transition-all duration-500 ease-out
                                active:scale-95 md:hover:-translate-y-2 md:hover:bg-white/[0.07]
                                md:hover:shadow-2xl ${badge.shadow}
                            `}>
                                {/* Icon Container with Glow */}
                                <div className={`
                                    mb-4 p-4 rounded-2xl ${badge.bg}
                                    transition-all duration-500 group-hover:scale-110
                                    ring-1 ring-white/10 group-hover:ring-white/30
                                `}>
                                    <badge.icon className={`w-8 h-8 md:w-10 md:h-10 ${badge.color}`} strokeWidth={1.5} />
                                </div>

                                {/* Text Content */}
                                <div className="space-y-1 w-full min-w-0">
                                    <div className="font-heading font-bold text-white text-base sm:text-lg md:text-2xl tracking-tight leading-tight">
                                        {badge.title}
                                    </div>
                                    <div className="text-[11px] sm:text-xs md:text-sm text-neutral-300 font-medium uppercase tracking-wider group-hover:text-white/80 transition-colors line-clamp-2">
                                        {badge.subtitle}
                                    </div>
                                </div>

                                {/* Shine Effect on Hover */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shine" />
                                </div>
                            </div>
                        </MotionBox>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TrustBadges;
