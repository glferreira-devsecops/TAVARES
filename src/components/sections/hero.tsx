"use client";

import { Button, WhatsAppButton } from "@/components/ui/button";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, Star, Trophy, Users } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
    const t = useTranslations("hero");
    const locale = useLocale();
    const currentLang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    // Parallax Effects
    const yBg = useTransform(scrollY, [0, 1000], [0, 400]); // Slower background
    const yText = useTransform(scrollY, [0, 500], [0, 200]); // Faster text
    const opacityText = useTransform(scrollY, [0, 400], [1, 0]);


    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section ref={containerRef} className="relative h-[100dvh] min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden">

            {/* 1. Cinematic Background Layer */}
            <motion.div
                className="absolute inset-0 z-0 gpu-accelerated"
                style={{ y: yBg }}
            >
                {/* Image with Ken Burns Effect - Optimized with will-change */}
                <motion.div
                    className="relative w-full h-full will-change-transform"
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }} // Subtle zoom out
                >
                    <Image
                        src="/images/hero/hero-principal_v1.webp"
                        alt="O Favela-República - Quadra FIFA Street Rio de Janeiro"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={90}
                        sizes="100vw"
                    />
                </motion.div>

                {/* Monumental Typography Overlay - Awwwards Style */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="text-[18vw] font-black text-white leading-none tracking-tighter whitespace-nowrap opacity-10 gpu-accelerated"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        FAVELA-REPUBLICA
                    </motion.div>
                </div>

                {/* Gradient Overlays for Cinematic Depth - Awwwards Style */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                <div className="absolute inset-0 bg-black/15" /> {/* General tint */}

                {/* Film Grain Texture - Promoted to GPU Layer */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay gpu-accelerated"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                        filter: 'contrast(120%) brightness(100%)',
                        willChange: 'opacity'
                    }}
                />
            </motion.div>

            {/* 2. Main Content Layer */}
            <motion.div
                className="container-custom relative z-10 pt-24 pb-24 md:pb-0 text-center flex flex-col justify-center h-full"
                style={{ y: yText, opacity: opacityText }}
            >
                {/* Eyebrow / Tagline */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="mb-6 md:mb-8 flex justify-center"
                >
                    <span className="inline-flex items-center gap-2.5 px-4 py-1.5 md:px-5 md:py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase shadow-lg hover:bg-white/15 transition-colors duration-300">
                        <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 animate-pulse shadow-lg shadow-orange-500/50" />
                        {t("eyebrow")}
                    </span>
                </motion.div>

                {/* Headline - Standard FadeInUp to ensure mobile visibility */}
                <motion.h1
                    className="text-white mb-6 md:mb-8 relative z-20"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    <div className="sr-only">{t("title")} {t("titleHighlight")}</div>

                    {/* First Line */}
                    <div className="mb-1 md:mb-2">
                        <motion.span
                            className="block text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                            variants={fadeInUp}
                            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
                        >
                            {t("title")}
                        </motion.span>
                    </div>

                    {/* Highlight Line */}
                    <div className="p-1">
                        <motion.span
                            className="block text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.03em] leading-[1.05]"
                            variants={fadeInUp}
                        >
                            <span
                                className="text-gradient-gold block pb-2"
                                style={{
                                    filter: "drop-shadow(0 8px 20px rgba(249,115,22,0.4))"
                                }}
                            >
                                {t("titleHighlight")}
                            </span>
                        </motion.span>
                    </div>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                    className="text-white/90 text-base sm:text-xl md:text-2xl font-light mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed tracking-wide px-4 relative z-20"
                    style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
                >
                    {t("subtitle")}
                </motion.p>
                {/* Text Shadow for extreme readability */}

                {/* CTAs */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-20 px-4 w-full"
                >
                    <WhatsAppButton
                        message={WHATSAPP_MESSAGES.general[currentLang]}
                        phone={CONTACT.whatsapp.number}
                        size="lg"
                        className="group relative overflow-hidden bg-white text-neutral-900 border-none px-8 py-5 md:px-10 md:py-6 text-base md:text-lg rounded-full font-bold shadow-2xl hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {t("ctaMain")}
                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </span>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                    </WhatsAppButton>

                    <Button
                        href="/tours"
                        variant="ghost"
                        size="lg"
                        className="px-8 py-5 md:px-10 md:py-6 text-base md:text-lg rounded-full border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                    >
                        {t("ctaSecondary")}
                    </Button>
                </motion.div>

                {/* Trust Indicators - Compact Mobile Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-3 gap-2 sm:gap-4 max-w-4xl mx-auto w-full px-2 sm:px-0"
                >
                    {[
                        { icon: Star, value: "5/5", label: t("stats.rating"), color: "text-yellow-400" },
                        { icon: Trophy, value: t("stats.safeValue"), label: t("stats.safety"), color: "text-orange-400" },
                        { icon: Users, value: t("stats.localTitle"), label: t("stats.localSubtitle"), color: "text-blue-400" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="glass-panel-dark flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl transition-colors cursor-default group hover:bg-white/5 h-full"
                        >
                            <div className={`p-1 md:p-3 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300 ${stat.color} flex-shrink-0`}>
                                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="text-center md:text-left flex flex-col justify-center min-w-0 w-full overflow-hidden">
                                <div className="text-[10px] sm:text-base md:text-xl font-bold text-white leading-tight mb-0.5 drop-shadow-md w-full">{stat.value}</div>
                                <div className="text-[9px] sm:text-xs md:text-sm text-white/80 uppercase tracking-wider font-medium drop-shadow-sm leading-tight text-balance w-full">{stat.label}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white/50 to-transparent relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 w-full h-1/2 bg-white"
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
