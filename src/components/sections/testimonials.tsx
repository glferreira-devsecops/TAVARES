"use client";

import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";


const TESTIMONIAL_IMAGES = [
    "IMG_3703.PNG", "IMG_3704.PNG", "IMG_3705.PNG", "IMG_3706.PNG",
    "IMG_3707.PNG", "IMG_3708.PNG", "IMG_3709.PNG", "IMG_3711.PNG",
    "IMG_3712.PNG", "IMG_3714.PNG", "IMG_3715.PNG", "IMG_3717.PNG",
    "IMG_3718.PNG", "IMG_3719.PNG"
];

export function Testimonials() {
    const t = useTranslations("Testimonials");

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Number of slides to show based on screen size (handled via logic below, but here we just iterate images)
    // We want to show maybe 3 images at a time on desktop, 1 on mobile
    const itemsPerView = 3;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_IMAGES.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + TESTIMONIAL_IMAGES.length) % TESTIMONIAL_IMAGES.length);
    };

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(nextSlide, 4000); // Faster scroll for images
        return () => clearInterval(timer);
    }, [isPaused, nextSlide]);

    // Get visible images with wrapping
    const getVisibleImages = () => {
        const visible = [];
        for (let i = 0; i < itemsPerView; i++) {
            const index = (currentIndex + i) % TESTIMONIAL_IMAGES.length;
            visible.push({ src: TESTIMONIAL_IMAGES[index], id: index });
        }
        return visible;
    };

    return (
        <section className="py-24 md:py-32 bg-neutral-900 relative overflow-hidden text-white">
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-10 bg-noise mix-blend-overlay pointer-events-none z-0" />

            {/* Background decoration - Awwwards depth */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2 z-0" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2 z-0" />

            {/* Monumental background text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 0.03, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="text-[35vw] font-black text-white leading-none tracking-tighter"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    REVIEWS
                </motion.div>
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-orange-400 font-bold text-xs uppercase tracking-wider mb-6 border border-white/10">
                        {t("eyebrow")}
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                        {t("title")}
                    </h2>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
                        {t("subtitle")}
                    </p>
                </motion.div>

                {/* Carousel */}
                <div
                    className="relative px-4"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Desktop Grid */}
                    <div className="hidden md:grid grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {getVisibleImages().map((img) => (
                                <motion.div
                                    key={`${img.src}-${currentIndex}`}
                                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, x: -50, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl group"
                                >
                                    {/* Subdued Backdrop - Performance Optimized */}
                                    <Image
                                        src={`/images/testimonials/${img.src}`}
                                        alt="Background"
                                        fill
                                        className="object-cover opacity-20 scale-105"
                                    />
                                    {/* Main Image */}
                                    <Image
                                        src={`/images/testimonials/${img.src}`}
                                        alt="Depoimento Real"
                                        fill
                                        className="object-contain z-10 transition-transform duration-500 group-hover:scale-105 gpu-accelerated"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Mobile View - Optimized for Metal/GPU */}
                    <div className="md:hidden relative aspect-[9/16] w-full max-w-[300px] mx-auto rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl gpu-accelerated">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-full h-full gpu-accelerated"
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                onDragEnd={(e, { offset }: PanInfo) => {
                                    if (offset.x < -50) nextSlide();
                                    if (offset.x > 50) prevSlide();
                                }}
                            >
                                {/* Static Backdrop instead of Blur scale */}
                                <Image
                                    src={`/images/testimonials/${TESTIMONIAL_IMAGES[currentIndex]}`}
                                    alt="Background"
                                    fill
                                    className="object-cover opacity-20 scale-105"
                                />
                                {/* Main Image */}
                                <Image
                                    src={`/images/testimonials/${TESTIMONIAL_IMAGES[currentIndex]}`}
                                    alt="Depoimento Real"
                                    fill
                                    className="object-contain z-10"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all z-20"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all z-20"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
