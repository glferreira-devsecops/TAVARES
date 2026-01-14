import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-button";
import { JsonLd } from "@/components/seo/json-ld";
import { SkipLink } from "@/components/ui/skip-link";
import { SmoothScroller } from "@/components/ui/smooth-scroller";
import { locales } from "@/i18n/request";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
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
    const lang = (locales.includes(locale as typeof locales[number]) ? locale : "en") as keyof typeof SEO_DEFAULTS.defaultTitle;

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
                "x-default": `${SEO_DEFAULTS.siteUrl}/en`,
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
                    url: "/images/hero/hero-main_v1.webp", // Default OG Image
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
            images: ["/images/hero/hero-main_v1.webp"],
            creator: "@devferreirag", // Optional
        },
        // icons ref removed to use App Router file convention (icon.webp)
    };
}

export const viewport: Viewport = {
    themeColor: "#0B1120",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5, // Accessibility best practice
};

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
                className={`${inter.className} antialiased overflow-x-hidden bg-neutral-950 text-neutral-50`}
                style={{
                    fontFamily: 'var(--font-body), Inter, system-ui, -apple-system, sans-serif',
                }}
            >
                <JsonLd locale={locale} />
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <SkipLink />
                    <SmoothScroller>
                        <Header />
                        <main id="main-content">
                            {children}
                        </main>
                        <Footer />
                        <WhatsAppFloatingButton />
                    </SmoothScroller>
                    <AnalyticsProvider />
                    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
