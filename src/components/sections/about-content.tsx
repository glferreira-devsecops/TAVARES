"use client";

import { MotionBox } from "@/components/ui/motion-box";
import { ExternalLink, Heart, Instagram, MessageCircle, Palette, Shield, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutContent() {
    const t = useTranslations("about");

    const values = [
        {
            icon: Heart,
            title: t("values.list.0.title"),
            desc: t("values.list.0.desc"),
            color: "text-rose-500",
            bg: "bg-rose-50",
            border: "border-rose-100"
        },
        {
            icon: Shield,
            title: t("values.list.1.title"),
            desc: t("values.list.1.desc"),
            color: "text-blue-500",
            bg: "bg-blue-50",
            border: "border-blue-100"
        },
        {
            icon: Palette,
            title: t("values.list.2.title"),
            desc: t("values.list.2.desc"),
            color: "text-purple-500",
            bg: "bg-purple-50",
            border: "border-purple-100"
        },
        {
            icon: Users,
            title: t("values.list.3.title"),
            desc: t("values.list.3.desc"),
            color: "text-orange-500",
            bg: "bg-orange-50",
            border: "border-orange-100"
        },
        {
            icon: MessageCircle,
            title: t("values.list.4.title"),
            desc: t("values.list.4.desc"),
            color: "text-emerald-500",
            bg: "bg-emerald-50",
            border: "border-emerald-100"
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 gpu-accelerated">
                    <Image
                        src="/images/social/IMG_0546_v1.webp"
                        alt="O Favela-República"
                        fill
                        className="object-cover scale-105"
                        priority
                        quality={90}
                    />
                    {/* Cinematic Overlay */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm gpu-accelerated" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                </div>

                <div className="container-custom relative z-10 text-center text-white pt-20">
                    <MotionBox delay={0.1}>
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-xs tracking-[0.2em] uppercase mb-8">
                            Favela-República
                        </span>
                    </MotionBox>
                    <MotionBox delay={0.2}>
                        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tighter">
                            {t("hero.title")}
                        </h1>
                    </MotionBox>
                    <MotionBox delay={0.3}>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                            {t("hero.subtitle")}
                        </p>
                    </MotionBox>
                </div>
            </section>

            {/* Manifesto Section - Editorial Style */}
            <section className="py-24 md:py-32 bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <MotionBox delay={0.2}>
                            <div className="relative">
                                {/* Decorative quote mark */}
                                <div className="absolute -top-12 -left-12 text-9xl text-neutral-100 font-serif opacity-50 select-none">
                                    &rdquo;
                                </div>

                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-12 relative z-10">
                                    {t("manifesto.title")}
                                </h2>

                                <div className="space-y-8 relative z-10">
                                    <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
                                        {t("manifesto.text1")}
                                    </p>
                                    <p className="text-lg md:text-xl text-neutral-500 leading-relaxed border-l-2 border-orange-500 pl-6">
                                        {t("manifesto.text2")}
                                    </p>
                                </div>
                            </div>
                        </MotionBox>
                    </div>
                </div>
            </section>

            {/* Values Grid - Premium Card Style */}
            <section className="py-24 bg-neutral-50 border-y border-neutral-100">
                <div className="container-custom">
                    <div className="text-center mb-20">
                        <MotionBox>
                            <span className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4 block">Nossos Pilares</span>
                            <h2 className="font-heading text-4xl md:text-6xl font-bold text-neutral-900">
                                {t("values.title")}
                            </h2>
                        </MotionBox>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {values.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <MotionBox key={i} delay={i * 0.1} viewport={{ once: true }}>
                                    <div className={`group bg-white p-8 md:p-12 rounded-[2rem] border ${item.border} shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden`}>
                                        {/* Background Decoration */}
                                        <div className={`absolute top-0 right-0 w-64 h-64 ${item.bg} rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                                        <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                                            <Icon className={`w-8 h-8 ${item.color}`} />
                                        </div>
                                        <h3 className="font-heading text-3xl font-bold text-neutral-900 mb-4 relative z-10">
                                            {item.title}
                                        </h3>
                                        <p className="text-neutral-500 text-lg leading-relaxed relative z-10">
                                            {item.desc}
                                        </p>
                                    </div>
                                </MotionBox>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Instagram / Favela Section - Dark Mode Premium */}
            <section className="py-24 bg-neutral-950 text-white overflow-hidden relative">
                {/* Glow Effects */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container-custom relative z-10">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 text-center md:text-left">
                        <MotionBox>
                            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                <span className="p-3 bg-white/5 rounded-full backdrop-blur-sm">
                                    <Instagram className="w-6 h-6 text-white" />
                                </span>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold">
                                    {t("instagram.title")}
                                </h2>
                            </div>
                        </MotionBox>

                        <MotionBox delay={0.2}>
                            <a
                                href="https://www.instagram.com/favelarepublica"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-950 rounded-full font-bold hover:scale-105 transition-transform duration-300"
                            >
                                {t("instagram.handle")}
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </MotionBox>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {/* Mock Grid - In a real app, fetch from IG API */}
                        {[
                            '/images/social/IMG_0540_v1.webp',
                            '/images/social/IMG_0593_v1.webp',
                            '/images/social/PHOTO-2022-09-20-14-10-30_v1.webp',
                            '/images/social/PHOTO-2024-05-13-15-54-41_v1.webp'
                        ].map((src, i) => (
                            <MotionBox key={i} delay={0.2 + (i * 0.1)}>
                                <div className="aspect-square relative rounded-2xl overflow-hidden bg-neutral-900 group cursor-pointer border border-white/5 hover:border-white/20 transition-colors">
                                    <Image
                                        src={src}
                                        alt="Instagram Feed"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Instagram className="w-8 h-8 text-white drop-shadow-lg" />
                                    </div>
                                </div>
                            </MotionBox>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
