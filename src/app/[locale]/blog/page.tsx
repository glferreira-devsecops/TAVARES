import { BlogSearch } from "@/components/blog/blog-search";
import { BlogService } from "@/services/blog-service";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Favela-República",
    description: "Notícias, histórias e cultura da favela Favela.",
};

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: PageProps) {
    const { locale } = await params;
    const posts = await BlogService.getAll();

    return (
        <main className="min-h-screen bg-neutral-950 text-white selection:bg-primary-500/30 selection:text-primary-200">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Dark Cinematic Background */}
                    <div className="absolute inset-0 bg-neutral-950" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/10 to-transparent" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                    {/* Noise Texture */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
                </div>

                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto px-4">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-primary-400 font-bold text-xs uppercase tracking-widest mb-8 shadow-lg shadow-primary-500/10 animate-fade-in-up">
                        {locale.startsWith("pt") ? "Nosso Blog" : "Our Blog"}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-[1.1] animate-fade-in-up delay-100 tracking-tight drop-shadow-xl">
                        {locale.startsWith("pt") ? "Histórias da Favela" : "Favela Stories"}
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200 font-light">
                        {locale.startsWith("pt")
                            ? "Explore a cultura, personagens e narrativas que tornam a Favela única. Descubra o Rio de Janeiro por outra perspectiva."
                            : "Explore the culture, characters, and narratives that make Favela unique. Discover Rio de Janeiro from another perspective."}
                    </p>
                </div>
            </section>

            {/* Search and Listing Section */}
            <section className="pb-24 pt-8 relative z-10">
                <div className="container-custom">
                    <BlogSearch posts={posts} locale={locale} />
                </div>
            </section>
        </main>
    );
}
