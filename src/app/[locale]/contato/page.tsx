import { ContactPageClient } from "@/components/sections/contact-page";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contato | Favela-República",
    description: "Entre em contato conosco pelo WhatsApp, e-mail ou Instagram. Estamos prontos para ajudar!",
};

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: PageProps) {
    const { locale } = await params;

    return <ContactPageClient locale={locale} />;
}
