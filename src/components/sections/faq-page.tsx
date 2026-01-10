"use client";

import { WhatsAppButton } from "@/components/ui/button";
import { getAllFaqs } from "@/data/faqs";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

import { useLocale } from "next-intl";

export function FAQPageClient() {
    const locale = useLocale();
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const currentLang = (() => {
        if (locale.startsWith("pt")) return "pt";
        if (locale.startsWith("es")) return "es";
        if (locale.startsWith("fr")) return "fr";
        return "en";
    })() as "pt" | "en" | "es" | "fr";

    const contentLang = currentLang as "pt" | "en" | "es" | "fr";
    const faqs = getAllFaqs();

    const content = {
        pt: {
            title: "Perguntas Frequentes",
            subtitle: "Tire suas dúvidas sobre nossos tours",
            description: "Encontre respostas para as perguntas mais comuns sobre os tours no Favela-República. Se não encontrar o que procura, entre em contato!",
            stillQuestions: "Ainda tem dúvidas?",
            contactUs: "Fale conosco pelo WhatsApp",
        },
        en: {
            title: "Frequently Asked Questions",
            subtitle: "Get your questions answered about our tours",
            description: "Find answers to the most common questions about tours in Favela-República. If you can't find what you're looking for, contact us!",
            stillQuestions: "Still have questions?",
            contactUs: "Contact us via WhatsApp",
        },
        es: {
            title: "Preguntas Frecuentes",
            subtitle: "Resuelve tus dudas sobre nuestros tours",
            description: "Encuentra respuestas a las preguntas más comunes sobre los tours en el Favela-República. Si no encuentras lo que buscas, ¡contáctanos!",
            stillQuestions: "¿Aún tienes preguntas?",
            contactUs: "Contáctanos por WhatsApp",
        },
        fr: {
            title: "Questions Fréquentes",
            subtitle: "Obtenez des réponses à vos questions sur nos visites",
            description: "Trouvez les réponses aux questions les plus courantes sur les visites au Favela-República. Si vous ne trouvez pas ce que vous cherchez, contactez-nous!",
            stillQuestions: "Avez-vous encore des questions?",
            contactUs: "Contactez-nous via WhatsApp",
        },
    };

    const t = content[currentLang];

    return (
        <main id="faq" className="min-h-screen bg-neutral-50 py-24 scroll-mt-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                        <HelpCircle className="w-8 h-8 text-primary-500" />
                    </div>
                    <h1 className="font-heading text-3xl md:text-5xl font-bold text-neutral-900 mb-4">
                        {t.title}
                    </h1>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        {t.description}
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto mb-16">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full bg-white rounded-xl p-5 shadow-soft-md hover:shadow-soft-lg transition-shadow text-left flex items-start justify-between gap-4"
                            >
                                <span className="font-semibold text-neutral-900">
                                    {faq.question[contentLang]}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="bg-neutral-100 rounded-b-xl p-5 -mt-2">
                                            <p className="text-neutral-700 leading-relaxed">
                                                {faq.answer[contentLang]}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-soft-lg max-w-xl mx-auto">
                        <MessageCircle className="w-12 h-12 text-whatsapp mx-auto mb-4" />
                        <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-2">
                            {t.stillQuestions}
                        </h2>
                        <p className="text-neutral-600 mb-6">
                            {t.contactUs}
                        </p>
                        <WhatsAppButton
                            phone={CONTACT.whatsapp.number}
                            message={WHATSAPP_MESSAGES.general[currentLang]}
                            size="lg"
                        >
                            WhatsApp
                        </WhatsAppButton>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
