"use client";

import { GoogleLogo } from "@/components/ui/brand-logos";
import { Button, WhatsAppButton } from "@/components/ui/button";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export function AboutPreview() {
    const t = useTranslations("AboutPreview");
    const tSocial = useTranslations("SocialProject");
    // const locale = useLocale(); // If needed for WHATSAPP_MESSAGES, but let's see

    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-neutral-50 scroll-mt-24">
            {/* Background Decorative Element - Awwwards depth */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden -z-0">
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 0.03, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="absolute -top-[10%] -right-[10%] text-[40vw] font-black text-neutral-900 leading-none tracking-tighter"
                >
                    RIO
                </motion.div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24 md:mb-32">
                    {/* Left: Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100/50 text-primary-700 font-bold text-xs uppercase tracking-wider mb-6 border border-primary-100 shadow-sm">
                            {t("badge")}
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 leading-[1.1] tracking-tight">
                            {t("title")} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                                {t("titleHighlight")}
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-neutral-600 mb-10 leading-relaxed">
                            <div className="leading-relaxed">
                                <ReactMarkdown components={{
                                    strong: ({ ...props }) => <span className="font-bold text-neutral-900" {...props} />
                                }}>
                                    {t("description_1")}
                                </ReactMarkdown>
                            </div>
                            <p className="leading-relaxed">
                                {t("description_2")}
                            </p>
                            <p className="leading-relaxed font-semibold text-neutral-900 border-l-[6px] border-primary-500 pl-6 py-6 bg-white rounded-r-3xl shadow-xl shadow-primary-500/5 transition-all hover:shadow-primary-500/10 border-y border-r border-transparent">
                                {t("description_impact")}
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                            {[
                                { icon: "🏠", label: t("features.local_conductors") },
                                { icon: "🎨", label: t("features.street_art") },
                                { icon: "🛡️", label: t("features.safety") },
                                { icon: "💚", label: t("features.social_impact") },
                                { icon: "🤝", label: t("features.interaction") },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 p-5 bg-white rounded-3xl border border-neutral-100 transition-all hover:shadow-xl hover:border-primary-200 group">
                                    <span className="text-3xl group-hover:scale-125 transition-all duration-300">{feature.icon}</span>
                                    <span className="font-bold text-base text-neutral-800 tracking-tight">{feature.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="outline"
                                size="lg"
                                href="/quem-somos"
                                icon={<ArrowRight className="w-5 h-5" />}
                                iconPosition="right"
                                className="border-neutral-200 text-neutral-900 hover:bg-white font-bold px-8 shadow-sm"
                            >
                                {t("cta")}
                            </Button>
                            <WhatsAppButton
                                message={WHATSAPP_MESSAGES.general.pt} // Defaulting to PT for now as locale is gone, or we can use useLocale()
                                phone={CONTACT.whatsapp.number}
                                size="lg"
                                className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-xl shadow-green-500/20 font-bold px-8"
                            >
                                {t("ctaWhatsapp")}
                            </WhatsAppButton>
                        </div>
                    </motion.div>

                    {/* Right: Gallery Grid (Awwwards Style) */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Main Large Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="col-span-2 relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white gpu-accelerated"
                            >
                                <Image
                                    src="/images/social/IMG_0551_v1.webp"
                                    alt="O Favela-República Panorâmico"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </motion.div>

                            {/* Secondary Images */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl border-4 border-white gpu-accelerated"
                            >
                                <Image
                                    src="/images/tours/quadra-fifa-street-rio-de-janeiro.webp"
                                    alt="Cenário real da quadra do FIFA Street no Favela-República Rio de Janeiro"
                                    fill
                                    className="object-cover hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl bg-white flex items-center justify-center text-center p-4 border-4 border-white shadow-inner-lg"
                            >
                                <div>
                                    <GoogleLogo className="w-10 h-10 mx-auto mb-3 text-[#4285F4]" />
                                    <div className="flex justify-center gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="font-black text-3xl text-neutral-900 tracking-tight">5.0</p>
                                    <p className="text-[11px] uppercase font-black text-neutral-400 tracking-[0.2em] mt-1">Google Reviews</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Graphic */}
                        <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary-500/10 rounded-full blur-[100px] -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] -z-10" />
                    </div>
                </div>

                {/* Social Project Section (Dona Irene) */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                >
                    <div className="bg-neutral-900 rounded-[2.5rem] md:rounded-[3.5rem] p-6 md:p-20 text-white overflow-hidden relative shadow-3xl border border-white/5">
                        {/* Background Pattern & Noise */}
                        <div className="absolute inset-0 opacity-30 bg-noise mix-blend-overlay pointer-events-none" />
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-neutral-800/80 via-neutral-900 to-black pointer-events-none" />

                        {/* Large Background Overlay Typography for Social Project */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] leading-none pointer-events-none select-none whitespace-nowrap">
                            IMPACTO
                        </div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border-8 border-white/5 shadow-2xl transition-transform duration-700 hover:scale-[1.02] group">
                                    <Image
                                        src="/images/social/PHOTO-2022-09-20-13-10-53_v1.webp"
                                        alt="Centro Social Dona Irene"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                </div>
                                <p className="mt-8 text-center text-xs text-neutral-400 font-bold tracking-[0.3em] uppercase opacity-80">
                                    ❤️ Feito por moradores, para moradores
                                </p>
                            </div>

                            <div className="order-1 lg:order-2">
                                <span className="inline-block px-5 py-2 rounded-full bg-white/5 text-white font-black text-[10px] uppercase tracking-[0.25em] mb-8 border border-white/10 backdrop-blur-xl shadow-lg">
                                    {tSocial("badge")}
                                </span>
                                <h3 className="font-heading text-4xl md:text-6xl font-black mb-8 leading-[1.05] tracking-tight">
                                    {tSocial("title")} <br />
                                    <span className="text-primary-500">{tSocial("titleHighlight")}</span>
                                </h3>
                                <div className="space-y-6 text-neutral-300 text-lg md:text-xl leading-relaxed mb-12 font-light">
                                    <p>{tSocial("description_1")}</p>
                                    <p className="font-medium text-white">{tSocial("description_2")}</p>
                                </div>

                                <div className="grid grid-cols-3 gap-3 md:gap-8 pt-8 md:pt-10 border-t border-white/10">
                                    {[
                                        { key: "residents" },
                                        { key: "impact" },
                                        { key: "community" }
                                    ].map((stat, idx) => (
                                        <div key={idx} className="group cursor-default">
                                            <p className="text-3xl md:text-5xl font-black text-primary-500 mb-2 group-hover:scale-110 transition-transform origin-left">
                                                {tSocial(`stats.${stat.key}.value`)}
                                            </p>
                                            <p className="text-[11px] text-neutral-400 uppercase tracking-[0.2em] font-black leading-tight">
                                                {tSocial(`stats.${stat.key}.label`)}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutPreview;
