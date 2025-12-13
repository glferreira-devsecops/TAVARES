import { AboutPreview } from "@/components/sections/about-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CTABanner } from "@/components/sections/cta-banner";
import { FeaturedTours } from "@/components/sections/featured-tours";
import { Hero } from "@/components/sections/hero";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustBadges } from "@/components/sections/trust-badges";
import { BlogService } from "@/services/blog-service";
import { TourService } from "@/services/tour-service";

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
    const { locale } = await params;

    // Fetch data using the services
    const tours = await TourService.getAll();
    const blogPosts = await BlogService.getAll();

    return (
        <>
            <Hero locale={locale} />
            <TrustBadges locale={locale} />
            <FeaturedTours locale={locale} tours={tours} />
            <AboutPreview locale={locale} />
            <Testimonials locale={locale} />
            <BlogPreview locale={locale} posts={blogPosts} />
            <CTABanner locale={locale} />
        </>
    );
}
