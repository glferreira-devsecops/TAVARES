"use client";

import { AirbnbLogo, GameControllerLogo, GoogleLogo, TripAdvisorLogo } from "@/components/ui/brand-logos";
import { Button, WhatsAppButton } from "@/components/ui/button";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { useDictionary } from "@/lib/dictionaries";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface AboutPreviewProps {
    locale?: string;
}

export function AboutPreview({ locale = "pt-br" }: AboutPreviewProps) {
    const currentLang = (() => {
        if (locale.startsWith("pt")) return "pt";
        if (locale.startsWith("es")) return "es";
        if (locale.startsWith("fr")) return "fr";
        return "en";
    })() as "pt" | "en" | "es" | "fr";

    // Derived language for content that only supports pt/en (like WhatsApp messages if needed, though they seem fully supported now)
    // AboutPreview mostly uses static content defined in the file, which supports all 4, so this might be less critical but good for consistency.
    // Checking file usage... WhatsApp messages use WHATSAPP_MESSAGES which supports all 4.
    // Static content `content` object supports all 4.
    // So actually AboutPreview DOES NOT need contentLang if it doesn't access external data with limited locales.
    // Let's re-read step 153.
    // It creates `content` object with pt, en, es, fr keys.
    // It uses `WHATSAPP_MESSAGES.general[currentLang]`.
    // It DOES NOT use any external data like posts or tours.
    // So AboutPreview might NOT be broken!
    // Wait, let's verify WHATSAPP_MESSAGES again (step 126).
    // WHATSAPP_MESSAGES.general supports pt, en, es, fr.
    // WHATSAPP_MESSAGES.tourReservation supports pt, en, es, fr.
    // So AboutPreview seems SAFE.
    // I will SKIP updating AboutPreview unless I see a reason.
    // Correction: I should check if I missed anything.
    // It uses `locale` prop directly for static content labels in features list (lines 140-143).
    // `label: locale === "pt-br" ? ...`
    // The locale passed in might be just "pt" or "pt-BR".
    // `getLang` logic normalized it to "pt".
    // But lines 140-143 check `locale === "pt-br"`.
    // If locale is "pt", this check fails and it defaults to English.
    // I should fix this to use `currentLang === "pt"`.



    const dict = useDictionary(locale);
    const t = dict.AboutPreview;

    // Helper function to render text with bold parts
    const renderWithEmphasis = (text: string) => {
        return text.split(/(\*\*.*?\*\*)/).map((part, i) =>
            part.startsWith('**') && part.endsWith('**') ?
                <strong key={i} className="font-bold text-neutral-900">{part.slice(2, -2)}</strong> :
                part
        );
    };

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-neutral-900 scroll-mt-24">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative mb-8 lg:mb-0"
                    >
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 transition-transform duration-500 hover:rotate-0">
                            <Image
                                src="/images/about-community.png"
                                alt="Comunidade Tavares Bastos - Cenário do FIFA Street"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Overlay Gradient for Text readability if needed, but keeping it clean for now */}
                        </div>


                        {/* Floating Stats Card - Static on Mobile (No Overlap Risk), Floated on Desktop */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="relative mt-6 mx-auto md:absolute md:mt-0 md:bottom-8 md:right-8 bg-white rounded-2xl shadow-soft-xl p-6 border border-neutral-100 min-w-[200px] text-center md:text-left z-20"
                        >
                            <p className="font-heading text-4xl md:text-5xl font-bold text-primary-500">
                                {t.stats.value}
                            </p>
                            <p className="text-neutral-600 text-sm md:text-base font-medium">
                                {t.stats.label}
                            </p>
                        </motion.div>

                        {/* Decorative element */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left pt-6 md:pt-0"
                    >
                        <span className="inline-block text-[10px] md:text-xs font-black text-orange-600 uppercase tracking-[0.3em] mb-4 md:mb-5">
                            {t.badge}
                        </span>

                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight leading-[1.05]">
                            <span className="block">{t.title}</span>
                            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">{t.titleHighlight}</span>
                        </h2>

                        <div className="space-y-6 mb-12">
                            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed font-light">
                                {renderWithEmphasis(t.description_1)}
                            </p>
                            <p className="text-neutral-600 text-lg md:text-xl leading-relaxed font-light">
                                {renderWithEmphasis(t.description_2)}
                            </p>
                            <div className="bg-primary-50 p-4 rounded-xl border-l-4 border-primary-500">
                                <p className="text-primary-800 text-base md:text-lg leading-relaxed font-medium">
                                    {t.description_impact}
                                </p>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                { icon: "🏠", label: t.features.local_guides },
                                { icon: "🎨", label: t.features.street_art },
                                { icon: "🛡️", label: t.features.safety },
                                { icon: "💚", label: t.features.social_impact },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <span className="text-2xl">{feature.icon}</span>
                                    <span className="text-neutral-700 font-medium">{feature.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* World Renowned Grid */}
                        <div className="mb-10">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-neutral-900">{t.trustedTitle}</h3>
                                <p className="text-neutral-500 text-sm">{t.trustedSubtitle}</p>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* FIFA Street */}
                                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 flex flex-col items-center justify-center text-center hover:bg-neutral-100 transition-colors">
                                    <GameControllerLogo className="w-8 h-8 text-neutral-800 mb-2" />
                                    <div className="font-bold text-neutral-900 text-sm">{t.highlights.fifa.title}</div>
                                    <div className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">{t.highlights.fifa.subtitle}</div>
                                </div>

                                {/* TripAdvisor */}
                                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 flex flex-col items-center justify-center text-center hover:bg-neutral-100 transition-colors">
                                    <TripAdvisorLogo className="w-8 h-8 text-green-600 mb-2" />
                                    <div className="font-bold text-neutral-900 text-sm">{t.highlights.tripadvisor.title}</div>
                                    <div className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">{t.highlights.tripadvisor.subtitle}</div>
                                </div>

                                {/* Airbnb */}
                                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 flex flex-col items-center justify-center text-center hover:bg-neutral-100 transition-colors">
                                    <AirbnbLogo className="w-8 h-8 text-[#FF5A5F] mb-2" />
                                    <div className="font-bold text-neutral-900 text-sm">{t.highlights.airbnb.title}</div>
                                    <div className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">{t.highlights.airbnb.subtitle}</div>
                                </div>

                                {/* Google */}
                                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 flex flex-col items-center justify-center text-center hover:bg-neutral-100 transition-colors">
                                    <GoogleLogo className="w-8 h-8 text-[#4285F4] mb-2" />
                                    <div className="font-bold text-neutral-900 text-sm">{t.highlights.google.title}</div>
                                    <div className="text-[10px] uppercase tracking-wide text-neutral-500 font-bold mt-1">{t.highlights.google.subtitle}</div>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="primary"
                                size="lg"
                                href="/quem-somos"
                                icon={<ArrowRight className="w-5 h-5" />}
                                iconPosition="right"
                                className="bg-neutral-900 text-white hover:bg-neutral-800 shadow-xl border-none font-bold tracking-wide py-6 px-8 rounded-full"
                            >
                                {t.cta}
                            </Button>
                            <WhatsAppButton
                                message={WHATSAPP_MESSAGES.general[currentLang]}
                                phone={CONTACT.whatsapp.number}
                                size="lg"
                                className="bg-green-600 text-white hover:bg-green-700 shadow-xl shadow-green-600/30 border-none font-bold py-6 px-8 rounded-full"
                            >
                                {t.ctaWhatsapp}
                            </WhatsAppButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AboutPreview;
