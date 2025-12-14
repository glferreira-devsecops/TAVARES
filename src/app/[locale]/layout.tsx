import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-button";
import { locales } from "@/i18n/request";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-heading",
    weight: ["400", "500", "600", "700"],
});

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-body",
    weight: ["300", "400", "500", "600", "700"],
});

import { SEO_DEFAULTS } from "@/lib/constants";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const lang = (locales.includes(locale as any) ? locale : "pt") as keyof typeof SEO_DEFAULTS.defaultTitle;

    const url = `${SEO_DEFAULTS.siteUrl}/${locale}`;

    return {
        metadataBase: new URL(SEO_DEFAULTS.siteUrl),
        title: {
            default: SEO_DEFAULTS.defaultTitle[lang],
            template: `%s | ${SEO_DEFAULTS.siteName}`,
        },
        description: SEO_DEFAULTS.defaultDescription[lang],
        keywords: [...SEO_DEFAULTS.defaultKeywords[lang]],
        authors: [{ name: "Favela-República Tour" }],
        creator: "Gabriel L. Ferreira",
        publisher: "Favela-República Tour",
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: url,
            languages: {
                pt: `${SEO_DEFAULTS.siteUrl}/pt`,
                en: `${SEO_DEFAULTS.siteUrl}/en`,
                es: `${SEO_DEFAULTS.siteUrl}/es`,
                fr: `${SEO_DEFAULTS.siteUrl}/fr`,
                "x-default": `${SEO_DEFAULTS.siteUrl}/pt`,
            },
        },
        openGraph: {
            type: "website",
            locale: locale,
            url: url,
            title: SEO_DEFAULTS.defaultTitle[lang],
            description: SEO_DEFAULTS.defaultDescription[lang],
            siteName: SEO_DEFAULTS.siteName,
            images: [
                {
                    url: "/images/hero-tavares-bastos.png", // Default OG Image
                    width: 1200,
                    height: 630,
                    alt: SEO_DEFAULTS.defaultTitle[lang],
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: SEO_DEFAULTS.defaultTitle[lang],
            description: SEO_DEFAULTS.defaultDescription[lang],
            images: ["/images/hero-tavares-bastos.png"],
            creator: "@devferreirag", // Optional
        },
        icons: {
            icon: "/favicon.ico",
        },
    };
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!locales.includes(locale as typeof locales[number])) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale} className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
            <body
                className={`${inter.className} antialiased overflow-x-hidden`}
                style={{
                    fontFamily: 'var(--font-body), Inter, system-ui, -apple-system, sans-serif',
                    backgroundColor: '#fafafa',
                    color: '#27272a',
                    lineHeight: 1.6
                }}
            >
                <NextIntlClientProvider messages={messages}>
                    <Header locale={locale} />
                    <main id="main-content">
                        {children}
                    </main>
                    <Footer locale={locale} />
                    <WhatsAppFloatingButton locale={locale} />
                    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
