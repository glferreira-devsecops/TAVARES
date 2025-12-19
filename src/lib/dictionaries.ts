
export type Locale = "pt" | "en" | "es" | "fr";

export interface Dictionary {
    nav: {
        home: string;
        tours: string;
        about: string;
        blog: string;
        social: string;
        faq: string;
        contact: string;
        book: string;
        language: string;
        openMenu: string;
        closeMenu: string;
    };
    hero: {
        eyebrow: string;
        title: string;
        titleHighlight: string;
        subtitle: string;
        description: string;
        ctaMain: string;
        ctaSecondary: string;
        stats: {
            rating: string;
            safety: string;
            local: string;
            safeValue: string;
            reviewCount: string;
        };
    };
    footer: {
        about: string;
        description: string;
        quickLinks: string;
        contact: string;
        followUs: string;
        rights: string;
    };
    about: {
        hero: {
            title: string;
            subtitle: string;
        };
        manifesto: {
            title: string;
            text1: string;
            text2: string;
        };
        values: {
            title: string;
            list: { title: string; desc: string }[];
        };
        instagram: {
            title: string;
            handle: string;
        };
    };
    tourCard: {
        insurance: string;
        smallGroups: string;
        book: string;
    };
    AboutPreview: {
        badge: string;
        title: string;
        titleHighlight: string;
        description_1: string;
        description_2: string;
        description_impact: string;
        trustedTitle: string;
        trustedSubtitle: string;
        highlights: {
            fifa: { title: string; subtitle: string };
            google: { title: string; subtitle: string };
            visitors: { title: string; subtitle: string };
            local_guides: { title: string; subtitle: string };
            social_impact: { title: string; subtitle: string };
        };
        stats: { value: string; label: string };
        cta: string;
        ctaWhatsapp: string;
        features: {
            local_guides: string;
            street_art: string;
            safety: string;
            social_impact: string;
            interaction: string;
        };
    };
    SocialProject: {
        badge: string;
        title: string;
        titleHighlight: string;
        description_1: string;
        description_2: string;
        stats: { value: string; label: string }[];
    };
    FAQ: {
        eyebrow: string;
        title: string;
        subtitle: string;
        questions: Record<string, { question: string; answer: string }>;
    };
    NotFound: {
        title: string;
        description: string;
        button: string;
        helpTitle: string;
        helpSubtitle: string;
    };
    Testimonials?: {
        eyebrow: string;
        title: string;
        subtitle: string;
    };
}

const dictionaries: Record<Locale, Dictionary> = {
    pt: {
        nav: {
            home: "Página Inicial",
            tours: "Tours",
            about: "Quem Somos",
            blog: "Blog",
            social: "Projeto Social",
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
            titleHighlight: "Favela-República",
            subtitle: "Experiência autêntica, segura e cultural na favela mais icónica do Rio",
            description: "Descubra a história, arte urbana e belezas naturais da comunidade com condutores locais. Tours responsáveis e imersivos.",
            ctaMain: "Reservar Tour Agora",
            ctaSecondary: "Ver Tours Disponíveis",
            stats: {
                rating: "Avaliação",
                safety: "Base Policial",
                local: "Condutores Locais",
                safeValue: "Seguro",
                reviewCount: "250+ avaliações"
            },
        },
        footer: {
            about: "Sobre nós",
            description: "Turismo comunitário autêntico na Favela. Segurança, cultura e vistas incríveis.",
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
                text1: "A Favela-República é uma empresa de turismo de base comunitária localizada na zona sul do Rio de Janeiro. Nosso objetivo é oferecer uma experiência autêntica, segura e cultural, mostrando a verdadeira vida da comunidade por meio de história local, arte urbana, belezas naturais e hospitalidade.",
                text2: "Recebemos visitantes do mundo inteiro e entregamos um tour responsável, imersivo e muito elogiado. Queremos que o site transmita nossa essência: acolhimento, segurança, cultura, diversidade e a beleza do nosso território.",
            },
            values: {
                title: "Nossos Pilares",
                list: [
                    { title: "Autenticidade", desc: "Vivência real sem filtros." },
                    { title: "Segurança", desc: "A comunidade mais segura do Rio." },
                    { title: "Cultura", desc: "Arte, música e história viva." },
                    { title: "Comunidade", desc: "Condutores locais e impacto direto." },
                    { title: "Interação", desc: "Interaja com moradores." }
                ]
            },
            instagram: {
                title: "Siga nossa jornada",
                handle: "@favelarepublica",
            }
        },
        tourCard: {
            insurance: "",
            smallGroups: "Grupos Pequenos",
            book: "Reservar"
        },
        AboutPreview: {
            badge: "Quem Somos",
            title: "Muito mais que um tour",
            titleHighlight: "Uma imersão cultural",
            description_1: "Você vai pisar no cenário real que inspirou o game **FIFA Street**, foi palco do filme **O Incrível Hulk** e do clipe de **Snoop Dogg & Pharrell**. Não é apenas uma favela; é um ícone da cultura pop mundial.",
            description_2: "Aqui, a segurança é total e a experiência é autêntica. Conduzido por quem nasceu e cresceu aqui, você vai descobrir a verdadeira alma do Rio de Janeiro, com vistas de tirar o fôlego e histórias que nenhum condutor de turismo comum pode contar.",
            description_impact: "Ao escolher a Favela-República, você reinveste diretamente na favela. Nosso turismo sustentável gera renda local, preserva nossa cultura e cria oportunidades reais para os moradores.",
            trustedTitle: "Reconhecido Mundialmente",
            trustedSubtitle: "Cenário do FIFA Street e avaliado com excelência:",
            highlights: {
                fifa: { title: "FIFA Street", subtitle: "Cenário Real" },
                google: { title: "Google", subtitle: "5 Estrelas" },
                visitors: { title: "1000+", subtitle: "Visitantes" },
                local_guides: { title: "Condutores Locais", subtitle: "Nascidos na Favela" },
                social_impact: { title: "Impacto Social", subtitle: "Apoie a Comunidade" },
            },
            stats: { value: "10+", label: "Anos de História" },
            cta: "Conheça nossa história completa",
            ctaWhatsapp: "Agendar Visita",
            features: {
                local_guides: "Condutores locais",
                street_art: "Arte urbana",
                safety: "Segurança",
                social_impact: "Impacto social",
                interaction: "Interação com Moradores"
            }
        },
        SocialProject: {
            badge: "Projeto Social",
            title: "Tranformando vidas",
            titleHighlight: "Centro Social Dona Irene",
            description_1: "O Favela-República junto ao Centro Social Dona Irene, um projeto independente que atua há 15 anos na Favela do Rio de Janeiro. Com recursos próprios e sem apoio da prefeitura, desenvolvemos ações voltadas para o bem-estar e o crescimento da comunidade, sempre com o propósito de oferecer oportunidades reais e transformar vidas.",
            description_2: "Nosso trabalho é feito por moradores e para moradores, com foco na educação, inclusão digital, cultura e cidadania. Com muito esforço, construímos uma sala de aula equipada para receber atividades gratuitas que atendem todas as idades, promovendo conhecimento, acolhimento e participação ativa da comunidade.",
            stats: [
                { value: "15", label: "Anos de Atuação" },
                { value: "100+", label: "Famílias Atendidas" },
                { value: "100%", label: "Feito por Moradores" }
            ]
        },
        FAQ: {
            eyebrow: "Dúvidas Frequentes",
            title: "Perguntas Frequentes",
            subtitle: "Tire suas dúvidas sobre o tour e a visita à favela.",
            questions: {
                q1: {
                    question: "É seguro visitar a favela?",
                    answer: "Sim, você estará sempre acompanhado de um condutor local. Ele garantirá que a sua experiência seja segura e incrível."
                },
                q2: {
                    question: "Como faço para reservar um tour?",
                    answer: "A forma mais rápida é pelo WhatsApp. Basta clicar no botão verde em qualquer página do site e enviar uma mensagem informando: data desejada, horário preferido, número de pessoas e tour de interesse. Nossa equipe responde em poucos minutos durante o horário comercial."
                },
                q3: {
                    question: "Quais formas de pagamento são aceitas?",
                    answer: "Aceitamos: PIX (preferencial), dinheiro (reais), dólar, cartões de crédito e débito, wise. O pagamento pode ser feito no dia do tour ou antecipadamente."
                },
                q4: {
                    question: "Posso levar minha câmera e celular?",
                    answer: "Sim, você pode levar câmera e celular para registrar o tour, é muito seguro. Para fotografar moradores, especialmente crianças, sempre peça permissão primeiro. Nossos condutores orientam sobre isso durante o tour."
                },
                q5: {
                    question: "O preço inclui tudo?",
                    answer: "O preço inclui: condutor local bilíngue, transporte de ida e volta do ponto de encontro para a favela, vídeo 360°, fotos feitas pela equipe. Não inclui: refeições, bebidas e gorjetas (opcionais)."
                },
                q6: {
                    question: "Em quais idiomas vocês oferecem os tours?",
                    answer: "Nossos condutores falam Português, Inglês, Espanhol e Francês. Informe seu idioma preferido ao reservar para garantirmos um condutor adequado."
                },
                q7: {
                    question: "O que devo vestir e levar?",
                    answer: "Recomendamos: calçados confortáveis, roupas leves, protetor solar, dinheiro ou cartão, câmera/celular para registrar sua experiência."
                },
                q8: {
                    question: "Posso comprar algo dos moradores durante o tour?",
                    answer: "Sim, temos vários pontos de economia local no trajeto! Você pode comprar blusas, comidas e bebidas, dentre outras coisas. Nossos condutores indicam os melhores lugares. Leve dinheiro ou cartão."
                },
                q9: {
                    question: "Qual é o tamanho mínimo e máximo do grupo?",
                    answer: "O mínimo é de 2 pessoas por tour. O máximo varia, podendo chegar a 40 pessoas."
                },
                q10: {
                    question: "O tour acontece se chover?",
                    answer: "Tours leves funcionam normalmente com garoa. Em caso de chuva forte ou tempestade, entraremos em contato para remarcar sem custo adicional."
                },
                q11: {
                    question: "Onde é o ponto de encontro?",
                    answer: "O ponto de encontro é na Rua do Catete, 153 - Bairro Catete (Em frente ao Museu da República). É fácil chegar de Uber/táxi ou metrô (estação Catete). Enviamos a localização exata por WhatsApp após a confirmação da reserva, junto com instruções detalhadas de como chegar."
                }
            }
        },
        NotFound: {
            title: "Página não encontrada",
            description: "A página que você está procurando não existe ou foi movida.",
            button: "Voltar ao início",
            helpTitle: "Precisa de ajuda urgente?",
            helpSubtitle: "Falar no WhatsApp"
        },
        Testimonials: {
            eyebrow: "Depoimentos",
            title: "O que dizem nossos visitantes",
            subtitle: "Mais de 1.000 visitantes já viveram essa experiência"
        }
    },
    en: {
        nav: {
            home: "Home",
            tours: "Tours",
            about: "About Us",
            blog: "Blog",
            social: "Social Project",
            faq: "FAQ",
            contact: "Contact",
            book: "Book Now",
            language: "Language",
            openMenu: "Open menu",
            closeMenu: "Close menu",
        },
        hero: {
            eyebrow: "Community-Based Tourism",
            title: "Discover the real",
            titleHighlight: "Favela",
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
            description: "Authentic community tourism in Favela. Safety, culture, and amazing views.",
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
                text1: "Favela-República is a community-based tourism company located in the Favela, in the South Zone of Rio de Janeiro. Our goal is to offer an authentic, safe, and cultural experience, showing the true life of the community through local history, urban art, natural beauty, and hospitality.",
                text2: "We welcome visitors from all over the world and deliver a responsible, immersive, and highly praised tour. We want our work to convey our essence: welcoming, safety, culture, diversity, and the beauty of our territory.",
            },
            values: {
                title: "Our Pillars",
                list: [
                    { title: "Authenticity", desc: "Real experience without filters." },
                    { title: "Safety", desc: "Rio's safest community." },
                    { title: "Culture", desc: "Art, music and living history." },
                    { title: "Community", desc: "Local guides and direct impact." },
                    { title: "Interaction", desc: "Interact with residents." }
                ]
            },
            instagram: {
                title: "Follow our journey",
                handle: "@favelarepublica",
            }
        },
        tourCard: {
            insurance: "",
            smallGroups: "Small Groups",
            book: "Book Now"
        },
        AboutPreview: {
            badge: "About Us",
            title: "Much more than a tour",
            titleHighlight: "A cultural immersion",
            description_1: "You will step onto the real set that inspired **FIFA Street**, **The Incredible Hulk** movie, and **Snoop Dogg & Pharrell**'s music video. Favela-República is not just a favela; it is a global pop culture icon.",
            description_2: "Here, safety is absolute and the experience is authentic. Guided by locals, you will discover the true soul of Rio de Janeiro, with breathtaking views and stories no ordinary guide can tell.",
            description_impact: "By choosing Favela-República, you reinvest directly in the community. Our sustainable tourism generates local income, preserves our culture, and creates real opportunities for residents.",
            trustedTitle: "World Renowned",
            trustedSubtitle: "Setting of FIFA Street and rated with excellence:",
            highlights: {
                fifa: { title: "FIFA Street", subtitle: "Real Setting" },
                google: { title: "Google", subtitle: "5 Stars" },
                visitors: { title: "1000+", subtitle: "Visitors" },
                local_guides: { title: "Local Guides", subtitle: "Born in Favela" },
                social_impact: { title: "Social Impact", subtitle: "Support Community" },
            },
            stats: { value: "10+", label: "Years of History" },
            cta: "Learn our full story",
            ctaWhatsapp: "Book Visit",
            features: {
                local_guides: "Local guides",
                street_art: "Street art",
                safety: "Safety",
                social_impact: "Social impact",
                interaction: "Local Interaction"
            }
        },
        SocialProject: {
            badge: "Social Project",
            title: "Transforming Lives",
            titleHighlight: "Dona Irene Social Center",
            description_1: "Favela-República, together with the Dona Irene Social Center, is an independent project that has been operating based in the Rio de Janeiro Favela for 15 years. With our own resources and without government support, we develop actions for the well-being and growth of the community, always with the purpose of offering real opportunities and transforming lives.",
            description_2: "Our work is done by residents for residents, focusing on education, digital inclusion, culture, and citizenship. With great effort, we have built a classroom equipped to host free activities for all ages, promoting knowledge, welcoming, and active community participation.",
            stats: [
                { value: "15", label: "Years Active" },
                { value: "100+", label: "Families Helped" },
                { value: "100%", label: "Made by Locals" }
            ]
        },
        FAQ: {
            eyebrow: "FAQ",
            title: "Frequently Asked Questions",
            subtitle: "Get answers about the tour and visiting the favela.",
            questions: {},
        },
        NotFound: {
            title: "Page Not Found",
            description: "The page you are looking for does not exist.",
            button: "Back to Home",
            helpTitle: "Need urgent help?",
            helpSubtitle: "Talk on WhatsApp"
        },
        Testimonials: {
            eyebrow: "Testimonials",
            title: "What our visitors say",
            subtitle: "Over 1,000 visitors have lived this experience"
        }
    },
    es: {
        nav: {
            home: "Inicio",
            tours: "Tours",
            about: "Quiénes Somos",
            blog: "Blog",
            social: "Proyecto Social",
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
            titleHighlight: "Favela",
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
            description: "Turismo comunitario auténtico en la Favela. Seguridad, cultura y vistas increíbles.",
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
                text1: "Favela-República es una empresa de turismo de base comunitaria ubicada en la Favela, en la Zona Sur de Río de Janeiro. Nuestro objetivo es ofrecer una experiencia auténtica, segura y cultural, mostrando la verdadera vida de la comunidad a través de la historia local, el arte urbano, las bellezas naturales y la hospitalidad.",
                text2: "Recibimos visitantes de todo el mundo y ofrecemos un tour responsable, inmersivo y muy elogiado. Queremos que nuestro trabajo transmita nuestra esencia: acogida, seguridad, cultura, diversidad y la belleza de nuestro territorio.",
            },
            values: {
                title: "Nuestros Pilares",
                list: [
                    { title: "Autenticidad", desc: "Vivencia real sin filtros." },
                    { title: "Seguridad", desc: "La comunidad más segura de Río." },
                    { title: "Cultura", desc: "Arte, música e historia viva." },
                    { title: "Comunidad", desc: "Guías locales e impacto directo." },
                    { title: "Interacción", desc: "Interactúa con los residentes." }
                ]
            },
            instagram: {
                title: "Sigue nuestro viaje",
                handle: "@favelarepublica",
            }
        },
        tourCard: {
            insurance: "",
            smallGroups: "Grupos Pequeños",
            book: "Reservar"
        },
        AboutPreview: {
            badge: "Quiénes Somos",
            title: "Mucho más que un tour",
            titleHighlight: "Una inmersión cultural",
            description_1: "Pisarás el escenario real que inspiró el juego **FIFA Street**, la película **El Increíble Hulk** y el video de **Snoop Dogg & Pharrell**. Favela-República no es solo una favela; es un ícono de la cultura pop mundial.",
            description_2: "Aquí, la seguridad es total y la experiencia es auténtica. Conduzido por locales, descubrirás la verdadera alma de Río de Janeiro, con vistas impresionantes e historias que ningún guía común puede contar.",
            description_impact: "Al elegir Favela-República, reinviertes directamente en la comunidad. Nuestro turismo sostenible genera ingresos locales, preserva nuestra cultura y crea oportunidades reales para los residentes.",
            trustedTitle: "Reconocido Mundialmente",
            trustedSubtitle: "Escenario de FIFA Street y calificado con excelencia:",
            highlights: {
                fifa: { title: "FIFA Street", subtitle: "Escenario Real" },
                google: { title: "Google", subtitle: "5 Estrellas" },
                visitors: { title: "1000+", subtitle: "Visitantes" },
                local_guides: { title: "Guías Locales", subtitle: "Nacidos en la Favela" },
                social_impact: { title: "Impacto Social", subtitle: "Apoya la Comunidad" },
            },
            stats: { value: "10+", label: "Años de Historia" },
            cta: "Conoce nuestra historia completa",
            ctaWhatsapp: "Reservar Visita",
            features: {
                local_guides: "Guías locales",
                street_art: "Arte urbano",
                safety: "Seguridad",
                social_impact: "Impacto social",
                interaction: "Interacción locales"
            }
        },
        SocialProject: {
            badge: "Proyecto Social",
            title: "Transformando Vidas",
            titleHighlight: "Centro Social Dona Irene",
            description_1: "Favela-República junto con el Centro Social Dona Irene, un proyecto independiente que opera desde hace 15 años en la favela de Río de Janeiro. Con recursos propios y sin apoyo gubernamental, desarrollamos acciones para el bienestar y el crecimiento de la comunidad, siempre con el propósito de ofrecer oportunidades reales y transformar vidas.",
            description_2: "Nuestro trabajo es realizado por residentes para residentes, enfocándose en educación, inclusión digital, cultura y ciudadanía. Con mucho esfuerzo, hemos construido un aula equipada para albergar actividades gratuitas para todas las edades, promoviendo el conocimiento, la acogida y la participación activa de la comunidad.",
            stats: [
                { value: "15", label: "Años Activos" },
                { value: "100+", label: "Familias Ayudadas" },
                { value: "100%", label: "Hecho por Locales" }
            ]
        },
        FAQ: {
            eyebrow: "Preguntas",
            title: "Preguntas Frecuentes",
            subtitle: "Resuelve tus dudas sobre el tour.",
            questions: {},
        },
        NotFound: {
            title: "Página No Encontrada",
            description: "La página que buscas no existe.",
            button: "Volver al Inicio",
            helpTitle: "¿Necesitas ayuda urgente?",
            helpSubtitle: "Halar por WhatsApp"
        },
        Testimonials: {
            eyebrow: "Testimonios",
            title: "Lo que dicen nuestros visitantes",
            subtitle: "Más de 1.000 visitantes ya vivieron esta experiencia"
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            tours: "Visites",
            about: "À Propos",
            blog: "Blog",
            social: "Projet Social",
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
            titleHighlight: "Favela",
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
                text1: "Favela-República est une entreprise de tourisme communautaire située dans la Favela, dans la zone sud de Rio de Janeiro. Notre objectif est d'offrir une expérience authentique, sûre et culturelle, montrant la vraie vie de la communauté à travers l'histoire locale, l'art urbain, les beautés naturelles et l'hospitalité.",
                text2: "Nous accueillons des visiteurs du monde entier et proposons une visite responsable, immersive et très appréciée. Nous voulons que notre travail transmette notre essence : accueil, sécurité, culture, diversité et la beauté de notre territoire.",
            },
            values: {
                title: "Nos Piliers",
                list: [
                    { title: "Authenticité", desc: "Expérience réelle sans filtres." },
                    { title: "Segurança", desc: "La communauté la plus sûre de Rio." },
                    { title: "Culture", desc: "Art, musique et histoire vivante." },
                    { title: "Communauté", desc: "Guides locaux et impact direct." },
                    { title: "Interaction", desc: "Interagissez avec les habitants." }
                ]
            },
            instagram: {
                title: "Suivez notre parcours",
                handle: "@favelarepublica",
            }
        },
        tourCard: {
            insurance: "",
            smallGroups: "Petits Groupes",
            book: "Réserver"
        },
        footer: {
            about: "À Propos",
            description: "Tourisme communautaire authentique dans la Favela. Sécurité, culture et vues incroyables.",
            quickLinks: "Liens Rapides",
            contact: "Contact",
            followUs: "Suivez-nous",
            rights: "Tous droits réservés.",
        },
        AboutPreview: {
            badge: "Qui Sommes-Nous",
            title: "Bien plus qu'une visite",
            titleHighlight: "Une immersion culturelle",
            description_1: "Vous marcherez sur le décor réel qui a inspiré le jeu **FIFA Street**, le film **L'Incroyable Hulk** et le clip de **Snoop Dogg & Pharrell**. Favela-República n'est pas seulement une favela; c'est une icône de la culture pop mondiale.",
            description_2: "Ici, la sécurité est totale et l'expérience est authentique. Guidé par des locaux, vous découvrirez la véritable âme de Rio de Janeiro, avec des vues à couper le souffle et des histoires qu'aucun guide ordinaire ne peut raconter.",
            description_impact: "En choisissant Favela-República, vous réinvestissez directement dans la communauté. Notre tourisme durable génère des revenus locaux, préserve notre culture et crée de vraies opportunités pour les habitants.",
            trustedTitle: "Reconnu Mondialement",
            trustedSubtitle: "Décor de FIFA Street et noté avec excellence:",
            highlights: {
                fifa: { title: "FIFA Street", subtitle: "Décor Réel" },
                google: { title: "Google", subtitle: "5 Étoiles" },
                visitors: { title: "1000+", subtitle: "Visiteurs" },
                local_guides: { title: "Guides Locaux", subtitle: "Nés dans la Favela" },
                social_impact: { title: "Impact Social", subtitle: "Soutenez la Communauté" },
            },
            stats: { value: "10+", label: "Ans d'Histoire" },
            cta: "Découvrez notre histoire complète",
            ctaWhatsapp: "Réserver Visite",
            features: {
                local_guides: "Guides locaux",
                street_art: "Art urbain",
                safety: "Sécurité",
                social_impact: "Impact social",
                interaction: "Interactions Locales"
            }
        },
        SocialProject: {
            badge: "Projet Social",
            title: "Transformer des vies",
            titleHighlight: "Centre Social Dona Irene",
            description_1: "Favela-República avec le Centre Social Dona Irene, un projet indépendant actif depuis 15 ans dans la Favela de Rio de Janeiro. Avec nos propres ressources et sans soutien gouvernemental, nous développons des actions pour le bien-être et la croissance de la communauté, toujours dans le but d'offrir de réelles opportunités et de transformer des vies.",
            description_2: "Notre travail est fait par des résidents pour des résidents, en mettant l'accent sur l'éducation, l'inclusion numérique, la culture et la citoyenneté. Avec beaucoup d'efforts, nous avons construit une salle de classe équipée pour accueillir des activités gratuites pour tous les âges, favorisant la connaissance et la participation active.",
            stats: [
                { value: "15", label: "Ans d'activité" },
                { value: "100+", label: "Familles aidées" },
                { value: "100%", label: "Fait par des locaux" }
            ]
        },
        FAQ: {
            eyebrow: "FAQ",
            title: "Foire Aux Questions",
            subtitle: "Obtenez des réponses sur la visite.",
            questions: {},
        },
        NotFound: {
            title: "Page Non Trouvée",
            description: "La page que vous recherchez n'existe pas.",
            button: "Retour à l'accueil",
            helpTitle: "Besoin d'aide urgente ?",
            helpSubtitle: "Parler sur WhatsApp"
        },
        Testimonials: {
            eyebrow: "Témoignages",
            title: "Ce que disent nos visiteurs",
            subtitle: "Plus de 1 000 visiteurs ont vécu cette expérience"
        }
    },
};

export const getDictionary = (locale: Locale): Dictionary => {
    return dictionaries[locale] ?? dictionaries.pt;
};

export const useDictionary = (locale: string): Dictionary => {
    const normalizedLocale = (["en", "es", "fr"].includes(locale.toLowerCase()) ? locale.toLowerCase() : "pt") as Locale;
    return getDictionary(normalizedLocale);
};
