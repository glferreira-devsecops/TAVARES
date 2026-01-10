import { AuthorBio } from "@/components/blog/author-bio";
import { MarkdownRenderer } from "@/components/blog/markdown-renderer";
import { ShareButtons } from "@/components/blog/share-buttons";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/utils";
import { BlogService } from "@/services/blog-service";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
    params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
    const posts = await BlogService.getAll();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug, locale } = await params;
    const post = await BlogService.getBySlug(slug);
    const lang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    const t = await getTranslations({ locale, namespace: "Blog" });

    if (!post) {
        return { title: t("notFound") };
    }
    return {
        title: `${post.title[lang]} | Favela-República`,
        description: post.excerpt[lang],
        openGraph: {
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug, locale } = await params;
    const post = await BlogService.getBySlug(slug);
    const t = await getTranslations({ locale, namespace: "Blog" });
    const lang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";


    if (!post) {
        notFound();
    }

    // Determine absolute URL for sharing (simplified)
    const siteUrl = "https://favelarepublicatour.com";
    const shareUrl = `${siteUrl}/${locale}/blog/${slug}`;

    return (
        <main className="min-h-screen bg-white">
            {/* Reading Progress Bar (can be added later as client component) */}

            {/* Header Image */}
            <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
                <Image
                    src={post.image}
                    alt={post.title[lang]}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute inset-0 container-custom flex items-end pb-12 sm:pb-20">
                    <div className="max-w-4xl animate-fade-in-up">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium group"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                            {t("back")}
                        </Link>

                        <div className="flex gap-2 mb-6">
                            <Badge variant="primary" className="bg-primary-600 text-white border-none shadow-lg backdrop-blur-md">
                                {post.category[lang]}
                            </Badge>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg text-shadow-sm">
                            {post.title[lang]}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white text-sm sm:text-base font-medium drop-shadow-md">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                                {formatDate(post.publishedAt, locale === "pt" ? "pt-BR" : "en-US")}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                                {post.readTime} {t("minRead")} {t("readTimeSuffix")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Article */}
            <article className="container-custom py-12 md:py-20">
                <div className="mx-auto max-w-3xl">
                    <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-serif italic mb-12 border-l-4 border-primary-500 pl-6">
                        {post.excerpt[lang]}
                    </p>

                    <MarkdownRenderer content={post.content[lang]} />

                    <div className="mt-12 flex flex-wrap gap-2">
                        {post.tags[lang].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors cursor-default"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <ShareButtons
                        title={post.title[lang]}
                        url={shareUrl}
                    />

                    <AuthorBio />
                </div>
            </article>

            {/* Related Posts could go here */}
        </main>
    );
}
