
export type Locale = "pt" | "en" | "es" | "fr";

const dictionaries = {
    "pt": {
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
        footer: {
            about: "À Propos",
            description: "Tourisme communautaire authentique dans la Favela Tavares Bastos. Sécurité, culture et vues incroyables.",
            quickLinks: "Liens Rapides",
            contact: "Contact",
            followUs: "Suivez-nous",
            rights: "Tous droits réservés.",
        },
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
