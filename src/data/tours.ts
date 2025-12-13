import type { Tour } from "@/types";

export const tours: Tour[] = [
    {
        id: "tour-completo",
        slug: "tour-completo-tavares-bastos",
        title: {
            pt: "Tour Completo Tavares Bastos",
            en: "Complete Tavares Bastos Tour",
        },
        subtitle: {
            pt: "A experiência definitiva na comunidade",
            en: "The ultimate community experience",
        },
        description: {
            pt: `Descubra todos os cantos da Tavares Bastos neste tour completo de 3 a 4 horas. Você irá conhecer a famosa quadra de futebol que inspirou o jogo FIFA Street, caminhar pelo Living Museum Nami com seus grafites feitos por mulheres artistas, visitar o lendário The Maze com seus mosaicos e vistas panorâmicas, e encerrar com uma vista deslumbrante da Baía de Guanabara e do Pão de Açúcar.

Nossos guias locais compartilham histórias autênticas sobre a vida na comunidade, a evolução da favela ao longo dos anos, e como o turismo comunitário está transformando vidas. Este é o tour mais completo e recomendado para quem quer uma imersão total.`,
            en: `Discover every corner of Tavares Bastos in this complete 3-4 hour tour. You will visit the famous football court that inspired the FIFA Street game, walk through the Living Museum Nami with its graffiti made by women artists, visit the legendary The Maze with its mosaics and panoramic views, and end with a stunning view of Guanabara Bay and Sugarloaf Mountain.

Our local guides share authentic stories about life in the community, the evolution of the favela over the years, and how community tourism is transforming lives. This is the most complete and recommended tour for those who want a total immersion.`,
        },
        shortDescription: {
            pt: "Experiência imersiva de 3-4h incluindo FIFA Street court, arte urbana, The Maze e mirante panorâmico.",
            en: "3-4h immersive experience including FIFA Street court, street art, The Maze and panoramic viewpoint.",
        },
        duration: "3-4h",
        difficulty: "moderate",
        priceFrom: 150,
        currency: "BRL",
        groupSize: {
            min: 2,
            max: 10,
        },
        included: {
            pt: [
                "Guia local bilíngue",
                "Transporte dentro da comunidade",
                "Água mineral",
                "Seguro",
                "Entrada no The Maze (quando aberto)",
            ],
            en: [
                "Bilingual local guide",
                "Transport within the community",
                "Mineral water",
                "Insurance",
                "Entry to The Maze (when open)",
            ],
        },
        notIncluded: {
            pt: [
                "Transporte até a comunidade",
                "Refeições",
                "Gorjetas (opcionais)",
            ],
            en: [
                "Transport to the community",
                "Meals",
                "Tips (optional)",
            ],
        },
        itinerary: [
            {
                order: 1,
                title: { pt: "Ponto de encontro", en: "Meeting point" },
                description: {
                    pt: "Encontro na entrada da comunidade com nosso guia local",
                    en: "Meeting at the community entrance with our local guide",
                },
                duration: "10min",
            },
            {
                order: 2,
                title: { pt: "Quadra FIFA Street", en: "FIFA Street Court" },
                description: {
                    pt: "Conheça a famosa quadra que inspirou o videogame FIFA Street e a cultura do futebol local",
                    en: "Visit the famous court that inspired the FIFA Street videogame and local football culture",
                },
                duration: "30min",
            },
            {
                order: 3,
                title: { pt: "Living Museum Nami", en: "Living Museum Nami" },
                description: {
                    pt: "Caminhada por 1km de grafites feitos por mulheres artistas com mensagens contra violência doméstica",
                    en: "Walk through 1km of graffiti made by women artists with messages against domestic violence",
                },
                duration: "45min",
            },
            {
                order: 4,
                title: { pt: "The Maze", en: "The Maze" },
                description: {
                    pt: "Visita ao espaço cultural com mosaicos, exposições de arte e história do jazz no Rio",
                    en: "Visit to the cultural space with mosaics, art exhibitions and history of jazz in Rio",
                },
                duration: "45min",
            },
            {
                order: 5,
                title: { pt: "Mirante panorâmico", en: "Panoramic viewpoint" },
                description: {
                    pt: "Vista espetacular da Baía de Guanabara, Pão de Açúcar e centro do Rio",
                    en: "Spectacular view of Guanabara Bay, Sugarloaf and Rio's downtown",
                },
                duration: "30min",
            },
        ],
        images: [
            {
                src: "/images/tours/tour-completo-hero.png",
                alt: { pt: "Vista panorâmica da Tavares Bastos", en: "Panoramic view of Tavares Bastos" },
                width: 1920,
                height: 1080,
                featured: true,
            },
            {
                src: "/images/tours/tour-completo-hero.png",
                alt: { pt: "Quadra FIFA Street", en: "FIFA Street Court" },
                width: 800,
                height: 600,
            },
            {
                src: "/images/tours/tour-completo-hero.png",
                alt: { pt: "Grafite do Living Museum Nami", en: "Living Museum Nami graffiti" },
                width: 800,
                height: 600,
            },
        ],
        highlights: {
            pt: [
                "Quadra que inspirou o FIFA Street",
                "1km de arte urbana feminina",
                "The Maze - espaço cultural icônico",
                "Vista do Pão de Açúcar",
                "Histórias autênticas da comunidade",
            ],
            en: [
                "Court that inspired FIFA Street",
                "1km of female street art",
                "The Maze - iconic cultural space",
                "View of Sugarloaf Mountain",
                "Authentic community stories",
            ],
        },
        meetingPoint: {
            name: { pt: "Entrada da Tavares Bastos", en: "Tavares Bastos entrance" },
            address: "Ladeira dos Tabajaras, Catete, Rio de Janeiro",
            coordinates: { lat: -22.9308, lng: -43.1817 },
            instructions: {
                pt: "O guia estará usando camiseta da Favela-República",
                en: "The guide will be wearing a Favela-República t-shirt",
            },
        },
        faq: [
            {
                id: "faq-1",
                question: { pt: "É seguro?", en: "Is it safe?" },
                answer: {
                    pt: "Sim! A Tavares Bastos é conhecida como uma das favelas mais seguras do Rio, em parte pela presença histórica do BOPE na comunidade. Nossos guias locais conhecem cada canto e garantem sua segurança durante todo o tour.",
                    en: "Yes! Tavares Bastos is known as one of the safest favelas in Rio, partly due to the historical presence of BOPE in the community. Our local guides know every corner and ensure your safety throughout the tour.",
                },
            },
            {
                id: "faq-2",
                question: { pt: "Preciso de preparo físico?", en: "Do I need to be physically fit?" },
                answer: {
                    pt: "O tour envolve caminhadas por ruas íngremes. Recomendamos calçado confortável e levar água. Pessoas com mobilidade reduzida podem precisar de adaptações - entre em contato conosco.",
                    en: "The tour involves walking through steep streets. We recommend comfortable shoes and bringing water. People with reduced mobility may need accommodations - please contact us.",
                },
            },
        ],
        featured: true,
        order: 1,
    },
    {
        id: "arte-urbana",
        slug: "tour-arte-urbana-grafite",
        title: {
            pt: "Tour Arte Urbana & Grafite",
            en: "Street Art & Graffiti Tour",
        },
        subtitle: {
            pt: "Mergulhe na arte das ruas",
            en: "Dive into street art",
        },
        description: {
            pt: `Este tour de 2 horas é focado na incrível cena de arte urbana da Tavares Bastos. O destaque é o Living Museum Nami, um quilômetro de grafites criados por mulheres artistas, com mensagens poderosas contra a violência doméstica.

Você verá obras de renomadas artistas brasileiras e internacionais, incluindo o famoso mural de Malala Yousafzai. Nosso guia explicará o significado de cada obra, a história das artistas, e como a arte transformou a comunidade.

Perfeito para amantes de arte, fotógrafos e quem quer uma experiência mais curta mas igualmente impactante.`,
            en: `This 2-hour tour focuses on the incredible street art scene of Tavares Bastos. The highlight is the Living Museum Nami, a kilometer of graffiti created by women artists, with powerful messages against domestic violence.

You will see works by renowned Brazilian and international artists, including the famous mural of Malala Yousafzai. Our guide will explain the meaning of each work, the history of the artists, and how art has transformed the community.

Perfect for art lovers, photographers, and those who want a shorter but equally impactful experience.`,
        },
        shortDescription: {
            pt: "Tour focado em arte urbana: Living Museum Nami e grafites de artistas mulheres com mensagens poderosas.",
            en: "Tour focused on street art: Living Museum Nami and graffiti by women artists with powerful messages.",
        },
        duration: "2h",
        difficulty: "easy",
        priceFrom: 100,
        currency: "BRL",
        groupSize: {
            min: 2,
            max: 12,
        },
        included: {
            pt: [
                "Guia local bilíngue",
                "Água mineral",
                "Seguro",
            ],
            en: [
                "Bilingual local guide",
                "Mineral water",
                "Insurance",
            ],
        },
        notIncluded: {
            pt: [
                "Transporte até a comunidade",
                "Refeições",
            ],
            en: [
                "Transport to the community",
                "Meals",
            ],
        },
        itinerary: [
            {
                order: 1,
                title: { pt: "Ponto de encontro", en: "Meeting point" },
                description: {
                    pt: "Encontro na entrada da comunidade",
                    en: "Meeting at the community entrance",
                },
                duration: "10min",
            },
            {
                order: 2,
                title: { pt: "Living Museum Nami", en: "Living Museum Nami" },
                description: {
                    pt: "Caminhada pelo quilômetro de grafites feitos por mulheres artistas",
                    en: "Walk through the kilometer of graffiti made by women artists",
                },
                duration: "60min",
            },
            {
                order: 3,
                title: { pt: "Mural Malala", en: "Malala Mural" },
                description: {
                    pt: "Parada no famoso mural da ativista paquistanesa",
                    en: "Stop at the famous mural of the Pakistani activist",
                },
                duration: "15min",
            },
            {
                order: 4,
                title: { pt: "Mirante da arte", en: "Art viewpoint" },
                description: {
                    pt: "Vista panorâmica e últimas obras de arte",
                    en: "Panoramic view and final artworks",
                },
                duration: "35min",
            },
        ],
        images: [
            {
                src: "/images/tours/arte-urbana-hero.png",
                alt: { pt: "Grafite colorido na Tavares Bastos", en: "Colorful graffiti in Tavares Bastos" },
                width: 1920,
                height: 1080,
                featured: true,
            },
        ],
        highlights: {
            pt: [
                "Living Museum Nami",
                "Mural de Malala Yousafzai",
                "Arte feminina empoderada",
                "Histórias das artistas",
            ],
            en: [
                "Living Museum Nami",
                "Malala Yousafzai mural",
                "Empowered female art",
                "Artists' stories",
            ],
        },
        meetingPoint: {
            name: { pt: "Entrada da Tavares Bastos", en: "Tavares Bastos entrance" },
            address: "Ladeira dos Tabajaras, Catete, Rio de Janeiro",
            coordinates: { lat: -22.9308, lng: -43.1817 },
        },
        faq: [],
        featured: true,
        order: 2,
    },
    {
        id: "sunset-mirante",
        slug: "tour-sunset-mirante",
        title: {
            pt: "Tour Sunset no Mirante",
            en: "Sunset Viewpoint Tour",
        },
        subtitle: {
            pt: "O pôr do sol mais bonito do Rio",
            en: "Rio's most beautiful sunset",
        },
        description: {
            pt: `Experimente o pôr do sol mais espetacular do Rio de Janeiro a partir do mirante da Tavares Bastos. Este tour de 2 horas começa no final da tarde e culmina com uma vista deslumbrante do sol se pondo atrás do Pão de Açúcar e da Baía de Guanabara.

Durante o caminho, você conhecerá um pouco da história da comunidade e passará por alguns dos principais pontos turísticos. O momento mágico acontece no mirante, onde você poderá tirar fotos incríveis e simplesmente apreciar a beleza do Rio de Janeiro de um ângulo privilegiado.

Ideal para casais, fotógrafos e qualquer um que aprecie belas paisagens.`,
            en: `Experience the most spectacular sunset in Rio de Janeiro from the Tavares Bastos viewpoint. This 2-hour tour starts in the late afternoon and culminates with a stunning view of the sun setting behind Sugarloaf Mountain and Guanabara Bay.

Along the way, you will learn a bit about the community's history and pass by some of the main tourist spots. The magic moment happens at the viewpoint, where you can take amazing photos and simply appreciate the beauty of Rio de Janeiro from a privileged angle.

Ideal for couples, photographers, and anyone who appreciates beautiful landscapes.`,
        },
        shortDescription: {
            pt: "Tour ao pôr do sol com vista panorâmica do Pão de Açúcar e Baía de Guanabara.",
            en: "Sunset tour with panoramic views of Sugarloaf Mountain and Guanabara Bay.",
        },
        duration: "2h",
        difficulty: "easy",
        priceFrom: 120,
        currency: "BRL",
        groupSize: {
            min: 2,
            max: 8,
        },
        included: {
            pt: [
                "Guia local bilíngue",
                "Água mineral",
                "Seguro",
                "Bebida de boas-vindas no mirante",
            ],
            en: [
                "Bilingual local guide",
                "Mineral water",
                "Insurance",
                "Welcome drink at the viewpoint",
            ],
        },
        notIncluded: {
            pt: [
                "Transporte até a comunidade",
                "Refeições",
            ],
            en: [
                "Transport to the community",
                "Meals",
            ],
        },
        itinerary: [
            {
                order: 1,
                title: { pt: "Ponto de encontro", en: "Meeting point" },
                description: {
                    pt: "Encontro na entrada da comunidade no final da tarde",
                    en: "Meeting at the community entrance in the late afternoon",
                },
                duration: "10min",
            },
            {
                order: 2,
                title: { pt: "Caminhada cultural", en: "Cultural walk" },
                description: {
                    pt: "Subida pela comunidade com paradas para fotos e histórias",
                    en: "Walk up through the community with stops for photos and stories",
                },
                duration: "40min",
            },
            {
                order: 3,
                title: { pt: "Mirante ao pôr do sol", en: "Sunset viewpoint" },
                description: {
                    pt: "Tempo livre para apreciar o pôr do sol e tirar fotos",
                    en: "Free time to enjoy the sunset and take photos",
                },
                duration: "50min",
            },
            {
                order: 4,
                title: { pt: "Descida", en: "Descent" },
                description: {
                    pt: "Retorno pela comunidade já no início da noite",
                    en: "Return through the community as night begins",
                },
                duration: "20min",
            },
        ],
        images: [
            {
                src: "/images/tours/sunset-hero.png",
                alt: { pt: "Pôr do sol na Tavares Bastos", en: "Sunset at Tavares Bastos" },
                width: 1920,
                height: 1080,
                featured: true,
            },
        ],
        highlights: {
            pt: [
                "Pôr do sol espetacular",
                "Vista do Pão de Açúcar",
                "Baía de Guanabara",
                "Momento mágico para fotos",
            ],
            en: [
                "Spectacular sunset",
                "View of Sugarloaf",
                "Guanabara Bay",
                "Magical moment for photos",
            ],
        },
        meetingPoint: {
            name: { pt: "Entrada da Tavares Bastos", en: "Tavares Bastos entrance" },
            address: "Ladeira dos Tabajaras, Catete, Rio de Janeiro",
            coordinates: { lat: -22.9308, lng: -43.1817 },
        },
        faq: [],
        featured: true,
        order: 3,
    },
];

export function getTourBySlug(slug: string): Tour | undefined {
    return tours.find((tour) => tour.slug === slug);
}

export function getFeaturedTours(): Tour[] {
    return tours.filter((tour) => tour.featured).sort((a, b) => a.order - b.order);
}

export function getAllTours(): Tour[] {
    return tours.sort((a, b) => a.order - b.order);
}
