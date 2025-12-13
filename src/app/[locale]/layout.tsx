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

export const metadata: Metadata = {
    metadataBase: new URL("https://favelarepublicatour.com"),
    title: {
        default: "Favela-República Tour | Turismo Comunitário em Tavares Bastos",
        template: "%s | Favela-República Tour",
    },
    description:
        "Descubra a cultura autêntica da favela Tavares Bastos no Rio de Janeiro. Tours seguros, responsáveis e imersivos com guias locais. Arte urbana, história e vistas panorâmicas.",
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
