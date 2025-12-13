
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { Link } from "@/i18n/navigation";
import { CONTACT, NAV_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { ArrowUpRight, Code2, Heart, Instagram, Mail, MapPin, Phone } from "lucide-react";

interface FooterProps {
    locale?: string;
}

export function Footer({ locale = "pt" }: FooterProps) {
    const currentLang = locale === "pt" ? "pt" : "en";
    const currentYear = new Date().getFullYear();

    // Helper to get localized path
    const getLocalePath = (path: string) => {
        const loc = locale.startsWith('pt') ? 'pt' : locale;
        return `/${loc}${path}`;
    };

    const content = {
        pt: {
            tagline: "Turismo comunitário autêntico na favela Tavares Bastos, Rio de Janeiro. Experiências culturais, seguras e responsáveis.",
            navigation: "Navegação",
            tours: "Nossos Tours",
            contact: "Contato",
            newsletter: "Newsletter",
            newsletterDesc: "Receba novidades e dicas sobre turismo comunitário no Rio.",
            subscribe: "Inscreva-se",
            rights: "Todos os direitos reservados.",
            madeWith: "Feito com",
            inRio: "no Rio de Janeiro",
            safety: "Segurança",
            privacy: "Privacidade",
            terms: "Termos",
        },
        en: {
            tagline: "Authentic community tourism in Tavares Bastos favela, Rio de Janeiro. Cultural, safe, and responsible experiences.",
            navigation: "Navigation",
            tours: "Our Tours",
            contact: "Contact",
            newsletter: "Newsletter",
            newsletterDesc: "Get news and tips about community tourism in Rio.",
            subscribe: "Subscribe",
            rights: "All rights reserved.",
            madeWith: "Made with",
            inRio: "in Rio de Janeiro",
            safety: "Safety",
            privacy: "Privacy",
            terms: "Terms",
        },
    };

    const t = content[currentLang];

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-neutral-950 to-neutral-900 text-white">
            {/* Ambient Background Effects */}
            <div className="absolute -top-[50%] -left-[10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-[30%] -right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="container-custom relative z-10 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="max-w-xs">
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <span className="font-heading text-2xl md:text-3xl font-bold">
                                <span className="text-primary-500 transition-colors group-hover:text-primary-400">Favela</span>
                                <span className="text-white">-República</span>
                            </span>
                        </Link>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                            {t.tagline}
                        </p>

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
                        </ul>
                    </div>

                    {/* Tours */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6 font-heading">
                            {t.tours}
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { href: "/tours/tour-completo-tavares-bastos", label: "Tour Completo" },
                                { href: "/tours/tour-arte-urbana-grafite", label: "Arte Urbana & Grafite" },
                                { href: "/tours/tour-sunset-mirante", label: "Sunset no Mirante" },
                            ].map((tour) => (
                                <li key={tour.href}>
                                    <Link
                                        href={tour.href}
                                        className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-primary-400 hover:translate-x-1 transition-all duration-200 text-sm font-medium"
                                    >
                                        {tour.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-50" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6 font-heading">
                            {t.contact}
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href={`https://wa.me/${CONTACT.whatsapp.number}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-neutral-300 hover:text-green-400 transition-colors group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                        <Phone className="w-4 h-4 text-green-500" />
                                    </div>
                                    <span className="text-sm font-medium">{CONTACT.whatsapp.displayNumber}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    className="flex items-center gap-3 text-neutral-300 hover:text-primary-400 transition-colors group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                                        <Mail className="w-4 h-4 text-primary-500" />
                                    </div>
                                    <span className="text-sm font-medium">{CONTACT.email}</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-neutral-300">
                                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-4 h-4 text-blue-500" />
                                    </div>
                                    <span className="text-sm leading-relaxed">
                                        {CONTACT.address.neighborhood}, {CONTACT.address.city}<br />
                                        {CONTACT.address.state}, {CONTACT.address.country}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter Box */}
                <div className="bg-gradient-to-br from-primary-900/10 to-transparent rounded-2xl p-6 md:p-10 border border-primary-500/10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 text-center md:text-left">
                    <div className="max-w-md">
                        <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-2">
                            {t.newsletter}
                        </h3>
                        <p className="text-neutral-400 text-sm">
                            {t.newsletterDesc}
                        </p>
                    </div>
                    <NewsletterForm
                        labels={{
                            placeholder: "seu@email.com",
                            button: t.subscribe,
                            successTitle: currentLang === 'pt' ? "Inscrito com sucesso!" : "Successfully subscribed!",
                            successMessage: currentLang === 'pt'
                                ? "Bem-vindo à nossa comunidade."
                                : "Welcome to our community.",
                            error: currentLang === 'pt' ? "Erro ao inscrever" : "Error subscribing"
                        }}
                    />
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800 bg-black/20 backdrop-blur-sm">
                <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-neutral-500">
                        <p>© {currentYear} Favela-República Tour. {t.rights}</p>
                        <span className="hidden md:inline text-neutral-700">•</span>
                        <p className="flex items-center gap-1.5">
                            {t.madeWith} <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" /> {t.inRio}
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://linkedin.com/in/devferreirag"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-primary-500 transition-colors"
                        >
                            <Code2 className="w-3.5 h-3.5" />
                            Dev by Gabriel L. Ferreira
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
                                    href={getLocalePath(link.href)}
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

