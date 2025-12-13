import { cn } from "@/lib/utils";

export type FlagCountry = "pt" | "en" | "es" | "fr" | "gb";

interface FlagProps {
    country: FlagCountry;
    className?: string;
    size?: "sm" | "md" | "lg";
}

export function Flag({ country, className, size = "md" }: FlagProps) {
    const sizeClasses = {
        sm: "w-4 h-3",
        md: "w-6 h-4.5", // 4:3 aspect ratio approx
        lg: "w-8 h-6",
    };

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-sm shadow-sm inline-flex items-center justify-center bg-neutral-100",
                sizeClasses[size],
                className
            )}
            role="img"
            aria-label={`Flag of ${country}`}
        >
            {getFlagSvg(country)}
            {/* Glossy overlay effect for premium look */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
        </div>
    );
}

function getFlagSvg(country: FlagCountry) {
    switch (country) {
        case "pt": // Brazil
            return (
                <svg viewBox="0 0 720 500" className="w-full h-full object-cover">
                    <path fill="#009c3b" d="M0 0h720v500H0z" />
                    <path fill="#fdf402" d="M360 41.7L646.2 250 360 458.3 73.8 250z" />
                    <circle cx="360" cy="250" r="102.7" fill="#002776" />
                    <path fill="none" stroke="#fff" strokeWidth="8.6" d="M260.4 286.3c15.2-46.7 87.8-59.5 197.8-21.3" />
                </svg>
            );
        case "en": // USA (English)
            return (
                <svg viewBox="0 0 1235 650" className="w-full h-full object-cover">
                    <path fill="#b22234" d="M0 0h1235v650H0z" />
                    <path fill="#fff" d="M0 50h1235v50H0zm0 100h1235v50H0zm0 100h1235v50H0zm0 100h1235v50H0zm0 100h1235v50H0zm0 100h1235v50H0z" />
                    <path fill="#3c3b6e" d="M0 0h494v350H0z" />
                    {/* Simplified stars for small size rendering */}
                    <g fill="#fff">
                        <path d="M247 175l5-15h16l-13 9 5 15-13-9-13 9 5-15-13-9h16z" transform="scale(0.8) translate(30 30)" />
                        <path d="M247 175l5-15h16l-13 9 5 15-13-9-13 9 5-15-13-9h16z" transform="scale(0.8) translate(150 30)" />
                        <path d="M247 175l5-15h16l-13 9 5 15-13-9-13 9 5-15-13-9h16z" transform="scale(0.8) translate(270 30)" />
                        <path d="M247 175l5-15h16l-13 9 5 15-13-9-13 9 5-15-13-9h16z" transform="scale(0.8) translate(390 30)" />
                        <path d="M247 175l5-15h16l-13 9 5 15-13-9-13 9 5-15-13-9h16z" transform="scale(0.8) translate(90 80)" />
                        <path d="M247 175l5-15h16l-13 9 5 15-13-9-13 9 5-15-13-9h16z" transform="scale(0.8) translate(210 80)" />
                        <path d="M247 175l5-15h16l-13 9 5 15-13-9-13 9 5-15-13-9h16z" transform="scale(0.8) translate(330 80)" />
                    </g>
                </svg>
            );
        case "es": // Spain
            return (
                <svg viewBox="0 0 750 500" className="w-full h-full object-cover">
                    <path fill="#aa151b" d="M0 0h750v500H0z" />
                    <path fill="#f1bf00" d="M0 125h750v250H0z" />
                </svg>
            );
        case "fr": // France
            return (
                <svg viewBox="0 0 900 600" className="w-full h-full object-cover">
                    <path fill="#fff" d="M0 0h900v600H0z" />
                    <path fill="#002395" d="M0 0h300v600H0z" />
                    <path fill="#ed2939" d="M600 0h300v600H0z" />
                </svg>
            );
        case "gb": // UK
            return (
                <svg viewBox="0 0 600 300" className="w-full h-full object-cover">
                    <path fill="#012169" d="M0 0h600v300H0z" />
                    <path fill="#fff" d="M0 0l600 300M0 300L600 0M0 100h600v100H0M250 0h100v300H250" />
                    <path fill="#c8102e" d="M0 0l600 300M0 300L600 0M0 120h600v60H0M270 0h60v300H270" stroke="#fff" strokeWidth="0" />
                    {/* Simplified Union Jack */}
                </svg>
            );
        default:
            return null;
    }
}
