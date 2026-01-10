import { Button } from "@/components/ui/button";
import { PAGE_METADATA } from "@/lib/constants";
import { CheckCircle, Clock, MapPin, Phone, Shield, Users } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const lang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    return {
        title: PAGE_METADATA.security.title[lang],
        description: PAGE_METADATA.security.description[lang],
    };
}

export function generateStaticParams() {
    return [{ locale: "pt" }, { locale: "en" }, { locale: "es" }, { locale: "fr" }];
}

export default async function SegurancaPage({ params }: PageProps) {
    const { locale } = await params;
    const currentLang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    const content = {
        pt: {
            badge: "Sua Segurança",
            title: "A favela mais segura do Rio",
            subtitle: "O Favela-República é reconhecido como um modelo de segurança e convivência pacífica em meio à autêntica cultura carioca.",
            cta: "Reservar Tour Seguro",
            ctaReady: "Pronto para uma experiência segura?",
            features: [
                { icon: Users, title: "Condutores Locais", description: "Todos os nossos condutores são moradores da favela, conhecem cada viela e garantem sua segurança durante todo o tour." },
                { icon: MapPin, title: "Rotas Seguras", description: "Seguimos apenas rotas pré-estabelecidas e conhecidas, evitando qualquer área de risco." },
                { icon: Phone, title: "Comunicação Direta", description: "Mantemos contato direto com líderes locais e temos acesso imediato em caso de qualquer necessidade." },
                { icon: Clock, title: "Horários Adequados", description: "Nossos tours acontecem em horários estratégicos, sempre durante o dia, para máxima segurança." },
                { icon: CheckCircle, title: "Seguro Incluso", description: "Todos os participantes são cobertos por seguro durante o tour, para sua total tranquilidade." },
            ]
        },
        en: {
            badge: "Your Safety",
            title: "Rio's Safest Favela",
            subtitle: "Favela-República is recognized as a model for safety and peaceful coexistence amidst authentic carioca culture.",
            cta: "Book Safe Tour",
            ctaReady: "Ready for a safe experience?",
            features: [
                { icon: Users, title: "Local Conductors", description: "All our conductors are favela residents who know every alley and ensure your safety throughout the tour." },
                { icon: MapPin, title: "Safe Routes", description: "We follow only pre-established and known routes, avoiding any risk areas." },
                { icon: Phone, title: "Direct Communication", description: "We maintain direct contact with local leaders and have immediate access in case of any need." },
                { icon: Clock, title: "Appropriate Hours", description: "Our tours take place at strategic times, always during the day, for maximum safety." },
                { icon: CheckCircle, title: "Insurance Included", description: "All participants are covered by insurance during the tour, for your complete peace of mind." },
            ]
        },
        es: {
            badge: "Tu Seguridad",
            title: "La favela más segura de Río",
            subtitle: "El Favela-República es reconocido como un modelo de seguridad y convivencia pacífica.",
            cta: "Reservar Tour Seguro",
            ctaReady: "Pronto para una experiencia segura?",
            features: [
                { icon: Users, title: "Conductores Locales", description: "Todos nuestros conductores son residentes de la favela, conocen cada callejón y garantizan su seguridad durante todo el tour." },
                { icon: MapPin, title: "Rutas Seguras", description: "Seguimos solo rutas preestablecidas y conocidas, evitando cualquier área de riesgo." },
                { icon: Phone, title: "Comunicación Directa", description: "Mantenemos contacto directo con líderes locales y tenemos acceso inmediato en caso de cualquier necesidad." },
                { icon: Clock, title: "Horarios Adecuados", description: "Nuestros tours ocurren en horarios estratégicos, siempre durante el día, para máxima seguridad." },
                { icon: CheckCircle, title: "Seguro Incluido", description: "Todos los participantes están cubiertos por un seguro durante el tour, para su total tranquilidad." },
            ]
        },
        fr: {
            badge: "Votre Sécurité",
            title: "La favela la plus sûre de Rio",
            subtitle: "Le Favela-República est reconnu comme un modèle de sécurité et de convivialité pacifique.",
            cta: "Réserver une Visite Sûre",
            ctaReady: "Prêt pour une expérience en toute sécurité ?",
            features: [
                { icon: Users, title: "Conducteurs Locaux", description: "Tous nos conducteurs sont des résidents de la favela, connaissent chaque ruelle et assurent votre sécurité tout au long de la visite." },
                { icon: MapPin, title: "Itinéraires Sûrs", description: "Nous ne suivons que des itinéraires préétablis et connus, évitant toute zone à risque." },
                { icon: Phone, title: "Communication Directe", description: "Nous maintenons un contact direct avec les leaders locaux et avons un accès immédiat em cas de besoin." },
                { icon: Clock, title: "Horaires Appropriés", description: "Nos visites ont lieu à des moments stratégiques, toujours pendant la journée, pour une sécurité maximale." },
                { icon: CheckCircle, title: "Assurance Incluse", description: "Tous les participants sont couverts par une assurance pendant la visite, pour votre totale tranquillité d'esprit." },
            ]
        }
    };

    const t = content[currentLang];

    return (
        <main className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative py-12 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/social/IMG_0546_v1.webp')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />

                <div className="container-custom relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-sm font-semibold uppercase tracking-wider mb-6">
                        <Shield className="w-4 h-4" />
                        {t.badge}
                    </span>
                    <h1 className="font-heading text-3xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                        {t.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-12 md:py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.features.map((feature, index) => {
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
                        {t.ctaReady}
                    </h2>
                    <Link href={`/${locale}/tours`}>
                        <Button variant="primary" size="lg" className="rounded-full px-10">
                            {t.cta}
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
