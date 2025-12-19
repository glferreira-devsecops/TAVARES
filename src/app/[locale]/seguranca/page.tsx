import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, MapPin, Phone, Shield, Users } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Segurança | Favela-República Tour",
    description: "Conheça as medidas de segurança que tornam a Favela a comunidade mais segura do Rio de Janeiro para turismo.",
};

export function generateStaticParams() {
    return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }, { locale: "fr" }];
}

export default async function SegurancaPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const isPt = locale === "pt" || locale === "es" || locale === "fr";

    const content = {
        badge: isPt ? "Sua Segurança" : "Your Safety",
        title: isPt ? "A comunidade mais segura do Rio" : "Rio's Safest Community",
        subtitle: isPt
            ? "A Favela é sede da UPP (Unidade de Polícia Pacificadora) desde 2010, tornando-a um dos destinos mais seguros para turismo no Rio de Janeiro."
            : "Favela has been home to the UPP (Pacifying Police Unit) since 2010, making it one of the safest tourism destinations in Rio de Janeiro.",
        features: isPt ? [
            {
                icon: Shield,
                title: "Base da UPP",
                description: "A comunidade abriga uma base permanente da Polícia Militar, garantindo segurança 24 horas por dia.",
            },
            {
                icon: Users,
                title: "Guias Locais",
                description: "Todos os nossos guias são moradores da comunidade, conhecem cada viela e garantem sua segurança durante todo o tour.",
            },
            {
                icon: MapPin,
                title: "Rotas Seguras",
                description: "Seguimos apenas rotas pré-estabelecidas e conhecidas, evitando qualquer área de risco.",
            },
            {
                icon: Phone,
                title: "Comunicação Direta",
                description: "Mantemos contato direto com a base policial e temos acesso imediato em caso de qualquer necessidade.",
            },
            {
                icon: Clock,
                title: "Horários Adequados",
                description: "Nossos tours acontecem em horários estratégicos, sempre durante o dia, para máxima segurança.",
            },
            {
                icon: CheckCircle,
                title: "Seguro Incluso",
                description: "Todos os participantes são cobertos por seguro durante o tour, para sua total tranquilidade.",
            },
        ] : [
            {
                icon: Shield,
                title: "UPP Police Base",
                description: "The community houses a permanent Military Police base, ensuring 24-hour security.",
            },
            {
                icon: Users,
                title: "Local Guides",
                description: "All our guides are community residents who know every alley and ensure your safety throughout the tour.",
            },
            {
                icon: MapPin,
                title: "Safe Routes",
                description: "We follow only pre-established and known routes, avoiding any risk areas.",
            },
            {
                icon: Phone,
                title: "Direct Communication",
                description: "We maintain direct contact with the police base and have immediate access in case of any need.",
            },
            {
                icon: Clock,
                title: "Appropriate Hours",
                description: "Our tours take place at strategic times, always during the day, for maximum safety.",
            },
            {
                icon: CheckCircle,
                title: "Insurance Included",
                description: "All participants are covered by insurance during the tour, for your complete peace of mind.",
            },
        ],
        cta: isPt ? "Reservar Tour Seguro" : "Book Safe Tour",
    };

    return (
        <main className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative py-12 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/social/IMG_0546_v1.webp')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />

                <div className="container-custom relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-semibold uppercase tracking-wider mb-6">
                        <Shield className="w-4 h-4" />
                        {content.badge}
                    </span>
                    <h1 className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        {content.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        {content.subtitle}
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-12 md:py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content.features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="group bg-white p-6 md:p-8 rounded-2xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                                        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-20 bg-neutral-900">
                <div className="container-custom text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                        {isPt ? "Pronto para uma experiência segura?" : "Ready for a safe experience?"}
                    </h2>
                    <Link href={`/${locale}/tours`}>
                        <Button variant="primary" size="lg" className="rounded-full px-10">
                            {content.cta}
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
