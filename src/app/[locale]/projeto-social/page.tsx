import { CTABanner } from "@/components/sections/cta-banner";
import { PAGE_METADATA } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const lang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    return {
        title: PAGE_METADATA.social.title[lang],
        description: PAGE_METADATA.social.description[lang],
    };
}

const SOCIAL_IMAGES = [
    "IMG_0540_v1.webp", "IMG_0546_v1.webp", "IMG_0551_v1.webp", "IMG_0593_v1.webp",
    "PHOTO-2022-09-20-13-10-53_v1.webp", "PHOTO-2022-09-20-13-43-22_v1.webp", "PHOTO-2024-05-13-15-54-41_v1.webp",
    "PHOTO-2022-09-20-13-15-24_v1.webp", "PHOTO-2022-09-20-13-29-49_v1.webp", "PHOTO-2022-09-20-13-52-41_v1.webp",
    "PHOTO-2022-09-20-13-54-16_v1.webp", "PHOTO-2022-09-20-14-05-06_v1.webp", "PHOTO-2022-09-20-14-10-30_v1.webp"
];

export default async function SocialProjectPage({ params }: PageProps) {
    const { locale } = await params;
    const currentLang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    const content = {
        pt: {
            badge: "Impacto Social",
            title: "Transformando Vidas",
            description: "Parte da renda dos nossos tours é revertida para projetos sociais no Favela-República. Apoiamos iniciativas de esporte, cultura e educação para as crianças e jovens da favela."
        },
        en: {
            badge: "Social Impact",
            title: "Transforming Lives",
            description: "Part of the income from our tours is reinvested in social projects within Favela-República. We support sports, culture, and education initiatives for the children and youth of the favela."
        },
        es: {
            badge: "Impacto Social",
            title: "Transformando Vidas",
            description: "Parte de los ingresos de nuestros tours se reinvierte en proyectos sociales en la favela. Apoyamos iniciativas de deporte, cultura y educación para los niños y jóvenes de la Favela."
        },
        fr: {
            badge: "Impact Social",
            title: "Transformer des Vies",
            description: "Une partie des revenus de nos visites est réinvestie dans des projets sociaux au sein de la favela. Nous soutenons des initiatives sportives, culturelles et éducatives pour les enfants et les jeunes de Favela."
        }
    };

    const t = content[currentLang];

    return (
        <main className="min-h-screen bg-white relative overflow-hidden">
            {/* Background Decoration - Awwwards depth */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none select-none overflow-hidden -z-0">
                <div className="absolute top-[5%] -left-[10%] text-[40vw] font-black text-neutral-900/[0.03] leading-none tracking-tighter whitespace-nowrap">
                    IMPACT
                </div>
            </div>

            <div className="container-custom py-12 md:py-24 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 font-bold text-xs uppercase tracking-wider mb-6">
                        {t.badge}
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-[1.1]">
                        {t.title}
                    </h1>
                    <p className="text-xl text-neutral-600 font-light leading-relaxed">
                        {t.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SOCIAL_IMAGES.map((img, i) => (
                        <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                            <Image
                                src={`/images/social/${img}`}
                                alt={`Social Project Favela-República ${i + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <CTABanner />
        </main>
    );
}
