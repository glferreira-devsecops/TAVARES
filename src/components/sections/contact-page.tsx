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
import { useLocale, useTranslations } from "next-intl";

export function ContactPageClient() {
    const t = useTranslations("Contact");
    const locale = useLocale();
    const currentLang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    return (
        <main id="contact" className="min-h-screen bg-neutral-950 py-24 md:py-32 scroll-mt-24 relative overflow-hidden gpu-accelerated">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 font-bold text-xs uppercase tracking-[0.2em] mb-6">
                        {t("title")}
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tighter">
                        {t("subtitle")}
                    </h1>
                    <p className="text-xl text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
                        {t("description")}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* WhatsApp - Highlighted */}
                        <div className="group bg-gradient-to-br from-green-900/40 to-green-950/40 border border-green-500/20 rounded-3xl p-8 hover:border-green-500/40 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors duration-500" />
                            <div className="flex items-start gap-6 relative z-10">
                                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <MessageCircle className="w-7 h-7 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-heading font-bold text-white text-2xl mb-2">
                                        {t("whatsapp")}
                                    </h3>
                                    <p className="text-green-200/80 mb-4 font-light text-lg">{t("whatsappDesc")}</p>
                                    <p className="font-mono text-green-400 mb-6 text-xl tracking-wide">
                                        {CONTACT.whatsapp.displayNumber}
                                    </p>
                                    <WhatsAppButton
                                        phone={CONTACT.whatsapp.number}
                                        message={WHATSAPP_MESSAGES.general[currentLang]}
                                        size="md"
                                        className="bg-white text-green-900 hover:bg-green-50 font-bold px-8 py-3 rounded-xl"
                                    >
                                        {t("sendMessage")}
                                    </WhatsAppButton>
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    <Mail className="w-7 h-7 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-white text-2xl mb-2">
                                        {t("email")}
                                    </h3>
                                    <p className="text-neutral-300 mb-3 font-light">{t("emailDesc")}</p>
                                    <a
                                        href={`mailto:${CONTACT.email}`}
                                        className="text-white hover:text-blue-400 font-medium text-lg transition-colors border-b border-white/20 hover:border-blue-400"
                                    >
                                        {CONTACT.email}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Instagram */}
                        <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    <Instagram className="w-7 h-7 text-pink-400" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-white text-2xl mb-2">
                                        {t("instagram")}
                                    </h3>
                                    <p className="text-neutral-300 mb-3 font-light">{t("instagramDesc")}</p>
                                    <a
                                        href={CONTACT.instagramUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-pink-400 font-medium text-lg transition-colors border-b border-white/20 hover:border-pink-400"
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
                        className="space-y-6"
                    >
                        {/* Location */}
                        <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300 min-h-[200px]">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    <MapPin className="w-7 h-7 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-white text-2xl mb-2">
                                        {t("location")}
                                    </h3>
                                    <p className="text-neutral-300 mb-4 font-medium">{t("locationDesc")}</p>
                                    <p className="text-white text-lg leading-relaxed mb-6 font-medium">
                                        {CONTACT.address.street}<br />
                                        {CONTACT.address.neighborhood}, {CONTACT.address.city}<br />
                                        {CONTACT.address.state} - {CONTACT.address.country}
                                    </p>
                                    <a
                                        href={LOCATION.googleMapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-white font-bold bg-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
                                    >
                                        {t("viewMap")} →
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                                    <Clock className="w-7 h-7 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-white text-2xl mb-2">
                                        {t("hours")}
                                    </h3>
                                    <p className="text-white text-lg leading-relaxed">
                                        {t("hoursValue")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp preference banner */}
                        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-[40px] translate-x-1/2 -translate-y-1/2" />
                            <div className="flex items-start gap-6 relative z-10">
                                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                    <Send className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-bold text-2xl mb-2">
                                        {t("preferWhatsApp")}
                                    </h3>
                                    <p className="text-white/90 font-light text-lg leading-relaxed">
                                        {t("preferWhatsAppDesc")}
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
