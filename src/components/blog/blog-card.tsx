"use client";

import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";

interface BlogCardProps {
    post: BlogPost;
    locale: string;
}

export function BlogCard({ post, locale }: BlogCardProps) {
    const lang = locale.startsWith("pt") ? "pt" : "en";
    const currentLang = lang as "pt" | "en";

    return (
        <article className="group h-full">
            <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col border border-neutral-100/50 group-hover:border-primary-100/50">
                    {/* Image Container */}
                    <div className="relative aspect-16/10 overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title[currentLang]}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-10">
                            <Badge variant="primary" className="shadow-lg backdrop-blur-md bg-primary-600/90 text-white border-none px-3 py-1">
                                {post.category[currentLang]}
                            </Badge>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col relative">
                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-xs font-medium text-neutral-500 mb-4">
                            <div className="flex items-center gap-1.5 bg-neutral-50 px-2 py-1 rounded-md border border-neutral-100">
                                <Calendar className="w-3.5 h-3.5 text-primary-500" />
                                {formatDate(post.publishedAt, locale === "pt" ? "pt-BR" : "en-US")}
                            </div>
                            <div className="flex items-center gap-1.5 bg-neutral-50 px-2 py-1 rounded-md border border-neutral-100">
                                <Clock className="w-3.5 h-3.5 text-primary-500" />
                                {post.readTime} min
                            </div>
                        </div>

                        <h3 className="font-heading text-xl md:text-2xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-3 line-clamp-2 leading-tight">
                            {post.title[currentLang]}
                        </h3>

                        <p className="text-neutral-600 text-sm md:text-base mb-6 line-clamp-3 flex-1 leading-relaxed">
                            {post.excerpt[currentLang]}
                        </p>

                        <div className="mt-auto flex items-center text-primary-600 font-semibold group/link">
                            <span className="mr-2 group-hover/link:underline underline-offset-4 decoration-2">
                                {locale.startsWith("pt") ? "Ler artigo completo" : "Read full article"}
                            </span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}
