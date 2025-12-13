import type { FAQ } from "@/types";

export const faqs: FAQ[] = [
    // Segurança
    {
        id: "seguranca-1",
        question: {
            pt: "É seguro visitar a Tavares Bastos?",
            en: "Is it safe to visit Tavares Bastos?",
        },
        answer: {
            pt: "Sim, a Tavares Bastos é considerada uma das favelas mais seguras do Rio de Janeiro. Desde 2000, a comunidade abriga a sede do BOPE (Batalhão de Operações Policiais Especiais), o que contribuiu para mais de duas décadas sem presença de tráfico ou milícias. Além disso, nossos guias são moradores locais que conhecem profundamente a comunidade e garantem uma visita tranquila.",
            en: "Yes, Tavares Bastos is considered one of the safest favelas in Rio de Janeiro. Since 2000, the community has housed the BOPE (Special Police Operations Battalion) headquarters, which has contributed to more than two decades without drug trafficking or militia presence. Additionally, our guides are local residents who deeply know the community and ensure a peaceful visit.",
        },
        category: "seguranca",
        order: 1,
    },
    {
        id: "seguranca-2",
        question: {
            pt: "Posso levar minha câmera e celular?",
            en: "Can I bring my camera and phone?",
        },
        answer: {
            pt: "Sim, você pode levar câmera e celular para registrar o tour. Recomendamos que os guarde em bolsos ou bolsas quando não estiver usando, como precaução normal em qualquer área turística. Para fotografar moradores, especialmente crianças, sempre peça permissão primeiro. Nossos guias orientam sobre isso durante o tour.",
            en: "Yes, you can bring your camera and phone to record the tour. We recommend keeping them in pockets or bags when not in use, as a normal precaution in any tourist area. To photograph residents, especially children, always ask permission first. Our guides provide guidance on this during the tour.",
        },
        category: "seguranca",
        order: 2,
    },
    {
        id: "seguranca-3",
        question: {
            pt: "O tour é adequado para crianças ou idosos?",
            en: "Is the tour suitable for children or elderly?",
        },
        answer: {
            pt: "Os tours envolvem caminhadas por ruas íngremes e escadarias. Para crianças acima de 6 anos com boa disposição, não há problemas. Para idosos ou pessoas com mobilidade reduzida, recomendamos entrar em contato conosco para avaliarmos adaptações no roteiro. Oferecemos trajetos alternativos quando necessário.",
            en: "The tours involve walking through steep streets and staircases. For children over 6 with good energy, there are no problems. For elderly or people with reduced mobility, we recommend contacting us to evaluate route adaptations. We offer alternative routes when necessary.",
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
        },
        answer: {
            pt: "A forma mais rápida é pelo WhatsApp. Basta clicar no botão verde em qualquer página do site e enviar uma mensagem informando: data desejada, horário preferido, número de pessoas e tour de interesse. Nossa equipe responde em poucos minutos durante o horário comercial.",
            en: "The fastest way is via WhatsApp. Just click the green button on any page of the website and send a message with: desired date, preferred time, number of people, and tour of interest. Our team responds within minutes during business hours.",
        },
        category: "reservas",
        order: 1,
    },
    {
        id: "reserva-2",
        question: {
            pt: "Com quanta antecedência devo reservar?",
            en: "How far in advance should I book?",
        },
        answer: {
            pt: "Recomendamos reservar com pelo menos 24-48 horas de antecedência para garantir disponibilidade, especialmente em alta temporada (dezembro a março) e feriados. Contudo, se você estiver no Rio e quiser fazer um tour no mesmo dia, entre em contato — tentaremos acomodar sempre que possível.",
            en: "We recommend booking at least 24-48 hours in advance to ensure availability, especially during high season (December to March) and holidays. However, if you're in Rio and want to do a same-day tour, contact us — we'll try to accommodate whenever possible.",
        },
        category: "reservas",
        order: 2,
    },
    {
        id: "reserva-3",
        question: {
            pt: "Posso cancelar ou remarcar minha reserva?",
            en: "Can I cancel or reschedule my booking?",
        },
        answer: {
            pt: "Sim, cancelamentos e remarcações são gratuitos se feitos com pelo menos 24 horas de antecedência. Basta nos avisar pelo WhatsApp. Cancelamentos com menos de 24 horas podem estar sujeitos a uma taxa, dependendo das circunstâncias.",
            en: "Yes, cancellations and rescheduling are free if made at least 24 hours in advance. Just let us know via WhatsApp. Cancellations with less than 24 hours notice may be subject to a fee, depending on circumstances.",
        },
        category: "reservas",
        order: 3,
    },
    {
        id: "reserva-4",
        question: {
            pt: "Qual é o tamanho mínimo e máximo do grupo?",
            en: "What is the minimum and maximum group size?",
        },
        answer: {
            pt: "O mínimo é de 2 pessoas por tour. O máximo varia: Tour Completo (10 pessoas), Arte Urbana (12 pessoas), Sunset (8 pessoas). Para grupos maiores, podemos organizar tours privativos ou dividir em grupos menores com guias diferentes.",
            en: "The minimum is 2 people per tour. The maximum varies: Complete Tour (10 people), Street Art (12 people), Sunset (8 people). For larger groups, we can organize private tours or split into smaller groups with different guides.",
        },
        category: "reservas",
        order: 4,
    },

    // Pagamento
    {
        id: "pagamento-1",
        question: {
            pt: "Quais formas de pagamento são aceitas?",
            en: "What payment methods are accepted?",
        },
        answer: {
            pt: "Aceitamos: PIX (preferencial), dinheiro (reais), cartões de crédito e débito (Visa, Mastercard, Elo). Para cartões internacionais, recomendamos avisar com antecedência. O pagamento pode ser feito no dia do tour ou antecipadamente.",
            en: "We accept: PIX (preferred), cash (Brazilian reais), credit and debit cards (Visa, Mastercard, Elo). For international cards, we recommend notifying us in advance. Payment can be made on the day of the tour or in advance.",
        },
        category: "pagamento",
        order: 1,
    },
    {
        id: "pagamento-2",
        question: {
            pt: "O preço inclui tudo?",
            en: "Does the price include everything?",
        },
        answer: {
            pt: "O preço inclui: guia local bilíngue, transporte dentro da comunidade (quando necessário), água mineral e seguro. Não inclui: transporte até a comunidade (podemos indicar como chegar), refeições e gorjetas (opcionais). Alguns tours incluem itens adicionais — verifique os detalhes de cada um.",
            en: "The price includes: bilingual local guide, transport within the community (when needed), mineral water, and insurance. It does not include: transport to the community (we can advise how to get there), meals, and tips (optional). Some tours include additional items — check the details of each one.",
        },
        category: "pagamento",
        order: 2,
    },
    {
        id: "pagamento-3",
        question: {
            pt: "Vocês emitem nota fiscal?",
            en: "Do you issue invoices?",
        },
        answer: {
            pt: "Sim, podemos emitir nota fiscal ou recibo para seu tour. Informe essa necessidade no momento da reserva e forneça os dados fiscais necessários (CPF ou CNPJ para empresas brasileiras).",
            en: "Yes, we can issue invoices or receipts for your tour. Inform us of this need at the time of booking and provide the necessary tax details (CPF or CNPJ for Brazilian companies).",
        },
        category: "pagamento",
        order: 3,
    },

    // Tour
    {
        id: "tour-1",
        question: {
            pt: "Qual tour devo escolher?",
            en: "Which tour should I choose?",
        },
        answer: {
            pt: "Depende do seu interesse e tempo disponível:\n\n• **Tour Completo (3-4h)**: A experiência mais imersiva. Ideal se você quer conhecer tudo: FIFA Street, Museu NAMI, The Maze e mirante.\n\n• **Arte Urbana (2h)**: Focado em grafite e arte feminina. Perfeito para amantes de arte e fotógrafos.\n\n• **Sunset (2h)**: Romântico e fotogênico. Ideal para casais ou quem busca vistas deslumbrantes ao pôr do sol.",
            en: "It depends on your interest and available time:\n\n• **Complete Tour (3-4h)**: The most immersive experience. Ideal if you want to see everything: FIFA Street, NAMI Museum, The Maze, and viewpoint.\n\n• **Street Art (2h)**: Focused on graffiti and women's art. Perfect for art lovers and photographers.\n\n• **Sunset (2h)**: Romantic and photogenic. Ideal for couples or those seeking stunning sunset views.",
        },
        category: "tour",
        order: 1,
    },
    {
        id: "tour-2",
        question: {
            pt: "Em quais idiomas vocês oferecem os tours?",
            en: "In which languages do you offer tours?",
        },
        answer: {
            pt: "Nossos guias falam Português, Inglês, Espanhol e Francês. Informe seu idioma preferido ao reservar para garantirmos um guia adequado. Para outros idiomas, consulte-nos — podemos tentar acomodar ou providenciar um intérprete.",
            en: "Our guides speak Portuguese, English, Spanish, and French. Let us know your preferred language when booking to ensure we assign an appropriate guide. For other languages, consult us — we may be able to accommodate or provide an interpreter.",
        },
        category: "tour",
        order: 2,
    },
    {
        id: "tour-3",
        question: {
            pt: "O que devo vestir e levar?",
            en: "What should I wear and bring?",
        },
        answer: {
            pt: "Recomendamos:\n\n• **Calçado**: Tênis confortável e fechado (evite chinelos e saltos)\n• **Roupa**: Leve e confortável, proteja-se do sol\n• **Protetor solar e chapéu**: Essenciais no verão\n• **Água extra**: Fornecemos água, mas leve mais se precisar\n• **Dinheiro ou cartão**: Para compras locais (opcional)\n• **Câmera/celular**: Para registrar a experiência",
            en: "We recommend:\n\n• **Footwear**: Comfortable closed shoes (avoid flip-flops and heels)\n• **Clothing**: Light and comfortable, protect yourself from the sun\n• **Sunscreen and hat**: Essential in summer\n• **Extra water**: We provide water, but bring more if needed\n• **Cash or card**: For local purchases (optional)\n• **Camera/phone**: To record the experience",
        },
        category: "tour",
        order: 3,
    },
    {
        id: "tour-4",
        question: {
            pt: "O tour acontece se chover?",
            en: "Does the tour happen if it rains?",
        },
        answer: {
            pt: "Tours leves funcionam normalmente com garoa. Em caso de chuva forte ou tempestade, entraremos em contato para remarcar sem custo adicional. Se você preferir fazer o tour mesmo com chuva moderada, podemos prosseguir — algumas escadarias ficam escorregadias, então extra cuidado é necessário.",
            en: "Light tours operate normally with drizzle. In case of heavy rain or storms, we will contact you to reschedule at no additional cost. If you prefer to do the tour even with moderate rain, we can proceed — some staircases become slippery, so extra care is needed.",
        },
        category: "tour",
        order: 4,
    },
    {
        id: "tour-5",
        question: {
            pt: "Onde é o ponto de encontro?",
            en: "Where is the meeting point?",
        },
        answer: {
            pt: "O ponto de encontro é na entrada da comunidade, na Ladeira dos Tabajaras, no bairro do Catete. É fácil chegar de Uber/táxi ou metrô (estação Catete). Enviamos a localização exata por WhatsApp após a confirmação da reserva, junto com instruções detalhadas de como chegar.",
            en: "The meeting point is at the community entrance, on Ladeira dos Tabajaras, in the Catete neighborhood. It's easy to reach by Uber/taxi or subway (Catete station). We send the exact location via WhatsApp after booking confirmation, along with detailed instructions on how to get there.",
        },
        category: "tour",
        order: 5,
    },

    // Sobre a Comunidade
    {
        id: "comunidade-1",
        question: {
            pt: "Por que a Tavares Bastos é diferente de outras favelas?",
            en: "Why is Tavares Bastos different from other favelas?",
        },
        answer: {
            pt: "A Tavares Bastos se destaca por vários motivos:\n\n• **Segurança**: Sede do BOPE desde 2000\n• **Cultura**: Abriga The Maze, Museu NAMI e a quadra do FIFA Street\n• **Localização**: No coração da Zona Sul, com vistas panorâmicas\n• **História**: Cenário de filmes e clipes internacionais\n• **Turismo organizado**: Comunidade pioneira em turismo responsável",
            en: "Tavares Bastos stands out for several reasons:\n\n• **Safety**: BOPE headquarters since 2000\n• **Culture**: Home to The Maze, NAMI Museum, and FIFA Street court\n• **Location**: In the heart of the South Zone, with panoramic views\n• **History**: Setting for international films and music videos\n• **Organized tourism**: Pioneer community in responsible tourism",
        },
        category: "comunidade",
        order: 1,
    },
    {
        id: "comunidade-2",
        question: {
            pt: "O dinheiro do tour fica na comunidade?",
            en: "Does the tour money stay in the community?",
        },
        answer: {
            pt: "Sim! Somos um negócio 100% comunitário. Todo o nosso time é formado por moradores da Tavares Bastos. Os guias, coordenadores e parceiros são pessoas que vivem e trabalham na comunidade. Além disso, indicamos comércios locais e apoiamos projetos sociais como a Rede NAMI.",
            en: "Yes! We are a 100% community business. Our entire team is made up of Tavares Bastos residents. The guides, coordinators, and partners are people who live and work in the community. Additionally, we recommend local businesses and support social projects like Rede NAMI.",
        },
        category: "comunidade",
        order: 2,
    },
    {
        id: "comunidade-3",
        question: {
            pt: "Posso comprar algo dos moradores durante o tour?",
            en: "Can I buy something from residents during the tour?",
        },
        answer: {
            pt: "Sim, temos vários pontos de economia local no trajeto! Você pode comprar artesanato, comidas típicas (acarajé, açaí, sucos), lembranças e até obras de arte de artistas locais. Nossos guias indicam os melhores lugares. Leve dinheiro ou PIX — nem todos aceitam cartão.",
            en: "Yes, we have various local economy spots along the route! You can buy handicrafts, typical foods (acarajé, açaí, juices), souvenirs, and even artwork from local artists. Our guides point out the best places. Bring cash or PIX — not everyone accepts cards.",
        },
        category: "comunidade",
        order: 3,
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

export const faqCategoryLabels: Record<string, { pt: string; en: string }> = {
    seguranca: { pt: "Segurança", en: "Safety" },
    reservas: { pt: "Reservas", en: "Bookings" },
    pagamento: { pt: "Pagamento", en: "Payment" },
    tour: { pt: "Sobre o Tour", en: "About the Tour" },
    comunidade: { pt: "Sobre a Comunidade", en: "About the Community" },
};
