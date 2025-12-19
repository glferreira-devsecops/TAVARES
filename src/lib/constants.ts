// Favela-República Constants

// Contact Information

export const CONTACT = {
    whatsapp: {
        number: "5521986259544",
        displayNumber: "+55 (21) 98625-9544",
    },
    email: "contato@favelarepublica.com",
    instagram: "favelarepublica",
    instagramUrl: "https://www.instagram.com/favelarepublica",
    tiktokUrl: "https://www.tiktok.com/@favelarepublica",
    address: {
        street: "Rua do Catete, 153",
        neighborhood: "Catete", // Em frente ao Museu da República
        city: "Rio de Janeiro",
        state: "RJ",
        country: "Brasil",
        postalCode: "22220-000",
    },
} as const;

// Location - Favela coordinates
export const LOCATION = {
    name: "Favela",
    coordinates: {
        lat: -22.9308,
        lng: -43.1817,
    },
    googleMapsUrl: "https://maps.google.com/?q=-22.9308,-43.1817",
} as const;

// WhatsApp message templates
export const WHATSAPP_MESSAGES = {
    general: {
        pt: "Olá! Gostaria de mais informações sobre os tours na favela.",
        en: "Hello! I would like more information about the tours in the favela.",
        es: "¡Hola! Me gustaría más información sobre los tours en la favela.",
        fr: "Bonjour! Je voulais plus d'informations sur les visites à la favela.",
    },
    tourReservation: (tourName: string) => ({
        pt: `Olá! Quero reservar o tour "${tourName}". Quantas vagas disponíveis?`,
        en: `Hello! I want to book the "${tourName}" tour. How many spots available?`,
        es: `¡Hola! Quiero reservar el tour "${tourName}". ¿Cuántos lugares hay disponibles?`,
        fr: `Bonjour! Je veux réserver la visite "${tourName}". Combien de places disponibles?`,
    }),
    tourReservationWithDate: (tourName: string, date: string, people: number) => ({
        pt: `Olá! Quero reservar o tour "${tourName}" para ${date}, ${people} pessoa(s). Tem disponibilidade?`,
        en: `Hello! I want to book the "${tourName}" tour for ${date}, ${people} person(s). Is it available?`,
        es: `¡Hola! Quiero reservar el tour "${tourName}" para el ${date}, ${people} persona(s). ¿Hay disponibilidad?`,
        fr: `Bonjour! Je veux réserver la visite "${tourName}" pour le ${date}, ${people} personne(s). Est-ce disponible?`,
    }),
    tour: {
        pt: "Olá! Gostaria de reservar o tour: {tour}. Qual a disponibilidade?",
        en: "Hello! I would like to book the tour: {tour}. What's the availability?",
        es: "¡Hola! Me gustaría reservar el tour: {tour}. ¿Cuál es la disponibilidad?",
        fr: "Bonjour! Je voudrais réserver la visite: {tour}. Quelle est la disponibilité?",
    },
} as const;

// Generate WhatsApp link
export function getWhatsAppLink(message: string): string {
    return `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

// Navigation items
export const NAV_ITEMS = [
    {
        label: { pt: "Tours", en: "Tours", es: "Tours", fr: "Visites" },
        labelKey: "tours",
        href: "/tours",
    },
    {
        label: { pt: "Quem Somos", en: "About Us", es: "Quiénes Somos", fr: "À Propos" },
        labelKey: "about",
        href: "/quem-somos",
    },
    {
        label: { pt: "Projeto Social", en: "Social Project", es: "Proyecto Social", fr: "Projet Social" },
        labelKey: "social",
        href: "/projeto-social",
    },
    {
        label: { pt: "FAQ", en: "FAQ", es: "Preguntas", fr: "FAQ" },
        labelKey: "faq",
        href: "/faq",
    },
    {
        label: { pt: "Contato", en: "Contact", es: "Contacto", fr: "Contact" },
        labelKey: "contact",
        href: "/contato",
    },
] as const;

// Social media links
export const SOCIAL_LINKS = [
    {
        platform: "instagram" as const,
        url: CONTACT.instagramUrl,
        label: "Instagram",
    },
    {
        platform: "whatsapp" as const,
        url: getWhatsAppLink(WHATSAPP_MESSAGES.general.pt),
        label: "WhatsApp",
    },
    {
        platform: "tiktok" as const,
        url: "https://www.tiktok.com/@favelarepublica",
        label: "TikTok",
    },
    {
        platform: "email" as const,
        url: `mailto:${CONTACT.email}`,
        label: "Email",
    },
] as const;

// Difficulty levels
export const DIFFICULTY_LABELS = {
    easy: {
        pt: "Fácil",
        en: "Easy",
        es: "Fácil",
        fr: "Facile",
    },
    moderate: {
        pt: "Moderado",
        en: "Moderate",
        es: "Moderado",
        fr: "Modéré",
    },
    challenging: {
        pt: "Desafiador",
        en: "Challenging",
        es: "Desafiante",
        fr: "Difficile",
    },
} as const;

// Gallery categories
export const GALLERY_CATEGORIES = {
    "street-art": {
        pt: "Arte Urbana",
        en: "Street Art",
        es: "Arte Urbano",
        fr: "Art Urbain",
    },
    "panoramic-views": {
        pt: "Vistas Panorâmicas",
        en: "Panoramic Views",
        es: "Vistas Panorámicas",
        fr: "Vues Panoramiques",
    },
    community: {
        pt: "Comunidade",
        en: "Community",
        es: "Comunidad",
        fr: "Communauté",
    },
    "fifa-court": {
        pt: "Quadra FIFA Street",
        en: "FIFA Street Court",
        es: "Cancha FIFA Street",
        fr: "Terrain FIFA Street",
    },
    "the-maze": {
        pt: "The Maze",
        en: "The Maze",
        es: "The Maze",
        fr: "The Maze",
    },
    experiences: {
        pt: "Experiências",
        en: "Experiences",
        es: "Experiencias",
        fr: "Expériences",
    },
    nature: {
        pt: "Natureza",
        en: "Nature",
        es: "Naturaleza",
        fr: "Nature",
    },
} as const;

// SEO defaults
export const SEO_DEFAULTS = {
    siteName: "Favela-República Tour",
    siteUrl: "https://favelarepublicatour.com",
    defaultTitle: {
        pt: "Favela-República Tour | Turismo na Favela do Rio (FIFA Street)",
        en: "Favela-República Tour | Rio Favela Tour (FIFA Street)",
        es: "Favela-República Tour | Turismo en la Favela de Río (FIFA Street)",
        fr: "Favela-República Tour | Tourisme dans la Favela de Rio (FIFA Street)",
    },
    defaultDescription: {
        pt: "Conheça a famosa quadra do FIFA Street e viva uma experiência autêntica na favela. Condutores locais, cultura, arte e segurança. Agende seu tour!",
        en: "Visit the famous FIFA Street court and live an authentic favela experience. Local conductors, culture, art, and safety. Book your tour!",
        es: "Visita la famosa cancha de FIFA Street y vive una experiencia auténtica en la favela. Conductores locales, cultura y seguridad. ¡Reserva tu tour!",
        fr: "Visitez le célèbre terrain FIFA Street et vivez une expérience authentique dans la favela. Conducteurs locaux, culture et sécurité. Réservez votre visite !",
    },
    defaultKeywords: {
        pt: [
            "fifa street real life",
            "quadra fifa street",
            "tour favela rio",
            "turismo comunitário",
            "favela do catete",
            "arte urbana rio",
            "tour seguro favela"
        ],
        en: [
            "fifa street real life",
            "fifa street court",
            "favela tour rio",
            "community tourism",
            "favela do catete",
            "street art rio",
            "safe favela tour"
        ],
        es: [
            "fifa street vida real",
            "cancha fifa street",
            "tour favela rio",
            "turismo comunitario",
            "favela do catete",
            "arte urbano rio",
            "tour seguro favela"
        ],
        fr: [
            "fifa street vie réelle",
            "terrain fifa street",
            "visite favela rio",
            "tourisme communautaire",
            "favela do catete",
            "art urbain rio",
            "visite favela sûre"
        ],
    },
} as const;

// Page specific metadata
export const PAGE_METADATA = {
    home: {
        title: SEO_DEFAULTS.defaultTitle,
        description: SEO_DEFAULTS.defaultDescription,
    },
    tours: {
        title: {
            pt: "Nossos Tours | Favela-República",
            en: "Our Tours | Favela-República",
            es: "Nuestros Tours | Favela-República",
            fr: "Nos Visites | Favela-República",
        },
        description: {
            pt: "Explore todos os nossos tours guiados na favela Favela. Experiências autênticas e seguras.",
            en: "Explore all our guided tours in the Favela. Authentic and safe experiences.",
            es: "Explora todos nuestros tours guiados en la favela Favela. Experiencias auténticas y seguras.",
            fr: "Explorez toutes nos visites guidées dans la favela Favela. Expériences authentiques et sûres.",
        },
    },
    about: {
        title: {
            pt: "Quem Somos | Favela-República",
            en: "About Us | Favela-República",
            es: "Quiénes Somos | Favela-República",
            fr: "À Propos | Favela-República",
        },
        description: {
            pt: "Conheça a história da Favela-República e nossa missão de turismo comunitário responsável.",
            en: "Discover the history of Favela-República and our mission of responsible community tourism.",
            es: "Conoce la historia de Favela-República y nuestra misión de turismo comunitario responsable.",
            fr: "Découvrez l'histoire de Favela-República et notre mission de tourisme communautaire responsable.",
        },
    },
    social: {
        title: {
            pt: "Projeto Social | Favela-República",
            en: "Social Project | Favela-República",
            es: "Proyecto Social | Favela-República",
            fr: "Projet Social | Favela-República",
        },
        description: {
            pt: "Conheça nossas iniciativas sociais e como o turismo impacta positivamente a comunidade.",
            en: "Learn about our social initiatives and how tourism positively impacts the community.",
            es: "Conoce nuestras iniciativas sociales y cómo el turismo impacta positivamente en la comunidad.",
            fr: "Découvrez nos initiatives sociales et comment le tourisme impacte positivement la communauté.",
        },
    },
    faq: {
        title: {
            pt: "FAQ | Favela-República",
            en: "FAQ | Favela-República",
            es: "Preguntas Frecuentes | Favela-República",
            fr: "FAQ | Favela-República",
        },
        description: {
            pt: "Perguntas frequentes sobre os tours na Favela. Segurança, preços, horários e mais.",
            en: "Frequently asked questions about Favela tours. Safety, prices, times and more.",
            es: "Preguntas frecuentes sobre los tours en la Favela. Seguridad, precios, horarios y más.",
            fr: "Questions fréquemment posées sur les visites à Favela. Sécurité, prix, horaires et plus.",
        },
    },
    contact: {
        title: {
            pt: "Contato | Favela-República",
            en: "Contact | Favela-República",
            es: "Contacto | Favela-República",
            fr: "Contact | Favela-República",
        },
        description: {
            pt: "Entre em contato conosco pelo WhatsApp, e-mail ou Instagram. Estamos prontos para ajudar!",
            en: "Contact us via WhatsApp, email or Instagram. We are ready to help!",
            es: "Contáctanos por WhatsApp, correo electrónico o Instagram. ¡Estamos listos para ayudar!",
            fr: "Contactez-nous via WhatsApp, email or Instagram. Nous sommes prêts à vous aider !",
        },
    },
    blog: {
        title: {
            pt: "Blog | Favela-República",
            en: "Blog | Favela-República",
            es: "Blog | Favela-República",
            fr: "Blog | Favela-República",
        },
        description: {
            pt: "Notícias, histórias e cultura da favela Favela. Conheça o Rio de Janeiro por outra perspectiva.",
            en: "News, stories and culture from the Favela. Experience Rio de Janeiro from another perspective.",
            es: "Noticias, historias y cultura de la favela Favela. Conoce Río de Janeiro desde otra perspectiva.",
            fr: "Nouvelles, histoires et culture de la favela Favela. Découvrez Rio de Janeiro d'un autre point de vue.",
        },
    },
    security: {
        title: {
            pt: "Segurança | Favela-República",
            en: "Safety | Favela-República",
            es: "Seguridad | Favela-República",
            fr: "Sécurité | Favela-República",
        },
        description: {
            pt: "Conheça as medidas de segurança que tornam a Favela a comunidade mais segura do Rio para turismo.",
            en: "Learn about the safety measures that make Favela the safest community in Rio for tourism.",
            es: "Conoce las medidas de seguridad que hacen de la Favela la comunidad más segura de Río para el turismo.",
            fr: "Découvrez les mesures de sécurité qui font de Favela la communauté la plus sûre de Rio pour le tourisme.",
        },
    },
    terms: {
        title: {
            pt: "Termos de Uso | Favela-República",
            en: "Terms of Use | Favela-República",
            es: "Términos de Uso | Favela-República",
            fr: "Conditions d'Utilisation | Favela-República",
        },
        description: {
            pt: "Termos e condições de uso dos serviços da Favela-República Tour.",
            en: "Terms and conditions of use for Favela-República Tour services.",
            es: "Términos y condiciones de uso de los servicios de Favela-República Tour.",
            fr: "Conditions d'utilisation des services de Favela-República Tour.",
        },
    },
    privacy: {
        title: {
            pt: "Privacidade | Favela-República",
            en: "Privacy | Favela-República",
            es: "Privacidad | Favela-República",
            fr: "Confidentialité | Favela-República",
        },
        description: {
            pt: "Política de privacidade da Favela-República Tour. Saiba como protegemos seus dados pessoais.",
            en: "Favela-República Tour privacy policy. Learn how we protect your personal data.",
            es: "Política de privacidad de Favela-República Tour. Conoce cómo protegemos tus datos personales.",
            fr: "Politique de confidentialité de Favela-República Tour. Découvrez comment nous protégeons vos données personnelles.",
        },
    },
} as const;

// Animation durations (in seconds)
export const ANIMATION = {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
    spring: 0.5,
} as const;

// Framer Motion variants
export const MOTION_VARIANTS = {
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    fadeInUp: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    },
    fadeInDown: {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    },
    slideInLeft: {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },
    slideInRight: {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    },
    staggerContainer: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    },
} as const;

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
} as const;

// Image sizes for optimization
export const IMAGE_SIZES = {
    thumbnail: { width: 150, height: 150 },
    card: { width: 400, height: 300 },
    hero: { width: 1920, height: 1080 },
    avatar: { width: 80, height: 80 },
    gallery: { width: 800, height: 600 },
} as const;
