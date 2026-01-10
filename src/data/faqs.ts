import type { FAQ } from "@/types";

export const faqs: FAQ[] = [
    // Segurança
    {
        id: "seguranca-1",
        question: {
            pt: "É seguro visitar o Favela-República?",
            en: "Is it safe to visit Favela-República?",
            es: "¿Es seguro visitar el Favela-República?",
            fr: "Est-il sûr de visiter le Favela-República ?"
        },
        answer: {
            pt: "Sim, o Favela-República é considerado uma das favelas mais seguras do Rio de Janeiro. A tranquilidade no nosso território é histórica e garantida pela própria vivência local. Além disso, nossos condutores são moradores que conhecem profundamente cada viela, garantindo que sua visita seja marcada apenas pela hospitalidade e pelas belezas da região.",
            en: "Yes, Favela-República is considered one of the safest favelas in Rio de Janeiro. The tranquility in our territory is historic and guaranteed by the local life itself. Additionally, our conductors are residents who deeply know every alley, ensuring that your visit is marked only by hospitality and the beauties of the region.",
            es: "Sí, el Favela-República es considerado uno de los más seguros de Río de Janeiro. La tranquilidad en nuestro territorio es histórica y garantizada por la propia vida local. Además, nuestros conductores son residentes que conocen profundamente cada callejón, asegurando que su visita esté marcada solo por la hospitalidad.",
            fr: "Oui, le Favela-República est considéré comme l'un des plus sûrs de Rio de Janeiro. La tranquillité sur nosso territoire est historique et garantie par la vie locale elle-même. De plus, nos conducteurs sont des résidents qui connaissent profondément chaque ruelle, garantissant que votre visite soit marquée uniquement par l'hospitalité."
        },
        category: "seguranca",
        order: 1,
    },
    {
        id: "seguranca-2",
        question: {
            pt: "Posso levar minha câmera e celular?",
            en: "Can I bring my camera and phone?",
            es: "¿Puedo llevar mi cámara y celular?",
            fr: "Puis-je apporter mon appareil photo et mon téléphone ?"
        },
        answer: {
            pt: "Sim, você pode levar câmera e celular para registrar o tour. Recomendamos que os guarde em bolsos ou bolsas quando não estiver usando, como precaução normal em qualquer área turística. Para fotografar moradores, especialmente crianças, sempre peça permissão primeiro. Nossos condutores orientam sobre isso durante o tour.",
            en: "Yes, you can bring your camera and phone to record the tour. We recommend keeping them in pockets or bags when not in use, as a normal precaution in any tourist area. To photograph residents, especially children, always ask permission first. Our conductors provide guidance on this during the tour.",
            es: "Sí, puedes llevar cámara y celular. Recomendamos guardarlos cuando no los uses. Para fotografiar a los residentes, siempre pide permiso primero. Nuestros conductores te orientarán.",
            fr: "Oui, vous pouvez apporter votre appareil photo et votre téléphone. Nous vous recommandons de les ranger lorsqu'ils ne sont pas utilisés. Pour photographier les habitants, demandez toujours la permission. Nos conducteurs vous conseilleront."
        },
        category: "seguranca",
        order: 2,
    },
    {
        id: "seguranca-3",
        question: {
            pt: "O tour é adequado para crianças ou idosos?",
            en: "Is the tour suitable for children or elderly?",
            es: "¿El tour é adequado para niños o ancianos?",
            fr: "Le tour est-il adapté aux enfants ou aux personnes âgées ?"
        },
        answer: {
            pt: "Os tours envolvem caminhadas por ruas íngremes e escadarias. Para crianças acima de 6 anos com boa disposição, não há problemas. Para idosos ou pessoas com mobilidade reduzida, recomendamos entrar em contato conosco para avaliarmos adaptações no roteiro. Oferecemos trajetos alternativos quando necessário.",
            en: "The tours involve walking through steep streets and staircases. For children over 6 with good energy, there are no problems. For elderly or people with reduced mobility, we recommend contacting us to evaluate route adaptations. We offer alternative routes when necessary.",
            es: "Los tours implican caminar por calles empinadas. Para niños mayores de 6 años no hay problemas. Para personas con movilidad reducida, recomendamos contactarnos para adaptar la ruta.",
            fr: "Les circuits impliquent de marcher dans des rues escarpées. Pour les enfants de plus de 6 ans, il n'y a aucun problème. Pour les personnes à mobilité réduite, nous recommandons de nous contacter pour adapter le parcours."
        },
        category: "seguranca",
        order: 3,
    },

    // Reservas
    {
        id: "reserva-1",
        question: {
            pt: "Como faço para reservar um tour?",
            en: "How do I book a tour?",
            es: "¿Cómo reservo un tour?",
            fr: "Comment réserver une visite ?"
        },
        answer: {
            pt: "A forma mais rápida é pelo WhatsApp. Basta clicar no botão verde em qualquer página do site e enviar uma mensagem informando: data desejada, horário preferido, número de pessoas e tour de interesse. Nossa equipe responde em poucos minutos durante o horário comercial.",
            en: "The fastest way is via WhatsApp. Just click the green button on any page of the website and send a message with: desired date, preferred time, number of people, and tour of interest. Our team responds within minutes during business hours.",
            es: "La forma más rápida es por WhatsApp. Solo envía un mensaje con la fecha, número de personas y tour de interés. Respondemos en minutos.",
            fr: "Le plus rapide est via WhatsApp. Envoyez simplement un message avec la date, le nombre de personnes et le tour choisi. Nous répondons en quelques minutes."
        },
        category: "reservas",
        order: 1,
    },
    {
        id: "reserva-2",
        question: {
            pt: "Com quanta antecedência devo reservar?",
            en: "How far in advance should I book?",
            es: "¿Con cuánta antelación debo reservar?",
            fr: "Combien de temps à l'avance dois-je réserver ?"
        },
        answer: {
            pt: "Recomendamos reservar com pelo menos 24-48 horas de antecedência para garantir disponibilidade, especialmente em alta temporada (dezembro a março) e feriados. Contudo, se você estiver no Rio e quiser fazer um tour no mesmo dia, entre em contato — tentaremos acomodar sempre que possível.",
            en: "We recommend booking at least 24-48 hours in advance to ensure availability, especially during high season (December to March) and holidays. However, if you're in Rio and want to do a same-day tour, contact us — we'll try to accommodate whenever possible.",
            es: "Recomendamos reservar con 24-48 horas de antelación. Si quieres reservar para el mismo día, contáctanos e intentaremos ayudarte.",
            fr: "Nous vous recommandons de réserver 24 à 48 heures à l'avance. Si vous souhaitez réserver pour le jour même, contactez-nous et nous essaierons de vous aider."
        },
        category: "reservas",
        order: 2,
    },

    // Pagamento
    {
        id: "pagamento-1",
        question: {
            pt: "Quais formas de pagamento são aceitas?",
            en: "What payment methods are accepted?",
            es: "¿Qué métodos de pago se aceptan?",
            fr: "Quels sont les modes de paiement acceptés ?"
        },
        answer: {
            pt: "Aceitamos: PIX (preferencial), dinheiro (reais), cartões de crédito e débito (Visa, Mastercard, Elo). Para cartões internacionais, recomendamos avisar com antecedência. O pagamento pode ser feito no dia do tour ou antecipadamente.",
            en: "We accept: PIX (preferred), cash (Brazilian reais), credit and debit cards (Visa, Mastercard, Elo). For international cards, we recommend notifying us in advance. Payment can be made on the day of the tour or in advance.",
            es: "Aceptamos: PIX, efectivo (reales), tarjetas de crédito y débito. El pago puede ser el día del tour.",
            fr: "Nous acceptons : PIX, espèces (reals), cartes de crédit et de débit. Le paiement peut être effectué le jour de la visite."
        },
        category: "pagamento",
        order: 1,
    },

    // Tour
    {
        id: "tour-2",
        question: {
            pt: "Em quais idiomas vocês oferecem os tours?",
            en: "In which languages do you offer tours?",
            es: "¿En qué idiomas ofrecen los tours?",
            fr: "Dans quelles langues proposez-vous les visites ?"
        },
        answer: {
            pt: "Nossos condutores falam Português, Inglês, Espanhol e Francês. Informe seu idioma preferido ao reservar para garantirmos um condutor adequado.",
            en: "Our conductors speak Portuguese, English, Spanish, and French. Let us know your preferred language when booking to ensure we assign an appropriate conductor.",
            es: "Nuestros conductores hablan portugués, inglés, español y francés. Infórmanos tu preferencia al reservar.",
            fr: "Nos conducteurs parlent portugais, anglais, espagnol et français. Faites-nous part de votre préférence lors de la réservation."
        },
        category: "tour",
        order: 2,
    },
];

export function getAllFaqs(): FAQ[] {
    return faqs.sort((a, b) => a.order - b.order);
}

export function getFaqsByCategory(category: string): FAQ[] {
    return faqs
        .filter((faq) => faq.category === category)
        .sort((a, b) => a.order - b.order);
}

export function getFaqCategories(): string[] {
    return [...new Set(faqs.map((faq) => faq.category))];
}

export const faqCategoryLabels: Record<string, { pt: string; en: string; es: string; fr: string }> = {
    seguranca: { pt: "Segurança", en: "Safety", es: "Seguridad", fr: "Sécurité" },
    reservas: { pt: "Reservas", en: "Bookings", es: "Reservas", fr: "Réservations" },
    pagamento: { pt: "Pagamento", en: "Payment", es: "Pago", fr: "Paiement" },
    tour: { pt: "Sobre o Tour", en: "About the Tour", es: "Sobre el Tour", fr: "À propos du Tour" },
    favela: { pt: "Sobre o Favela-República", en: "About Favela-República", es: "Sobre el Favela-República", fr: "À propos du Favela-República" },
};
