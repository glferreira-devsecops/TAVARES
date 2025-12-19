"use client";

import { GoogleLogo } from "@/components/ui/brand-logos";
import { Button, WhatsAppButton } from "@/components/ui/button";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { useDictionary } from "@/lib/dictionaries";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface AboutPreviewProps {
    locale?: string;
}

export function AboutPreview({ locale = "pt-br" }: AboutPreviewProps) {
    const currentLang = (() => {
        if (locale.startsWith("pt")) return "pt";
        if (locale.startsWith("es")) return "es";
        if (locale.startsWith("fr")) return "fr";
        return "en";
    })();

    const dict = useDictionary(locale);
    const t = dict.AboutPreview;

    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-white scroll-mt-24">
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start mb-24 md:mb-32">
                    {/* Left: Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100/50 text-primary-700 font-bold text-xs uppercase tracking-wider mb-6 border border-primary-100">
                            {t.badge}
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 leading-[1.1]">
                            {t.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                                {t.titleHighlight}
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-neutral-600 mb-10">
                            <div className="leading-relaxed">
                                <ReactMarkdown components={{
                                    strong: ({ node, ...props }) => <span className="font-bold text-neutral-900" {...props} />
                                }}>
                                    {t.description_1}
                                </ReactMarkdown>
                            </div>
                            <p className="leading-relaxed">
                                {t.description_2}
                            </p>
                            <p className="leading-relaxed font-medium text-neutral-900 border-l-4 border-primary-500 pl-6 py-2 bg-neutral-50 rounded-r-xl">
                                {t.description_impact}
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-12">
                            {[
                                { icon: "🏠", label: t.features.local_guides },
                                { icon: "🎨", label: t.features.street_art },
                                { icon: "🛡️", label: t.features.safety },
                                { icon: "💚", label: t.features.social_impact },
                                { icon: "🤝", label: t.features.interaction },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-primary-200 transition-colors">
                                    <span className="text-2xl">{feature.icon}</span>
                                    <span className="font-medium text-sm text-neutral-700">{feature.label}</span>
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
                                className="border-neutral-200 text-neutral-900 hover:bg-neutral-50 font-bold px-8"
                            >
                                {t.cta}
                            </Button>
                            <WhatsAppButton
                                message={WHATSAPP_MESSAGES.general[currentLang]}
                                phone={CONTACT.whatsapp.number}
                                size="lg"
                                className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none shadow-lg shadow-green-500/20 font-bold px-8"
                            >
                                {t.ctaWhatsapp}
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
                                className="col-span-2 relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src="/images/social/IMG_0551.jpg"
                                    alt="Favela República Panorâmica"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </motion.div>

                            {/* Secondary Images */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl"
                            >
                                <Image
                                    src="/images/tours/IMG_0499.jpg"
                                    alt="Futebol na Favela"
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
                                className="relative aspect-square rounded-[2rem] overflow-hidden shadow-xl bg-neutral-100 flex items-center justify-center text-center p-4 border border-neutral-200"
                            >
                                <div>
                                    <GoogleLogo className="w-8 h-8 mx-auto mb-2 text-[#4285F4]" />
                                    <div className="flex justify-center gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="font-bold text-2xl text-neutral-900">4.9</p>
                                    <p className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">Avaliações</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Graphic */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -z-10" />
                    </div>
                </div>

                {/* Social Project Section (Dona Irene) */}
                {dict.SocialProject && (
                    <div className="relative z-10">
                        <div className="bg-neutral-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
                            {/* Background Pattern & Noise */}
                            <div className="absolute inset-0 opacity-20 bg-[url('/images/noise.png')] mix-blend-overlay pointer-events-none" />
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-neutral-800/50 to-neutral-900 pointer-events-none" />

                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1">
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                                        <Image
                                            src="/images/social/PHOTO-2022-09-20-13-10-53.jpeg"
                                            alt="Centro Social Dona Irene"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="mt-4 text-center text-sm text-neutral-400 font-medium tracking-wide uppercase">
                                        ❤️ Feito por moradores, para moradores
                                    </p>
                                </div>

                                <div className="order-1 lg:order-2">
                                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-wider mb-6 border border-white/20 backdrop-blur-md">
                                        {dict.SocialProject.badge}
                                    </span>
                                    <h3 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                                        {dict.SocialProject.title} <br />
                                        <span className="text-primary-400">{dict.SocialProject.titleHighlight}</span>
                                    </h3>
                                    <div className="space-y-6 text-neutral-300 text-lg leading-relaxed mb-8">
                                        <p>{dict.SocialProject.description_1}</p>
                                        <p>{dict.SocialProject.description_2}</p>
                                    </div>

                                    <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                                        {dict.SocialProject.stats.map((stat, idx) => (
                                            <div key={idx}>
                                                <p className="text-3xl font-bold text-primary-400 mb-1">{stat.value}</p>
                                                <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default AboutPreview;
