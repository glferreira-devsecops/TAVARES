import { BlogService } from "@/services/blog-service";
import { TourService } from "@/services/tour-service";
import { MetadataRoute } from "next";

const baseUrl = "https://favelarepublicatour.com";
const locales = ["pt", "en", "es", "fr"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static Routes
    const routes = ["", "/tours", "/blog", "/quem-somos", "/contato", "/faq"];

    // Dynamic Data
    const tours = await TourService.getAll();
    const posts = await BlogService.getAll();

    // Generate localized URLs for static routes
    const staticEntries = routes.flatMap((route) =>
        locales.map((locale) => ({
            url: `${baseUrl}/${locale}${route}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: route === "" ? 1 : 0.8,
        }))
    );

    // Generate localized URLs for Tours
    const tourEntries = tours.flatMap((tour) =>
        locales.map((locale) => ({
            url: `${baseUrl}/${locale}/tours/${tour.slug}`,
            lastModified: new Date(), // Ideally real date from CMS
            changeFrequency: "weekly" as const,
            priority: 0.9,
        }))
    );

    // Generate localized URLs for Blog Posts
    const blogEntries = posts.flatMap((post) =>
        locales.map((locale) => ({
            url: `${baseUrl}/${locale}/blog/${post.slug}`,
            lastModified: new Date(post.publishedAt),
            changeFrequency: "weekly" as const,
            priority: 0.7,
        }))
    );

    return [...staticEntries, ...tourEntries, ...blogEntries];
}
