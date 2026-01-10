import { PAGE_METADATA } from "@/lib/constants";
import { AlertTriangle, CheckCircle, CreditCard, FileText, XCircle } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const lang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    return {
        title: PAGE_METADATA.terms.title[lang],
        description: PAGE_METADATA.terms.description[lang],
    };
}

export function generateStaticParams() {
    return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }, { locale: "fr" }];
}

export default async function TermosPage({ params }: PageProps) {
    const { locale } = await params;
    const currentLang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    const content = {
        pt: {
            badge: "Termos Legais",
            title: "Termos de Uso",
            lastUpdate: "Última atualização: Dezembro 2024",
            intro: "Ao utilizar os serviços do Favela-República Tour, você concorda com os termos e condições descritos abaixo. Por favor, leia atentamente antes de realizar sua reserva.",
            acceptance: "Ao fazer uma reserva, você confirma que leu, entendeu e concorda com estes termos.",
            questions: "Dúvidas sobre os termos? Entre em contato:",
            sections: [
                {
                    icon: CheckCircle,
                    title: "Reservas e Confirmações",
                    items: [
                        "Reservas devem ser feitas com pelo menos 24 horas de antecedência",
                        "A confirmação será enviada por e-mail e/ou WhatsApp após o pagamento",
                        "É necessário apresentar documento de identidade no dia do tour",
                    ],
                },
                {
                    icon: CreditCard,
                    title: "Pagamentos",
                    items: [
                        "Aceitamos PIX, cartão de crédito e dinheiro",
                        "O pagamento integral deve ser realizado antes do início do tour",
                        "Preços incluem condutor local e seguro durante o passeio",
                    ],
                },
                {
                    icon: XCircle,
                    title: "Cancelamentos",
                    items: [
                        "Cancelamento com mais de 48h: reembolso integral",
                        "Cancelamento entre 24h e 48h: reembolso de 50%",
                        "No-show (não comparecimento): sem reembolso",
                    ],
                },
                {
                    icon: AlertTriangle,
                    title: "Responsabilidades",
                    items: [
                        "Seguir as instruções do condutor local",
                        "Respeitar a favela e seus moradores",
                        "Informar sobre restrições de saúde",
                    ],
                },
            ]
        },
        en: {
            badge: "Legal Terms",
            title: "Terms of Service",
            lastUpdate: "Last updated: December 2024",
            intro: "By using Favela-República Tour services, you agree to the terms and conditions described below. Please read carefully before making your reservation.",
            acceptance: "By making a reservation, you confirm that you have read, understood and agree to these terms.",
            questions: "Questions about the terms? Contact us:",
            sections: [
                {
                    icon: CheckCircle,
                    title: "Bookings and Confirmations",
                    items: [
                        "Bookings must be made at least 24 hours in advance",
                        "Confirmation will be sent via email/WhatsApp after payment",
                        "Valid ID is required on the day of the tour",
                    ],
                },
                {
                    icon: CreditCard,
                    title: "Payments",
                    items: [
                        "We accept PIX, credit card and cash",
                        "Full payment must be made before the tour begins",
                        "Prices include local conductor and insurance",
                    ],
                },
                {
                    icon: XCircle,
                    title: "Cancellations",
                    items: [
                        "Cancellation > 48h: full refund",
                        "Cancellation 24h-48h: 50% refund",
                        "No-show: no refund",
                    ],
                },
                {
                    icon: AlertTriangle,
                    title: "Responsibilities",
                    items: [
                        "Follow the local conductor's instructions",
                        "Respect the favela and its residents",
                        "Inform about health restrictions",
                    ],
                },
            ]
        },
        es: {
            badge: "Términos Legales",
            title: "Términos de Uso",
            lastUpdate: "Última actualización: Diciembre 2024",
            intro: "Al utilizar los servicios de Favela-República Tour, usted acepta los términos y condiciones descritos a continuación.",
            acceptance: "Al realizar una reserva, confirma que ha leído y acepta estos términos.",
            questions: "¿Preguntas? Contáctenos:",
            sections: [
                {
                    icon: CheckCircle,
                    title: "Reservas",
                    items: [
                        "Reservas con al menos 24 horas de antelación",
                        "Confirmación vía email/WhatsApp tras el pago",
                        "Identificación válida el día del tour",
                    ],
                },
                {
                    icon: CreditCard,
                    title: "Pagos",
                    items: [
                        "Aceptamos PIX, tarjetas y efectivo",
                        "Pago total antes de iniciar el tour",
                        "Precios incluyen conductor y seguro",
                    ],
                },
                {
                    icon: XCircle,
                    title: "Cancelaciones",
                    items: [
                        "Más de 48h: reembolso total",
                        "Entre 24h y 48h: reembolso del 50%",
                        "No-show: sin reembolso",
                    ],
                },
            ]
        },
        fr: {
            badge: "Mentions Légales",
            title: "Conditions d'Utilisation",
            lastUpdate: "Dernière mise à jour : Décembre 2024",
            intro: "En utilisant les services de Favela-República Tour, vous acceptez les conditions décrites ci-dessous.",
            acceptance: "En réservant, vous confirmez avoir lu et accepté ces conditions.",
            questions: "Des questions ? Contactez-nous :",
            sections: [
                {
                    icon: CheckCircle,
                    title: "Réservations",
                    items: [
                        "Réservations au moins 24h à l'avance",
                        "Confirmation par email/WhatsApp après paiement",
                        "Pièce d'identité requise le jour de la visite",
                    ],
                },
                {
                    icon: CreditCard,
                    title: "Paiements",
                    items: [
                        "Nous acceptons PIX, cartes et espèces",
                        "Paiement complet avant le début de la visite",
                        "Les prix incluent le conducteur et l'assurance",
                    ],
                },
                {
                    icon: XCircle,
                    title: "Annulations",
                    items: [
                        "Plus de 48h : remboursement intégral",
                        "Entre 24h et 48h : remboursement de 50%",
                        "No-show : aucun remboursement",
                    ],
                },
            ]
        }
    };

    const t = content[currentLang];

    return (
        <main className="min-h-screen bg-neutral-50 pt-24">
            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
                <div className="container-custom text-center relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-semibold uppercase tracking-wider mb-6">
                        <FileText className="w-4 h-4" />
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
                    <p className="text-xl text-neutral-600 leading-relaxed mb-12 text-center font-light">
                        {t.intro}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-soft-lg hover:shadow-soft-xl transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <h2 className="font-heading text-xl font-bold text-neutral-900">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <ul className="space-y-3">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-neutral-600 text-sm">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>

                    {/* Acceptance Notice */}
                    <div className="mt-12 p-8 bg-primary-50 border border-primary-100 rounded-2xl text-center">
                        <p className="text-primary-900 font-medium">
                            {t.acceptance}
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-8 text-center text-neutral-500">
                        <p>
                            {t.questions}
                            {" "}
                            <a href="mailto:favelarepublica@gmail.com" className="text-primary-600 hover:underline font-semibold">
                                favelarepublica@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
