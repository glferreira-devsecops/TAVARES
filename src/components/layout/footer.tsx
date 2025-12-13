
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
        <footer
            style={{
                background: 'linear-gradient(180deg, #0a0a0a 0%, #171717 100%)',
                color: '#ffffff',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-10%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(200,90,52,0.08) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                    pointerEvents: 'none',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '-30%',
                    right: '-10%',
                    width: '400px',
                    height: '400px',
                    background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: 'clamp(4rem, 8vw, 6rem) 1.5rem clamp(3rem, 5vw, 4rem)',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: 'clamp(2rem, 4vw, 4rem)',
                        marginBottom: '4rem',
                    }}
                >
                    <div style={{ maxWidth: '320px' }}>
                        <Link href="/" className="flex items-center gap-2 mb-2">
                            <span
                                style={{
                                    fontFamily: 'var(--font-heading), Georgia, serif',
                                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                    fontWeight: 700,
                                }}
                            >
                                <span style={{ color: '#f1825a' }}>Favela</span>
                                <span style={{ color: '#ffffff' }}>-República</span>
                            </span>
                        </Link>
                        <p
                            style={{
                                color: '#d4d4d4', // Brightened from #a3a3a3
                                fontSize: '0.95rem',
                                lineHeight: 1.7,
                                marginBottom: '2rem',
                            }}
                        >
                            {t.tagline}
                        </p>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, #262626 0%, #1a1a1a 100%)',
                                        border: '1px solid #333',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#d4d4d4', // Brightened from #a3a3a3
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none',
                                    }}
                                    className="hover:bg-primary-500 hover:border-primary-500 hover:text-white hover:scale-110 hover:shadow-[0_4px_20px_rgba(200,90,52,0.4)]"
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

                    <div>
                        <h4
                            style={{
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                            }}
                            className="text-neutral-400 mb-6"
                        >
                            {t.navigation}
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {NAV_ITEMS.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        style={{
                                            textDecoration: 'none',
                                            fontSize: '0.95rem',
                                            transition: 'all 0.2s ease',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                        }}
                                        className="text-neutral-300 hover:text-primary-400 hover:translate-x-1"
                                    >
                                        {item.label[currentLang]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4
                            style={{
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#a3a3a3',
                                marginBottom: '1.5rem',
                            }}
                        >
                            {t.tours}
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { href: "/tours/tour-completo-tavares-bastos", label: "Tour Completo" },
                                { href: "/tours/tour-arte-urbana-grafite", label: "Arte Urbana & Grafite" },
                                { href: "/tours/tour-sunset-mirante", label: "Sunset no Mirante" },
                            ].map((tour) => (
                                <li key={tour.href}>
                                    <Link
                                        href={tour.href}
                                        style={{
                                            color: '#d4d4d4',
                                            textDecoration: 'none',
                                            fontSize: '0.95rem',
                                            transition: 'all 0.2s ease',
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '4px',
                                        }}
                                        className="hover:text-primary-400 hover:translate-x-1"
                                    >
                                        {tour.label}
                                        <ArrowUpRight size={14} style={{ opacity: 0.5 }} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4
                            style={{
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: '#a3a3a3',
                                marginBottom: '1.5rem',
                            }}
                        >
                            {t.contact}
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <li>
                                <a
                                    href={`https://wa.me/${CONTACT.whatsapp.number}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        color: '#d4d4d4', // Brightened
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                    }}
                                    className="hover:text-green-400"
                                >
                                    <div
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '10px',
                                            background: 'rgba(37, 211, 102, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Phone size={16} style={{ color: '#25d366' }} />
                                    </div>
                                    <span style={{ fontSize: '0.9rem' }}>{CONTACT.whatsapp.displayNumber}</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        color: '#d4d4d4', // Brightened
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease',
                                    }}
                                    className="hover:text-primary-400"
                                >
                                    <div
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '10px',
                                            background: 'rgba(200, 90, 52, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Mail size={16} style={{ color: '#f1825a' }} />
                                    </div>
                                    <span style={{ fontSize: '0.9rem' }}>{CONTACT.email}</span>
                                </a>
                            </li>
                            <li>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '12px',
                                        color: '#d4d4d4', // Brightened
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '10px',
                                            background: 'rgba(59, 130, 246, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <MapPin size={16} style={{ color: '#3b82f6' }} />
                                    </div>
                                    <span style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                                        {CONTACT.address.neighborhood}, {CONTACT.address.city}<br />
                                        {CONTACT.address.state}, {CONTACT.address.country}
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    style={{
                        background: 'linear-gradient(135deg, rgba(200,90,52,0.1) 0%, rgba(200,90,52,0.05) 100%)',
                        borderRadius: '20px',
                        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                        border: '1px solid rgba(200,90,52,0.15)',
                        marginBottom: '3rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    }}
                    className="md:flex-row md:text-left md:justify-between"
                >
                    <div style={{ marginBottom: '1.5rem' }} className="md:mb-0">
                        <h3
                            style={{
                                fontFamily: 'var(--font-heading), Georgia, serif',
                                fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                                fontWeight: 700,
                                color: '#ffffff',
                                marginBottom: '0.5rem',
                            }}
                        >
                            {t.newsletter}
                        </h3>
                        <p style={{ color: '#d4d4d4', fontSize: '0.95rem' }}>{t.newsletterDesc}</p>
                    </div>
                    <form
                        style={{
                            display: 'flex',
                            gap: '12px',
                            width: '100%',
                            maxWidth: '400px',
                        }}
                        className="flex-col sm:flex-row"
                    >
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            style={{
                                flex: 1,
                                padding: '14px 18px',
                                borderRadius: '12px',
                                border: '1px solid #333',
                                background: '#1a1a1a',
                                color: '#ffffff',
                                fontSize: '0.95rem',
                                outline: 'none',
                                transition: 'all 0.2s ease',
                            }}
                            className="focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '14px 24px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, #f1825a 0%, #c85a34 100%)',
                                color: '#ffffff',
                                fontWeight: 600,
                                fontSize: '0.95rem',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap',
                            }}
                            className="hover:shadow-[0_4px_20px_rgba(200,90,52,0.4)] hover:-translate-y-0.5"
                        >
                            {t.subscribe}
                        </button>
                    </form>
                </div>
            </div>

            <div
                style={{
                    borderTop: '1px solid #262626',
                    background: 'rgba(0,0,0,0.3)',
                }}
            >
                <div
                    style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        padding: '1.5rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                    className="md:flex-row md:justify-between"
                >
                    <p style={{ color: '#d4d4d4', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        © {currentYear} Favela-República Tour. {t.rights}
                    </p>
                    <p style={{ color: '#d4d4d4', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {t.madeWith} <Heart size={14} style={{ color: '#ef4444', fill: '#ef4444' }} /> {t.inRio}
                    </p>
                    <a
                        href="https://linkedin.com/in/devferreirag"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#d4d4d4',
                            fontSize: '0.85rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease'
                        }}
                        className="hover:text-primary-500"
                    >
                        <Code2 size={14} /> Dev by Gabriel L. Ferreira
                    </a>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        {[
                            { href: "/seguranca", label: t.safety },
                            { href: "/privacidade", label: t.privacy },
                            { href: "/termos", label: t.terms },
                        ].map((link) => (
                            <Link
                                key={link.href}
                                href={getLocalePath(link.href)}
                                style={{
                                    color: '#d4d4d4',
                                    textDecoration: 'none',
                                    fontSize: '0.85rem',
                                    transition: 'color 0.2s ease',
                                }}
                                className="hover:text-neutral-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer >
    );
}
