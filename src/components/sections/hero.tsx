"use client";

import { Button, WhatsAppButton } from "@/components/ui/button";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { useDictionary } from "@/lib/dictionaries";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowRight, MapPin, Shield, Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

interface HeroProps {
    locale?: string;
}

export function Hero({ locale = "pt" }: HeroProps) {
    const currentLang = locale.startsWith("pt") ? "pt" : "en";
    const dict = useDictionary(locale);
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
        <section ref={containerRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">

            {/* 1. Cinematic Background Layer */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: yBg }}
            >
                {/* Image with Ken Burns Effect */}
                <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }} // Subtle zoom out
                >
                    <Image
                        src="/images/hero-tavares-bastos.png"
                        alt="Favela Tavares Bastos Vista"
                        fill
                        className="object-cover"
                        priority
                        quality={95}
                        sizes="100vw"
                    />
                </motion.div>

                {/* Gradient Overlays for Cinematic Depth - Awwwards Style */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                <div className="absolute inset-0 bg-black/15" /> {/* General tint */}

                {/* Film Grain Texture for Tactile Feel */}
                {/* Film Grain Texture for Tactile Feel */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
                        filter: 'contrast(120%) brightness(100%)'
                    }}
                />
            </motion.div>

            {/* 2. Main Content Layer */}
            <motion.div
                className="container-custom relative z-10 pt-20 text-center"
                style={{ y: yText, opacity: opacityText }}
            >
                {/* Eyebrow / Tagline */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="mb-8 flex justify-center"
                >
                    <span className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/25 text-white text-xs font-bold tracking-[0.25em] uppercase shadow-2xl">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-500 animate-pulse shadow-lg shadow-orange-500/50" />
                        {dict.hero.eyebrow}
                    </span>
                </motion.div>

                {/* Headline - Masked Reveal */}
                <h1 className="text-white mb-8 overflow-hidden">
                    <div className="sr-only">{dict.hero.title} {dict.hero.titleHighlight}</div>

                    {/* First Line */}
                    <div className="overflow-hidden mb-2">
                        <motion.span
                            className="block text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
                        >
                            {dict.hero.title}
                        </motion.span>
                    </div>

                    {/* Highlight Line */}
                    <div className="overflow-hidden">
                        <motion.span
                            className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-[-0.03em] leading-[1.05]"
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        >
                            <span
                                className="bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 bg-clip-text text-transparent"
                                style={{
                                    filter: "drop-shadow(0 8px 20px rgba(249,115,22,0.4))",
                                    WebkitBackgroundClip: "text"
                                }}
                            >
                                {dict.hero.titleHighlight}
                            </span>
                        </motion.span>
                    </div>
                </h1>

                {/* Description */}
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.6 }}
                    className="text-white/90 text-lg sm:text-xl md:text-2xl font-light mb-14 max-w-3xl mx-auto leading-relaxed tracking-wide"
                    style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
                >
                    {dict.hero.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
                >
                    <WhatsAppButton
                        message={WHATSAPP_MESSAGES.general[currentLang]}
                        phone={CONTACT.whatsapp.number}
                        size="lg"
                        className="group relative overflow-hidden bg-white text-neutral-900 border-none px-10 py-6 text-lg rounded-full font-bold shadow-2xl hover:scale-105 transition-transform duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {dict.hero.ctaMain}
                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </span>
                        {/* Shine Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                    </WhatsAppButton>

                    <Button
                        href="/tours"
                        variant="ghost"
                        size="lg"
                        className="px-10 py-6 text-lg rounded-full border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                    >
                        {dict.hero.ctaSecondary}
                    </Button>
                </motion.div>

                {/* Trust Indicators - Glass Cards */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
                >
                    {[
                        { icon: Star, value: "4.9/5", label: dict.hero.stats.rating, color: "text-yellow-400" },
                        { icon: Shield, value: dict.hero.stats.safeValue, label: dict.hero.stats.safety, color: "text-green-400" },
                        { icon: MapPin, value: dict.hero.stats.local, label: dict.hero.stats.local, color: "text-orange-400" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 hover:bg-white/5 transition-colors cursor-default group"
                        >
                            <div className={`p-3 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="text-left">
                                <div className="text-xl font-bold text-white leading-none mb-1">{stat.value}</div>
                                <div className="text-xs text-white/50 uppercase tracking-wider font-medium">{stat.label}</div>
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
