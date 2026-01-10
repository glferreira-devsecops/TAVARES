"use client";

import { WhatsAppButton } from "@/components/ui/button";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface CTABannerProps {
    locale?: string;
}

export function CTABanner({ locale = "pt" }: CTABannerProps) {
    const t = useTranslations("CTABanner");

    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Image with Fixed Parallax */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero/hero-main_v1.webp"
                    alt="Sunset at Favela-República"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm gpu-accelerated" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950" />

                {/* Noise Texture - Local & GPU Promoted */}
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay bg-noise gpu-accelerated" />
            </div>

            <div className="relative z-10 container-custom">
                <div className="max-w-5xl mx-auto text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Glowing orb behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary-500/20 rounded-full blur-[120px] pointer-events-none" />

                        <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-orange-400 to-red-600 mb-10 shadow-2xl">
                            <div className="bg-neutral-950 rounded-full p-4 border border-white/10">
                                <MessageCircle className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tighter drop-shadow-2xl">
                            {t("title")}
                        </h2>

                        <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                            {t("subtitle")}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-14">
                            {(t.raw("benefits") as string[]).map((benefit, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-base font-medium text-white hover:bg-white/10 transition-colors backdrop-blur-md"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    {benefit}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <WhatsAppButton
                                message={WHATSAPP_MESSAGES.general[locale.startsWith("pt") ? "pt" : locale === "en" ? "en" : locale === "es" ? "es" : "fr"]}
                                phone={CONTACT.whatsapp.number}
                                size="lg"
                                className="w-full sm:w-auto text-lg px-10 py-6 bg-white text-neutral-950 hover:bg-neutral-200 border-none shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 rounded-full font-bold"
                            >
                                {t("cta")}
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </WhatsAppButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default CTABanner;
