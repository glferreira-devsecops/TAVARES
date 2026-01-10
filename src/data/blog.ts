import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
    {
        id: "historia-favela",
        slug: "historia-completa-favela",
        title: {
            pt: "A História Completa da Favela: De 1931 aos Dias Atuais",
            en: "The Complete History of Favela: From 1931 to Present Day",
            es: "La Historia de la Favela",
            fr: "L'Histoire de la Favela"
        },
        excerpt: {
            pt: "Descubra a fascinante história de quase um século da Favela...",
            en: "Discover the fascinating nearly century-old history of the Favela...",
            es: "Descubre la historia de la Favela.",
            fr: "Découvrez l'histoire de la Favela."
        },
        content: {
            pt: `## As Origens (1931)...`,
            en: `## The Origins (1931)...`,
            es: `## Orígenes...`,
            fr: `## Origines...`
        },
        author: "Favela-República",
        publishedAt: "2024-11-15",
        updatedAt: "2024-12-10",
        category: {
            pt: "História", en: "History", es: "Historia", fr: "Histoire"
        },
        tags: {
            pt: ["história", "favela", "cultura", "rio de janeiro", "turismo"],
            en: ["history", "favela", "culture", "rio de janeiro", "tourism"],
            es: ["historia", "favela", "cultura", "rio de janeiro", "turismo"],
            fr: ["histoire", "favela", "culture", "rio de janeiro", "tourisme"]
        },
        image: "/images/tours/IMG_7268_v1.webp",
        readTime: 8,
        featured: true,
    },
    {
        id: "the-maze-bob-nadkarni",
        slug: "the-maze-rio-bob-nadkarni-historia",
        title: {
            pt: "The Maze Rio: A Incrível História de Bob Nadkarni e sua Casa de Jazz na Favela",
            en: "The Maze Rio: The Incredible Story of Bob Nadkarni and His Jazz House in the Favela",
            es: "La historia de Bob Nadkarni",
            fr: "L'histoire de Bob Nadkarni"
        },
        excerpt: {
            pt: "Conheça a história do jornalista britânico...",
            en: "Discover the story of the British journalist...",
            es: "Descubre la historia del periodista británico.",
            fr: "Découvrez l'histoire du journaliste britannique."
        },
        content: {
            pt: `## Quem é Bob Nadkarni...`,
            en: `## Who is Bob Nadkarni...`,
            es: `## Quién es Bob Nadkarni...`,
            fr: `## Qui est Bob Nadkarni...`
        },
        author: "Favela-República",
        publishedAt: "2024-10-20",
        category: {
            pt: "Cultura", en: "Culture", es: "Cultura", fr: "Culture"
        },
        tags: {
            pt: ["the maze", "bob nadkarni", "jazz", "arte", "cultura"],
            en: ["the maze", "bob nadkarni", "jazz", "art", "culture"],
            es: ["the maze", "bob nadkarni", "jazz", "arte", "cultura"],
            fr: ["the maze", "bob nadkarni", "jazz", "art", "culture"]
        },
        image: "/images/tours/IMG_0417_v1.webp",
        readTime: 6,
        featured: true,
    },
    {
        id: "museu-vivo-nami",
        slug: "museu-vivo-nami-panmela-castro-arte-feminina",
        title: {
            pt: "Museu Vivo NAMI: Como Panmela Castro Criou 200 Murais de Arte Feminina na Favela",
            en: "Living Museum NAMI: How Panmela Castro Created 200 Women's Art Murals in the Favela",
            es: "Museo Vivo NAMI",
            fr: "Musée Vivant NAMI"
        },
        excerpt: {
            pt: "A história da artista conhecida como 'Rainha do Grafite do Brasil'...",
            en: "The story of the artist known as 'Brazil's Graffiti Queen'...",
            es: "La historia de Panmela Castro.",
            fr: "L'histoire de Panmela Castro."
        },
        content: {
            pt: `## Quem é Panmela Castro...`,
            en: `## Who is Panmela Castro...`,
            es: `## Quién es Panmela Castro...`,
            fr: `## Qui est Panmela Castro...`
        },
        author: "Favela-República",
        publishedAt: "2024-09-10",
        category: {
            pt: "Arte", en: "Art", es: "Arte", fr: "Art"
        },
        tags: {
            pt: ["museu vivo nami", "panmela castro", "grafite", "arte feminina", "rede nami"],
            en: ["living museum nami", "panmela castro", "graffiti", "women's art", "rede nami"],
            es: ["museo vivo nami", "panmela castro", "grafite", "arte femenina", "rede nami"],
            fr: ["musée vivant nami", "panmela castro", "graffiti", "art féminin", "réseau nami"]
        },
        image: "/images/tours/IMG_2991_v1.webp",
        readTime: 7,
        featured: true,
    },
    {
        id: "quadra-fifa-street",
        slug: "quadra-fifa-street-historia",
        title: {
            pt: "A Quadra que Inspirou o FIFA Street: Como um Campo de Favela Virou Videogame",
            en: "The Court That Inspired FIFA Street: How a Favela Field Became a Video Game",
            es: "La cancha de FIFA Street",
            fr: "Le terrain de FIFA Street"
        },
        excerpt: {
            pt: "A história real por trás do jogo que marcou uma geração...",
            en: "The real story behind the game that marked a generation...",
            es: "La historia real detrás del juego.",
            fr: "L'histoire réelle derrière le jeu."
        },
        content: {
            pt: `## O Fenômeno FIFA Street...`,
            en: `## The FIFA Street Phenomenon...`,
            es: `## El Fenómeno FIFA Street...`,
            fr: `## Le phénomène FIFA Street...`
        },
        author: "Favela-República",
        publishedAt: "2024-08-15",
        category: {
            pt: "Esportes", en: "Sports", es: "Deportes", fr: "Sports"
        },
        tags: {
            pt: ["fifa street", "futebol", "quadra", "videogame", "esporte"],
            en: ["fifa street", "football", "court", "video game", "sports"],
            es: ["fifa street", "fútbol", "cancha", "videojuego", "deporte"],
            fr: ["fifa street", "football", "terrain", "jeu vidéo", "sport"]
        },
        image: "/images/tours/IMG_5965_v1.webp",
        readTime: 5,
        featured: false,
    },
    {
        id: "turismo-responsavel",
        slug: "turismo-responsavel-favela-como-fazer-certo",
        title: {
            pt: "Turismo Responsável em Favelas: O Manual Completo para Fazer a Escolha Certa",
            en: "Responsible Favela Tourism: The Complete Manual to Making the Right Choice",
            es: "Turismo Responsable",
            fr: "Tourisme Responsable"
        },
        excerpt: {
            pt: "Aprenda a diferenciar turismo exploratório de turismo de favela...",
            en: "Learn to differentiate exploitative tourism from favela tourism...",
            es: "Aprenda sobre turismo responsable.",
            fr: "Découvrez le tourisme responsable."
        },
        content: {
            pt: `## O Dilema do Turismo em Favelas...`,
            en: `## The Favela Tourism Dilemma...`,
            es: `## El Dilema...`,
            fr: `## Le dilemme...`
        },
        author: "Favela-República",
        publishedAt: "2024-07-20",
        category: {
            pt: "Turismo", en: "Tourism", es: "Turismo", fr: "Tourisme"
        },
        tags: {
            pt: ["turismo responsável", "turismo de favela", "favela", "ética"],
            en: ["responsible tourism", "favela tourism", "favela", "ethics"],
            es: ["turismo responsable", "turismo de favela", "favela", "ética"],
            fr: ["tourisme responsable", "tourisme de favela", "favela", "éthique"]
        },
        image: "/images/social/IMG_0546_v1.webp",
        readTime: 6,
        featured: false,
    },
];

export function getAllBlogPosts(): BlogPost[] {
    return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getFeaturedBlogPosts(limit: number = 3): BlogPost[] {
    return blogPosts
        .filter(post => post.featured)
        .slice(0, limit);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
    return blogPosts.filter(post => post.category.pt === category || post.category.en === category);
}

export function getBlogCategories(): string[] {
    return Array.from(new Set(blogPosts.map(post => post.category.en)));
}

