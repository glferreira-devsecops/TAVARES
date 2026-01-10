import { CONTACT, LOCATION, SEO_DEFAULTS } from "@/lib/constants";

export function JsonLd({ locale }: { locale: string }) {
    // Schema.org: Organization (The Business Brand)
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SEO_DEFAULTS.siteName,
        url: SEO_DEFAULTS.siteUrl,
        logo: `${SEO_DEFAULTS.siteUrl}/images/logo.png`, // Valid absolute URL
        sameAs: [
            CONTACT.instagramUrl,
            `https://wa.me/${CONTACT.whatsapp.number}`,
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: CONTACT.whatsapp.displayNumber,
            contactType: "customer service",
            availableLanguage: ["Portuguese", "English", "Spanish", "French"],
        },
    };

    // Schema.org: LocalBusiness (The Physical Tour Location)
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: "Favela-República Tour",
        image: [
            `${SEO_DEFAULTS.siteUrl}/images/hero/hero-main_v1.webp`,
            `${SEO_DEFAULTS.siteUrl}/images/social/IMG_0546_v1.webp`
        ],
        "@id": SEO_DEFAULTS.siteUrl,
        url: `${SEO_DEFAULTS.siteUrl}/${locale}`,
        telephone: CONTACT.whatsapp.displayNumber,
        priceRange: "$$",
        address: {
            "@type": "PostalAddress",
            streetAddress: CONTACT.address.street,
            addressLocality: CONTACT.address.city,
            addressRegion: CONTACT.address.state,
            postalCode: CONTACT.address.postalCode,
            addressCountry: "BR",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: LOCATION.coordinates.lat,
            longitude: LOCATION.coordinates.lng,
        },
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            opens: "08:00",
            closes: "20:00",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
        </>
    );
}
