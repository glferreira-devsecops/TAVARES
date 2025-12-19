import { FAQPageClient } from "@/components/sections/faq-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ | Favela-República",
    description: "Perguntas frequentes sobre os tours na Favela. Segurança, preços, horários e mais.",
};

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function FAQPage({ params }: PageProps) {
    const { locale } = await params;

    return <FAQPageClient locale={locale} />;
}
