"use client";

import Image from "next/image";

interface CollageGridProps {
    images: string[];
    alt: string;
}

export function CollageGrid({ images, alt }: CollageGridProps) {
    // Ensure we have exactly 4 images for the grid
    const displayImages = images.slice(0, 4);

    if (displayImages.length < 4) return null;

    return (
        <div className="w-full h-full grid grid-cols-2 grid-rows-2">
            {displayImages.map((src, index) => (
                <div key={index} className="relative w-full h-full overflow-hidden border-[0.5px] border-white/10">
                    <Image
                        src={src}
                        alt={`${alt} ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 16vw"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
            ))}
        </div>
    );
}
