import { AboutPreview } from "@/components/sections/about-preview";
import { CTABanner } from "@/components/sections/cta-banner";
import { FAQSection } from "@/components/sections/faq-section";
import { FeaturedTours } from "@/components/sections/featured-tours";
import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { TourService } from "@/services/tour-service";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
    await params;

    // Fetch data using the services
    const tours = await TourService.getAll();

    return (
        <>
            <Hero />
            {/* TrustBadges removed to avoid overlap and redundancy with Hero stats */}
            <FeaturedTours tours={tours} />
            <AboutPreview />
            <Testimonials />
            <FAQSection />
            <CTABanner />
        </>
    );
}
