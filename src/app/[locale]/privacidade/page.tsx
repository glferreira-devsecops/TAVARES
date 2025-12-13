import { Metadata } from "next";
import { Lock, Eye, Database, Shield, UserCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacidade | Favela-República Tour",
    description: "Política de privacidade da Favela-República Tour. Saiba como protegemos seus dados pessoais.",
};

export function generateStaticParams() {
    return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }, { locale: "fr" }];
}

export default async function PrivacidadePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isPt = locale === "pt" || locale === "es" || locale === "fr";

    const content = {
        title: isPt ? "Política de Privacidade" : "Privacy Policy",
        lastUpdate: isPt ? "Última atualização: Dezembro 2024" : "Last updated: December 2024",
        intro: isPt
            ? "A Favela-República Tour está comprometida com a proteção da sua privacidade. Esta política explica como coletamos, usamos e protegemos suas informações pessoais."
            : "Favela-República Tour is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.",
        sections: isPt ? [
            {
                icon: Database,
                title: "Dados que Coletamos",
                items: [
                    "Nome completo e informações de contato (e-mail, telefone)",
                    "Informações de reserva (data, horário, número de participantes)",
                    "Preferências de idioma e nacionalidade",
                    "Feedback e avaliações dos tours",
                ],
            },
            {
                icon: Eye,
                title: "Como Usamos seus Dados",
                items: [
                    "Processar e confirmar suas reservas de tour",
                    "Enviar informações importantes sobre seu tour",
                    "Melhorar nossos serviços com base em feedback",
                    "Cumprir obrigações legais e de segurança",
                ],
            },
            {
                icon: Shield,
                title: "Proteção de Dados",
                items: [
                    "Criptografia SSL em todas as transmissões",
                    "Acesso restrito apenas a funcionários autorizados",
                    "Não vendemos ou compartilhamos dados com terceiros para marketing",
                    "Conformidade com a LGPD (Lei Geral de Proteção de Dados)",
                ],
            },
            {
                icon: UserCheck,
                title: "Seus Direitos",
                items: [
                    "Acesso aos seus dados pessoais a qualquer momento",
                    "Correção de informações incorretas ou desatualizadas",
                    "Exclusão dos seus dados mediante solicitação",
                    "Revogação de consentimento para comunicações",
                ],
            },
            {
                icon: Lock,
                title: "Cookies e Rastreamento",
                items: [
                    "Usamos cookies essenciais para funcionamento do site",
                    "Google Analytics para melhorar a experiência do usuário",
                    "Você pode desativar cookies nas configurações do navegador",
                    "Não usamos cookies para publicidade direcionada",
                ],
            },
            {
                icon: FileText,
                title: "Retenção de Dados",
                items: [
                    "Dados de reserva: mantidos por 5 anos para fins fiscais",
                    "Feedback e avaliações: mantidos indefinidamente (anonimizados)",
                    "Dados de contato: excluídos após 2 anos de inatividade",
                    "Você pode solicitar exclusão antecipada a qualquer momento",
                ],
            },
        ] : [
            {
                icon: Database,
                title: "Data We Collect",
                items: [
                    "Full name and contact information (email, phone)",
                    "Booking information (date, time, number of participants)",
                    "Language preferences and nationality",
                    "Feedback and tour reviews",
                ],
            },
            {
                icon: Eye,
                title: "How We Use Your Data",
                items: [
                    "Process and confirm your tour bookings",
                    "Send important information about your tour",
                    "Improve our services based on feedback",
                    "Comply with legal and security obligations",
                ],
            },
            {
                icon: Shield,
                title: "Data Protection",
                items: [
                    "SSL encryption on all transmissions",
                    "Access restricted to authorized personnel only",
                    "We do not sell or share data with third parties for marketing",
                    "Compliance with LGPD (Brazilian Data Protection Law)",
                ],
            },
            {
                icon: UserCheck,
                title: "Your Rights",
                items: [
                    "Access your personal data at any time",
                    "Correction of incorrect or outdated information",
                    "Deletion of your data upon request",
                    "Revocation of consent for communications",
                ],
            },
            {
                icon: Lock,
                title: "Cookies and Tracking",
                items: [
                    "We use essential cookies for site functionality",
                    "Google Analytics to improve user experience",
                    "You can disable cookies in browser settings",
                    "We do not use cookies for targeted advertising",
                ],
            },
            {
                icon: FileText,
                title: "Data Retention",
                items: [
                    "Booking data: kept for 5 years for tax purposes",
                    "Feedback and reviews: kept indefinitely (anonymized)",
                    "Contact data: deleted after 2 years of inactivity",
                    "You can request early deletion at any time",
                ],
            },
        ],
        contact: isPt
            ? "Para exercer seus direitos ou tirar dúvidas sobre privacidade, entre em contato:"
            : "To exercise your rights or ask questions about privacy, contact us:",
    };

    return (
        <main className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
                <div className="container-custom text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-semibold uppercase tracking-wider mb-6">
                        <Lock className="w-4 h-4" />
                        {isPt ? "Proteção de Dados" : "Data Protection"}
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        {content.title}
                    </h1>
                    <p className="text-neutral-400">{content.lastUpdate}</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <div className="container-custom max-w-4xl">
                    <p className="text-xl text-neutral-600 leading-relaxed mb-12 text-center">
                        {content.intro}
                    </p>

                    <div className="space-y-12">
                        {content.sections.map((section, index) => {
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
                        <h3 className="font-heading text-xl font-bold mb-4">{isPt ? "Contato" : "Contact"}</h3>
                        <p className="text-neutral-300 mb-4">{content.contact}</p>
                        <a
                            href="mailto:privacidade@favelarepublicatour.com"
                            className="text-orange-400 hover:text-orange-300 font-semibold"
                        >
                            privacidade@favelarepublicatour.com
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
