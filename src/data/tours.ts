import type { Tour } from "@/types";

export const tours: Tour[] = [
    {
        id: "favela-tour-completo",
        slug: "favela-tour-completo",
        title: {
            pt: "Favela Tour Completo",
            en: "Complete Favela Tour",
            es: "Favela Tour Completo",
            fr: "Favela Tour Complet"
        },
        subtitle: {
            pt: "A experiência imersiva na favela",
            en: "The immersive experience in the favela",
            es: "La experiencia inmersiva en la favela",
            fr: "L'expérience immersive dans la favela"
        },
        description: {
            pt: `Comece o tour no ponto mais alto da favela, em um ambiente seguro e acolhedor. Caminhe por becos e vielas e vivencie de perto a cultura, a história e o cotidiano da favela, com liberdade total para fotos e vídeos durante todo o percurso.

A experiência inclui um café com bolo na casa de uma moradora, oferecendo uma imersão autêntica na vida local. Em seguida, visitamos o The Maze, criação do artista inglês Bob, com mirantes decorados em mosaico e uma das vistas mais impressionantes do Rio, incluindo o Pão de Açúcar, a Baía de Guanabara e o Aterro do Flamengo.

O tour segue pela quadra de futebol famosa por ter sido cenário do FIFA Street, onde você pode gravar um vídeo 360° exclusivo, passa pelo Centro Social Dona Irene, que desenvolve projetos sociais na favela, e pelo Campo Pelé, onde crianças treinam e vivem a paixão local pelo futebol.

Mais do que um passeio, o Favela-República promove turismo responsável, troca cultural e valorização social, oferecendo uma experiência real, segura e transformadora.`,
            en: "Start the tour at the highest point of the favela. Walk through alleys and experience the culture, history, and daily life of the favela. Includes coffee with cake at a resident's home, visit to The Maze, FIFA Street court, Dona Irene Social Center, and Pelé Field.",
            es: "Comience el tour en el punto más alto de la favela. Camine por callejones y viva la cultura, historia y vida cotidiana de la favela. Incluye café con pastel en casa de una residente, visita a The Maze, cancha FIFA Street, Centro Social Dona Irene y Campo Pelé.",
            fr: "Commencez la visite au point le plus haut de la favela, dans un environnement sûr et accueillant. Promenez-vous dans les ruelles et vivez de près la culture. L'expérience comprend un café avec gâteau chez une habitante, une visite du The Maze, du terrain FIFA Street, du Centre Social Dona Irene et du Terrain Pelé."
        },
        shortDescription: {
            pt: "A experiência definitiva: Café com moradora, The Maze, FIFA Street e Projetos Sociais.",
            en: "The ultimate experience: Coffee with resident, The Maze, FIFA Street and Social Projects.",
            es: "La experiencia definitiva: Café con residente, The Maze, FIFA Street y Proyectos Sociales.",
            fr: "L'expérience ultime : Café avec habitante, The Maze, FIFA Street et Projets Sociaux."
        },
        duration: "3h",
        difficulty: "easy",
        priceFrom: 0, // Hidden
        currency: "BRL",
        groupSize: {
            min: 2,
            max: 40,
        },
        included: {
            pt: [
                "Condutor local bilíngue",
                "Transporte ida e volta da favela",
                "Entrada ao The Maze (quando aberto)",
                "Vídeo 360°",
                "Fotos feitas pela equipe"
            ],
            en: ["Bilingual local conductor", "Round trip transport from favela", "Entrance to The Maze (when open)", "360° Video", "Photos by the team"],
            es: ["Conductor local bilingüe", "Transporte ida y vuelta de la favela", "Entrada a The Maze (cuando abierto)", "Video 360°", "Fotos hechas por el equipo"],
            fr: ["Conducteur local bilingue", "Transport aller-retour de la favela", "Entrée au The Maze (quand ouvert)", "Vidéo 360°", "Photos prises par l'équipe"]
        },
        notIncluded: {
            pt: ["Refeições e bebidas", "Gorjetas (opcionais)"],
            en: ["Meals and drinks", "Tips (optional)"],
            es: ["Comidas y bebidas", "Propinas (opcionales)"],
            fr: ["Repas et boissons", "Pourboires (optionnels)"]
        },
        itinerary: [],
        meetingPoint: {
            name: { pt: "Museu da República", en: "Museum of the Republic", es: "Museo de la República", fr: "Musée de la République" },
            address: "Rua do Catete, 153 - Bairro Catete",
            coordinates: { lat: -22.9259, lng: -43.1764 },
        },
        images: [
            "/images/tours/favela-tour-collage/collage-1.webp",
            "/images/tours/favela-tour-collage/collage-2.webp",
            "/images/tours/favela-tour-collage/collage-3.webp",
            "/images/tours/favela-tour-collage/collage-4.webp"
        ]
    },
    {
        id: "futebol-na-favela",
        slug: "tour-futebol-na-favela",
        title: {
            pt: "Tour Futebol na Favela",
            en: "Football in the Favela Tour",
            es: "Tour Fútbol en la Favela",
            fr: "Tour Football dans la Favela"
        },
        subtitle: {
            pt: "Jogue com crianças locais na quadra FIFA STREET",
            en: "Play with local kids at the FIFA STREET court",
            es: "Juega con niños locales en la cancha FIFA STREET",
            fr: "Jouez con des enfants locaux sur le terrain FIFA STREET"
        },
        description: {
            pt: `Entre em campo onde o verdadeiro futebol de rua acontece, nas quadras e campos da favela, onde crianças, jovens e moradores vivem e respiram o esporte todos os dias. Mais do que um jogo, aqui o futebol é uma forma de expressão, união e alegria.

Experiência imersiva com 2 horas de jogo: jogue bola com moradores locais, sinta o clima das partidas improvisadas e assista a jogos reais que revelam o talento e a paixão que nascem nas ruas.

Explore a favela além dos estereótipos, um território cheio de história, arte urbana vibrante, hospitalidade e energia contagiante. Sinta-se seguro para caminhar, conversar e vivenciar de perto a cultura que transformou o futebol em paixão e identidade brasileira.`,
            en: "Enter the field where real street football happens. 2 hours of immersive game experience: play with locals, feel the atmosphere of improvised matches. Explore the favela beyond stereotypes.",
            es: "Entre en el campo donde sucede el verdadero fútbol callejero. Experiencia inmersiva con 2 horas de juego: juegue con locales, sienta el clima de los partidos improvisados. Explore la favela más allá de los estereotipos.",
            fr: "Entrez sur le terrain où se joue le vrai football de rue. Expérience immersive de 2 heures de jeu : jouez avec des locaux, ressentez l'ambiance des matchs improvisés. Explorez la favela au-delà des stéréotypes."
        },
        shortDescription: {
            pt: "Jogue na quadra do FIFA Street. 2h de jogo + imersão cultural.",
            en: "Play at the FIFA Street court. 2h game + cultural immersion.",
            es: "Juega en la cancha de FIFA Street. 2h juego + inmersión cultural.",
            fr: "Jouez sur le terrain FIFA Street. 2h de jeu + immersion culturelle."
        },
        duration: "3h",
        difficulty: "easy",
        priceFrom: 0,
        currency: "BRL",
        groupSize: { min: 2, max: 40 },
        included: {
            pt: ["Condutor local bilíngue", "Transporte ida e volta da favela", "2h de jogo na quadra FIFA STREET", "Vídeo 360°", "Fotos feitas pela equipe"],
            en: ["Bilingual local conductor", "Round trip transport", "2h game at FIFA STREET court", "360° Video", "Photos by team"],
            es: ["Conductor local bilingüe", "Transporte ida y vuelta", "2h de juego en cancha FIFA STREET", "Video 360°", "Fotos equipo"],
            fr: ["Conducteur local bilingue", "Transport aller-retour", "2h de jeu sur terrain FIFA STREET", "Vidéo 360°", "Photos équipe"]
        },
        notIncluded: {
            pt: ["Refeições e bebidas", "Gorjetas (opcionais)"],
            en: ["Meals and drinks", "Tips (optional)"],
            es: ["Comidas y bebidas", "Propinas (opcionales)"],
            fr: ["Repas et boissons", "Pourboires (optionnels)"]
        },
        itinerary: [],
        meetingPoint: {
            name: { pt: "Museu da República", en: "Museum of the Republic", es: "Museo de la República", fr: "Musée de la République" },
            address: "Rua do Catete, 153 - Bairro Catete",
            coordinates: { lat: -22.9259, lng: -43.1764 },
        },
        images: ["/images/tours/futebol-cover_v1.webp"]
    },
    {
        id: "samba-na-favela",
        slug: "tour-samba-na-favela",
        title: {
            pt: "Samba na Favela",
            en: "Samba in the Favela",
            es: "Samba en la Favela",
            fr: "Samba dans la Favela"
        },
        subtitle: {
            pt: "Viva a energia do samba na Favela",
            en: "Live the energy of samba in the Favela",
            es: "Vive la energía de la samba en la Favela",
            fr: "Vivez l'énergie de la samba dans la Favela"
        },
        description: {
            pt: `Vivencie o verdadeiro ritmo do Brasil em uma experiência cheia de energia, cores e alegria. Aprenda passos e movimentos do samba com moradores e dançarinos locais, mergulhando na cultura que faz o coração do Rio pulsar e entendendo como essa dança simboliza liberdade, celebração e identidade.

Durante o tour, explore os becos e vielas da favela acompanhado por um condutor local, conhecendo histórias, tradições e personagens que mantêm viva a essência do samba. Uma imersão vibrante que revela a força, o encanto e a emoção dessa expressão que traduz a alma brasileira.`,
            en: "Experience the true rhythm of Brazil. Learn samba steps with locals, diving into the culture that makes Rio's heart beat. Explore the alleys with a local conductor, knowing stories and characters of samba.",
            es: "Experimente el verdadero ritmo de Brasil. Aprenda pasos de samba con locales, sumergiéndose en la cultura que hace latir el corazón de Río. Explore los callejones con un conductor local, conociendo historias y personajes de la samba.",
            fr: "Vivez le vrai rythme du Brésil. Apprenez des pas de samba avec des locaux, plongeant dans la culture qui fait battre le cœur de Rio. Explorez les ruelles avec un conducteur local, découvrant histoires et personnages de la samba."
        },
        shortDescription: {
            pt: "Aula de samba com professora local + Tour cultural.",
            en: "Samba class with local teacher + Cultural tour.",
            es: "Clase de samba con profesora local + Tour cultural.",
            fr: "Cours de samba avec professeur local + Tour culturel."
        },
        duration: "3h",
        difficulty: "easy",
        priceFrom: 0,
        currency: "BRL",
        groupSize: { min: 2, max: 10 },
        included: {
            pt: ["Condutor local bilíngue", "Transporte ida e volta da favela", "Aula de samba com professora local", "Vídeo 360°", "Fotos feitas pela equipe"],
            en: ["Bilingual local conductor", "Round trip transport", "Samba class with local teacher", "360° Video", "Photos by team"],
            es: ["Conductor local bilingüe", "Transporte ida y vuelta", "Clase de samba con profesora local", "Video 360°", "Fotos equipo"],
            fr: ["Conducteur local bilingue", "Transport aller-retour", "Cours de samba avec prof locale", "Vidéo 360°", "Photos équipe"]
        },
        notIncluded: {
            pt: ["Refeições e bebidas", "Gorjetas (opcionais)"],
            en: ["Meals and drinks", "Tips (optional)"],
            es: ["Comidas y bebidas", "Propinas (opcionales)"],
            fr: ["Repas et boissons", "Pourboires (optionnels)"]
        },
        itinerary: [],
        meetingPoint: {
            name: { pt: "Museu da República", en: "Museum of the Republic", es: "Museo de la República", fr: "Musée de la République" },
            address: "Rua do Catete, 153 - Bairro Catete",
            coordinates: { lat: -22.9259, lng: -43.1764 },
        },
        images: ["/images/tours/samba-cover_v1.webp"]
    },
    {
        id: "jiu-jitsu-na-favela",
        slug: "tour-jiu-jitsu-na-favela",
        title: {
            pt: "Jiu-jítsu na Favela",
            en: "Jiu-Jitsu in the Favela",
            es: "Jiu-Jitsu en la Favela",
            fr: "Jiu-Jitsu dans la Favela"
        },
        subtitle: {
            pt: "Lute o jiu-jítsu brasileiro na favela",
            en: "Fight Brazilian Jiu-Jitsu in the favela",
            es: "Lucha jiu-jitsu brasileño en la favela",
            fr: "Combattez le Jiu-Jitsu brésilien dans la favela"
        },
        description: {
            pt: `Descubra a arte marcial que conquistou o mundo em uma experiência autêntica com instrutores locais. Aprenda as técnicas do jiu-jitsu brasileiro, conhecendo suas origens e a filosofia de disciplina, respeito e superação que moldam essa tradição reconhecida internacionalmente.

Durante o tour, vivencie o espírito do esporte dentro da favela, conheça histórias de atletas que encontraram no jiu-jitsu um caminho de transformação e sinta a força dessa prática que conecta corpo, mente e cultura. Uma imersão que revela o verdadeiro espírito do Brasil através do esporte.`,
            en: "Discover the martial art that conquered the world. Learn BJJ techniques with local instructors, knowing its origins and philosophy. Experience the spirit of the sport inside the favela.",
            es: "Descubra el arte marcial que conquistó el mundo. Aprenda técnicas de BJJ con instructores locales, conociendo sus orígenes y filosofía. Viva el espíritu del deporte dentro de la favela.",
            fr: "Découvrez l'art martial qui a conquis le monde. Apprenez des techniques de JJB avec des instructeurs locaux, connaissant ses origines et sa philosophie. Vivez l'esprit du sport dans la favela."
        },
        shortDescription: {
            pt: "Aula de jiu-jítsu com professor profissional na academia da favela.",
            en: "Jiu-jitsu class with professional teacher at the favela gym.",
            es: "Clase de jiu-jitsu con profesor profesional en gimnasio de la favela.",
            fr: "Cours de jiu-jitsu avec prof professionnel au gymnase de la favela."
        },
        duration: "3h",
        difficulty: "moderate",
        priceFrom: 0,
        currency: "BRL",
        groupSize: { min: 1, max: 6 },
        included: {
            pt: ["Condutor local bilíngue", "Transporte ida e volta da favela", "Aula de jiu-jítsu com professor profissional", "Vídeo 360°", "Fotos feitas pela equipe"],
            en: ["Bilingual local conductor", "Round trip transport", "Jiu-jitsu class with professional teacher", "360° Video", "Photos by team"],
            es: ["Conductor local bilingüe", "Transporte ida y vuelta", "Clase de jiu-jitsu", "Video 360°", "Fotos equipo"],
            fr: ["Conducteur local bilingue", "Transport aller-retour", "Cours de jiu-jitsu", "Vidéo 360°", "Photos équipe"]
        },
        notIncluded: {
            pt: ["Refeições e bebidas", "Gorjetas (opcionais)"],
            en: ["Meals and drinks", "Tips (optional)"],
            es: ["Comidas y bebidas", "Propinas (opcionales)"],
            fr: ["Repas et boissons", "Pourboires (optionnels)"]
        },
        itinerary: [],
        meetingPoint: {
            name: { pt: "Museu da República", en: "Museum of the Republic", es: "Museo de la República", fr: "Musée de la République" },
            address: "Rua do Catete, 153 - Bairro Catete",
            coordinates: { lat: -22.9259, lng: -43.1764 },
        },
        images: ["/images/tours/jiu-jitsu-cover_v1.webp"]
    },
    {
        id: "percussao-na-favela",
        slug: "tour-percussao-na-favela",
        title: {
            pt: "Percussão na Favela",
            en: "Percussion in the Favela",
            es: "Percusión en la Favela",
            fr: "Percussion dans la Favela"
        },
        subtitle: {
            pt: "Aprenda o som típico brasileiro na favela",
            en: "Learn the typical Brazilian sound in the favela",
            es: "Aprenda el sonido típico brasileño en la favela",
            fr: "Apprenez le son typique brésilien dans la favela"
        },
        description: {
            pt: `Sinta o ritmo do Brasil em uma experiência vibrante com músicos e moradores locais. Aprenda a tocar instrumentos autênticos do samba e do carnaval com integrantes da escola de samba local, descobrindo a história, o significado e a importância dessa tradição para a cultura brasileira.

Durante o tour, vivencie a energia contagiante das batidas que embalam o carnaval e fazem parte do cotidiano das favelas cariocas. Essa imersão une aprendizado, música e cultura, revelando como o samba expressa a alegria, a criatividade e o espírito coletivo do verdadeiro Brasil.`,
            en: "Feel the rhythm of Brazil. Learn to play authentic samba and carnival instruments with members of the local samba school. Experience the contagious energy of the beats.",
            es: "Sienta el ritmo de Brasil. Aprenda a tocar instrumentos auténticos de samba y carnaval con integrantes de la escuela de samba local. Viva la energía contagiosa de los ritmos.",
            fr: "Ressentez le rythme du Brésil. Apprenez à jouer des instruments authentiques de samba et carnaval avec des membres de l'école de samba locale. Vivez l'énergie contagieuse des rythmes."
        },
        shortDescription: {
            pt: "Aula de percussão com professor local e integrantes da escola de samba.",
            en: "Percussion class with local teacher and samba school members.",
            es: "Clase de percusión con profesor local e integrantes escuela de samba.",
            fr: "Cours de percussion avec prof local et membres école de samba."
        },
        duration: "3h",
        difficulty: "easy",
        priceFrom: 0,
        currency: "BRL",
        groupSize: { min: 2, max: 10 },
        included: {
            pt: ["Condutor local bilíngue", "Transporte ida e volta da favela", "Aula de percussão com professor local", "Vídeo 360°", "Fotos feitas pela equipe"],
            en: ["Bilingual local conductor", "Round trip transport", "Percussion class", "360° Video", "Photos by team"],
            es: ["Conductor local bilingüe", "Transporte ida y vuelta", "Clase de percusión", "Video 360°", "Fotos equipo"],
            fr: ["Conducteur local bilingue", "Transport aller-retour", "Cours de percussion", "Vidéo 360°", "Photos équipe"]
        },
        notIncluded: {
            pt: ["Refeições e bebidas", "Gorjetas (opcionais)"],
            en: ["Meals and drinks", "Tips (optional)"],
            es: ["Comidas y bebidas", "Propinas (opcionales)"],
            fr: ["Repas et boissons", "Pourboires (optionnels)"]
        },
        itinerary: [],
        meetingPoint: {
            name: { pt: "Museu da República", en: "Museum of the Republic", es: "Museo de la República", fr: "Musée de la République" },
            address: "Rua do Catete, 153 - Bairro Catete",
            coordinates: { lat: -22.9259, lng: -43.1764 },
        },
        images: ["/images/tours/percussao-cover_v1.webp"]
    },
    {
        id: "capoeira-na-favela",
        slug: "tour-capoeira-na-favela",
        title: {
            pt: "Capoeira na Favela",
            en: "Capoeira in the Favela",
            es: "Capoeira en la Favela",
            fr: "Capoeira dans la Favela"
        },
        subtitle: {
            pt: "Capoeira fica na favela: ginga, ritmo e energia",
            en: "Capoeira lives in the favela: ginga, rhythm and energy",
            es: "Capoeira vive en la favela: ginga, ritmo y energía",
            fr: "Capoeira vit dans la favela : ginga, rythme et énergie"
        },
        description: {
            pt: `Viva a capoeira no lugar onde ela pulsa todos os dias: na favela. Nos becos, praças e espaços da favela, o som do berimbau, as palmas e a ginga criam um clima único que mistura cultura, história e muita energia. Aqui você participa de rodas reais, aprende movimentos básicos, sente a vibração da música ao vivo e vê de perto a habilidade dos capoeiristas.

É uma experiência autêntica, leve e cheia de alegria! A favela é acolhedora, vibrante e rica em tradição. Caminhe, converse, observe e se conecte com uma cultura que transforma a capoeira em arte, união e identidade brasileira.`,
            en: "Live capoeira where it pulses every day. The sound of berimbau, clapping and ginga create a unique atmosphere. Participate in real rodas, learn basic movements, feel the vibration.",
            es: "Viva la capoeira donde pulsa todos los días. El sonido del berimbau, palmas y ginga crean un clima único. Participe de rodas reales, aprenda movimientos básicos.",
            fr: "Vivez la capoeira là où elle vibre tous les jours. Le son du berimbau, les applaudissements et la ginga créent une atmosphère unique. Participez à des rodas réelles, apprenez des mouvements de base."
        },
        shortDescription: {
            pt: "Aula de capoeira com professor + Roda cultural.",
            en: "Capoeira class with teacher + Cultural circle.",
            es: "Clase de capoeira con profesor + Rueda cultural.",
            fr: "Cours de capoeira avec prof + Cercle culturel."
        },
        duration: "3h",
        difficulty: "easy",
        priceFrom: 0,
        currency: "BRL",
        groupSize: { min: 2, max: 20 },
        included: {
            pt: ["Condutor local bilíngue", "Transporte ida e volta da favela", "Aula de capoeira com professor", "Vídeo 360°", "Fotos feitas pela equipe"],
            en: ["Bilingual local conductor", "Round trip transport", "Capoeira class", "360° Video", "Photos by team"],
            es: ["Conductor local bilingüe", "Transporte ida y vuelta", "Clase de capoeira", "Video 360°", "Fotos equipo"],
            fr: ["Conducteur local bilingue", "Transport aller-retour", "Cours de capoeira", "Vidéo 360°", "Photos équipe"]
        },
        notIncluded: {
            pt: ["Refeições e bebidas", "Gorjetas (opcionais)"],
            en: ["Meals and drinks", "Tips (optional)"],
            es: ["Comidas y bebidas", "Propinas (opcionales)"],
            fr: ["Repas et boissons", "Pourboires (optionnels)"]
        },
        itinerary: [],
        meetingPoint: {
            name: { pt: "Museu da República", en: "Museum of the Republic", es: "Museo de la República", fr: "Musée de la République" },
            address: "Rua do Catete, 153 - Bairro Catete",
            coordinates: { lat: -22.9259, lng: -43.1764 },
        },
        images: ["/images/tours/capoeira-cover_v1.webp"]
    },
    {
        id: "dancas-brasileiras-na-favela",
        slug: "tour-dancas-brasileiras-na-favela",
        title: {
            pt: "Danças brasileiras na Favela",
            en: "Brazilian Dances in the Favela",
            es: "Danzas Brasileñas en la Favela",
            fr: "Danses Brésiliennes dans la Favela"
        },
        subtitle: {
            pt: "Danças brasileiras ganham vida na favela",
            en: "Brazilian dances come to life in the favela",
            es: "Danzas brasileñas cobran vida en la favela",
            fr: "Les danses brésiliennes prennent vie dans la favela"
        },
        description: {
            pt: `Entre na favela e descubra onde os ritmos brasileiros ganham vida. Nas ruas, becos e praças, samba, funk, pagode e outros sons se misturam com a energia da favela. A música nasce naturalmente: rodas de samba na calçada, batidas improvisadas com palmas e latas, pagode animando os vizinhos e o som dos bailes que movimenta todo mundo.

Aqui você vive tudo de perto, aprende passos simples, sente o ritmo no corpo e conhece moradores que respiram música todos os dias. A favela é cultura, alegria e acolhimento. Dance, escute e se conecte com essa energia que transforma qualquer momento em festa.`,
            en: "Discover where Brazilian rhythms come to life. Samba, funk, pagode mix with favela energy. Learn simple steps, feel the rhythm, and meet residents who breathe music.",
            es: "Descubra dónde los ritmos brasileños cobran vida. Samba, funk, pagode se mezclan con la energía de la favela. Aprenda pasos simples, sienta el ritmo y conozca residentes que respiran música.",
            fr: "Découvrez où les rythmes brésiliens prennent vie. Samba, funk, pagode se mêlent à l'énergie de la favela. Apprenez des pas simples, ressentez le rythme et rencontrez des habitants qui respirent la musique."
        },
        shortDescription: {
            pt: "Aula de dança com ritmos brasileiros (Samba, Funk, Pagode).",
            en: "Dance class with Brazilian rhythms (Samba, Funk, Pagode).",
            es: "Clase de baile con ritmos brasileños.",
            fr: "Cours de danse avec rythmes brésiliens."
        },
        duration: "3h",
        difficulty: "easy",
        priceFrom: 0,
        currency: "BRL",
        groupSize: { min: 2, max: 20 },
        included: {
            pt: ["Condutor local bilíngue", "Transporte ida e volta da favela", "Aula de dança com ritmos brasileiros", "Vídeo 360°", "Fotos feitas pela equipe"],
            en: ["Bilingual local conductor", "Round trip transport", "Dance class", "360° Video", "Photos by team"],
            es: ["Conductor local bilingüe", "Transporte ida y vuelta", "Clase de baile", "Video 360°", "Fotos equipo"],
            fr: ["Conducteur local bilingue", "Transport aller-retour", "Cours de danse", "Vidéo 360°", "Photos équipe"]
        },
        notIncluded: {
            pt: ["Refeições e bebidas", "Gorjetas (opcionais)"],
            en: ["Meals and drinks", "Tips (optional)"],
            es: ["Comidas y bebidas", "Propinas (opcionales)"],
            fr: ["Repas et boissons", "Pourboires (optionnels)"]
        },
        itinerary: [],
        meetingPoint: {
            name: { pt: "Museu da República", en: "Museum of the Republic", es: "Museo de la República", fr: "Musée de la République" },
            address: "Rua do Catete, 153 - Bairro Catete",
            coordinates: { lat: -22.9259, lng: -43.1764 },
        },
        images: ["/images/tours/dancas-cover_v1.webp"]
    }
];

export async function getAllTours(): Promise<Tour[]> {
    return tours;
}

export async function getTourBySlug(slug: string): Promise<Tour | undefined> {
    return tours.find((tour) => tour.slug === slug);
}

export async function getFeaturedTours(): Promise<Tour[]> {
    // For now, return first 3 tours
    return tours.slice(0, 3);
}
