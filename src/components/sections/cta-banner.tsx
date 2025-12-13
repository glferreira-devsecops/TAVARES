"use client";

import { WhatsAppButton } from "@/components/ui/button";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import Image from "next/image";

interface CTABannerProps {
    locale?: string;
}

export function CTABanner({ locale = "pt" }: CTABannerProps) {
    const currentLang = (() => {
        if (locale.startsWith("pt")) return "pt";
        if (locale.startsWith("es")) return "es";
        if (locale.startsWith("fr")) return "fr";
        return "en";
    })() as "pt" | "en" | "es" | "fr";

    const content = {
        pt: {
            title: "Pronto para viver essa experiência?",
            subtitle: "A Favela Tavares Bastos espera por você. Agende seu tour e descubra o Rio de um novo ângulo.",
            cta: "Agendar via WhatsApp",
            benefits: ["Guias Locais", "Segurança Total", "Vista Panorâmica"]
        },
        en: {
            title: "Ready to live this experience?",
            subtitle: "Favela Tavares Bastos awaits you. Book your tour and discover Rio from a new angle.",
            cta: "Book via WhatsApp",
            benefits: ["Local Guides", "Total Safety", "Panoramic View"]
        },
        es: {
            title: "¿Listo para vivir esta experiencia?",
            subtitle: "La Favela Tavares Bastos te espera. Reserva tu tour y descubre Río desde un nuevo ángulo.",
            cta: "Reservar por WhatsApp",
            benefits: ["Guías Locales", "Seguridad Total", "Vista Panorámica"]
        },
        fr: {
            title: "Prêt à vivre cette expérience?",
            subtitle: "La Favela Tavares Bastos vous attend. Réservez votre visite et découvrez Rio sous un nouvel angle.",
            cta: "Réserver via WhatsApp",
            benefits: ["Guides Locaux", "Sécurité Totale", "Vue Panoramique"]
        },
    };

    const t = content[currentLang];

    return (
        <section className="relative py-16 md:py-32 overflow-hidden">
            {/* Background Image with Parallax-like fixity or just cover */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/tours/sunset-hero.png"
                    alt="Sunset at Tavares Bastos"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-neutral-900/50" />
            </div>

            <div className="relative z-10 container-custom">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl"
                    >
                        {/* Decorative Icon */}
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-500 mb-8 shadow-lg shadow-primary-500/30">
                            <MessageCircle className="w-10 h-10 text-white" />
                        </div>

                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-xl">
                            {t.title}
                        </h2>

                        <p className="text-xl text-neutral-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                            {t.subtitle}
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            {t.benefits.map((benefit, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/90 backdrop-blur-sm"
                                >
                                    <CheckCircle className="w-4 h-4 text-green-400" />
                                    {benefit}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <WhatsAppButton
                                message={WHATSAPP_MESSAGES.general[currentLang]}
                                phone={CONTACT.whatsapp.number}
                                size="lg"
                                className="w-full sm:w-auto text-lg px-8 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            >
                                {t.cta}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </WhatsAppButton>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default CTABanner;
