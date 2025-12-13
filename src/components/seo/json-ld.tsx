export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Favela República",
        "image": "https://favelarepublica.com.br/images/hero-bg.jpg",
        "description": "Turismo de base comunitária na Favela Tavares Bastos. Tours autênticos, seguros e culturais no Rio de Janeiro.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Tavares Bastos",
            "addressLocality": "Rio de Janeiro",
            "addressRegion": "RJ",
            "postalCode": "22221-030",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -22.9246,
            "longitude": -43.1932
        },
        "url": "https://favelarepublica.com.br",
        "telephone": "+5521999999999",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "09:00",
                "closes": "18:00"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
