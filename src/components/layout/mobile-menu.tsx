"use client";

import { WhatsAppButton } from "@/components/ui/button";
import { Flag } from "@/components/ui/flag";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { CONTACT, NAV_ITEMS, WHATSAPP_MESSAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    locale: string;
    currentPath: string | null;
    isActive: (href: string) => boolean;
}

export function MobileMenu({ onClose, locale, isActive }: MobileMenuProps) {
    const pathname = usePathname();
    const router = useRouter();
    const currentLang = (["pt", "en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";



    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-modal bg-white/95 backdrop-blur-xl lg:hidden flex flex-col"
        >
            {/* Close Button */}
            <div className="absolute top-6 right-4 z-50">
                <button
                    onClick={onClose}
                    className="p-2 -mr-2 text-neutral-900 bg-neutral-100/50 rounded-full hover:bg-neutral-200 transition-colors"
                    aria-label="Close menu"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8">
                <nav className="mb-12">
                    <ul className="space-y-6">
                        {NAV_ITEMS.map((item, index) => {
                            const active = isActive(item.href);
                            return (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={onClose}
                                        aria-current={active ? "page" : undefined}
                                        className={cn(
                                            "block text-2xl md:text-4xl font-heading font-bold transition-colors",
                                            active ? "text-primary-500" : "text-neutral-900"
                                        )}
                                    >
                                        {item.label[currentLang]}
                                        {active && (
                                            <span className="block h-1 w-12 bg-primary-500 rounded-full mt-2" />
                                        )}
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
                                    "flex items-center gap-3 p-3 rounded-xl transition-all border",
                                    locale === lang.code
                                        ? "bg-primary-50 border-primary-200 shadow-sm"
                                        : "bg-white border-neutral-100 hover:border-neutral-200"
                                )}
                                onClick={() => {
                                    if (onClose) onClose();
                                    router.replace(pathname, { locale: lang.code });
                                }}
                            >
                                <Flag country={lang.country as "pt" | "en" | "es" | "fr"} size="md" className="shadow-sm" />
                                <span className={cn(
                                    "text-sm font-semibold",
                                    locale === lang.code ? "text-primary-700" : "text-neutral-600"
                                )}>
                                    {lang.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div >

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="p-8 bg-neutral-50"
            >
                <WhatsAppButton
                    message={WHATSAPP_MESSAGES.general[currentLang]}
                    phone={CONTACT.whatsapp.number}
                    fullWidth
                    size="lg"
                    className="shadow-xl"
                >
                    Reservar agora
                </WhatsAppButton>
            </motion.div>
        </motion.div >
    );
}
