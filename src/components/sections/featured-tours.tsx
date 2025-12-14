"use client";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import type { Tour } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star } from "lucide-react";
import Image from "next/image";

interface FeaturedToursProps {
    locale?: string;
    tours: Tour[];
}



export function FeaturedTours({ locale = "pt", tours }: FeaturedToursProps) {
    const currentLang = (() => {
        if (locale.startsWith("pt")) return "pt";
        if (locale.startsWith("es")) return "es";
        if (locale.startsWith("fr")) return "fr";
        return "en";
    })() as "pt" | "en" | "es" | "fr";

    const contentLang = (currentLang === "pt" ? "pt" : "en") as "pt" | "en";

    const content = {
        pt: {
            badge: "Nossos Tours",
            title: "Experiências autênticas",
            subtitle: "na Tavares Bastos",
            description: "Escolha o tour ideal para você. Todos incluem guia local, seguro e uma imersão cultural única.",
            cta: "Ver todos os tours",
            from: "a partir de",
            book: "Reservar",
            tourCard: {
                insurance: "Seguro Incluso",
                smallGroups: "Grupos Pequenos",
                book: "Reservar",
            },
        },
        en: {
            badge: "Our Tours",
            title: "Authentic experiences",
            subtitle: "in Tavares Bastos",
            description: "Choose the ideal tour for you. All include local guide, insurance and a unique cultural immersion.",
            cta: "See all tours",
            from: "from",
            book: "Book",
            tourCard: {
                insurance: "Insurance Included",
                smallGroups: "Small Groups",
                book: "Book",
            },
        },
        es: {
            badge: "Nuestros Tours",
            title: "Experiencias auténticas",
            subtitle: "en Tavares Bastos",
            description: "Elige el tour ideal para ti. Todos incluyen guía local, seguro y una inmersión cultural única.",
            cta: "Ver todos los tours",
            from: "desde",
            book: "Reservar",
            tourCard: {
                insurance: "Seguro Incluido",
                smallGroups: "Grupos Pequeños",
                book: "Reservar",
            },
        },
        fr: {
            badge: "Nos Visites",
            title: "Expériences authentiques",
            subtitle: "à Tavares Bastos",
            description: "Choisissez la visite idéale pour vous. Toutes incluent guide local, assurance et une immersion culturelle unique.",
            cta: "Voir toutes les visites",
            from: "à partir de",
            book: "Réserver",
            tourCard: {
                insurance: "Assurance Incluse",
                smallGroups: "Petits Groupes",
                book: "Réserver",
            },
        },
    };

    const t = content[currentLang];

    const difficultyLabels = {
        easy: { pt: "Fácil", en: "Easy", es: "Fácil", fr: "Facile", color: "text-green-600 bg-green-50" },
        moderate: { pt: "Moderado", en: "Moderate", es: "Moderado", fr: "Modéré", color: "text-yellow-600 bg-yellow-50" },
        challenging: { pt: "Desafiador", en: "Challenging", es: "Desafiante", fr: "Difficile", color: "text-red-600 bg-red-50" },
    };

    return (
        <section id="tours" className="py-12 md:py-24 bg-neutral-950 relative overflow-hidden scroll-mt-24">
            {/* Decorative blob */}
            <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-10 md:mb-20"
                >
                    <span className="inline-block text-[10px] md:text-xs font-black text-orange-600 uppercase tracking-[0.3em] mb-3 md:mb-5">
                        {t.badge}
                    </span>
                    <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.1] mb-4 md:mb-6 tracking-tight">
                        {t.title}
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">{t.subtitle}</span>
                    </h2>
                    <p className="text-base md:text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0">
                        {t.description}
                    </p>
                </motion.div>

                {/* Tours Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {tours.map((tour, index) => (
                        <motion.div
                            key={tour.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <Link
                                href={`/tours/${tour.slug}`}
                                className="group h-full bg-white rounded-3xl overflow-hidden border border-neutral-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={tour.images[0]?.src || "/images/tours/tour-completo-hero.png"}
                                        alt={tour.title[contentLang]}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        priority={index === 0}
                                    />
                                    {/* Overlay - Enhanced for Awwwards contrast */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                        {tour.featured && (
                                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-black uppercase tracking-[0.15em] rounded-full shadow-xl shadow-orange-500/30">
                                                <Star className="w-3 h-3 fill-current" /> Destaque
                                            </span>
                                        )}
                                    </div>

                                    {/* Quick Stats on Image */}
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                                        <span className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-sm font-medium text-neutral-800 shadow-sm">
                                            <Clock className="w-3.5 h-3.5" />
                                            {tour.duration}
                                        </span>
                                        <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium shadow-sm backdrop-blur-md ${difficultyLabels[tour.difficulty].color.replace('bg-', 'bg-white/95 ')}`}>
                                            {difficultyLabels[tour.difficulty][currentLang]}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col flex-1">
                                    <h3 className="font-heading text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight tracking-tight">
                                        {tour.title[contentLang]}
                                    </h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1 font-medium">
                                        {tour.shortDescription[contentLang]}
                                    </p>

                                    {/* Trust Badges */}
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100/50">
                                            <span>🛡️</span>
                                            {t.tourCard.insurance}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100/50">
                                            <span>👥</span>
                                            {t.tourCard.smallGroups}
                                        </div>
                                    </div>

                                    <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                        {t.tourCard.book}
                                    </Button>

                                    {/* Footer */}
                                    <div className="pt-6 border-t border-neutral-100 flex items-end justify-between gap-4 mt-auto">
                                        <div>
                                            <span className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">
                                                {t.from}
                                            </span>
                                            <div className="flex items-baseline gap-0.5">
                                                <span className="text-[10px] text-neutral-400 font-semibold uppercase">R$</span>
                                                <span className="text-2xl font-black text-orange-600 tracking-tight">
                                                    {tour.priceFrom.toLocaleString("pt-BR")}
                                                </span>
                                            </div>
                                        </div>
                                        <span className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white rounded-full text-sm font-bold group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300 shadow-lg">
                                            {t.book}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        href={`/${locale === 'pt' ? 'pt' : locale}/tours`}
                        icon={<ArrowRight className="w-5 h-5" />}
                        iconPosition="right"
                        className="rounded-full px-8 py-6 text-lg border-neutral-200 hover:border-primary-500 hover:text-primary-600 hover:bg-white"
                    >
                        {t.cta}
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

export default FeaturedTours;
