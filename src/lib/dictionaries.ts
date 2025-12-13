
export type Locale = "pt" | "en" | "es" | "fr";

const dictionaries = {
    pt: {
        nav: {
            home: "Início",
            tours: "Tours",
            about: "Quem Somos",
            blog: "Blog",
            faq: "FAQ",
            contact: "Contato",
            book: "Reservar",
            language: "Idioma",
            openMenu: "Abrir menu",
            closeMenu: "Fechar menu",
        },
        hero: {
            eyebrow: "Turismo de Base Comunitária",
            title: "Conheça a verdadeira",
            titleHighlight: "Tavares Bastos",
            subtitle: "Experiência autêntica, segura e cultural na favela mais icônica do Rio",
            description: "Descubra a história, arte urbana e belezas naturais da comunidade com guias locais. Tours responsáveis e imersivos.",
            ctaMain: "Reservar Tour Agora",
            ctaSecondary: "Ver Tours Disponíveis",
            stats: {
                rating: "Avaliação",
                safety: "Base Policial",
                local: "Guias Locais",
                safeValue: "Seguro",
                reviewCount: "250+ avaliações"
            },
        },
        footer: {
            about: "Sobre nós",
            description: "Turismo comunitário autêntico na Favela Tavares Bastos. Segurança, cultura e vistas incríveis.",
            quickLinks: "Links Rápidos",
            contact: "Contato",
            followUs: "Siga-nos",
            rights: "Todos os direitos reservados.",
        },
        about: {
            hero: {
                title: "Turismo que transforma vidas",
                subtitle: "Conheça a essência da Favela-República",
            },
            manifesto: {
                title: "Nossa Essência",
                text1: "A Favela-República é uma empresa de turismo de base comunitária localizada na favela Tavares Bastos, na Zona Sul do Rio de Janeiro. Nosso objetivo é oferecer uma experiência autêntica, segura e cultural, mostrando a verdadeira vida da comunidade por meio de história local, arte urbana, belezas naturais e hospitalidade.",
                text2: "Recebemos visitantes do mundo inteiro e entregamos um tour responsável, imersivo e muito elogiado. Queremos que o site transmita nossa essência: acolhimento, segurança, cultura, diversidade e a beleza do nosso território.",
            },
            values: {
                title: "Nossos Pilares",
                list: [
                    { title: "Autenticidade", desc: "Vivência real sem filtros." },
                    { title: "Segurança", desc: "A comunidade mais segura do Rio." },
                    { title: "Cultura", desc: "Arte, música e história viva." },
                    { title: "Comunidade", desc: "Guias locais e impacto direto." }
                ]
            },
            instagram: {
                title: "Siga nossa jornada",
                handle: "@favelarepublica",
            }
        },
        tourCard: {
            insurance: "Seguro Incluso",
            smallGroups: "Grupos Pequenos",
            book: "Reservar"
        },
        AboutPreview: {
            badge: "Quem Somos",
            title: "Muito mais que um tour",
            titleHighlight: "Uma imersão cultural",
            description_1: "Você vai pisar no cenário real que inspirou o game **FIFA Street**, foi palco do filme **O Incrível Hulk** e do clipe de **Snoop Dogg & Pharrell**. A Tavares Bastos não é apenas uma favela; é um ícone da cultura pop mundial.",
            description_2: "Aqui, a segurança é total e a experiência é autêntica. Guiado por quem nasceu e cresceu aqui, você vai descobrir a verdadeira alma do Rio de Janeiro, com vistas de tirar o fôlego e histórias que nenhum guia turístico comum pode contar.",
            description_impact: "Ao escolher a Favela-República, você reinveste diretamente na comunidade. Nosso turismo sustentável gera renda local, preserva nossa cultura e cria oportunidades reais para os moradores.",
            trustedTitle: "Reconhecido Mundialmente",
            trustedSubtitle: "Cenário do FIFA Street e avaliado com excelência:",
            highlights: {
                fifa: { title: "FIFA Street", subtitle: "Cenário Icônico" },
                tripadvisor: { title: "TripAdvisor", subtitle: "5 Estrelas" },
                airbnb: { title: "Airbnb", subtitle: "Superhost" },
                google: { title: "Google", subtitle: "4.9/5.0" }
            },
            stats: { value: "10+", label: "Anos de História" },
            cta: "Conheça nossa história completa",
            ctaWhatsapp: "Agendar Visita",
            features: {
                local_guides: "Guias locais",
                street_art: "Arte urbana",
                safety: "Segurança",
                social_impact: "Impacto social"
            }
        }
    },
    en: {
        nav: {
            home: "Home",
            tours: "Tours",
            about: "About Us",
            blog: "Blog",
            faq: "FAQ",
            contact: "Contact",
            book: "Book Now",
            language: "Language",
            openMenu: "Open menu",
            closeMenu: "Close menu",
        },
        hero: {
            eyebrow: "Community Based Tourism",
            title: "Discover the real",
            titleHighlight: "Tavares Bastos",
            subtitle: "Authentic, safe and cultural experience in Rio's most iconic favela",
            description: "Explore history, urban art and natural beauty with local guides. Responsible and immersive tours.",
            ctaMain: "Book Tour Now",
            ctaSecondary: "See Available Tours",
            stats: {
                rating: "Rating",
                safety: "Police Base",
                local: "Local Guides",
                safeValue: "Safe",
                reviewCount: "250+ reviews"
            },
        },
        footer: {
            about: "About Us",
            description: "Authentic community tourism in Tavares Bastos Favela. Safety, culture, and amazing views.",
            quickLinks: "Quick Links",
            contact: "Contact",
            followUs: "Follow Us",
            rights: "All rights reserved.",
        },
        about: {
            hero: {
                title: "Tourism that transforms lives",
                subtitle: "Discover the essence of Favela-República",
            },
            manifesto: {
                title: "Our Essence",
                text1: "Favela-República is a community-based tourism company located in the Tavares Bastos favela, in the South Zone of Rio de Janeiro. Our goal is to offer an authentic, safe, and cultural experience, showing the true life of the community through local history, urban art, natural beauty, and hospitality.",
                text2: "We welcome visitors from all over the world and deliver a responsible, immersive, and highly praised tour. We want our work to convey our essence: welcoming, safety, culture, diversity, and the beauty of our territory.",
            },
            values: {
                title: "Our Pillars",
                list: [
                    { title: "Authenticity", desc: "Real experience without filters." },
                    { title: "Safety", desc: "Rio's safest community." },
                    { title: "Culture", desc: "Art, music and living history." },
                    { title: "Community", desc: "Local guides and direct impact." }
                ]
            },
            instagram: {
                title: "Follow our journey",
                handle: "@favelarepublica",
            }
        },
        tourCard: {
            insurance: "Insurance Included",
            smallGroups: "Small Groups",
            book: "Book Now"
        },
        AboutPreview: {
            badge: "About Us",
            title: "Much more than a tour",
            titleHighlight: "A cultural immersion",
            description_1: "You will step onto the real set that inspired **FIFA Street**, **The Incredible Hulk** movie, and **Snoop Dogg & Pharrell**'s music video. Tavares Bastos is not just a favela; it is a global pop culture icon.",
            description_2: "Here, safety is absolute and the experience is authentic. Guided by locals, you will discover the true soul of Rio de Janeiro, with breathtaking views and stories no ordinary guide can tell.",
            description_impact: "By choosing Favela-República, you reinvest directly in the community. Our sustainable tourism generates local income, preserves our culture, and creates real opportunities for residents.",
            trustedTitle: "World Renowned",
            trustedSubtitle: "Setting of FIFA Street and rated with excellence:",
            highlights: {
                fifa: { title: "FIFA Street", subtitle: "Iconic Setting" },
                tripadvisor: { title: "TripAdvisor", subtitle: "5 Stars" },
                airbnb: { title: "Airbnb", subtitle: "Superhost" },
                google: { title: "Google", subtitle: "4.9/5.0" }
            },
            stats: { value: "10+", label: "Years of History" },
            cta: "Learn our full story",
            ctaWhatsapp: "Book Visit",
            features: {
                local_guides: "Local guides",
                street_art: "Street art",
                safety: "Safety",
                social_impact: "Social impact"
            }
        }
    },
    es: {
        nav: {
            home: "Inicio",
            tours: "Tours",
            about: "Quiénes Somos",
            blog: "Blog",
            faq: "Preguntas",
            contact: "Contacto",
            book: "Reservar",
            language: "Idioma",
            openMenu: "Abrir menú",
            closeMenu: "Cerrar menú",
        },
        hero: {
            eyebrow: "Turismo de Base Comunitaria",
            title: "Conoce la verdadera",
            titleHighlight: "Tavares Bastos",
            subtitle: "Experiencia auténtica, segura y cultural en la favela más icónica de Río",
            description: "Descubre la historia, el arte urbano y las bellezas naturales de la comunidad con guías locales. Tours responsables e inmersivos.",
            ctaMain: "Reservar Tour Ahora",
            ctaSecondary: "Ver Tours Disponibles",
            stats: {
                rating: "Evaluación",
                safety: "Base Policial",
                local: "Guías Locales",
                safeValue: "Seguro",
                reviewCount: "250+ evaluaciones"
            },
        },
        footer: {
            about: "Sobre Nosotros",
            description: "Turismo comunitario auténtico en la Favela Tavares Bastos. Seguridad, cultura y vistas increíbles.",
            quickLinks: "Enlaces Rápidos",
            contact: "Contacto",
            followUs: "Síguenos",
            rights: "Todos los derechos reservados.",
        },
        about: {
            hero: {
                title: "Turismo que transforma vidas",
                subtitle: "Conoce la esencia de Favela-República",
            },
            manifesto: {
                title: "Nuestra Esencia",
                text1: "Favela-República es una empresa de turismo de base comunitaria ubicada en la favela Tavares Bastos, en la Zona Sur de Río de Janeiro. Nuestro objetivo es ofrecer una experiencia auténtica, segura y cultural, mostrando la verdadera vida de la comunidad a través de la historia local, el arte urbano, las bellezas naturales y la hospitalidad.",
                text2: "Recibimos visitantes de todo el mundo y ofrecemos un tour responsable, inmersivo y muy elogiado. Queremos que nuestro trabajo transmita nuestra esencia: acogida, seguridad, cultura, diversidad y la belleza de nuestro territorio.",
            },
            values: {
                title: "Nuestros Pilares",
                list: [
                    { title: "Autenticidad", desc: "Vivencia real sin filtros." },
                    { title: "Seguridad", desc: "La comunidad más segura de Río." },
                    { title: "Cultura", desc: "Arte, música e historia viva." },
                    { title: "Comunidad", desc: "Guías locales e impacto directo." }
                ]
            },
            instagram: {
                title: "Sigue nuestro viaje",
                handle: "@favelarepublica",
            }
        },
        tourCard: {
            insurance: "Seguro Incluido",
            smallGroups: "Grupos Pequeños",
            book: "Reservar"
        },
        AboutPreview: {
            badge: "Quiénes Somos",
            title: "Mucho más que un tour",
            titleHighlight: "Una inmersión cultural",
            description_1: "Pisarás el escenario real que inspiró el juego **FIFA Street**, la película **El Increíble Hulk** y el video de **Snoop Dogg & Pharrell**. Tavares Bastos no es solo una favela; es un ícono de la cultura pop mundial.",
            description_2: "Aquí, la seguridad es total y la experiencia es auténtica. Guiado por locales, descubrirás la verdadera alma de Río de Janeiro, con vistas impresionantes e historias que ningún guía común puede contar.",
            description_impact: "Al elegir Favela-República, reinviertes directamente en la comunidad. Nuestro turismo sostenible genera ingresos locales, preserva nuestra cultura y crea oportunidades reales para los residentes.",
            trustedTitle: "Reconocido Mundialmente",
            trustedSubtitle: "Escenario de FIFA Street y calificado con excelencia:",
            highlights: {
                fifa: { title: "FIFA Street", subtitle: "Escenario Icónico" },
                tripadvisor: { title: "TripAdvisor", subtitle: "5 Estrelas" },
                airbnb: { title: "Airbnb", subtitle: "Superhost" },
                google: { title: "Google", subtitle: "4.9/5.0" }
            },
            stats: { value: "10+", label: "Años de Historia" },
            cta: "Conoce nuestra historia completa",
            ctaWhatsapp: "Reservar Visita",
            features: {
                local_guides: "Guías locales",
                street_art: "Arte urbano",
                safety: "Seguridad",
                social_impact: "Impacto social"
            }
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            tours: "Visites",
            about: "À Propos",
            blog: "Blog",
            faq: "FAQ",
            contact: "Contact",
            book: "Réserver",
            language: "Langue",
            openMenu: "Ouvrir le menu",
            closeMenu: "Fermer le menu",
        },
        hero: {
            eyebrow: "Tourisme Communautaire",
            title: "Découvrez la vraie",
            titleHighlight: "Tavares Bastos",
            subtitle: "Expérience authentique, sûre et culturelle dans la favela la plus iconique de Rio",
            description: "Découvrez l'histoire, l'art urbain et les beautés naturelles de la communauté avec des guides locaux. Visites responsables et immersives.",
            ctaMain: "Réserver Maintenant",
            ctaSecondary: "Voir les Visites",
            stats: {
                rating: "Évaluation",
                safety: "Base de Police",
                local: "Guides Locaux",
                safeValue: "Sûr",
                reviewCount: "250+ avis"
            },
        },
        about: {
            hero: {
                title: "Tourisme qui transforme des vies",
                subtitle: "Découvrez l'essence de Favela-República",
            },
            manifesto: {
                title: "Notre Essence",
                text1: "Favela-República est une entreprise de tourisme communautaire située dans la favela Tavares Bastos, dans la zone sud de Rio de Janeiro. Notre objectif est d'offrir une expérience authentique, sûre et culturelle, montrant la vraie vie de la communauté à travers l'histoire locale, l'art urbain, les beautés naturelles et l'hospitalité.",
                text2: "Nous accueillons des visiteurs du monde entier et proposons une visite responsable, immersive et très appréciée. Nous voulons que notre travail transmette notre essence : accueil, sécurité, culture, diversité et la beauté de notre territoire.",
            },
            values: {
                title: "Nos Piliers",
                list: [
                    { title: "Authenticité", desc: "Expérience réelle sans filtres." },
                    { title: "Sécurité", desc: "La communauté la plus sûre de Rio." },
                    { title: "Culture", desc: "Art, musique et histoire vivante." },
                    { title: "Communauté", desc: "Guides locaux et impact direct." }
                ]
            },
            instagram: {
                title: "Suivez notre parcours",
                handle: "@favelarepublica",
            }
        },
        tourCard: {
            insurance: "Assurance Incluse",
            smallGroups: "Petits Groupes",
            book: "Réserver"
        },
        footer: {
            about: "À Propos",
            description: "Tourisme communautaire authentique dans la Favela Tavares Bastos. Sécurité, culture et vues incroyables.",
            quickLinks: "Liens Rapides",
            contact: "Contact",
            followUs: "Suivez-nous",
            rights: "Tous droits réservés.",
        },
        AboutPreview: {
            badge: "Qui Sommes-Nous",
            title: "Bien plus qu'une visite",
            titleHighlight: "Une immersion culturelle",
            description_1: "Vous marcherez sur le décor réel qui a inspiré le jeu **FIFA Street**, le film **L'Incroyable Hulk** et le clip de **Snoop Dogg & Pharrell**. Tavares Bastos n'est pas seulement une favela; c'est une icône de la culture pop mondiale.",
            description_2: "Ici, la sécurité est totale et l'expérience est authentique. Guidé par des locaux, vous découvrirez la véritable âme de Rio de Janeiro, avec des vues à couper le souffle et des histoires qu'aucun guide ordinaire ne peut raconter.",
            description_impact: "En choisissant Favela-República, vous réinvestissez directement dans la communauté. Notre tourisme durable génère des revenus locaux, préserve notre culture et crée de vraies opportunités pour les habitants.",
            trustedTitle: "Reconnu Mondialement",
            trustedSubtitle: "Décor de FIFA Street et noté avec excellence:",
            highlights: {
                fifa: { title: "FIFA Street", subtitle: "Décor Emblématique" },
                tripadvisor: { title: "TripAdvisor", subtitle: "5 Étoiles" },
                airbnb: { title: "Airbnb", subtitle: "Superhost" },
                google: { title: "Google", subtitle: "4.9/5.0" }
            },
            stats: { value: "10+", label: "Ans d'Histoire" },
            cta: "Découvrez notre histoire complète",
            ctaWhatsapp: "Réserver Visite",
            features: {
                local_guides: "Guides locaux",
                street_art: "Art urbain",
                safety: "Sécurité",
                social_impact: "Impact social"
            }
        }
    },
} as const;

export const getDictionary = (locale: Locale) => {
    return dictionaries[locale as keyof typeof dictionaries] ?? dictionaries["pt"];
};

export const useDictionary = (locale: string) => {
    // Basic normalization because locale might be passed as 'pt-BR' from some localized routers
    const normalizedLocale = (["en", "es", "fr"].includes(locale.toLowerCase()) ? locale.toLowerCase() : "pt") as Locale;
    return getDictionary(normalizedLocale);
};
