import { Metadata } from "next";
import { FileText, CheckCircle, AlertTriangle, CreditCard, XCircle, Scale } from "lucide-react";

export const metadata: Metadata = {
    title: "Termos de Uso | Favela-República Tour",
    description: "Termos e condições de uso dos serviços da Favela-República Tour.",
};

export function generateStaticParams() {
    return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }, { locale: "fr" }];
}

export default async function TermosPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isPt = locale === "pt" || locale === "es" || locale === "fr";

    const content = {
        title: isPt ? "Termos de Uso" : "Terms of Service",
        lastUpdate: isPt ? "Última atualização: Dezembro 2024" : "Last updated: December 2024",
        intro: isPt
            ? "Ao utilizar os serviços da Favela-República Tour, você concorda com os termos e condições descritos abaixo. Por favor, leia atentamente antes de realizar sua reserva."
            : "By using Favela-República Tour services, you agree to the terms and conditions described below. Please read carefully before making your reservation.",
        sections: isPt ? [
            {
                icon: CheckCircle,
                title: "Reservas e Confirmações",
                items: [
                    "Reservas devem ser feitas com pelo menos 24 horas de antecedência",
                    "A confirmação será enviada por e-mail e/ou WhatsApp após o pagamento",
                    "É necessário apresentar documento de identidade no dia do tour",
                    "Menores de 18 anos devem estar acompanhados de responsável legal",
                    "Reservas para grupos acima de 10 pessoas requerem contato prévio",
                ],
            },
            {
                icon: CreditCard,
                title: "Pagamentos",
                items: [
                    "Aceitamos PIX, cartão de crédito e dinheiro (somente para reservas presenciais)",
                    "O pagamento integral deve ser realizado antes do início do tour",
                    "Preços podem variar conforme o tipo de tour e número de participantes",
                    "Descontos especiais podem ser oferecidos para grupos ou residentes locais",
                    "Todos os preços incluem guia local e seguro durante o passeio",
                ],
            },
            {
                icon: XCircle,
                title: "Cancelamentos e Reembolsos",
                items: [
                    "Cancelamento com mais de 48h: reembolso integral",
                    "Cancelamento entre 24h e 48h: reembolso de 50%",
                    "Cancelamento com menos de 24h: sem reembolso",
                    "Em caso de condições climáticas adversas, oferecemos reagendamento gratuito",
                    "No-show (não comparecimento sem aviso): sem reembolso",
                ],
            },
            {
                icon: AlertTriangle,
                title: "Responsabilidades do Participante",
                items: [
                    "Seguir as instruções do guia durante todo o passeio",
                    "Usar calçado adequado (tênis ou sapato fechado recomendado)",
                    "Não consumir bebidas alcoólicas ou substâncias ilícitas durante o tour",
                    "Respeitar a comunidade, moradores e suas propriedades",
                    "Não fotografar pessoas sem consentimento prévio",
                    "Informar previamente sobre condições de saúde ou limitações físicas",
                ],
            },
            {
                icon: Scale,
                title: "Limitação de Responsabilidade",
                items: [
                    "A Favela-República não se responsabiliza por objetos pessoais perdidos ou roubados",
                    "Participantes assumem os riscos inerentes a atividades turísticas",
                    "Oferecemos seguro básico que cobre acidentes durante o tour",
                    "Em caso de emergência médica, acionaremos os serviços de resgate",
                    "Condições climáticas extremas podem resultar em cancelamento sem aviso prévio",
                ],
            },
            {
                icon: FileText,
                title: "Propriedade Intelectual",
                items: [
                    "Todo o conteúdo do site é propriedade da Favela-República Tour",
                    "Fotos e vídeos oficiais do tour podem ser usados para divulgação",
                    "É proibida a reprodução comercial sem autorização por escrito",
                    "O uso da marca Favela-República requer autorização prévia",
                ],
            },
        ] : [
            {
                icon: CheckCircle,
                title: "Bookings and Confirmations",
                items: [
                    "Bookings must be made at least 24 hours in advance",
                    "Confirmation will be sent by email and/or WhatsApp after payment",
                    "Valid ID is required on the day of the tour",
                    "Minors under 18 must be accompanied by a legal guardian",
                    "Group bookings over 10 people require prior contact",
                ],
            },
            {
                icon: CreditCard,
                title: "Payments",
                items: [
                    "We accept PIX, credit card and cash (in-person bookings only)",
                    "Full payment must be made before the tour begins",
                    "Prices may vary according to tour type and number of participants",
                    "Special discounts may be offered for groups or local residents",
                    "All prices include local guide and insurance during the tour",
                ],
            },
            {
                icon: XCircle,
                title: "Cancellations and Refunds",
                items: [
                    "Cancellation more than 48h before: full refund",
                    "Cancellation between 24h and 48h: 50% refund",
                    "Cancellation less than 24h before: no refund",
                    "In case of adverse weather conditions, we offer free rescheduling",
                    "No-show (non-attendance without notice): no refund",
                ],
            },
            {
                icon: AlertTriangle,
                title: "Participant Responsibilities",
                items: [
                    "Follow the guide's instructions throughout the tour",
                    "Wear appropriate footwear (sneakers or closed shoes recommended)",
                    "Do not consume alcoholic beverages or illicit substances during the tour",
                    "Respect the community, residents and their properties",
                    "Do not photograph people without prior consent",
                    "Inform in advance about health conditions or physical limitations",
                ],
            },
            {
                icon: Scale,
                title: "Limitation of Liability",
                items: [
                    "Favela-República is not responsible for lost or stolen personal items",
                    "Participants assume the inherent risks of tourist activities",
                    "We offer basic insurance covering accidents during the tour",
                    "In case of medical emergency, we will contact rescue services",
                    "Extreme weather conditions may result in cancellation without prior notice",
                ],
            },
            {
                icon: FileText,
                title: "Intellectual Property",
                items: [
                    "All website content is property of Favela-República Tour",
                    "Official tour photos and videos may be used for promotion",
                    "Commercial reproduction without written authorization is prohibited",
                    "Use of the Favela-República brand requires prior authorization",
                ],
            },
        ],
    };

    return (
        <main className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
                <div className="container-custom text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-semibold uppercase tracking-wider mb-6">
                        <FileText className="w-4 h-4" />
                        {isPt ? "Termos Legais" : "Legal Terms"}
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

                    <div className="space-y-8">
                        {content.sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-orange-600" />
                                        </div>
                                        <h2 className="font-heading text-2xl font-bold text-neutral-900">
                                            {index + 1}. {section.title}
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

                    {/* Acceptance Notice */}
                    <div className="mt-12 p-6 bg-orange-50 border border-orange-200 rounded-xl text-center">
                        <p className="text-orange-800 font-medium">
                            {isPt
                                ? "Ao fazer uma reserva, você confirma que leu, entendeu e concorda com estes termos."
                                : "By making a reservation, you confirm that you have read, understood and agree to these terms."}
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mt-8 text-center text-neutral-500">
                        <p>
                            {isPt ? "Dúvidas sobre os termos? Entre em contato:" : "Questions about the terms? Contact us:"}
                            {" "}
                            <a href="mailto:contato@favelarepublicatour.com" className="text-orange-600 hover:underline">
                                contato@favelarepublicatour.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
