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
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative"
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

                        {/* Floating Stats Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="absolute -bottom-6 -right-6 md:bottom-8 md:right-8 bg-white rounded-2xl shadow-soft-xl p-6 md:p-8"
                        >
                            <p className="font-heading text-4xl md:text-5xl font-bold text-primary-500">
                                {t.highlight.number}
                            </p>
                            <p className="text-neutral-600 text-sm md:text-base">
                                {t.highlight.label}
                            </p>
                        </motion.div>

                        {/* Decorative element */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-100 rounded-full -z-10" />
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-xs font-black text-orange-600 uppercase tracking-[0.3em] mb-5">
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
                                { icon: "🏠", label: locale === "pt-br" ? "Guias locais" : "Local guides" },
                                { icon: "🎨", label: locale === "pt-br" ? "Arte urbana" : "Street art" },
                                { icon: "🛡️", label: locale === "pt-br" ? "Segurança" : "Safety" },
                                { icon: "💚", label: locale === "pt-br" ? "Impacto social" : "Social impact" },
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
