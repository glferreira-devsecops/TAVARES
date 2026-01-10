"use client";

import { WhatsAppButton } from "@/components/ui/button";
import { Flag } from "@/components/ui/flag";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    isActive: (href: string) => boolean;
}

export function MobileMenu({ onClose, isActive }: MobileMenuProps) {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();
    const currentLang = (["pt", "en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";
    const t = useTranslations("Navigation");


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-modal bg-neutral-900/95 backdrop-blur-md lg:hidden flex flex-col overflow-hidden gpu-accelerated"
        >
            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-20 bg-noise pointer-events-none mix-blend-overlay gpu-accelerated" />

            {/* Close Button - Premium Position aligned with Header */}
            <div className="absolute top-6 right-4 z-[60]">
                <button
                    onClick={onClose}
                    className="p-3 text-white bg-white/5 rounded-full hover:bg-white/10 transition-all active:scale-90 border border-white/20 backdrop-blur-md shadow-xl gpu-accelerated"
                    aria-label={t("openMenu")}
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            <div className="flex-1 relative z-10 overflow-y-auto overflow-x-hidden">
                <div className="min-h-full flex flex-col justify-center px-8 py-24">
                    <nav className="mb-12">
                        <ul className="space-y-4">
                            {[
                                { label: t("home"), href: "/" },
                                { label: t("tours"), href: "/tours" },
                                { label: t("about"), href: "/quem-somos" },
                                { label: t("social"), href: "/projeto-social" },
                                { label: t("faq"), href: "/faq" },
                                { label: t("contact"), href: "/contato" }
                            ].map((item, index) => {
                                const active = isActive(item.href);
                                return (
                                    <motion.li
                                        key={item.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={onClose}
                                            aria-current={active ? "page" : undefined}
                                            className={cn(
                                                "block text-3xl md:text-5xl font-heading font-bold transition-all duration-300",
                                                active
                                                    ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 scale-105 origin-left"
                                                    : "text-neutral-400 hover:text-white hover:pl-4"
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-6"
                    >
                        <p className="text-neutral-500 font-medium uppercase tracking-widest text-xs mb-4">
                            {t("language")}
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { code: 'pt', label: 'Português', country: 'pt' },
                                { code: 'en', label: 'English', country: 'en' },
                                { code: 'es', label: 'Español', country: 'es' },
                                { code: 'fr', label: 'Français', country: 'fr' }
                            ].map((lang) => (
                                <button
                                    key={lang.code}
                                    className={cn(
                                        "flex items-center gap-3 p-3 rounded-xl transition-all border group",
                                        locale === lang.code
                                            ? "bg-orange-500/10 border-orange-500/50 shadow-lg shadow-orange-500/10"
                                            : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                                    )}
                                    onClick={() => {
                                        if (onClose) onClose();
                                        router.replace(pathname, { locale: lang.code });
                                    }}
                                >
                                    <Flag country={lang.country as "pt" | "en" | "es" | "fr"} size="md" className="shadow-sm group-hover:scale-110 transition-transform" />
                                    <span className={cn(
                                        "text-sm font-semibold transition-colors",
                                        locale === lang.code ? "text-orange-400" : "text-neutral-400 group-hover:text-white"
                                    )}>
                                        {lang.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-8 border-t border-white/10 bg-neutral-950/50 backdrop-blur-xl relative z-10"
            >
                <WhatsAppButton
                    message={WHATSAPP_MESSAGES.general[currentLang]}
                    phone={CONTACT.whatsapp.number}
                    fullWidth
                    size="lg"
                    className="shadow-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white border-0 py-6 text-lg"
                >
                    {t("book")}
                </WhatsAppButton>
            </motion.div>
        </motion.div >
    );
}
