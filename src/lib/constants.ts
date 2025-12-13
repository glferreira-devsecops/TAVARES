// Favela-República Constants

// Contact Information
export const CONTACT = {
    whatsapp: {
        number: "5521999999999", // TODO: Replace with actual number
        displayNumber: "+55 21 99999-9999",
    },
    email: "contato@favelarepublicatour.com",
    instagram: "favelarepublica",
    instagramUrl: "https://www.instagram.com/favelarepublica",
    address: {
        street: "Ladeira dos Tabajaras",
        neighborhood: "Catete",
        city: "Rio de Janeiro",
        state: "RJ",
        country: "Brasil",
        postalCode: "22210-070",
    },
} as const;

// Location - Tavares Bastos coordinates
export const LOCATION = {
    name: "Favela Tavares Bastos",
    coordinates: {
        lat: -22.9308,
        lng: -43.1817,
    },
    googleMapsUrl: "https://maps.google.com/?q=-22.9308,-43.1817",
} as const;

// WhatsApp message templates
export const WHATSAPP_MESSAGES = {
    general: {
        pt: "Olá! Gostaria de mais informações sobre os tours na Tavares Bastos.",
        en: "Hello! I would like more information about the tours in Tavares Bastos.",
        es: "¡Hola! Me gustaría más información sobre los tours en Tavares Bastos.",
        fr: "Bonjour! Je voulais plus d'informations sur les visites à Tavares Bastos.",
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
        label: { pt: "Blog", en: "Blog", es: "Blog", fr: "Blog" },
        labelKey: "blog",
        href: "/blog",
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
        pt: "Favela-República Tour | Turismo Comunitário em Tavares Bastos",
        en: "Favela-República Tour | Community Tourism in Tavares Bastos",
        es: "Favela-República Tour | Turismo Comunitario en Tavares Bastos",
        fr: "Favela-República Tour | Tourisme Communautaire à Tavares Bastos",
    },
    defaultDescription: {
        pt: "Descubra a cultura autêntica da favela Tavares Bastos no Rio de Janeiro. Tours seguros, responsáveis e imersivos com guias locais. Arte urbana, história e vistas panorâmicas.",
        en: "Discover the authentic culture of Tavares Bastos favela in Rio de Janeiro. Safe, responsible, and immersive tours with local guides. Street art, history, and panoramic views.",
        es: "Descubre la cultura auténtica de la favela Tavares Bastos en Río de Janeiro. Tours seguros, responsables e inmersivos con guías locales. Arte urbano, historia y vistas panorámicas.",
        fr: "Découvrez la culture authentique de la favela Tavares Bastos à Rio de Janeiro. Visites sûres, responsables et immersives avec des guides locaux. Art urbain, histoire et vues panoramiques.",
    },
    defaultKeywords: {
        pt: [
            "tour favela rio",
            "turismo comunitário rio",
            "tavares bastos tour",
            "favela tour seguro",
            "arte urbana rio de janeiro",
            "turismo responsável",
            "tour guiado favela",
        ],
        en: [
            "favela tour rio",
            "community tourism rio",
            "tavares bastos tour",
            "safe favela tour",
            "street art rio de janeiro",
            "responsible tourism",
            "guided favela tour",
        ],
        es: [
            "tour favela rio",
            "turismo comunitario rio",
            "tavares bastos tour",
            "tour favela seguro",
            "arte urbano río de janeiro",
            "turismo responsable",
            "tour guiado favela",
        ],
        fr: [
            "visite favela rio",
            "tourisme communautaire rio",
            "tavares bastos visite",
            "tour favela sûr",
            "art urbain rio de janeiro",
            "tourisme responsable",
            "visite guidée favela",
        ],
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
