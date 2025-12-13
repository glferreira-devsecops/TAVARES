import { BlogSearch } from "@/components/blog/blog-search";
import { BlogService } from "@/services/blog-service";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Favela-República",
    description: "Notícias, histórias e cultura da favela Tavares Bastos.",
};

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: PageProps) {
    const { locale } = await params;
    const posts = await BlogService.getAll();

    return (
        <main className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/5 to-transparent" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary-200/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                </div>

                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 font-bold text-xs uppercase tracking-wider mb-6 animate-fade-in-up">
                        {locale.startsWith("pt") ? "Nosso Blog" : "Our Blog"}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-neutral-900 mb-6 leading-tight animate-fade-in-up delay-100">
                        {locale.startsWith("pt") ? "Histórias da Favela" : "Favela Stories"}
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                        {locale.startsWith("pt")
                            ? "Explore a cultura, personagens e narrativas que tornam a Tavares Bastos única. Descubra o Rio de Janeiro por outra perspectiva."
                            : "Explore the culture, characters, and narratives that make Tavares Bastos unique. Discover Rio de Janeiro from another perspective."}
                    </p>
                </div>
            </section>

            {/* Search and Listing Section */}
            <section className="pb-24 pt-8">
                <div className="container-custom">
                    <BlogSearch posts={posts} locale={locale} />
                </div>
            </section>
        </main>
    );
}
