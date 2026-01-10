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
                src: "/icon",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/apple-icon",
                sizes: "180x180",
                type: "image/png",
            },
        ],
        categories: ["travel", "tourism"],
        lang: "pt-BR",
        dir: "ltr",
        prefer_related_applications: false,
    };
}
