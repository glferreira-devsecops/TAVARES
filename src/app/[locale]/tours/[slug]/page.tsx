import { TourDetailClient } from "@/components/sections/tour-detail";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { TourJsonLd } from "@/components/seo/tour-json-ld";
import { TourService } from "@/services/tour-service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface TourPageProps {
    params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
    const tours = await TourService.getAll(); // Changed to TourService based on import
    return tours.map((tour) => ({
        slug: tour.slug,
    }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
    const { locale, slug } = await params;
    const tour = await TourService.getBySlug(slug); // Changed to TourService based on import

    if (!tour) return {};

    const lang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    return {
        title: `${tour.title[lang]} | Favela-República`,
        description: tour.shortDescription[lang],
        openGraph: {
            images: tour.images.length > 0 ? [tour.images[0]] : [],
        },
    };
}

export default async function TourPage({ params }: TourPageProps) {
    const { locale, slug } = await params;
    const tour = await TourService.getBySlug(slug); // Changed to TourService based on import

    if (!tour) {
        notFound();
    }

    const lang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    return (
        <>
            <TourJsonLd tour={tour} lang={lang} />
            <BreadcrumbJsonLd
                items={[
                    { name: 'Home', url: `/${lang}` },
                    { name: 'Tours', url: `/${lang}/tours` },
                    { name: tour.title[lang], url: `/${lang}/tours/${tour.slug}` }
                ]}
            />
            <TourDetailClient tour={tour} lang={lang} />
        </>
    );
}
