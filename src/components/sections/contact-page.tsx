"use client";

import { WhatsAppButton } from "@/components/ui/button";
import { CONTACT, LOCATION, WHATSAPP_MESSAGES } from "@/lib/constants";
import { motion } from "framer-motion";
import {
    Clock,
    Instagram,
    Mail,
    MapPin,
    MessageCircle,
    Send
} from "lucide-react";

interface ContactPageClientProps {
    locale: string;
}

export function ContactPageClient({ locale }: ContactPageClientProps) {
    const lang = (() => {
        if (locale.startsWith("pt")) return "pt";
        if (locale.startsWith("es")) return "es";
        if (locale.startsWith("fr")) return "fr";
        return "en";
    })() as "pt" | "en" | "es" | "fr";

    const content = {
        pt: {
            title: "Entre em Contato",
            subtitle: "Estamos aqui para ajudar",
            description: "Tem alguma dúvida ou quer reservar seu tour? Entre em contato conosco através de qualquer um dos canais abaixo.",
            whatsapp: "WhatsApp",
            whatsappDesc: "Resposta rápida, geralmente em minutos",
            email: "E-mail",
            emailDesc: "Para questões mais detalhadas",
            instagram: "Instagram",
            instagramDesc: "Siga-nos para novidades e fotos",
            location: "Localização",
            locationDesc: "Ponto de encontro dos tours",
            hours: "Horário de Atendimento",
            hoursValue: "Seg - Dom: 8h às 20h",
            preferWhatsApp: "Preferimos WhatsApp!",
            preferWhatsAppDesc: "É a forma mais rápida de nos contactar. Respondemos em poucos minutos durante o horário comercial.",
            sendMessage: "Enviar Mensagem",
            viewMap: "Ver no mapa",
        },
        en: {
            title: "Contact Us",
            subtitle: "We're here to help",
            description: "Have a question or want to book your tour? Contact us through any of the channels below.",
            whatsapp: "WhatsApp",
            whatsappDesc: "Quick response, usually within minutes",
            email: "Email",
            emailDesc: "For more detailed inquiries",
            instagram: "Instagram",
            instagramDesc: "Follow us for news and photos",
            location: "Location",
            locationDesc: "Tour meeting point",
            hours: "Business Hours",
            hoursValue: "Mon - Sun: 8am to 8pm",
            preferWhatsApp: "We Prefer WhatsApp!",
            preferWhatsAppDesc: "It's the fastest way to contact us. We respond within minutes during business hours.",
            sendMessage: "Send Message",
            viewMap: "View on map",
        },
        es: {
            title: "Contáctanos",
            subtitle: "Estamos aquí para ayudar",
            description: "¿Tienes alguna pregunta o quieres reservar tu tour? Contáctanos a través de cualquiera de los canales abajo.",
            whatsapp: "WhatsApp",
            whatsappDesc: "Respuesta rápida, generalmente en minutos",
            email: "Correo Electrónico",
            emailDesc: "Para consultas más detalladas",
            instagram: "Instagram",
            instagramDesc: "Síguenos para novedades y fotos",
            location: "Ubicación",
            locationDesc: "Punto de encuentro de los tours",
            hours: "Horario de Atención",
            hoursValue: "Lun - Dom: 8h a 20h",
            preferWhatsApp: "¡Preferimos WhatsApp!",
            preferWhatsAppDesc: "Es la forma más rápida de contactarnos. Respondemos en pocos minutos durante el horario comercial.",
            sendMessage: "Enviar Mensaje",
            viewMap: "Ver en el mapa",
        },
        fr: {
            title: "Contactez-Nous",
            subtitle: "Nous sommes là pour vous aider",
            description: "Vous avez une question ou souhaitez réserver votre visite? Contactez-nous via l'un des canaux ci-dessous.",
            whatsapp: "WhatsApp",
            whatsappDesc: "Réponse rapide, généralement en quelques minutes",
            email: "E-mail",
            emailDesc: "Pour des demandes plus détaillées",
            instagram: "Instagram",
            instagramDesc: "Suivez-nous pour les actualités et photos",
            location: "Emplacement",
            locationDesc: "Point de rencontre des visites",
            hours: "Heures d'Ouverture",
            hoursValue: "Lun - Dim: 8h à 20h",
            preferWhatsApp: "Nous Préférons WhatsApp!",
            preferWhatsAppDesc: "C'est le moyen le plus rapide de nous contacter. Nous répondons en quelques minutes pendant les heures d'ouverture.",
            sendMessage: "Envoyer un Message",
            viewMap: "Voir sur la carte",
        },
    };

    const t = content[lang];

    return (
        <main id="contact" className="min-h-screen bg-neutral-50 pt-24 pb-16 scroll-mt-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
                        {t.title}
                    </h1>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        {t.description}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        {/* WhatsApp - Highlighted */}
                        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-green-800 text-lg mb-1">
                                        {t.whatsapp}
                                    </h3>
                                    <p className="text-green-700 mb-3">{t.whatsappDesc}</p>
                                    <p className="font-mono text-green-800 mb-4">
                                        {CONTACT.whatsapp.displayNumber}
                                    </p>
                                    <WhatsAppButton
                                        phone={CONTACT.whatsapp.number}
                                        message={WHATSAPP_MESSAGES.general[lang]}
                                        size="md"
                                    >
                                        {t.sendMessage}
                                    </WhatsAppButton>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-2xl p-6 shadow-soft-md">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 text-lg mb-1">
                                        {t.email}
                                    </h3>
                                    <p className="text-neutral-600 mb-2">{t.emailDesc}</p>
                                    <a
                                        href={`mailto:${CONTACT.email}`}
                                        className="text-primary-500 hover:text-primary-600 font-medium"
                                    >
                                        {CONTACT.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Instagram */}
                        <div className="bg-white rounded-2xl p-6 shadow-soft-md">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Instagram className="w-6 h-6 text-pink-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 text-lg mb-1">
                                        {t.instagram}
                                    </h3>
                                    <p className="text-neutral-600 mb-2">{t.instagramDesc}</p>
                                    <a
                                        href={CONTACT.instagramUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-500 hover:text-primary-600 font-medium"
                                    >
                                        @{CONTACT.instagram}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        {/* Location */}
                        <div className="bg-white rounded-2xl p-6 shadow-soft-md">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 text-lg mb-1">
                                        {t.location}
                                    </h3>
                                    <p className="text-neutral-600 mb-2">{t.locationDesc}</p>
                                    <p className="text-neutral-800">
                                        {CONTACT.address.street}<br />
                                        {CONTACT.address.neighborhood}, {CONTACT.address.city}<br />
                                        {CONTACT.address.state} - {CONTACT.address.country}
                                    </p>
                                    <a
                                        href={LOCATION.googleMapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 font-medium mt-2"
                                    >
                                        Ver no mapa →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="bg-white rounded-2xl p-6 shadow-soft-md">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-amber-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-neutral-900 text-lg mb-1">
                                        {t.hours}
                                    </h3>
                                    <p className="text-neutral-800">
                                        {t.hoursValue}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp preference banner */}
                        <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-6 text-white">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Send className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">
                                        {t.preferWhatsApp}
                                    </h3>
                                    <p className="text-white/90">
                                        {t.preferWhatsAppDesc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
