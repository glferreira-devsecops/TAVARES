import { FeaturedTours } from "@/components/sections/featured-tours";
import { PAGE_METADATA } from "@/lib/constants";
import { TourService } from "@/services/tour-service";
import { Metadata } from "next";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _locale = locale; // Keeping if needed later, or just simple fix:
    const lang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    return {
        title: PAGE_METADATA.tours.title[lang],
        description: PAGE_METADATA.tours.description[lang],
    };
}

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function ToursPage() {
    // const { locale } = await params; // Unused
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
                    <FeaturedTours tours={tours} />
                </div>
            </div>
        </main>
    );
}
