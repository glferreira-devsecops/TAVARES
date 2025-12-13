"use client";

import type { BlogPost } from "@/types";
import { Search } from "lucide-react";
import { useState } from "react";
import { BlogCard } from "./blog-card";

interface BlogSearchProps {
    posts: BlogPost[];
    locale: string;
}

export function BlogSearch({ posts, locale }: BlogSearchProps) {
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
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
                {/* Search Input */}
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                        type="text"
                        placeholder={locale.startsWith("pt") ? "Buscar artigos..." : "Search articles..."}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-neutral-50 border-transparent focus:bg-white focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all outline-none text-neutral-900 placeholder:text-neutral-400 font-medium"
                    />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === null
                                ? "bg-primary-600 text-white shadow-md shadow-primary-600/25"
                                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                            }`}
                    >
                        {locale.startsWith("pt") ? "Todos" : "All"}
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                    ? "bg-primary-600 text-white shadow-md shadow-primary-600/25"
                                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
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
                        <BlogCard key={post.id} post={post} locale={locale} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <p className="text-neutral-500 text-lg">
                        {locale.startsWith("pt")
                            ? "Nenhum artigo encontrado para sua busca."
                            : "No articles found matching your search."}
                    </p>
                    <button
                        onClick={() => { setSearchTerm(""); setSelectedCategory(null); }}
                        className="mt-4 text-primary-600 font-medium hover:underline"
                    >
                        {locale.startsWith("pt") ? "Limpar filtros" : "Clear filters"}
                    </button>
                </div>
            )}
        </div>
    );
}
