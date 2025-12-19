import { CTABanner } from "@/components/sections/cta-banner";
import { getDictionary, Locale } from "@/lib/dictionaries";
import { Metadata } from "next";
import Image from "next/image";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale as Locale);

    return {
        title: `Projeto Social | ${dict.hero.title}`,
        description: "Conheça nossas iniciativas sociais e como o turismo impacta positivamente a comunidade Favela.",
    };
}

const SOCIAL_IMAGES = [
    "IMG_0540.webp",
    "IMG_0546.webp",
    "IMG_0551.webp",
    "IMG_0593.webp",
    "PHOTO-2022-09-20-13-10-53.webp",
    "PHOTO-2022-09-20-13-43-22.webp",
    "PHOTO-2024-05-13-15-54-41.webp",
    "PHOTO-2022-09-20-13-15-24.webp",
    "PHOTO-2022-09-20-13-29-49.webp",
    "PHOTO-2022-09-20-13-52-41.webp",
    "PHOTO-2022-09-20-13-54-16.webp",
    "PHOTO-2022-09-20-14-05-06.webp",
    "PHOTO-2022-09-20-14-10-30.webp"
];

export default async function SocialProjectPage({ params }: PageProps) {
    const { locale } = await params;

    return (
        <main className="min-h-screen bg-white pt-24">
            <div className="container-custom py-12 md:py-24">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 font-bold text-xs uppercase tracking-wider mb-6">
                        Impacto Social
                    </span>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-[1.1]">
                        Transformando Vidas
                    </h1>
                    <p className="text-xl text-neutral-600 font-light leading-relaxed">
                        Parte da renda dos nossos tours é revertida para projetos sociais na comunidade.
                        Apoiamos iniciativas de esporte, cultura e educação para as crianças e jovens da Favela.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SOCIAL_IMAGES.map((img, i) => (
                        <div key={i} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                            <Image
                                src={`/images/social/${img}`}
                                alt={`Projeto Social Favela-República ${i + 1}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <CTABanner locale={locale} />
        </main>
    );
}
