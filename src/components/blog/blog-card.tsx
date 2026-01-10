import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    const t = useTranslations("Blog");
    const locale = useLocale();
    const currentLang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    return (
        <article className="group h-full">
            <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="bg-white/5 backdrop-blur-md rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col relative group">

                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-primary-500/20 transition-all" />

                    {/* Image Container */}
                    <div className="relative aspect-16/10 overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title[currentLang]}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-10">
                            <Badge variant="primary" className="shadow-lg backdrop-blur-xl bg-black/40 text-white border border-white/10 px-3 py-1.5 hover:bg-primary-600 transition-colors">
                                {post.category[currentLang]}
                            </Badge>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex-1 flex flex-col relative">
                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-xs font-bold text-neutral-300 mb-4 uppercase tracking-wider">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-3.5 h-3.5 text-primary-400" />
                                {formatDate(post.publishedAt, locale === "pt" ? "pt-BR" : "en-US")}
                            </div>
                            <div className="w-1 h-1 rounded-full bg-neutral-600" />
                            <div className="flex items-center gap-2">
                                <Clock className="w-3.5 h-3.5 text-primary-400" />
                                {post.readTime} {t("minRead")}
                            </div>
                        </div>

                        <h3 className="font-heading text-xl md:text-2xl font-bold text-white group-hover:text-primary-400 transition-colors mb-4 line-clamp-2 leading-tight tracking-tight">
                            {post.title[currentLang]}
                        </h3>

                        <p className="text-neutral-300 text-sm md:text-base mb-6 line-clamp-3 flex-1 leading-relaxed font-light">
                            {post.excerpt[currentLang]}
                        </p>

                        <div className="mt-auto flex items-center text-white font-bold group/link text-sm uppercase tracking-widest border-t border-white/5 pt-6">
                            <span className="mr-2 group-hover/link:text-primary-400 transition-colors">
                                {t("readMore")}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-primary-500 group-hover/link:scale-110 transition-all duration-300">
                                <ArrowRight className="w-4 h-4 text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}
