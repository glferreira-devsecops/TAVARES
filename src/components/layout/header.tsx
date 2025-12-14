"use client";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { WhatsAppButton } from "@/components/ui/button";
import { Flag } from "@/components/ui/flag";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { CONTACT, NAV_ITEMS, WHATSAPP_MESSAGES } from "@/lib/constants";
import { useDictionary } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface HeaderProps {
    locale?: string;
}

export function Header({ locale = "pt" }: HeaderProps) {
    const dict = useDictionary(locale);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();
    const { scrollY } = useScroll();
    const lastScrollY = useRef(0);



    // Smart Scroll Logic
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY.current;

        // Update scrolled state (for transparency)
        if (latest > 20 && !isScrolled) setIsScrolled(true);
        requestAnimationFrame(() => {
            if (latest > 20 && !isScrolled) setIsScrolled(true);
            if (latest <= 20 && isScrolled) setIsScrolled(false);
        });

        // Update hidden state (for hide-on-scroll)
        if (latest > previous && latest > 150 && !isMobileMenuOpen) {
            requestAnimationFrame(() => setIsHidden(true)); // Scrolling down & past threshold -> Hide
        } else {
            requestAnimationFrame(() => setIsHidden(false)); // Scrolling up or at top -> Show
        }

        lastScrollY.current = latest;
    });

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 20);
            });
        };

        window.addEventListener("scroll", handleScroll);
        // Check initial state
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
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
    const isHome = pathname === "/" || pathname === `/${locale}`;
    const isTourDetail = pathname?.includes("/tours/") && pathname.split("/").length > 3; // /pt/tours/slug
    // All these pages have a Dark Hero section, so they need a TRANSPARENT header initially
    const isSafety = pathname?.includes("/seguranca");
    const isBlog = pathname?.includes("/blog"); // Blog Index has dark hero
    const isAbout = pathname?.includes("/quem-somos");

    // We only want transparent header on pages with Dark Hero Images
    // All other pages (Contact, FAQ, 404s) should have solid header for contrast
    const isDarkHeroPage = isHome || isTourDetail || isSafety || isBlog || isAbout;
    const shouldForceSolid = !isDarkHeroPage || isScrolled;

    // Derived styles
    const headerClasses = cn(
        "fixed top-0 left-0 right-0 z-fixed transition-all duration-500 ease-in-out",
        isHidden ? "-translate-y-full" : "translate-y-0",
        shouldForceSolid
            ? "bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-sm py-4"
            : "bg-transparent py-6"
    );

    // Text color: Dark if solid header (scrolled or light page), White if transparent (dark hero)
    const logoTextClasses = shouldForceSolid ? "text-neutral-900" : "text-white";

    // Improved Desktop Nav Container: More elegant glassmorphism
    const navContainerClasses = shouldForceSolid
        ? "bg-neutral-100/50 backdrop-blur-md border border-neutral-200/50 shadow-inner" // Subtle inset shadow for depth
        : "bg-black/20 backdrop-blur-lg border border-white/10 shadow-lg";

    // Explicit text colors for states
    const navLinkActiveClasses = "text-neutral-900 bg-white shadow-sm font-semibold";

    // Desktop Nav Link Styles
    const navLinkClasses = (active: boolean) => cn(
        "relative text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full",
        active
            ? navLinkActiveClasses
            : shouldForceSolid
                ? "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/50"
                : "text-white/90 hover:text-white hover:bg-white/15"
    );

    return (
        <>
            <motion.header
                className={headerClasses}
                initial={{ y: 0 }}
                animate={{ y: isHidden ? "-100%" : "0%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <div className="container-custom">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="group flex items-center gap-2 relative z-50"
                        >
                            <span
                                className={cn(
                                    "font-heading text-xl md:text-2xl font-bold transition-colors",
                                    logoTextClasses
                                )}
                                style={!shouldForceSolid ? { textShadow: '0 2px 10px rgba(0,0,0,0.5)' } : undefined}
                            >
                                <span className={cn("transition-colors", shouldForceSolid ? "text-primary-600" : "text-white")}>Favela</span>
                                <span>-República</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation - Centered & Premium */}
                        <div className={cn(
                            "hidden lg:flex items-center gap-1.5 px-2 py-1.5 rounded-full transition-all duration-300",
                            navContainerClasses
                        )}>
                            {NAV_ITEMS.map((item) => {
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
                                            {dict.nav[item.labelKey as keyof typeof dict.nav]}
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
                                                : "border-white/20 bg-black/20 hover:bg-black/30 hover:border-white/40 text-white"
                                        )}
                                        aria-expanded={isLangMenuOpen}
                                        aria-haspopup="true"
                                        aria-label={dict.nav.language}
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
                                                    {dict.nav.language}
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
                                    "shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all overflow-hidden relative group font-bold px-6",
                                    !shouldForceSolid && "bg-white text-primary-600 hover:bg-neutral-50"
                                )}
                            >
                                <span className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                                    <span className="absolute -inset-full top-0 block w-[50%] -skew-x-12 bg-gradient-to-r from-transparent to-white/20 opacity-0 group-hover:animate-shimmer" />
                                </span>
                                {dict.nav.book}
                            </WhatsAppButton>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(true)}
                            className={cn(
                                "lg:hidden p-2 -mr-2 transition-colors relative z-50",
                                isMobileMenuOpen ? "text-neutral-900" : shouldForceSolid ? "text-neutral-900" : "text-white"
                            )}
                            aria-label={dict.nav.openMenu}
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
                        locale={locale}
                        currentPath={pathname}
                        isActive={isActive}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default Header;
