type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
    interface Window {
        gtag?: (command: string, action: string, params?: EventParams) => void;
        fbq?: (command: string, event: string, params?: EventParams) => void;
    }
}

// Helper to log events in development
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logEvent = (platform: string, event: string, params?: EventParams) => {
    // console.log removed for production cleanliness
};

export const AnalyticsEvents = {
    // Lead Conversion (WhatsApp Click)
    trackLead: (source: string) => {
        // Google Analytics / Ads
        if (typeof window.gtag === "function") {
            window.gtag("event", "conversion", {
                send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID, // Defines which conversion to trigger
                event_category: "Lead",
                event_label: source,
            });
            logEvent("Google", "conversion", { source });
        }

        // Meta Pixel (Facebook/Instagram)
        if (typeof window.fbq === "function") {
            window.fbq("track", "Lead", {
                content_name: "WhatsApp Click",
                content_category: source,
            });
            logEvent("Meta", "Lead", { source });
        }
    },

    // View Content (Page View or Section View)
    trackViewContent: (contentName: string) => {
        if (typeof window.fbq === "function") {
            window.fbq("track", "ViewContent", {
                content_name: contentName,
            });
            logEvent("Meta", "ViewContent", { contentName });
        }
    },

    // Begin Checkout (If we had a checkout, mapped to booking intent)
    trackInitiateCheckout: (tourName: string) => {
        if (typeof window.fbq === "function") {
            window.fbq("track", "InitiateCheckout", {
                content_name: tourName,
            });
            logEvent("Meta", "InitiateCheckout", { tourName });
        }
    },
};
