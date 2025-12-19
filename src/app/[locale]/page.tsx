import { AboutPreview } from "@/components/sections/about-preview";
import { CTABanner } from "@/components/sections/cta-banner";
import { FAQSection } from "@/components/sections/faq-section";
import { FeaturedTours } from "@/components/sections/featured-tours";
import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustBadges } from "@/components/sections/trust-badges";
import { TourService } from "@/services/tour-service";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
    const { locale } = await params;

    // Fetch data using the services
    const tours = await TourService.getAll();

    return (
        <>
            <Hero locale={locale} />
            <TrustBadges locale={locale} />
            <FeaturedTours locale={locale} tours={tours} />
            <AboutPreview locale={locale} />
            <Testimonials locale={locale} />
            <FAQSection locale={locale} />
            <CTABanner locale={locale} />
        </>
    );
}
