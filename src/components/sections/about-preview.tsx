"use client";

import { Button, WhatsAppButton } from "@/components/ui/button";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
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


    const content = {
        pt: {
            badge: "Quem Somos",
            title: "Turismo que transforma vidas",
            paragraphs: [
                "A Favela-República nasce na Tavares Bastos com o objetivo de contar a história da nossa comunidade, valorizar a arte urbana e receber visitantes com hospitalidade genuína.",
                "Somos uma iniciativa de turismo comunitário — guiada por moradores, segura, responsável e profundamente cultural. Cada tour que você faz contribui diretamente para a economia local e o desenvolvimento da comunidade.",
            ],
            highlight: { number: "10+", label: "anos de história" },
            cta: "Conheça nossa história",
            ctaWhatsapp: "Fale conosco",
        },
        en: {
            badge: "About Us",
            title: "Tourism that transforms lives",
            paragraphs: [
                "Favela-República was born in Tavares Bastos with the goal of telling the story of our community, valuing urban art and welcoming visitors with genuine hospitality.",
                "We are a community tourism initiative — guided by residents, safe, responsible and deeply cultural. Every tour you take directly contributes to the local economy and community development.",
            ],
            highlight: { number: "10+", label: "years of history" },
            cta: "Learn our story",
            ctaWhatsapp: "Talk to us",
        },
        es: {
            badge: "Quiénes Somos",
            title: "Turismo que transforma vidas",
            paragraphs: [
                "Favela-República nace en Tavares Bastos con el objetivo de contar la historia de nuestra comunidad, valorar el arte urbano y recibir visitantes con hospitalidad genuina.",
                "Somos una iniciativa de turismo comunitario — guiada por residentes, segura, responsable y profundamente cultural. Cada tour que haces contribuye directamente a la economía local y al desarrollo de la comunidad.",
            ],
            highlight: { number: "10+", label: "años de historia" },
            cta: "Conoce nuestra historia",
            ctaWhatsapp: "Habla con nosotros",
        },
        fr: {
            badge: "Qui Sommes-Nous",
            title: "Tourisme qui transforme des vies",
            paragraphs: [
                "Favela-República est née à Tavares Bastos avec l'objectif de raconter l'histoire de notre communauté, valoriser l'art urbain et accueillir les visiteurs avec une hospitalité authentique.",
                "Nous sommes une initiative de tourisme communautaire — guidée par des résidents, sûre, responsable et profondément culturelle. Chaque visite que vous faites contribue directement à l'économie locale et au développement de la communauté.",
            ],
            highlight: { number: "10+", label: "ans d'histoire" },
            cta: "Découvrez notre histoire",
            ctaWhatsapp: "Contactez-nous",
        },
    };

    const t = content[currentLang];

    return (
        <section className="py-12 md:py-24 bg-white overflow-hidden">
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
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-soft-xl rotate-3 transition-transform duration-500 hover:rotate-0">
                            <Image
                                src="/images/about-community.png"
                                alt="Comunidade Tavares Bastos"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
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
                                {t.highlight.number}
                            </p>
                            <p className="text-neutral-600 text-sm md:text-base font-medium">
                                {t.highlight.label}
                            </p>
                        </motion.div>

                        {/* Decorative element */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full -z-10" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-0 md:opacity-100 transition-opacity" />
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

                        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight leading-[1.1]">
                            <span className="block">Turismo que</span>
                            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">transforma vidas</span>
                        </h2>

                        <div className="space-y-5 mb-10">
                            {t.paragraphs.map((paragraph, index) => (
                                <p key={index} className="text-neutral-500 text-lg leading-relaxed font-light">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {[
                                { icon: "🏠", label: currentLang === "pt" ? "Guias locais" : "Local guides" },
                                { icon: "🎨", label: currentLang === "pt" ? "Arte urbana" : "Street art" },
                                { icon: "🛡️", label: currentLang === "pt" ? "Segurança" : "Safety" },
                                { icon: "💚", label: currentLang === "pt" ? "Impacto social" : "Social impact" },
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <span className="text-2xl">{feature.icon}</span>
                                    <span className="text-neutral-700 font-medium">{feature.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                variant="primary"
                                size="lg"
                                href="/quem-somos"
                                icon={<ArrowRight className="w-5 h-5" />}
                                iconPosition="right"
                                className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600 shadow-xl shadow-orange-500/30 border-none font-bold tracking-wide"
                            >
                                {t.cta}
                            </Button>
                            <WhatsAppButton
                                message={WHATSAPP_MESSAGES.general[currentLang]}
                                phone={CONTACT.whatsapp.number}
                                size="lg"
                                className="bg-green-600 text-white hover:bg-green-700 shadow-xl shadow-green-600/30 border-none font-bold"
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
