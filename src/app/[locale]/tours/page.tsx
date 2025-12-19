import { FeaturedTours } from "@/components/sections/featured-tours";
import { TourService } from "@/services/tour-service";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nossos Tours | Favela-República",
    description: "Explore todos os nossos tours guiados na favela Favela.",
};

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function ToursPage({ params }: PageProps) {
    const { locale } = await params;
    const tours = await TourService.getAll();

    return (
        <main className="min-h-screen bg-neutral-950 text-white selection:bg-orange-500/30 selection:text-orange-200">
            {/* Page Header is integrated into FeaturedTours or can be added here if needed,
                but since FeaturedTours has its own header, we can just render the section directly
                or wrap it slightly differently.
                Actually FeaturedTours has a section title "Nossos Tours" inside it.
                So we just need to ensure the container is dark.
            */}
            <div className="pt-24 pb-16 relative">
                {/* Cinematic Background Grain */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none fixed" />

                <div className="container mx-auto px-4 relative z-10">
                    {/* We hide this H1 because FeaturedTours likely has its own or we style this one to match */}
                    <h1 className="sr-only">
                        Nossos Tours
                    </h1>
                    <FeaturedTours locale={locale} tours={tours} />
                </div>
            </div>
        </main>
    );
}
