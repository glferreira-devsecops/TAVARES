/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Brand Colors - Premium Black & Yellow "Favela-República"
            colors: {
                primary: {
                    50: "#FAF6EB",
                    100: "#F5ECD6",
                    200: "#EBD9AD",
                    300: "#E3C67B",
                    400: "#D9B360",
                    500: "#D2AC5C", // Brand Main (Gold)
                    600: "#B8934A",
                    700: "#94763B",
                    800: "#755D33",
                    900: "#594229", // Brand Dark (Brown)
                    950: "#362616",
                },
                neutral: {
                    50: "#FAFAFA",
                    100: "#F5F5F5",
                    200: "#E5E5E5",
                    300: "#D4D4D4",
                    400: "#A3A3A3",
                    500: "#737373",
                    600: "#525252",
                    700: "#404040",
                    800: "#262626", // Rich Dark
                    900: "#171717", // Almost Black
                    950: "#0A0A0A", // True Black
                },
                accent: {
                    500: "#FFD700", // Gold
                    purple: "#7C3AED", // For creative touches
                    blue: "#2563EB", // For trust
                },
                whatsapp: "#25D366",
                surface: {
                    50: "#FFFFFF",
                    100: "#FAFAFA",
                    900: "#121212", // Dark surface
                },
                success: "#10B981",
                warning: "#F59E0B",
                error: "#EF4444",
            },

            // Typography
            fontFamily: {
                heading: ["var(--font-heading)", "Georgia", "serif"],
                body: ["var(--font-body)", "system-ui", "sans-serif"],
            },

            fontSize: {
                "display-2xl": ["5.5rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
                "display-xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
                "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "display-md": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
                "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
            },

            // Spacing
            spacing: {
                "18": "4.5rem",
                "22": "5.5rem",
                "30": "7.5rem",
            },

            // Border Radius
            borderRadius: {
                "4xl": "2.5rem",
                "5xl": "3rem",
            },

            // Box Shadows
            boxShadow: {
                "soft-sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                "soft-md": "0 2px 15px -3px rgb(0 0 0 / 0.07), 0 10px 20px -2px rgb(0 0 0 / 0.04)",
                "soft-lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                "soft-xl": "0 25px 50px -12px rgb(0 0 0 / 0.15)",
                "glow": "0 0 20px rgba(255, 176, 0, 0.5)", // Yellow Glow
                "glow-sm": "0 0 10px rgba(255, 176, 0, 0.3)",
            },

            // Z-Index - STRICT LAYERING
            zIndex: {
                "base": "0",
                "header": "100",      // Fixed Header
                "sticky": "200",      // Sticky Elements (Tour Card)
                "overlay": "400",     // Backdrops
                "menu": "500",        // Mobile Menu
                "popover": "600",     // Tooltips, Dropdowns
                "floating": "900",    // WhatsApp Button
                "modal": "1050",      // Booking Modal (top)
                "max": "9999",        // Critical Alerts
            },

            // Animations
            animation: {
                "fade-in": "fadeIn 0.5s ease-out forwards",
                "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "scale-in": "scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "float": "float 6s ease-in-out infinite",
                "shimmer": "shimmer 2.5s linear infinite",
            },

            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.9)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-15px)" },
                },
                shimmer: {
                    "100%": { transform: "translateX(100%)" },
                },
            },

            // Backdrop Blur
            backdropBlur: {
                xs: "2px",
            },

            // Transitions
            transitionDuration: {
                "400": "400ms",
                "600": "600ms",
            },

            // Container
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "6rem",
                },
                screens: {
                    sm: "640px",
                    md: "768px",
                    lg: "1024px",
                    xl: "1280px",
                    "2xl": "1440px", // Max width constraint for better reading
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
} satisfies Config;
