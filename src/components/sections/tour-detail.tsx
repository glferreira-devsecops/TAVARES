"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { Tour } from "@/types";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Check,
    Clock,
    MapPin,
    Shield,
    Star,
    Users,
    X
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface TourDetailClientProps {
    tour: Tour;
    lang: "pt" | "en" | "es" | "fr";
}

import { BookingModal } from "@/components/booking/booking-modal";
import { useState } from "react";

export function TourDetailClient({ tour, lang }: TourDetailClientProps) {
    const tTours = useTranslations("Tours");
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const contentLang = lang as "pt" | "en" | "es" | "fr";
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
            safetyBadge: "Tour seguro com condutor local credenciado",
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
            safetyBadge: "Safe tour with accredited local conductor",
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
            safetyBadge: "Tour seguro con conductor local acreditado",
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
            safetyBadge: "Visite sécurisée avec conducteur local accrédité",
            featured: "En Vedette",
            difficultyLabels: { easy: "Facile", moderate: "Modéré", challenging: "Difficile" }
        }
    };

    const t = content[lang];
    const heroImage = tour.images[0];

    return (
        <main className="min-h-screen bg-neutral-950 selection:bg-primary-500/30 selection:text-primary-200">
            {/* Hero Section */}
            <section className="relative h-[85vh] min-h-[600px]">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={heroImage || "/images/tours/IMG_7268_v1.webp"}
                        alt={tour.title[contentLang]}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/60 to-neutral-950" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
                    {/* Cinematic Grain */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>

                {/* Back Button */}
                <div className="absolute top-28 left-0 right-0 z-20">
                    <div className="container-custom mx-auto">
                        <Link
                            href="/tours"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm font-medium">{t.backToTours}</span>
                        </Link>
                    </div>
                </div>

                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 pb-24 z-10">
                    <div className="container-custom mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-4xl"
                        >
                            {tour.featured && (
                                <span className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-300 px-4 py-1.5 rounded-full text-sm font-bold shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)] mb-8">
                                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    <span>{t.featured}</span>
                                </span>
                            )}
                            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9] tracking-tighter drop-shadow-2xl break-words hyphens-auto">
                                {tour.title[contentLang]}
                            </h1>
                            <p className="text-xl md:text-2xl text-neutral-200/90 max-w-2xl font-light leading-relaxed drop-shadow-lg">
                                {tour.subtitle[contentLang]}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="pb-24 pt-12 relative">
                {/* Ambient Background */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

                <div className="container-custom relative z-10 pt-8 lg:pt-0">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2 space-y-16">
                            {/* Quick Info Cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-colors group">
                                    <Clock className="w-6 h-6 text-primary-400 mb-3 group-hover:scale-110 transition-transform" />
                                    <p className="text-sm text-neutral-300 font-medium mb-1">{t.duration}</p>
                                    <p className="font-bold text-white text-lg">{tour.duration}</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-colors group">
                                    <Shield className="w-6 h-6 text-emerald-400 mb-3 group-hover:scale-110 transition-transform" />
                                    <p className="text-sm text-neutral-300 font-medium mb-1">{t.difficulty}</p>
                                    <p className="font-bold text-white text-lg">
                                        {t.difficultyLabels[tour.difficulty]}
                                    </p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-colors group">
                                    <Users className="w-6 h-6 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                                    <p className="text-sm text-neutral-300 font-medium mb-1">{t.groupSize}</p>
                                    <p className="font-bold text-white text-lg">{tour.groupSize.max} max</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-colors group">
                                    <Star className="w-6 h-6 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
                                    <p className="text-sm text-neutral-300 font-medium mb-1">Avaliação</p>
                                    <p className="font-bold text-white text-lg">5.0 (Google)</p>
                                </div>
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <p className="text-lg md:text-xl text-neutral-200 leading-relaxed whitespace-pre-line font-normal">
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
                                    <h2 className="text-3xl font-heading font-bold text-white mb-8 border-l-4 border-primary-500 pl-4">
                                        {t.highlights}
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {tour.highlights[contentLang].map((highlight, idx) => (
                                            <div key={idx} className="flex items-start gap-4 bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-colors hover:bg-white/[0.07]">
                                                <Star className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                                                <span className="text-neutral-200 font-medium text-lg leading-snug">{highlight}</span>
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
                                    <h2 className="text-3xl font-heading font-bold text-white mb-8 border-l-4 border-primary-500 pl-4">
                                        {t.itinerary}
                                    </h2>
                                    <div className="space-y-6">
                                        {tour.itinerary.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="relative pl-10 pb-8 border-l border-white/10 last:pb-0 last:border-l-transparent group"
                                            >
                                                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary-500 ring-4 ring-neutral-950 group-hover:scale-150 transition-transform duration-300" />
                                                <div className="bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/5 transition-colors">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                                                        <h3 className="font-bold text-white text-xl">
                                                            {item.title[contentLang]}
                                                        </h3>
                                                        <span className="text-sm text-primary-400 font-bold uppercase tracking-wider bg-primary-500/10 px-3 py-1 rounded-full border border-primary-500/20">
                                                            {item.duration}
                                                        </span>
                                                    </div>
                                                    <p className="text-neutral-300 leading-relaxed font-normal text-lg">{item.description[contentLang]}</p>
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
                                className="grid md:grid-cols-2 gap-8"
                            >
                                {/* Included */}
                                <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-8">
                                    <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-3">
                                        <div className="p-2 bg-emerald-500/10 rounded-lg">
                                            <Check className="w-5 h-5" />
                                        </div>
                                        {t.included}
                                    </h3>
                                    <ul className="space-y-4">
                                        {tour.included[contentLang].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-emerald-100/90 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
                                                <span className="text-lg leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Not Included */}
                                <div className="bg-red-950/20 border border-red-500/20 rounded-3xl p-8">
                                    <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-3">
                                        <div className="p-2 bg-red-500/10 rounded-lg">
                                            <X className="w-5 h-5" />
                                        </div>
                                        {t.notIncluded}
                                    </h3>
                                    <ul className="space-y-4">
                                        {tour.notIncluded[contentLang].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-red-100/90 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0" />
                                                <span className="text-lg leading-snug">{item}</span>
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
                                    <h2 className="text-3xl font-heading font-bold text-white mb-8 border-l-4 border-primary-500 pl-4">
                                        {t.meetingPoint}
                                    </h2>
                                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-900/50 rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                                        <div className="flex items-start gap-6 relative z-10">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-red-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-500/20">
                                                <MapPin className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-2xl font-bold text-white mb-2 break-words">
                                                    {tour.meetingPoint.name[contentLang]}
                                                </h3>
                                                <p className="text-lg text-neutral-300 mb-3 font-medium break-words">
                                                    {tour.meetingPoint.address}
                                                </p>
                                                {tour.meetingPoint.instructions && (
                                                    <p className="text-base text-primary-400 bg-primary-500/10 inline-block px-4 py-2 rounded-lg border border-primary-500/20 font-medium break-words">
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
                                <div className="bg-neutral-900/80 backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 border border-white/10 relative overflow-hidden">
                                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-[80px] pointer-events-none" />

                                    {/* Safety Badge */}
                                    <div className="relative mb-8 p-5 bg-emerald-950/30 rounded-2xl border border-emerald-500/20">
                                        <div className="flex items-center gap-3 text-base font-bold text-emerald-400 mb-3">
                                            <Shield className="w-5 h-5" />
                                            <span>Segurança Total</span>
                                        </div>
                                        <div className="flex items-start gap-3 text-sm font-medium text-emerald-200/80 leading-relaxed">
                                            <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <span>Condutores locais credenciados nascidos e criados na favela</span>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-4">
                                        <Button
                                            variant="whatsapp"
                                            fullWidth
                                            size="lg"
                                            onClick={() => setIsBookingModalOpen(true)}
                                            className="font-bold text-lg py-7 rounded-xl shadow-[0_0_30px_-5px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_-10px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all"
                                        >
                                            {t.bookNow}
                                        </Button>

                                        {/* <Button
                                            variant="outline"
                                            fullWidth
                                            size="lg"
                                            href={`https://wa.me/${CONTACT.whatsapp.number.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGES.general[lang])}`}
                                            external
                                            className="border-white/10 hover:bg-white/5 text-white py-7 rounded-xl"
                                        >
                                            {t.contactUs}
                                        </Button> */}

                                        <Link
                                            href="/projeto-social"
                                            className="group flex items-center justify-center gap-3 text-sm font-bold text-rose-300 bg-rose-950/30 hover:bg-rose-950/50 border border-rose-500/20 p-5 rounded-xl transition-all duration-300 hover:border-rose-500/40"
                                        >
                                            <span className="group-hover:animate-bounce text-xl">❤️</span>
                                            <span>{tTours("sidebar.socialCause")}</span>
                                        </Link>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                        <p className="text-neutral-500 text-xs uppercase tracking-widest font-bold">{tTours("sidebar.paymentMethodsTitle")}</p>
                                        <div className="flex justify-center gap-4 mt-3 opacity-60 grayscale hover:grayscale-0 transition-all">
                                            {/* Add payment icons if needed */}
                                            <span className="text-white/50 text-sm">{tTours("sidebar.paymentMethods")}</span>
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
        </main>
    );
}
