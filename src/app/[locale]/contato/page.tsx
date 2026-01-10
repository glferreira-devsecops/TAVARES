import { ContactPageClient } from "@/components/sections/contact-page";
import { PAGE_METADATA } from "@/lib/constants";
import { Metadata } from "next";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const lang = (["en", "es", "fr"].includes(locale) ? locale : "pt") as "pt" | "en" | "es" | "fr";

    return {
        title: PAGE_METADATA.contact.title[lang],
        description: PAGE_METADATA.contact.description[lang],
    };
}

interface PageProps {
    params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: PageProps) {
    await params;

    return <ContactPageClient />;
}
