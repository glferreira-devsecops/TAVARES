import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Favela-República Tour",
        short_name: "Favela Tour",
        description: "Experiência autêntica com o Favela-República Tour no Rio de Janeiro. Segurança, cultura e história.",
        start_url: "/",
        display: "standalone",
        background_color: "#fafafa",
        theme_color: "#171717",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/icons/icon-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icons/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
