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
            // Brand Colors
            colors: {
                primary: {
                    50: "oklch(var(--color-primary-50))",
                    100: "oklch(var(--color-primary-100))",
                    200: "oklch(var(--color-primary-200))",
                    300: "oklch(var(--color-primary-300))",
                    400: "oklch(var(--color-primary-400))",
                    500: "oklch(var(--color-primary-500))",
                    600: "oklch(var(--color-primary-600))",
                    700: "oklch(var(--color-primary-700))",
                    800: "oklch(var(--color-primary-800))",
                    900: "oklch(var(--color-primary-900))",
                },
                neutral: {
                    50: "oklch(var(--color-neutral-50))",
                    100: "oklch(var(--color-neutral-100))",
                    200: "oklch(var(--color-neutral-200))",
                    300: "oklch(var(--color-neutral-300))",
                    400: "oklch(var(--color-neutral-400))",
                    500: "oklch(var(--color-neutral-500))",
                    600: "oklch(var(--color-neutral-600))",
                    700: "oklch(var(--color-neutral-700))",
                    800: "oklch(var(--color-neutral-800))",
                    900: "oklch(var(--color-neutral-900))",
                },
                accent: {
                    500: "#f59e0b", // Golden/amber for stars
                },
                whatsapp: "#25D366",
                success: "var(--color-success)",
                warning: "var(--color-warning)",
                error: "var(--color-error)",
            },

            // Typography
            fontFamily: {
                heading: ["var(--font-heading)", "Georgia", "serif"],
                body: ["var(--font-body)", "system-ui", "sans-serif"],
            },

            fontSize: {
                "display-lg": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "display-md": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
            },

            // Spacing
            spacing: {
                "18": "4.5rem",
                "22": "5.5rem",
                "30": "7.5rem",
            },

            // Border Radius
            borderRadius: {
                "4xl": "2rem",
            },

            // Box Shadows
            boxShadow: {
                "soft-sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                "soft-md": "0 2px 15px -3px rgb(0 0 0 / 0.07), 0 10px 20px -2px rgb(0 0 0 / 0.04)",
                "soft-lg": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                "soft-xl": "0 25px 50px -12px rgb(0 0 0 / 0.15)",
            },

            // Z-Index
            zIndex: {
                "dropdown": "100",
                "sticky": "200",
                "fixed": "300",
                "modal-backdrop": "400",
                "modal": "500",
                "popover": "600",
                "tooltip": "700",
            },

            // Animations
            animation: {
                "fade-in": "fadeIn 0.5s ease forwards",
                "fade-in-up": "fadeInUp 0.6s ease forwards",
                "scale-in": "scaleIn 0.4s ease forwards",
                "float": "float 3s ease-in-out infinite",
                "pulse-soft": "pulseSoft 2s ease-in-out infinite",
            },

            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                pulseSoft: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0.7" },
                },
            },

            // Backdrop Blur
            backdropBlur: {
                xs: "2px",
            },

            // Transitions
            transitionDuration: {
                "400": "400ms",
            },

            // Container
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "5rem",
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
} satisfies Config;
