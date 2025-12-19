import AboutContent from "@/components/sections/about-content";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quem Somos | Favela-República",
    description: "Conheça a história da Favela-República e nossa missão de turismo comunitário responsável na Favela.",
};

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: PageProps) {
    const { locale } = await params;

    return <AboutContent locale={locale} />;
}
