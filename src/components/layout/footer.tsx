"use client";


import { tours } from "@/data/tours";
import { Link } from "@/i18n/navigation";
import { CONTACT, NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { ArrowUpRight, Heart, Instagram, Mail } from "lucide-react";
import Image from "next/image";

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        className={className}
    >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

import { useLocale } from "next-intl";

export function Footer() {
    const locale = useLocale();
    const currentLang = (locale === "pt" || locale === "en" || locale === "es" || locale === "fr") ? locale : "pt";

    const content = {
        pt: {
            tagline: "Turismo autêntico no Favela-República do Rio de Janeiro. Experiências culturais, seguras e responsáveis.",
            navigation: "Navegação",
            tours: "Nossos Tours",
            contact: "Contato",
            rights: "Todos os direitos reservados.",
            madeWith: "Feito com",
            inRio: "no Rio de Janeiro",
            safety: "Segurança",
            privacy: "Privacidade",
            terms: "Termos",
            location: "Localização",
            openDaily: "Aberto todos os dias",
        },
        en: {
            tagline: "Authentic tourism in Favela-República, Rio de Janeiro. Cultural, safe, and responsible experiences.",
            navigation: "Navigation",
            tours: "Our Tours",
            contact: "Contact",
            rights: "All rights reserved.",
            madeWith: "Made with",
            inRio: "in Rio de Janeiro",
            safety: "Safety",
            privacy: "Privacy",
            terms: "Terms",
            location: "Location",
            openDaily: "Open every day",
        },
        es: {
            tagline: "Turismo auténtico en el Favela-República de Río de Janeiro. Experiencias culturales, seguras y responsables.",
            navigation: "Navegación",
            tours: "Nuestros Tours",
            contact: "Contacto",
            rights: "Todos los derechos reservados.",
            madeWith: "Hecho con",
            inRio: "en Río de Janeiro",
            safety: "Seguridad",
            privacy: "Privacidad",
            terms: "Términos",
            location: "Ubicación",
            openDaily: "Abierto todos los días",
        },
        fr: {
            tagline: "Tourisme authentique au Favela-República, Rio de Janeiro. Expériences culturelles, sûres et responsables.",
            navigation: "Navigation",
            tours: "Nos Tours",
            contact: "Contact",
            rights: "Tous droits réservés.",
            madeWith: "Fait avec",
            inRio: "à Rio de Janeiro",
            safety: "Sécurité",
            privacy: "Confidentialité",
            terms: "Conditions",
            location: "Localisation",
            openDaily: "Ouvert tous les jours",
        },
    };

    const t = content[currentLang];
    const footerTours = tours.slice(0, 3);

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-black text-white">
            {/* Ambient Background Effects */}
            <div className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-[30%] -right-[10%] w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Awwwards Large Typography Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none">
                <span className="text-[15vw] font-black uppercase tracking-tightest whitespace-nowrap leading-none">
                    Favela República
                </span>
            </div>

            <div className="container-custom relative z-10 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="max-w-xs">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-16 h-16">
                                <Image
                                    src="/images/logo_v1.webp"
                                    alt="Favela República"
                                    fill
                                    className="object-contain"
                                    sizes="64px"
                                />
                            </div>
                            <span className="font-heading text-2xl md:text-3xl font-bold text-white">
                                Favela-República Tour
                            </span>
                        </Link>
                        <p className="text-neutral-300 text-sm leading-relaxed mb-8">
                            {t.tagline}
                        </p>

                        {/* Location moved here to avoid overlap with FAB */}
                        <div className="mb-8">
                            <h5 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4 font-heading">
                                {t.location}
                            </h5>
                            <span className="text-sm leading-relaxed text-neutral-300 block mb-2">
                                {CONTACT.address.neighborhood}, {CONTACT.address.city}<br />
                                {CONTACT.address.state}, {CONTACT.address.country}
                            </span>
                            <div className="flex items-center gap-2 text-xs text-neutral-500">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span>{t.openDaily}</span>
                            </div>

                        </div>

                        <div className="flex gap-3">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-xl bg-neutral-800/50 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-orange-500/20"
                                    aria-label={social.label}
                                >
                                    {social.platform === "instagram" && <Instagram size={20} />}
                                    {social.platform === "tiktok" && <TikTokIcon className="w-5 h-5" />}
                                    {social.platform === "email" && <Mail size={20} />}
                                    {social.platform === "whatsapp" && (
                                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6 font-heading">
                            {t.navigation}
                        </h4>
                        <ul className="space-y-3">
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-primary-400 hover:translate-x-1 transition-all duration-200 text-sm font-medium"
                                    >
                                        {item.label[currentLang]}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-primary-400 hover:translate-x-1 transition-all duration-200 text-sm font-medium"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Tours */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6 font-heading">
                            {t.tours}
                        </h4>
                        <ul className="space-y-3">
                            {footerTours.map((tour) => (
                                <li key={tour.id}>
                                    <Link
                                        href={`/tours/${tour.slug}`}
                                        className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-primary-400 hover:translate-x-1 transition-all duration-200 text-sm font-medium"
                                    >
                                        {tour.title[currentLang]}
                                        <ArrowUpRight className="w-3 h-3 opacity-50" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800 bg-black/20 backdrop-blur-sm">
                <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-neutral-500">
                        &copy; 2026 Favela-República Tour. {t.rights}
                        <span className="hidden md:inline text-neutral-700">•</span>
                        <p className="flex items-center gap-1.5">
                            {t.madeWith} <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> {t.inRio}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <a
                            href="https://rettecnologia.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-[11px] uppercase tracking-widest text-neutral-600 hover:text-white transition-all duration-300"
                        >
                            <span className="text-neutral-700 group-hover:text-primary-500 transition-colors">Code</span>
                            <span className="w-px h-3 bg-neutral-800 group-hover:bg-primary-500/50 transition-colors"></span>
                            <span className="font-bold">RET Tecnologia</span>
                        </a>
                        <div className="h-3 w-px bg-neutral-800 hidden sm:block" />
                        <div className="flex gap-4">
                            {[
                                { href: "/seguranca", label: t.safety },
                                { href: "/privacidade", label: t.privacy },
                                { href: "/termos", label: t.terms },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
