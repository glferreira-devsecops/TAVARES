"use client";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { GmailLogo, TikTokLogo } from "@/components/ui/brand-logos";
import { WhatsAppButton } from "@/components/ui/button";
import { Flag } from "@/components/ui/flag";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { CONTACT, WHATSAPP_MESSAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Header() {
    const t = useTranslations("Navigation");
    const locale = useLocale();
    const [scrolled, setScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();



    // Optimized Scroll Logic with Throttling
    useEffect(() => {
        let lastKnownScrollY = window.scrollY;
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    // Scrolled state
                    setScrolled(currentScrollY > 20);

                    // Hidden state (Smart Header)
                    if (!isMobileMenuOpen) {
                        if (currentScrollY > lastKnownScrollY && currentScrollY > 150) {
                            setIsHidden(true);
                        } else {
                            setIsHidden(false);
                        }
                    }

                    lastKnownScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobileMenuOpen]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Close language menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false);
            }
        };

        if (isLangMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isLangMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    // Check if link is active
    const isActive = (href: string) => {
        if (href === "/" && pathname === "/") return true;
        if (href !== "/" && pathname?.startsWith(href)) return true;
        return false;
    };

    // Route Detection for Header Style
    const isHome = pathname === "/";
    const isTourDetail = pathname?.startsWith("/tours/") && pathname.split("/").length > 2;
    const isSafety = pathname === "/seguranca";
    const isBlog = pathname?.startsWith("/blog");
    const isAbout = pathname === "/quem-somos";

    const isDarkHeroPage = isHome || isTourDetail || isSafety || isBlog || isAbout;
    const shouldForceSolid = !isDarkHeroPage || scrolled;

    // Derived styles
    const headerClasses = cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out gpu-accelerated", // gpu-accelerated adds hardware promotion
        shouldForceSolid
            ? "bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-sm py-4" // backdrop-blur reduced for performance
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"
    );

    // Text color: Yellow (primary-600) if solid header, White if transparent
    const logoTextClasses = shouldForceSolid ? "text-primary-600" : "text-white drop-shadow-md";

    // Improved Desktop Nav Container
    const navContainerClasses = shouldForceSolid
        ? "bg-neutral-100/80 backdrop-blur-sm border border-neutral-200/50 shadow-inner"
        : "bg-white/10 backdrop-blur-sm border border-white/20 shadow-soft-lg";

    // Explicit text colors for states
    const navLinkActiveClasses = "text-neutral-900 bg-white shadow-sm font-semibold";

    // Desktop Nav Link Styles
    const navLinkClasses = (active: boolean) => cn(
        "relative text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full",
        active
            ? navLinkActiveClasses
            : shouldForceSolid
                ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60"
                : "text-white hover:text-white hover:bg-white/20 font-medium drop-shadow-sm"
    );

    const navItems = [
        { label: t("home"), href: "/" },
        { label: t("tours"), href: "/tours" },
        { label: t("about"), href: "/quem-somos" },
        { label: t("social"), href: "/projeto-social" },
        { label: t("faq"), href: "/faq" },
        { label: t("contact"), href: "/contato" }
    ];

    return (
        <>
            <motion.header
                className={headerClasses}
                initial={{ y: 0 }}
                animate={{ y: isHidden ? "-100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="container-custom h-full">
                    <nav className="flex items-center justify-between h-full">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="group flex items-center gap-2 relative z-50"
                        >
                            <div className="relative w-12 h-12 md:w-16 md:h-16">
                                <Image
                                    src="/images/logo_v1.webp"
                                    alt="Favela República"
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 48px, 64px"
                                    priority
                                />
                            </div>
                            <span
                                className={cn(
                                    "font-heading text-lg md:text-xl font-bold transition-colors uppercase tracking-tight hidden sm:block",
                                    logoTextClasses
                                )}
                                style={!shouldForceSolid ? { textShadow: '0 2px 10px rgba(0,0,0,0.5)' } : undefined}
                            >
                                Favela-República Tour
                            </span>
                        </Link>

                        {/* Desktop Navigation - Centered & Premium */}
                        <div className={cn(
                            "hidden lg:flex items-center gap-1.5 px-2 py-1.5 rounded-full transition-all duration-300",
                            navContainerClasses
                        )}>
                            {navItems.map((item) => {
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        aria-current={active ? "page" : undefined}
                                        className={navLinkClasses(active)}
                                    >
                                        {/* Hover Effect: Subtle shimmer or indicator */}
                                        <span className="relative z-10">
                                            {item.label}
                                        </span>

                                        {/* Active State Indicator */}
                                        {active && (
                                            <motion.span
                                                layoutId="navbar-active-pill"
                                                className="absolute inset-0 bg-white rounded-full shadow-soft-sm z-0"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Right Side Actions */}
                        <div className="hidden lg:flex items-center gap-4">
                            {/* Social Icons */}
                            <div className="flex items-center gap-2">
                                <a
                                    href="https://www.tiktok.com/@favelarepublica"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "p-2 rounded-full transition-colors",
                                        shouldForceSolid
                                            ? "text-neutral-600 hover:bg-neutral-100 hover:text-black"
                                            : "text-white/80 hover:bg-white/20 hover:text-white"
                                    )}
                                    aria-label="TikTok"
                                >
                                    <TikTokLogo className="w-5 h-5" />
                                </a>
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    className={cn(
                                        "p-2 rounded-full transition-colors",
                                        shouldForceSolid
                                            ? "text-neutral-600 hover:bg-neutral-100 hover:text-red-500"
                                            : "text-white/80 hover:bg-white/20 hover:text-white"
                                    )}
                                    aria-label="Email"
                                >
                                    <GmailLogo className="w-5 h-5" />
                                </a>
                            </div>

                            {/* Language Switcher */}
                            <div className="relative" ref={langMenuRef}>
                                {/* Language Selector - Premium Flag Style */}
                                <div className="relative">
                                    <button
                                        onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                        className={cn(
                                            "flex items-center gap-2 transition-all p-1.5 pr-3 rounded-full border",
                                            shouldForceSolid
                                                ? "border-neutral-200 bg-white/50 hover:bg-neutral-50 hover:border-neutral-300"
                                                : "border-white/20 bg-black/10 backdrop-blur-md hover:bg-black/20 hover:border-white/40 text-white shadow-sm"
                                        )}
                                        aria-expanded={isLangMenuOpen}
                                        aria-haspopup="true"
                                        aria-label={t("language")}
                                    >
                                        <Flag country={locale as "pt" | "en" | "es" | "fr"} size="sm" className="shadow-xs" />
                                        <span className="text-sm font-medium uppercase tracking-wide opacity-90">
                                            {locale}
                                        </span>
                                        <ChevronDown
                                            className={cn(
                                                "w-3 h-3 transition-transform duration-300 opacity-70",
                                                isLangMenuOpen && "rotate-180"
                                            )}
                                        />
                                    </button>

                                    {/* Dropdown */}
                                    <AnimatePresence>
                                        {isLangMenuOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }} // smooth easeOutQuint-ish
                                                className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-soft-xl border border-white/20 overflow-hidden py-1.5 z-50 ring-1 ring-black/5"
                                            >
                                                <div className="px-3 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider border-b border-neutral-100 mb-1">
                                                    {t("language")}
                                                </div>

                                                {[
                                                    { code: 'pt', label: 'Português', country: 'pt' },
                                                    { code: 'en', label: 'English', country: 'en' },
                                                    { code: 'es', label: 'Español', country: 'es' },
                                                    { code: 'fr', label: 'Français', country: 'fr' }
                                                ].map((lang) => (
                                                    <button
                                                        key={lang.code}
                                                        className={cn(
                                                            "w-full text-left px-3 py-2 text-sm transition-all flex items-center justify-between group",
                                                            locale === lang.code
                                                                ? "bg-primary-50 text-primary-700 font-medium"
                                                                : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                                                        )}
                                                        onClick={() => {
                                                            router.replace(pathname, { locale: lang.code });
                                                            setIsLangMenuOpen(false);
                                                        }}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <Flag country={lang.country as "pt" | "en" | "es" | "fr"} size="sm" className={cn("transition-transform duration-300", locale === lang.code ? "scale-110" : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105")} />
                                                            <span>{lang.label}</span>
                                                        </div>
                                                        {locale === lang.code && (
                                                            <motion.div
                                                                layoutId="activeLang"
                                                                className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-sm"
                                                            />
                                                        )}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* WhatsApp CTA */}
                            <WhatsAppButton
                                message={WHATSAPP_MESSAGES.general[locale.startsWith("pt") ? "pt" : locale === "en" ? "en" : locale === "es" ? "es" : "fr"]}
                                phone={CONTACT.whatsapp.number}
                                size="sm"
                                className={cn(
                                    "shadow-soft-lg hover:shadow-soft-xl hover:-translate-y-0.5 transition-all overflow-hidden relative group font-bold px-6",
                                    !shouldForceSolid && "bg-white text-primary-600 hover:bg-neutral-50"
                                )}
                            >
                                <span className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                                    <span className="absolute -inset-full top-0 block w-[50%] -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:animate-shimmer" />
                                </span>
                                {t("book")}
                            </WhatsAppButton>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "lg:hidden p-2 -mr-2 transition-colors relative z-50",
                                isMobileMenuOpen ? "text-neutral-900" : shouldForceSolid ? "text-neutral-900" : "text-white"
                            )}
                            aria-label={t("openMenu")}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <MobileMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                        isActive={isActive}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default Header;
