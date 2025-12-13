"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { MOTION_VARIANTS } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";

interface BlogPreviewProps {
    locale?: string;
    posts: BlogPost[];
}

// Helper to get lang code
function getLang(locale: string): "pt" | "en" | "es" | "fr" {
    if (locale.startsWith("pt")) return "pt";
    if (locale.startsWith("es")) return "es";
    if (locale.startsWith("fr")) return "fr";
    return "en";
}

export function BlogPreview({ locale = "pt", posts }: BlogPreviewProps) {
    const featuredPosts = posts;
    const currentLang = getLang(locale);

    const content = {
        pt: {
            subtitle: "Blog",
            title: "Histórias e curiosidades",
            description: "Descubra mais sobre a Tavares Bastos, sua história, cultura e as pessoas que fazem nossa comunidade única.",
            cta: "Ver todos os artigos",
            readMore: "Ler artigo",
            minRead: "min de leitura",
        },
        en: {
            subtitle: "Blog",
            title: "Stories and curiosities",
            description: "Discover more about Tavares Bastos, its history, culture, and the people who make our community unique.",
            cta: "View all articles",
            readMore: "Read article",
            minRead: "min read",
        },
        es: {
            subtitle: "Blog",
            title: "Historias y curiosidades",
            description: "Descubre más sobre Tavares Bastos, su historia, cultura y las personas que hacen única nuestra comunidad.",
            cta: "Ver todos los artículos",
            readMore: "Leer artículo",
            minRead: "min de lectura",
        },
        fr: {
            subtitle: "Blog",
            title: "Histoires et curiosités",
            description: "Découvrez Tavares Bastos, son histoire, sa culture et les personnes qui rendent notre communauté unique.",
            cta: "Voir tous les articles",
            readMore: "Lire l'article",
            minRead: "min de lecture",
        },
    };

    const t = content[currentLang];

    return (
        <section className="section-padding bg-neutral-50">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={MOTION_VARIANTS.fadeInUp}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-sm font-semibold text-primary-500 uppercase tracking-wider mb-2">
                        {t.subtitle}
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                        {t.title}
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                        {t.description}
                    </p>
                </motion.div>

                {/* Blog Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={MOTION_VARIANTS.staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
                >
                    {featuredPosts.map((post) => (
                        <motion.article
                            key={post.id}
                            variants={MOTION_VARIANTS.fadeInUp}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`} className="block h-full">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-soft-md hover:shadow-soft-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                                    {/* Image */}
                                    <div className="relative aspect-16/10 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title[currentLang]}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <Badge variant="primary" size="sm">
                                                {post.category[currentLang]}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="font-heading text-xl font-semibold text-neutral-900 group-hover:text-primary-500 transition-colors mb-3 line-clamp-2">
                                            {post.title[currentLang]}
                                        </h3>
                                        <p className="text-neutral-600 text-sm mb-4 line-clamp-2 flex-1">
                                            {post.excerpt[currentLang]}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                                            <div className="flex items-center gap-3 text-xs text-neutral-500">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {formatDate(post.publishedAt, locale === "pt" ? "pt-BR" : "en-US")}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {post.readTime} {t.minRead}
                                                </span>
                                            </div>
                                            <span className="text-primary-500 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                                {t.readMore}
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={MOTION_VARIANTS.fadeIn}
                    className="text-center"
                >
                    <Button
                        href="/blog">
                        {t.cta}
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
