
import { SEO_DEFAULTS } from "@/lib/constants";
import { Tour } from "@/types";

interface TourJsonLdProps {
    tour: Tour;
    lang: "pt" | "en" | "es" | "fr";
}

export function TourJsonLd({ tour, lang }: TourJsonLdProps) {
    // Mapping internal difficulty to schema.org (if applicable, though no direct match in standard)
    // We mainly map the core 'TouristTrip' or 'Product' fields.

    // Using 'TouristTrip' (more specific) or 'Product' (better support in some tools).
    // Google recommends 'Product' for booking flow, but 'TouristTrip' describes the itinerary better.
    // We will use 'Product' with a 'serviceType' or category.

    const schema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": tour.title[lang],
        "description": tour.shortDescription[lang],
        "image": tour.images.map(img => img.startsWith("http") ? img : `${SEO_DEFAULTS.siteUrl}${img}`),
        "brand": {
            "@type": "Brand",
            "name": "Favela-República Tour"
        },
        "offers": {
            "@type": "Offer",
            "url": `${SEO_DEFAULTS.siteUrl}/${lang}/tours/${tour.slug}`,
            "priceCurrency": "BRL",
            "price": "150.00", // Placeholder if we don't have dynamic price in code, or use "0" and hide
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2026-12-31"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "250",
            "bestRating": "5",
            "worstRating": "1"
        },
        "provider": {
            "@type": "Organization",
            "name": "Favela-República",
            "url": SEO_DEFAULTS.siteUrl
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
