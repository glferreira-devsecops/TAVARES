"use client";

import { MotionBox } from "@/components/ui/motion-box";
import { useDictionary } from "@/lib/dictionaries";
import { MapPin, Star, Trophy, Users } from "lucide-react";

interface TrustBadgesProps {
    locale?: string;
}

export function TrustBadges({ locale = "pt" }: TrustBadgesProps) {
    const dict = useDictionary(locale);

    const badges = [
        {
            icon: Trophy,
            color: "text-yellow-400",
            bg: "bg-yellow-500/10",
            border: "group-hover:border-yellow-500/50",
            shadow: "group-hover:shadow-yellow-500/20",
            title: dict.AboutPreview.highlights.fifa.title || "FIFA Street",
            subtitle: dict.AboutPreview.highlights.fifa.subtitle || "Cenário Real"
        },
        {
            icon: Star,
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            border: "group-hover:border-amber-500/50",
            shadow: "group-hover:shadow-amber-500/20",
            title: "Google",
            subtitle: "5 Estrelas"
        },
        {
            icon: Users,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            border: "group-hover:border-emerald-500/50",
            shadow: "group-hover:shadow-emerald-500/20",
            title: "1000+",
            subtitle: "Visitantes"
        },
        {
            icon: MapPin,
            color: "text-rose-400",
            bg: "bg-rose-500/10",
            border: "group-hover:border-rose-500/50",
            shadow: "group-hover:shadow-rose-500/20",
            title: "Condutores",
            subtitle: "Da Comunidade"
        }
    ];

    return (
        <section className="py-20 bg-neutral-950 border-y border-white/5 relative overflow-hidden">
            {/* Cinematic Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {badges.map((badge, index) => (
                        <MotionBox key={index} delay={index * 0.1}>
                            <div className={`
                                group relative w-[160px] md:w-[220px] aspect-square
                                flex flex-col items-center justify-center text-center p-4
                                bg-white/5 backdrop-blur-md rounded-3xl
                                border border-white/10 ${badge.border}
                                transition-all duration-500 ease-out
                                hover:-translate-y-2 hover:bg-white/[0.07]
                                hover:shadow-2xl ${badge.shadow}
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
                                <div className="space-y-1">
                                    <div className="font-heading font-bold text-white text-lg md:text-2xl tracking-tight">
                                        {badge.title}
                                    </div>
                                    <div className="text-xs md:text-sm text-neutral-300 font-medium uppercase tracking-wider group-hover:text-white/80 transition-colors">
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
