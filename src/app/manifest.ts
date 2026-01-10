import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Favela-República Tour",
        short_name: "FavelaRep",
        description: "Turismo autêntico na favela Tavares Bastos - Rio de Janeiro. Tours seguros com condutores locais.",
        start_url: "/",
        display: "standalone",
        background_color: "#0B1120",
        theme_color: "#C85A34",
        orientation: "portrait-primary",
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
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                purpose: "any maskable" as any,
            },
            {
                src: "/icons/icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                purpose: "any maskable" as any,
            },
        ],
        categories: ["travel", "tourism"],
        lang: "pt-BR",
        dir: "ltr",
        prefer_related_applications: false,
    };
}
