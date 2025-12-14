import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Favela-República Tour",
        short_name: "Favela Tour",
        description: "Tour guiado na Favela Tavares Bastos. Uma experiência autêntica, segura e inesquecível no Rio de Janeiro.",
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
                src: "/images/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/images/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
