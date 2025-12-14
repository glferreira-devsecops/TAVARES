"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import type { Tour } from "@/types";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Calendar,
    Check,
    Clock,
    MapPin,
    Shield,
    Star,
    Users,
    X
} from "lucide-react";
import Image from "next/image";

interface TourDetailClientProps {
    tour: Tour;
    lang: "pt" | "en" | "es" | "fr";
}

import { BookingModal } from "@/components/booking/booking-modal";
import { useState } from "react";

export function TourDetailClient({ tour, lang }: TourDetailClientProps) {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const contentLang = (lang === "pt" ? "pt" : "en") as "pt" | "en";
    const content = {
        pt: {
            backToTours: "Voltar aos Tours",
            duration: "Duração",
            difficulty: "Dificuldade",
            groupSize: "Grupo",
            from: "a partir de",
            person: "por pessoa",
            bookNow: "Reservar Agora",
            contactUs: "Fale Conosco",
            included: "O que está incluso",
            notIncluded: "Não incluso",
            itinerary: "Roteiro",
            meetingPoint: "Ponto de Encontro",
            highlights: "Destaques",
            safetyBadge: "Tour seguro com guia local credenciado",
            featured: "Destaque",
            difficultyLabels: { easy: "Fácil", moderate: "Moderado", challenging: "Desafiador" }
        },
        en: {
            backToTours: "Back to Tours",
            duration: "Duration",
            difficulty: "Difficulty",
            groupSize: "Group Size",
            from: "from",
            person: "per person",
            bookNow: "Book Now",
            contactUs: "Contact Us",
            included: "What's Included",
            notIncluded: "Not Included",
            itinerary: "Itinerary",
            meetingPoint: "Meeting Point",
            highlights: "Highlights",
            safetyBadge: "Safe tour with accredited local guide",
            featured: "Featured",
            difficultyLabels: { easy: "Easy", moderate: "Moderate", challenging: "Challenging" }
        },
        es: {
            backToTours: "Volver a los Tours",
            duration: "Duración",
            difficulty: "Dificultad",
            groupSize: "Tamaño del Grupo",
            from: "desde",
            person: "por persona",
            bookNow: "Reservar Ahora",
            contactUs: "Contáctanos",
            included: "Qué está incluido",
            notIncluded: "No incluido",
            itinerary: "Itinerario",
            meetingPoint: "Punto de Encuentro",
            highlights: "Destacados",
            safetyBadge: "Tour seguro con guía local acreditado",
            featured: "Destacado",
            difficultyLabels: { easy: "Fácil", moderate: "Moderado", challenging: "Desafiante" }
        },
        fr: {
            backToTours: "Retour aux Visites",
            duration: "Durée",
            difficulty: "Difficulté",
            groupSize: "Taille du Groupe",
            from: "à partir de",
            person: "par personne",
            bookNow: "Réserver Maintenant",
            contactUs: "Contactez-Nous",
            included: "Ce qui est inclus",
            notIncluded: "Non inclus",
            itinerary: "Itinéraire",
            meetingPoint: "Point de Rencontre",
            highlights: "Points Forts",
            safetyBadge: "Visite sécurisée avec guide local accrédité",
            featured: "En Vedette",
            difficultyLabels: { easy: "Facile", moderate: "Modéré", challenging: "Difficile" }
        }
    };

    const t = content[lang];
    const heroImage = tour.images[0];

    return (
        <main className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px]">
                <Image
                    src={heroImage?.src || "/images/tours/tour-completo-hero.png"}
                    alt={heroImage?.alt[contentLang] || tour.title[contentLang]}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Back Button */}
                <div className="absolute top-24 left-0 right-0">
                    <div className="container mx-auto px-4">
                        <Link
                            href="/tours"
                            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            {t.backToTours}
                        </Link>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 pb-12">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {tour.featured && (
                                <span className="inline-flex items-center gap-1.5 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                                    <Star className="w-4 h-4 fill-current" />
                                    Destaque
                                </span>
                            )}
                            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                {tour.title[contentLang]}
                            </h1>
                            <p className="text-xl text-white/90 max-w-2xl">
                                {tour.subtitle[contentLang]}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Quick Info Cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                <div className="bg-white rounded-xl p-4 shadow-soft-md">
                                    <Clock className="w-6 h-6 text-primary-500 mb-2" />
                                    <p className="text-sm text-neutral-500">{t.duration}</p>
                                    <p className="font-semibold text-neutral-900">{tour.duration}</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow-soft-md">
                                    <Shield className="w-6 h-6 text-green-500 mb-2" />
                                    <p className="text-sm text-neutral-500">{t.difficulty}</p>
                                    <p className="font-semibold text-neutral-900">
                                        {t.difficultyLabels[tour.difficulty]}
                                    </p>
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow-soft-md">
                                    <Users className="w-6 h-6 text-blue-500 mb-2" />
                                    <p className="text-sm text-neutral-500">{t.groupSize}</p>
                                    <p className="font-semibold text-neutral-900">{tour.groupSize.max} max</p>
                                </div>
                                <div className="bg-white rounded-xl p-4 shadow-soft-md">
                                    <Calendar className="w-6 h-6 text-amber-500 mb-2" />
                                    <p className="text-sm text-neutral-500">{t.from}</p>
                                    <p className="font-semibold text-primary-500">
                                        R$ {tour.priceFrom.toLocaleString("pt-BR")}
                                    </p>
                                </div>
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <p className="text-lg text-neutral-700 leading-relaxed whitespace-pre-line">
                                    {tour.description[contentLang]}
                                </p>
                            </motion.div>

                            {/* Highlights */}
                            {tour.highlights && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
                                        {t.highlights}
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {tour.highlights[contentLang].map((highlight, idx) => (
                                            <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-soft-sm">
                                                <Star className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-neutral-700">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Itinerary */}
                            {tour.itinerary && tour.itinerary.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
                                        {t.itinerary}
                                    </h2>
                                    <div className="space-y-4">
                                        {tour.itinerary.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="relative pl-8 pb-8 border-l-2 border-primary-200 last:pb-0 last:border-l-transparent"
                                            >
                                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-500" />
                                                <div className="bg-white rounded-xl p-5 shadow-soft-md">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h3 className="font-semibold text-neutral-900">
                                                            {item.title[contentLang]}
                                                        </h3>
                                                        <span className="text-sm text-primary-500 font-medium">
                                                            {item.duration}
                                                        </span>
                                                    </div>
                                                    <p className="text-neutral-600">{item.description[contentLang]}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Included / Not Included */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="grid md:grid-cols-2 gap-6"
                            >
                                {/* Included */}
                                <div className="bg-green-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                                        <Check className="w-5 h-5" />
                                        {t.included}
                                    </h3>
                                    <ul className="space-y-2">
                                        {tour.included[contentLang].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-green-700">
                                                <Check className="w-4 h-4 mt-1 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Not Included */}
                                <div className="bg-red-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                                        <X className="w-5 h-5" />
                                        {t.notIncluded}
                                    </h3>
                                    <ul className="space-y-2">
                                        {tour.notIncluded[contentLang].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-red-700">
                                                <X className="w-4 h-4 mt-1 flex-shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Meeting Point */}
                            {tour.meetingPoint && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-6">
                                        {t.meetingPoint}
                                    </h2>
                                    <div className="bg-white rounded-xl p-6 shadow-soft-md">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-6 h-6 text-primary-500" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-neutral-900 mb-1">
                                                    {tour.meetingPoint.name[contentLang]}
                                                </h3>
                                                <p className="text-neutral-600 mb-2">
                                                    {tour.meetingPoint.address}
                                                </p>
                                                {tour.meetingPoint.instructions && (
                                                    <p className="text-sm text-primary-600">
                                                        {tour.meetingPoint.instructions[contentLang]}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Right Column - Booking Card */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="sticky top-28"
                            >
                                <div className="bg-white rounded-2xl shadow-soft-xl p-6 border border-neutral-100">
                                    {/* Price */}
                                    <div className="text-center mb-6 pb-6 border-b border-neutral-100">
                                        <p className="text-sm text-neutral-500 mb-1">{t.from}</p>
                                        <p className="text-4xl font-bold text-primary-500">
                                            R$ {tour.priceFrom.toLocaleString("pt-BR")}
                                        </p>
                                        <p className="text-neutral-500">{t.person}</p>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="space-y-3">
                                        <Button
                                            variant="whatsapp"
                                            fullWidth
                                            size="lg"
                                            onClick={() => setIsBookingModalOpen(true)}
                                        >
                                            {t.bookNow}
                                        </Button>

                                        <Button
                                            variant="outline"
                                            fullWidth
                                            size="lg"
                                            href={`https://wa.me/${CONTACT.whatsapp.number.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general[lang])}`}
                                            external
                                        >
                                            {t.contactUs}
                                        </Button>
                                    </div>

                                    {/* Safety Badge */}
                                    <div className="mt-6 pt-6 border-t border-neutral-100">
                                        <div className="flex items-center gap-3 text-sm text-neutral-600">
                                            <Shield className="w-5 h-5 text-green-500" />
                                            <span>Tour seguro com guia local credenciado</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                tourTitle={tour.title[contentLang]}
                locale={lang}
            />
        </main >
    );
}
