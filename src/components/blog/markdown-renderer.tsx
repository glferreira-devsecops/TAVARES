"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
    content: string;
    className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
    return (
        <div className={cn("prose prose-lg prose-neutral max-w-none dark:prose-invert", className)}>
            <ReactMarkDown
                remarkPlugins={[remarkGfm]}
                components={{
                    // Custom image renderer to use Next.js Image
                    img: (props) => {
                        const { src, alt } = props;
                        if (!src) return null;
                        return (
                            <div className="relative w-full h-auto my-8 rounded-xl overflow-hidden shadow-lg border border-neutral-100">
                                <Image
                                    src={src as string}
                                    alt={alt || "Blog content image"}
                                    width={800}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                    sizes="(max-width: 768px) 100vw, 800px"
                                />
                            </div>
                        );
                    },
                    // Custom link renderer
                    a: ({ ...props }) => (
                        <a {...props} className="text-primary-600 hover:text-primary-700 transition-colors font-medium decoration-primary-200 hover:decoration-primary-500 underline-offset-4" target="_blank" rel="noopener noreferrer" />
                    ),
                    // Custom heading styles
                    h2: ({ ...props }) => (
                        <h2 {...props} className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6 text-neutral-900 group flex items-center">
                            {props.children}
                        </h2>
                    ),
                    h3: ({ ...props }) => (
                        <h3 {...props} className="text-xl md:text-2xl font-heading font-semibold mt-8 mb-4 text-neutral-800">
                            {props.children}
                        </h3>
                    ),
                    // Formatting blockquotes
                    blockquote: ({ ...props }) => (
                        <blockquote {...props} className="border-l-4 border-primary-500 pl-6 py-2 my-8 italic text-xl text-neutral-700 bg-primary-50/50 rounded-r-lg" />
                    ),
                }}
            >
                {content}
            </ReactMarkDown>
        </div>
    );
}
