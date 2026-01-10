import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://favelarepublicatour.com";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/_next/", "/cdn-cgi/"],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
