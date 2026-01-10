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
            pt: "Uma experiência incrível e autêntica! O condutor local foi muito atencioso e nos mostrou a verdadeira história do Favela-República. Me senti segura o tempo todo e voltei com uma perspectiva completamente nova.",
            en: "An incredible and authentic experience! The local conductor was very attentive and showed us the true history of Favela-República. I felt safe the whole time and came back with a completely new perspective.",
            es: "¡Una experiencia increíble y auténtica! El conductor local fue muy atento y nos mostró la verdadera historia del Favela-República. Me sentí segura todo el tiempo.",
            fr: "Une expérience incroyable et authentique ! Le conducteur local était très attentionné et nous a montré la véritable histoire du Favela-República. Je me suis sentie en sécurité tout le temps."
        },
        tourSlug: "favela-tour-completo",
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
            es: "El arte urbano es simplemente espectacular. El Living Museum Nami me emocionó profundamente. Un tour que todos deberían hacer.",
            fr: "L'art urbain est tout simplement spectaculaire. Le Living Museum Nami m'a profondément ému. Une visite que tout le monde devrait faire."
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
            pt: "O pôr do sol no mirante foi o momento mais bonito da minha viagem ao Brasil. Vista incrível e um condutor local muito simpático que compartilhou histórias fascinantes sobre o Favela-República.",
            en: "The sunset at the viewpoint was the most beautiful moment of my trip to Brazil. Amazing view and a very friendly local conductor who shared fascinating stories about Favela-República.",
            es: "El atardecer en el mirador fue el momento más hermoso de mi viaje a Brasil. Vista increíble y un conductor local muy amable que compartilhou historias fascinantes sobre el Favela-República.",
            fr: "Le coucher de soleil au belvédère a été le plus beau moment de mon voyage au Brésil. Vue incroyable et un conducteur local très sympathique qui a partagé des histoires fascinantes sur le Favela-República."
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
            pt: "Turismo responsável de verdade! É lindo ver como o tour beneficia diretamente o Favela-República. Os condutores locais são muito profissionais e apaixonados pelo que fazem.",
            en: "True responsible tourism! It's beautiful to see how the tour directly benefits Favela-República. The local conductors are very professional and passionate about what they do.",
            es: "¡Turismo responsable de verdad! Es hermoso ver cómo el tour beneficia directamente al Favela-República. Los conductores locales son muy profesionales.",
            fr: "Un vrai tourisme responsable ! C'est beau de voir comment la visite bénéficie directement au Favela-República. Les conducteurs locaux sont très professionnels."
        },
        tourSlug: "favela-tour-completo",
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
            es: "¡La cancha de FIFA Street es real! Como fan del juego, fue emocionante ver el lugar que inspiró algo tan importante. Todo el tour fue perfecto.",
            fr: "Le terrain de FIFA Street est réel ! En tant que fan du jeu, c'était excitant de voir l'endroit qui a inspiré quelque chose de si important. Toute la visite était parfaite."
        },
        tourSlug: "favela-tour-completo",
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
            pt: "Sou brasileira e nunca tinha visitado uma favela assim. Foi transformador conhecer o Favela-República com um condutor local. Recomendo para todos os brasileiros também!",
            en: "I'm Brazilian and had never visited a favela like this. It was transformative to get to know Favela-República with a local conductor. I recommend it to all Brazilians too!",
            es: "Soy brasileña y nunca había visitado una favela así. Fue transformador conocer el Favela-República con un conductor local. ¡Lo recomiendo a todos!",
            fr: "Je suis brésilienne et je n'avais jamais visité une favela comme celle-ci. C'était transformateur de découvrir o Favela-República avec un conducteur local. Je le recommande !"
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
            pt: "Uma janela para a cultura brasileira autêntica. O condutor local falava inglês muito bem e respondeu todas as minhas perguntas. Me senti muito bem-vinda no Favela-República.",
            en: "A window into authentic Brazilian culture. The local conductor spoke English very well and answered all my questions. I felt very welcome at Favela-República.",
            es: "Una ventana a la cultura brasileña auténtica. El conductor local hablaba muy bien inglés y respondió todas minhas preguntas. Me sentí muy bienvenida.",
            fr: "Une fenêtre sur l'authentique culture brésilienne. Le conducteur local parlait très bien anglais et a répondu à toutes mes questions. Je me suis sentie très bien accueillie au Favela-República."
        },
        tourSlug: "favela-tour-completo",
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
            es: "¡Fotografié los graffitis más increíbles de mi vida! El Living Museum Nami es una galería al aire libre que todos deberían conocer. ¡Gracias Favela-República!",
            fr: "J'ai photographié les graffitis les plus incroyables de ma vie ! Le Living Museum Nami est une galerie à ciel ouvert que tout le monde devrait connaître. Merci Favela-República !"
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
