import { FeaturedTours } from "@/components/sections/featured-tours";
import { TourService } from "@/services/tour-service";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nossos Tours | Favela-República",
    description: "Explore todos os nossos tours guiados na favela Tavares Bastos.",
};

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function ToursPage({ params }: PageProps) {
    const { locale } = await params;
    const tours = await TourService.getAll();

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900 font-heading">
                    Nossos Tours
                </h1>
                <FeaturedTours locale={locale} tours={tours} />
            </div>
        </div>
    );
}
