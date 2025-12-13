"use client";

import { WhatsAppButton } from "@/components/ui/button";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowLeft, Home, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-neutral-50 via-orange-50/30 to-neutral-50 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-lg text-center relative z-10">
                {/* Animated 404 Number */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative mb-8"
                >
                    <span className="text-[160px] md:text-[200px] font-heading font-bold bg-gradient-to-br from-orange-200 via-orange-100 to-orange-50 bg-clip-text text-transparent leading-none select-none">
                        404
                    </span>

                    {/* Floating Icon */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-xl shadow-orange-500/30"
                        >
                            <MapPin className="w-10 h-10 md:w-12 md:h-12 text-white" />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                        Página não encontrada
                    </h1>
                    <p className="text-neutral-500 text-lg mb-8 leading-relaxed">
                        Ops! Parece que você se perdeu nas vielas da Tavares Bastos.
                        <br className="hidden sm:block" />
                        Não se preocupe, nossos guias podem te ajudar!
                    </p>
                </motion.div>

                {/* Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="/pt"
                        className="group inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 px-8 py-4 text-lg bg-neutral-900 text-white hover:bg-neutral-800 hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Voltar ao início
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                    </Link>
                    <Link
                        href="/pt/tours"
                        className="inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 px-8 py-4 text-lg border-2 border-neutral-200 text-neutral-700 hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Ver tours
                    </Link>
                </motion.div>

                {/* WhatsApp Help Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-neutral-100 shadow-sm"
                >
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-green-600" />
                        </span>
                        <span className="font-semibold text-neutral-900">Precisa de ajuda?</span>
                    </div>
                    <p className="text-sm text-neutral-500 mb-4">
                        Fale conosco pelo WhatsApp e responderemos em poucos minutos!
                    </p>
                    <WhatsAppButton
                        message={WHATSAPP_MESSAGES.general.pt}
                        phone={CONTACT.whatsapp.number}
                        size="sm"
                        className="rounded-full"
                    >
                        Falar com a equipe
                    </WhatsAppButton>
                </motion.div>
            </div>
        </section>
    );
}
