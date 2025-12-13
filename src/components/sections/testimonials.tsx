"use client";

import { getAverageRating, getFeaturedTestimonials, getTotalReviews } from "@/data/testimonials";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

interface TestimonialsProps {
    locale?: string;
}

export function Testimonials({ locale = "pt" }: TestimonialsProps) {
    const testimonials = getFeaturedTestimonials(6);
    const averageRating = getAverageRating();
    const totalReviews = getTotalReviews();
    const currentLang = (() => {
        if (locale.startsWith("pt")) return "pt";
        if (locale.startsWith("es")) return "es";
        if (locale.startsWith("fr")) return "fr";
        return "en";
    })() as "pt" | "en" | "es" | "fr";

    const contentLang = (currentLang === "pt" ? "pt" : "en") as "pt" | "en";

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const content = {
        pt: {
            badge: "Depoimentos",
            title: "Histórias que inspiram",
            subtitle: "Mais de 2000 visitantes de 40+ países já viveram essa experiência",
        },
        en: {
            badge: "Testimonials",
            title: "Stories that inspire",
            subtitle: "Over 2000 visitors from 40+ countries have lived this experience",
        },
        es: {
            badge: "Testimonios",
            title: "Historias que inspiran",
            subtitle: "Más de 2000 visitantes de 40+ países han vivido esta experiencia",
        },
        fr: {
            badge: "Témoignages",
            title: "Histoires qui inspirent",
            subtitle: "Plus de 2000 visiteurs de 40+ pays ont vécu cette expérience",
        },
    };

    const t = content[currentLang];

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, [testimonials.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [isPaused, nextSlide]);

    // Get 3 visible testimonials for desktop
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push({ ...testimonials[index], displayIndex: i });
        }
        return visible;
    };

    return (
        <section className="py-12 md:py-24 bg-neutral-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-20"
                >
                    {/* Trust badges */}
                    <div className="inline-flex items-center gap-4 px-5 py-2.5 md:px-6 md:py-3 bg-white/80 backdrop-blur-md rounded-full border border-neutral-200 shadow-sm mb-6">
                        <div className="flex -space-x-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400 fill-amber-400"
                                />
                            ))}
                        </div>
                        <div className="flex items-center gap-3 text-xs md:text-sm">
                            <span className="font-bold text-neutral-900 mt-0.5">
                                {averageRating}
                            </span>
                            <span className="w-px h-4 bg-neutral-300" />
                            <span className="text-neutral-500 font-medium">
                                {totalReviews}+ avaliações
                            </span>
                        </div>
                    </div>

                    <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 md:mb-6 leading-[1.1]">
                        {t.title}
                    </h2>
                    <p className="text-base md:text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed px-4">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div
                    className="relative px-4 md:px-12"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Desktop: 3 cards */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {getVisibleTestimonials().map((testimonial, i) => (
                                <motion.div
                                    key={`${testimonial.id}-${currentIndex}`}
                                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                >
                                    <TestimonialCard
                                        name={testimonial.name}
                                        country={testimonial.country}
                                        countryCode={testimonial.countryCode}
                                        quote={testimonial.quote[contentLang]}
                                        rating={testimonial.rating}
                                        avatar={testimonial.avatar}
                                        featured={i === 1}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Mobile: 1 card */}
                    <div className="md:hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(e, { offset }: PanInfo) => {
                                    const swipe = offset.x; // Distance dragged

                                    if (swipe < -50) {
                                        nextSlide();
                                    } else if (swipe > 50) {
                                        prevSlide();
                                    }
                                }}
                                className="cursor-grab active:cursor-grabbing touch-pan-y"
                            >
                                <TestimonialCard
                                    name={testimonials[currentIndex].name}
                                    country={testimonials[currentIndex].country}
                                    countryCode={testimonials[currentIndex].countryCode}
                                    quote={testimonials[currentIndex].quote[contentLang]}
                                    rating={testimonials[currentIndex].rating}
                                    avatar={testimonials[currentIndex].avatar}
                                    featured
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-lg items-center justify-center text-neutral-600 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 hover:scale-110 z-20"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-lg items-center justify-center text-neutral-600 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-300 hover:scale-110 z-20"
                        aria-label="Próximo"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "w-8 bg-orange-500 shadow-lg shadow-orange-500/20"
                                : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                                }`}
                            aria-label={`Ir para depoimento ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Premium Testimonial Card Component
interface TestimonialCardProps {
    name: string;
    country: string;
    countryCode: string;
    quote: string;
    rating: number;
    avatar?: string;
    featured?: boolean;
}

function TestimonialCard({ name, country, countryCode, quote, rating, avatar, featured }: TestimonialCardProps) {
    const flagUrl = `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;

    return (
        <div className={`h-full flex flex-col p-6 md:p-10 rounded-[2rem] transition-all duration-300 relative overflow-hidden group hover:-translate-y-2
            ${featured
                ? "bg-white border-2 border-orange-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                : "bg-white border border-neutral-100 shadow-sm"
            }
        `}>
            {/* Quote icon bg */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Quote className="w-20 h-20 text-orange-500 rotate-180" />
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? "fill-amber-400 text-amber-400" : "fill-neutral-200 text-neutral-200"}`}
                    />
                ))}
            </div>

            <p className="text-lg text-neutral-600 leading-relaxed mb-8 flex-1 font-medium italic relative z-10">
                &ldquo;{quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 mt-auto border-t border-neutral-100 pt-6">
                {avatar ? (
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-orange-500 p-0.5">
                        <Image src={avatar} alt={name} width={56} height={56} className="w-full h-full rounded-full object-cover" />
                    </div>
                ) : (
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-orange-500/20">
                        {name.charAt(0)}
                    </div>
                )}

                <div>
                    <p className="font-bold text-neutral-900 text-lg leading-tight mb-1">
                        {name}
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-3.5 relative rounded-sm overflow-hidden shadow-sm">
                            <Image
                                src={flagUrl}
                                alt={country}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-sm text-neutral-500 font-medium">
                            {country}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
