"use client";

import { AnalyticsEvents } from "@/components/analytics/events";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { useLocale } from "next-intl";

export function WhatsAppFloatingButton() {
    const locale = useLocale();
    const [isVisible, setIsVisible] = useState(false);
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [showPulse, setShowPulse] = useState(true);

    const t = useTranslations("WhatsApp");
    const currentLang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";
    const message = WHATSAPP_MESSAGES.general[currentLang];
    const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`;

    // Show button only after scrolling past Hero (Smart Visibility)
    useEffect(() => {
        const handleScroll = () => {
            // Show only after scrolling down 600px (approx. 1 viewport height)
            setIsVisible(window.scrollY > 600);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Trigger once on mount to check initial position
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Show tooltip shortly after button appears
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsTooltipVisible(true);
            }, 1000); // Faster tooltip for better context

            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    // Hide pulse after first interaction
    const handleClick = () => {
        setShowPulse(false);
        // Track Conversion
        AnalyticsEvents.trackLead("Floating Button");
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 right-6 z-[900] flex items-end gap-3 print:hidden">
                    {/* Tooltip */}
                    <AnimatePresence>
                        {isTooltipVisible && (
                            <motion.div
                                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                transition={{ type: "spring", damping: 20 }}
                                className="hidden md:block relative bg-white rounded-xl shadow-soft-xl p-4 max-w-[240px]"
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setIsTooltipVisible(false)}
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-500 hover:bg-neutral-200 transition-colors"
                                    aria-label={t("closeLabel")}
                                >
                                    <X className="w-3 h-3" />
                                </button>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-whatsapp/10 flex items-center justify-center shrink-0">
                                        <MessageCircle className="w-5 h-5 text-whatsapp" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-neutral-900 text-sm mb-1">
                                            {t("tooltipTitle")}
                                        </p>
                                        <p className="text-neutral-600 text-xs leading-relaxed">
                                            {t("tooltipSubtitle")}
                                        </p>
                                    </div>
                                </div>

                                {/* Arrow pointing to button */}
                                <div className="absolute right-[-8px] bottom-4 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[8px] border-l-white" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* WhatsApp Button */}
                    <motion.a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClick}
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        transition={{ type: "spring", damping: 15, stiffness: 300 }}
                        className={cn(
                            "relative w-16 h-16 rounded-full bg-whatsapp flex items-center justify-center",
                            "shadow-lg shadow-whatsapp/30 hover:shadow-xl hover:shadow-whatsapp/40",
                            "hover:scale-110 transition-all duration-300",
                            "group"
                        )}
                        aria-label={t("ariaLabel")}
                    >
                        {/* Pulse animation */}
                        {showPulse && (
                            <>
                                <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-30" />
                                <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse opacity-20" />
                            </>
                        )}

                        {/* WhatsApp Icon */}
                        <svg
                            className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </motion.a>
                </div>
            )}
        </AnimatePresence>
    );
}

export default WhatsAppFloatingButton;
