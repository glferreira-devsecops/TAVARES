"use client";

import { Button } from "@/components/ui/button";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, Clock, MessageCircle, Minus, Plus, User, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    tourTitle: string;
    locale: "pt" | "en" | "es" | "fr";
}

interface BookingData {
    date: string;
    guests: number;
    name: string;
}

export function BookingModal({ isOpen, onClose, tourTitle, locale }: BookingModalProps) {
    const t = useTranslations("BookingModal");
    const [step, setStep] = useState<1 | 2>(1);
    const [data, setData] = useState<BookingData>({
        date: "",
        guests: 2,
        name: "",
    });

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setStep(1);
        }
    }, [isOpen]);

    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleNext = () => {
        if (!data.date) return;
        setStep(2);
    };

    const handleConfirm = () => {
        if (!data.name) return;

        // Construct message
        const baseMsg = WHATSAPP_MESSAGES.tourReservationWithDate(tourTitle, data.date, data.guests)[locale];

        // Localized Intro mapping
        const intros = {
            pt: `Olá! Me chamo ${data.name}. `,
            es: `¡Hola! Me llamo ${data.name}. `,
            fr: `Bonjour! Je m'appelle ${data.name}. `,
            en: `Hello! My name is ${data.name}. `
        };

        const nameIntro = intros[locale] || intros.en;

        // Remove standard greeting from baseMsg if we add custom intro to avoid "Hello! Hello!"
        const finalMsg = `${nameIntro}${baseMsg.replace(/^(Olá!|Hello!|¡Hola!|Bonjour!)\s*/, "")}`;

        const url = `https://wa.me/${CONTACT.whatsapp.number.replace(/\D/g, "")}?text=${encodeURIComponent(finalMsg)}`;

        window.open(url, "_blank", "noopener,noreferrer");
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[1040] bg-black/60 backdrop-blur-sm gpu-accelerated"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[1050] flex items-center justify-center p-4 pointer-events-none gpu-accelerated">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh] gpu-accelerated"
                        >
                            {/* Header (Visual) */}
                            <div className="relative h-32 bg-neutral-900 flex items-center justify-center overflow-hidden shrink-0 gpu-accelerated">
                                {/* Abstract Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-900 opacity-90" />
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                                <div className="relative z-10 text-center px-6">
                                    <h3 className="font-heading text-2xl font-bold text-white mb-2 shadow-sm">
                                        {tourTitle}
                                    </h3>
                                    <div className="flex items-center justify-center gap-2 text-white/80 text-xs font-medium uppercase tracking-wider">
                                        <Clock className="w-3 h-3" />
                                        <span>{t('duration')}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md gpu-accelerated"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-1 bg-neutral-100 w-full flex">
                                <motion.div
                                    className="h-full bg-primary-500"
                                    initial={{ width: "50%" }}
                                    animate={{ width: step === 1 ? "50%" : "100%" }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                                <div className="mb-6">
                                    <h2 className="text-xl font-bold text-neutral-900 mb-1">
                                        {step === 1 ? t('step1') : t('step2')}
                                    </h2>
                                    <p className="text-sm text-neutral-500">
                                        {t('subtitle')}
                                    </p>
                                </div>

                                <AnimatePresence mode="wait">
                                    {step === 1 ? (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            {/* Date Picker */}
                                            <div className="space-y-3">
                                                <label className="block text-sm font-semibold text-neutral-700">
                                                    {t('dateLabel')}
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <Calendar className="w-5 h-5 text-neutral-400" />
                                                    </div>
                                                    <input
                                                        type="date"
                                                        value={data.date}
                                                        onChange={(e) => setData({ ...data, date: e.target.value })}
                                                        min={new Date().toISOString().split('T')[0]}
                                                        className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all font-medium text-neutral-900 text-base"
                                                    />
                                                </div>
                                            </div>

                                            {/* Guests Counter */}
                                            <div className="space-y-3">
                                                <label className="block text-sm font-semibold text-neutral-700">
                                                    {t('guestsLabel')}
                                                </label>
                                                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 flex items-center justify-between">
                                                    <button
                                                        onClick={() => setData(prev => ({ ...prev, guests: Math.max(1, prev.guests - 1) }))}
                                                        className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 hover:text-primary-600 transition-colors disabled:opacity-50"
                                                        disabled={data.guests <= 1}
                                                    >
                                                        <Minus className="w-5 h-5" />
                                                    </button>

                                                    <div className="text-center">
                                                        <span className="block text-2xl font-bold text-neutral-900">
                                                            {data.guests}
                                                        </span>
                                                        <span className="text-xs text-neutral-500 font-medium uppercase tracking-wide">
                                                            {t('guestUnit')}
                                                        </span>
                                                    </div>

                                                    <button
                                                        onClick={() => setData(prev => ({ ...prev, guests: Math.min(20, prev.guests + 1) }))}
                                                        className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 hover:text-primary-600 transition-colors"
                                                    >
                                                        <Plus className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="space-y-6"
                                        >
                                            {/* Name Input */}
                                            <div className="space-y-3">
                                                <label className="block text-sm font-semibold text-neutral-700">
                                                    {t('nameLabel')}
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <User className="w-5 h-5 text-neutral-400" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        value={data.name}
                                                        onChange={(e) => setData({ ...data, name: e.target.value })}
                                                        placeholder={locale === 'pt' ? 'Ex: João Silva' : 'Ex: John Doe'}
                                                        className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all font-medium text-neutral-900 text-base"
                                                        autoFocus
                                                    />
                                                </div>
                                            </div>

                                            {/* Summary Card */}
                                            <div className="bg-primary-50 rounded-xl p-4 border border-primary-100 flex items-center gap-4">
                                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 text-2xl">
                                                    📅
                                                </div>
                                                <div>
                                                    <p className="text-sm text-primary-900 font-medium">
                                                        {data.date ? new Date(data.date).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' }) : '-'}
                                                    </p>
                                                    <p className="text-xs text-primary-700">
                                                        {data.guests} {t('guestUnit')} • {tourTitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Footer Actions */}
                            <div className="p-6 border-t border-neutral-100 bg-neutral-50 shrink-0">
                                {step === 1 ? (
                                    <Button
                                        onClick={handleNext}
                                        disabled={!data.date}
                                        fullWidth
                                        size="lg"
                                        className="bg-neutral-900 hover:bg-neutral-800 text-white shadow-xl shadow-neutral-900/20"
                                    >
                                        {t('next')}
                                        <ChevronRight className="w-5 h-5 ml-2" />
                                    </Button>
                                ) : (
                                    <div className="flex gap-3">
                                        <Button
                                            onClick={() => setStep(1)}
                                            variant="ghost"
                                            className="shrink-0"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </Button>
                                        <Button
                                            onClick={handleConfirm}
                                            disabled={!data.name}
                                            fullWidth
                                            size="lg"
                                            className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl shadow-[#25D366]/30"
                                        >
                                            <MessageCircle className="w-5 h-5 mr-2" />
                                            {t('confirm')}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
