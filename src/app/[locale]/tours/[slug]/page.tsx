import { TourDetailClient } from "@/components/sections/tour-detail";
import { TourService } from "@/services/tour-service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface TourPageProps {
    params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
    const tours = await TourService.getAll();
    return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
    const { slug, locale } = await params;
    const tour = await TourService.getBySlug(slug);
    const lang = locale.startsWith("pt") ? "pt" : "en";

    if (!tour) {
        return { title: "Tour não encontrado" };
    }
    return {
        title: `${tour.title[lang]} | Favela-República`,
        description: tour.shortDescription[lang],
        openGraph: {
            title: tour.title[lang],
            description: tour.shortDescription[lang],
            images: [tour.images[0] || "/images/tours/IMG_7268.webp"],
        },
    };
}

export default async function TourPage({ params }: TourPageProps) {
    const { slug, locale } = await params;
    const tour = await TourService.getBySlug(slug);
    const lang = (locale.startsWith("pt") ? "pt" : "en") as "pt" | "en";

    if (!tour) {
        notFound();
    }

    return <TourDetailClient tour={tour} lang={lang} />;
}
