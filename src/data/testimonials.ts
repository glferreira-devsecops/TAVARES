import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
    {
        id: "testimonial-1",
        name: "Sarah Johnson",
        country: "Estados Unidos",
        countryCode: "US",
        city: "New York",
        rating: 5,
        quote: {
            pt: "Uma experiência incrível e autêntica! O guia foi muito atencioso e nos mostrou a verdadeira história da comunidade. Me senti segura o tempo todo e voltei com uma perspectiva completamente nova sobre as favelas do Rio.",
            en: "An incredible and authentic experience! The guide was very attentive and showed us the true history of the community. I felt safe the whole time and came back with a completely new perspective on Rio's favelas.",
        },
        tourSlug: "tour-completo-tavares-bastos",
        date: "2024-11-15",
        source: "tripadvisor",
        verified: true,
    },
    {
        id: "testimonial-2",
        name: "Pierre Dubois",
        country: "França",
        countryCode: "FR",
        city: "Paris",
        rating: 5,
        quote: {
            pt: "A arte urbana é simplesmente espetacular. O Living Museum Nami me emocionou profundamente. Um tour que todo mundo deveria fazer quando visitar o Rio de Janeiro.",
            en: "The street art is simply spectacular. The Living Museum Nami moved me deeply. A tour everyone should take when visiting Rio de Janeiro.",
        },
        tourSlug: "tour-arte-urbana-grafite",
        date: "2024-10-28",
        source: "google",
        verified: true,
    },
    {
        id: "testimonial-3",
        name: "Hans Mueller",
        country: "Alemanha",
        countryCode: "DE",
        city: "Berlin",
        rating: 5,
        quote: {
            pt: "O pôr do sol no mirante foi o momento mais bonito da minha viagem ao Brasil. Vista incrível e um guia muito simpático que compartilhou histórias fascinantes sobre a comunidade.",
            en: "The sunset at the viewpoint was the most beautiful moment of my trip to Brazil. Amazing view and a very friendly guide who shared fascinating stories about the community.",
        },
        tourSlug: "tour-sunset-mirante",
        date: "2024-11-02",
        source: "instagram",
        verified: true,
    },
    {
        id: "testimonial-4",
        name: "Maria Garcia",
        country: "Espanha",
        countryCode: "ES",
        city: "Madrid",
        rating: 5,
        quote: {
            pt: "Turismo responsável de verdade! É lindo ver como o tour beneficia diretamente a comunidade. Os guias locais são muito profissionais e apaixonados pelo que fazem.",
            en: "True responsible tourism! It's beautiful to see how the tour directly benefits the community. The local guides are very professional and passionate about what they do.",
        },
        tourSlug: "tour-completo-tavares-bastos",
        date: "2024-09-20",
        source: "tripadvisor",
        verified: true,
    },
    {
        id: "testimonial-5",
        name: "James Wilson",
        country: "Reino Unido",
        countryCode: "GB",
        city: "London",
        rating: 5,
        quote: {
            pt: "A quadra do FIFA Street é real! Como fã do jogo, foi emocionante ver o lugar que inspirou algo tão importante na minha infância. O tour inteiro foi perfeito.",
            en: "The FIFA Street court is real! As a fan of the game, it was exciting to see the place that inspired something so important in my childhood. The whole tour was perfect.",
        },
        tourSlug: "tour-completo-tavares-bastos",
        date: "2024-08-15",
        source: "google",
        verified: true,
    },
    {
        id: "testimonial-6",
        name: "Ana Silva",
        country: "Brasil",
        countryCode: "BR",
        city: "São Paulo",
        rating: 5,
        quote: {
            pt: "Sou brasileira e nunca tinha visitado uma favela assim. Foi transformador conhecer a Tavares Bastos com um guia local. Recomendo para todos os brasileiros também!",
            en: "I'm Brazilian and had never visited a favela like this. It was transformative to get to know Tavares Bastos with a local guide. I recommend it to all Brazilians too!",
        },
        tourSlug: "tour-arte-urbana-grafite",
        date: "2024-10-10",
        source: "direct",
        verified: true,
    },
    {
        id: "testimonial-7",
        name: "Yuki Tanaka",
        country: "Japão",
        countryCode: "JP",
        city: "Tokyo",
        rating: 5,
        quote: {
            pt: "Uma janela para a cultura brasileira autêntica. O guia falava inglês muito bem e respondeu todas as minhas perguntas. Me senti muito bem-vinda na comunidade.",
            en: "A window into authentic Brazilian culture. The guide spoke English very well and answered all my questions. I felt very welcome in the community.",
        },
        tourSlug: "tour-completo-tavares-bastos",
        date: "2024-07-22",
        source: "tripadvisor",
        verified: true,
    },
    {
        id: "testimonial-8",
        name: "Marco Rossi",
        country: "Itália",
        countryCode: "IT",
        city: "Rome",
        rating: 5,
        quote: {
            pt: "Fotografei os grafites mais incríveis da minha vida! O Living Museum Nami é uma galeria a céu aberto que todos deveriam conhecer. Obrigado Favela-República!",
            en: "I photographed the most incredible graffiti of my life! The Living Museum Nami is an open-air gallery that everyone should know. Thank you Favela-República!",
        },
        tourSlug: "tour-arte-urbana-grafite",
        date: "2024-09-05",
        source: "instagram",
        verified: true,
    },
];

export function getAllTestimonials(): Testimonial[] {
    return testimonials;
}

export function getFeaturedTestimonials(limit: number = 4): Testimonial[] {
    return testimonials
        .filter((t) => t.verified && t.rating === 5)
        .slice(0, limit);
}

export function getTestimonialsByTour(tourSlug: string): Testimonial[] {
    return testimonials.filter((t) => t.tourSlug === tourSlug);
}

export function getAverageRating(): number {
    const total = testimonials.reduce((sum, t) => sum + t.rating, 0);
    return Math.round((total / testimonials.length) * 10) / 10;
}

export function getTotalReviews(): number {
    return testimonials.length;
}
