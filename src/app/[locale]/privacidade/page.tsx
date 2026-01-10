import { PAGE_METADATA } from "@/lib/constants";
import { Database, Eye, FileText, Lock, Shield, UserCheck } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const lang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    return {
        title: PAGE_METADATA.privacy.title[lang],
        description: PAGE_METADATA.privacy.description[lang],
    };
}

export function generateStaticParams() {
    return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }, { locale: "fr" }];
}

export default async function PrivacidadePage({ params }: PageProps) {
    const { locale } = await params;
    const currentLang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    const content = {
        pt: {
            badge: "Proteção de Dados",
            title: "Política de Privacidade",
            lastUpdate: "Última atualização: Dezembro 2024",
            intro: "O Favela-República Tour está comprometido com a proteção da sua privacidade. Esta política explica como coletamos, usamos e protegemos suas informações pessoais.",
            contactLabel: "Contato",
            contactIntro: "Para exercer seus direitos ou tirar dúvidas sobre privacidade, entre em contato:",
            sections: [
                { icon: Database, title: "Dados que Coletamos", items: ["Nome completo e informações de contato (e-mail, telefone)", "Informações de reserva (data, horário, número de participantes)", "Preferências de idioma e nacionalidade", "Feedback e avaliações dos tours"] },
                { icon: Eye, title: "Como Usamos seus Dados", items: ["Processar e confirmar suas reservas de tour", "Enviar informações importantes sobre seu tour", "Melhorar nossos serviços com base em feedback", "Cumprir obrigações legais e de segurança"] },
                { icon: Shield, title: "Proteção de Dados", items: ["Criptografia SSL em todas as transmissões", "Acesso restrito apenas a funcionários autorizados", "Não vendemos ou compartilhamos dados com terceiros para marketing", "Conformidade com a LGPD (Lei Geral de Proteção de Dados)"] },
                { icon: UserCheck, title: "Seus Direitos", items: ["Acesso aos seus dados pessoais a qualquer momento", "Correção de informações incorretas ou desatualizadas", "Exclusão dos seus dados mediante solicitação", "Revogação de consentimento para comunicações"] },
                { icon: Lock, title: "Cookies e Rastreamento", items: ["Usamos cookies essenciais para funcionamento do site", "Google Analytics para melhorar a experiência do usuário", "Você pode desativar cookies nas configurações do navegador", "Não usamos cookies para publicidade direcionada"] },
                { icon: FileText, title: "Retenção de Dados", items: ["Dados de reserva: mantidos por 5 anos para fins fiscais", "Feedback e avaliações: mantidos indefinidamente (anonimizados)", "Dados de contato: excluídos após 2 anos de inatividade", "Você pode solicitar exclusão antecipada a qualquer momento"] }
            ]
        },
        en: {
            badge: "Data Protection",
            title: "Privacy Policy",
            lastUpdate: "Last updated: December 2024",
            intro: "Favela-República Tour is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.",
            contactLabel: "Contact",
            contactIntro: "To exercise your rights or ask questions about privacy, contact us:",
            sections: [
                { icon: Database, title: "Data We Collect", items: ["Full name and contact information (email, phone)", "Booking information (date, time, number of participants)", "Language preferences and nationality", "Feedback and tour reviews"] },
                { icon: Eye, title: "How We Use Your Data", items: ["Process and confirm your tour bookings", "Send important information about your tour", "Improve our services based on feedback", "Comply with legal and security obligations"] },
                { icon: Shield, title: "Data Protection", items: ["SSL encryption on all transmissions", "Access restricted to authorized personnel only", "We do not sell or share data with third parties for marketing", "Compliance with LGPD (Brazilian Data Protection Law)"] },
                { icon: UserCheck, title: "Your Rights", items: ["Access your personal data at any time", "Correction of incorrect or outdated information", "Deletion of your data upon request", "Revocation of consent for communications"] },
                { icon: Lock, title: "Cookies and Tracking", items: ["We use essential cookies for site functionality", "Google Analytics to improve user experience", "You can disable cookies in browser settings", "We do not use cookies for targeted advertising"] },
                { icon: FileText, title: "Data Retention", items: ["Booking data: kept for 5 years for tax purposes", "Feedback and reviews: kept indefinitely (anonymized)", "Contact data: deleted after 2 years of inactivity", "You can request early deletion at any time"] }
            ]
        },
        es: {
            badge: "Protección de Datos",
            title: "Política de Privacidad",
            lastUpdate: "Última actualización: Diciembre 2024",
            intro: "Favela-República Tour se compromete a proteger su privacidad. Esta política explica cómo recopilamos, usamos y protegemos su información personal.",
            contactLabel: "Contacto",
            contactIntro: "Para ejercer sus derechos o hacer preguntas sobre privacidad, contáctenos:",
            sections: [
                { icon: Database, title: "Datos que Recopilamos", items: ["Nombre completo e información de contacto (correo electrónico, teléfono)", "Información de reserva (fecha, hora, número de participantes)", "Preferencias de idioma y nacionalidad", "Comentarios y reseñas de los tours"] },
                { icon: Eye, title: "Cómo Usamos sus Datos", items: ["Procesar y confirmar sus reservas de tour", "Enviar información importante sobre su tour", "Mejorar nuestros servicios basados en los comentarios", "Cumplir con las obligaciones legales y de seguridad"] },
                { icon: Shield, title: "Protección de Datos", items: ["Cifrado SSL en todas las transmisiones", "Acceso restringido solo al personal autorizado", "No vendemos ni compartimos datos con terceros para marketing", "Cumplimiento de la LGPD (Ley General de Protección de Datos)"] },
                { icon: UserCheck, title: "Sus Derechos", items: ["Acceso a sus datos personales en cualquier momento", "Corrección de información incorrecta o desactualizada", "Eliminación de sus datos bajo petición", "Revocación del consentimiento para comunicaciones"] },
                { icon: Lock, title: "Cookies y Seguimiento", items: ["Usamos cookies esenciales para el funcionamiento del sitio", "Google Analytics para mejorar la experiencia del usuario", "Puede desactivar las cookies en la configuración del navegador", "No usamos cookies para publicidad dirigida"] },
                { icon: FileText, title: "Retención de Datos", items: ["Datos de reserva: mantenidos durante 5 años para fines fiscales", "Comentarios y reseñas: mantenidos indefinidamente (anonimizados)", "Datos de contacto: eliminados después de 2 años de inactividad", "Puede solicitar la eliminación anticipada en cualquier momento"] }
            ]
        },
        fr: {
            badge: "Protection des Données",
            title: "Politique de Confidentialité",
            lastUpdate: "Dernière mise à jour : Décembre 2024",
            intro: "Favela-República Tour s'engage à protéger votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles.",
            contactLabel: "Contact",
            contactIntro: "Pour exercer vos droits ou poser des questions sur la confidentialité, contactez-nous :",
            sections: [
                { icon: Database, title: "Données que nous Collectons", items: ["Nom complet et coordonnées (e-mail, téléphone)", "Informations de réservation (date, heure, nombre de participants)", "Préférences linguistiques et nationalité", "Commentaires et avis sur les visites"] },
                { icon: Eye, title: "Comment nous Utilisons vos Données", items: ["Traiter et confirmer vos réservations de visite", "Envoyer des informations importantes sur votre visite", "Améliorer nos services sur la base des commentaires", "Respecter les obligations légales et de sécurité"] },
                { icon: Shield, title: "Protection des Données", items: ["Cryptage SSL sur toutes les transmissions", "Accès restreint au personnel autorisé uniquement", "Nous ne vendons ni ne partageons de données avec des tiers à des fins de marketing", "Conformité à la LGPD (Loi brésilienne sur la protection des données)"] },
                { icon: UserCheck, title: "Vos Droits", items: ["Accéder à vos données personnelles à tout moment", "Rectification d'informations incorrectes ou obsolètes", "Suppression de vos données sur demande", "Révocation du consentement pour les communications"] },
                { icon: Lock, title: "Cookies et Suivi", items: ["Nous utilisons des cookies essentiels au fonctionnement du site", "Google Analytics pour améliorer l'expérience utilisateur", "Vous pouvez désactiver les cookies dans les paramètres du navigateur", "Nous n'utilisons pas de cookies pour la publicité ciblée"] },
                { icon: FileText, title: "Rétention des Données", items: ["Données de réservation : conservées pendant 5 ans à des fins fiscales", "Commentaires et avis : conservés indéfiniment (anonymisés)", "Coordonnées : supprimées après 2 ans d'inactivité", "Vous pouvez demander une suppression anticipée à tout moment"] }
            ]
        }
    };

    const t = content[currentLang];

    return (
        <main className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
                <div className="container-custom text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-semibold uppercase tracking-wider mb-6">
                        <Lock className="w-4 h-4" />
                        {t.badge}
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        {t.title}
                    </h1>
                    <p className="text-neutral-400">{t.lastUpdate}</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="container-custom max-w-4xl">
                    <p className="text-xl text-neutral-600 leading-relaxed mb-12 text-center">
                        {t.intro}
                    </p>

                    <div className="space-y-12">
                        {t.sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-orange-600" />
                                        </div>
                                        <h2 className="font-heading text-2xl font-bold text-neutral-900">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-neutral-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    {/* Contact Section */}
                    <div className="mt-16 p-8 bg-neutral-900 rounded-2xl text-white text-center">
                        <h3 className="font-heading text-xl font-bold mb-4">{t.contactLabel}</h3>
                        <p className="text-neutral-300 mb-4">{t.contactIntro}</p>
                        <a
                            href="mailto:favelarepublica@gmail.com"
                            className="text-orange-400 hover:text-orange-300 font-semibold"
                        >
                            favelarepublica@gmail.com
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
