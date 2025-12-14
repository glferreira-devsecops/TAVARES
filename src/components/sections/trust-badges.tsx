"use client";

import { motion, Variants } from "framer-motion";
import { Globe, Home, Star, Trophy } from "lucide-react";

interface TrustBadgesProps {
    locale?: string;
}

export function TrustBadges({ locale = "pt" }: TrustBadgesProps) {
    const currentLang = locale.startsWith("pt") ? "pt" : "en";
    const t = {
        title: currentLang === "pt" ? "Reconhecido mundialmente" : "World renowned",
        subtitle: currentLang === "pt"
            ? "Cenário do FIFA Street e avaliado com excelência no TripAdvisor e Airbnb"
            : "Setting of FIFA Street and rated with excellence on TripAdvisor and Airbnb",
    };

    const badges = [
        {
            name: "FIFA Street",
            label: locale === "pt" ? "Cenário Icônico" : "Iconic Setting",
            icon: Trophy,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20"
        },
        {
            name: "TripAdvisor",
            label: locale === "pt" ? "5 Estrelas" : "5 Stars",
            icon: Star,
            color: "text-green-500",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        },
        {
            name: "Airbnb",
            label: "Superhost",
            icon: Home,
            color: "text-rose-500",
            bg: "bg-rose-500/10",
            border: "border-rose-500/20"
        },
        {
            name: "Google",
            label: "4.9/5.0",
            icon: Globe,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
    ];

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="py-12 md:py-24 bg-white border-b border-neutral-100">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-sm font-bold tracking-[0.2em] text-orange-600 uppercase mb-4">
                            {t.title}
                        </p>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 max-w-3xl mx-auto leading-tight">
                            {t.subtitle}
                        </h3>
                    </motion.div>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {badges.map((badge, i) => {
                        const Icon = badge.icon;
                        return (
                            <motion.div
                                key={i}
                                variants={item}
                                className={`group flex flex-col items-center gap-5 p-8 rounded-3xl bg-white border ${badge.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
                            >
                                <div className={`w-20 h-20 rounded-2xl ${badge.bg} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                                    <Icon className={`w-10 h-10 ${badge.color}`} />
                                </div>
                                <div className="text-center relative z-10">
                                    <div className="font-bold text-neutral-900 text-xl mb-1 group-hover:text-primary-600 transition-colors">
                                        {badge.name}
                                    </div>
                                    <div className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                                        {badge.label}
                                    </div>
                                </div>
                                {/* Subtle Hover Gradient */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${badge.bg}`} />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export function TrustStrip() {
    return (
        <div className="flex items-center gap-6 text-sm font-medium text-neutral-600 bg-neutral-50 px-6 py-2 rounded-full border border-neutral-200">
            <span className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-green-500 text-green-500" />
                <span>TripAdvisor Excellence</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
            <span className="flex items-center gap-2">
                <Home className="w-4 h-4 fill-rose-500 text-rose-500" />
                <span>Airbnb Superhost</span>
            </span>
        </div>
    );
}

export default TrustBadges;
