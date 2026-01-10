import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: ["pt", "en", "es", "fr"],

    // Used when no locale matches
    defaultLocale: "pt",

    // Always show the locale prefix, even for the default locale, to be consistent
    localePrefix: "always"
});

export default function middleware(request: NextRequest) {
    return intlMiddleware(request);
}

// Use unstable_allowDynamic to allow dynamic code evaluation in middleware
export const config = {
    matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
    unstable_allowDynamic: [
        "/node_modules/next-intl/**",
    ],
};
