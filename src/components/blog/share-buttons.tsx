"use client";

import { Check, Copy, Facebook, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

import { useLocale } from "next-intl";

interface ShareButtonsProps {
    title: string;
    url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
    const locale = useLocale();
    const [copied, setCopied] = useState(false);
    const currentLang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    const content = {
        pt: {
            share: "Compartilhar artigo",
            copy: "Copiar Link",
            copied: "Copiado!"
        },
        en: {
            share: "Share article",
            copy: "Copy Link",
            copied: "Copied!"
        },
        es: {
            share: "Compartir artículo",
            copy: "Copiar Link",
            copied: "¡Copiado!"
        },
        fr: {
            share: "Partager l'article",
            copy: "Copier le lien",
            copied: "Copié !"
        }
    };

    const t = content[currentLang];

    const handleCopy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const shareLinks = [
        {
            name: "Twitter",
            icon: Twitter,
            href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
            color: "bg-black text-white hover:bg-neutral-800"
        },
        {
            name: "Facebook",
            icon: Facebook,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: "bg-[#1877F2] text-white hover:bg-[#1877F2]/90"
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
            color: "bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90"
        }
    ];

    return (
        <div className="flex flex-col gap-4 py-8 border-y border-neutral-100 my-8">
            <span className="text-sm font-bold text-neutral-900 uppercase tracking-wider text-center md:text-left">
                {t.share}
            </span>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors font-medium text-sm"
                    aria-label="Copy link"
                >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? t.copied : t.copy}
                </button>

                {shareLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors font-medium text-sm ${link.color}`}
                        aria-label={`Share on ${link.name}`}
                    >
                        <link.icon className="w-4 h-4" />
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    );
}
