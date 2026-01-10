"use client";

import type { BlogPost } from "@/types";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { BlogCard } from "./blog-card";

import { useLocale } from "next-intl";

interface BlogSearchProps {
    posts: BlogPost[];
}

export function BlogSearch({ posts }: BlogSearchProps) {
    const locale = useLocale();
    const lang = locale.startsWith("pt") ? "pt" : "en";
    const currentLang = lang as "pt" | "en";

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Extract unique categories
    const categories = Array.from(new Set(posts.map(post => post.category[currentLang])));

    const filteredPosts = posts.filter(post => {
        const matchesSearch = post.title[currentLang].toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt[currentLang].toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory ? post.category[currentLang] === selectedCategory : true;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-12">
            {/* Search and Filter Controls */}
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary-500/20 transition-colors duration-500" />

                {/* Search Input */}
                <div className="relative w-full md:w-96 z-10">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                        type="text"
                        placeholder={locale.startsWith("pt") ? "Buscar artigos..." : "Search articles..."}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-black/20 border border-white/5 focus:bg-black/40 focus:border-primary-500/50 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none text-white placeholder:text-neutral-400 font-medium"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-end z-10">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${selectedCategory === null
                            ? "bg-primary-600 border-primary-500 text-white shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)]"
                            : "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white"
                            }`}
                    >
                        {locale.startsWith("pt") ? "Todos" : "All"}
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${selectedCategory === category
                                ? "bg-primary-600 border-primary-500 text-white shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)]"
                                : "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Grid */}
            {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map(post => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-24 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm">
                    <div className="inline-flex p-4 rounded-full bg-neutral-800/50 mb-4 text-neutral-500">
                        <Search className="w-8 h-8" />
                    </div>
                    <p className="text-neutral-300 text-lg mb-4 font-light">
                        {locale.startsWith("pt")
                            ? "Nenhum artigo encontrado para sua busca."
                            : "No articles found matching your search."}
                    </p>
                    <button
                        onClick={() => { setSearchTerm(""); setSelectedCategory(null); }}
                        className="text-primary-400 font-bold hover:text-primary-300 transition-colors flex items-center gap-2 mx-auto bg-primary-500/10 px-4 py-2 rounded-full border border-primary-500/20"
                    >
                        <X className="w-4 h-4" />
                        {locale.startsWith("pt") ? "Limpar filtros" : "Clear filters"}
                    </button>
                </div>
            )}
        </div>
    );
}
