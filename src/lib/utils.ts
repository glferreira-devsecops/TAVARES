import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format price in BRL currency
 */
export function formatPrice(price: number, locale: string = "pt-BR"): string {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);
}

/**
 * Format date for display
 */
export function formatDate(
    date: string | Date,
    locale: string = "pt-BR",
    options?: Intl.DateTimeFormatOptions
): string {
    const defaultOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        ...options,
    };
    return new Date(date).toLocaleDateString(locale, defaultOptions);
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
}

/**
 * Generate slug from text
 */
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove accents
        .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
        .replace(/(^-|-$)/g, ""); // Remove leading/trailing hyphens
}

/**
 * Check if we're running on the client
 */
export function isClient(): boolean {
    return typeof window !== "undefined";
}

/**
 * Check if we're running on the server
 */
export function isServer(): boolean {
    return typeof window === "undefined";
}

/**
 * Get country flag emoji from country code
 */
export function getCountryFlag(countryCode: string): string {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

/**
 * Calculate reading time for text content
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Generate random ID
 */
export function generateId(prefix: string = "id"): string {
    return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: Element, threshold: number = 0): boolean {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) - threshold &&
        rect.bottom >= threshold &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) - threshold &&
        rect.right >= threshold
    );
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(
    elementId: string,
    offset: number = 0,
    behavior: ScrollBehavior = "smooth"
): void {
    const element = document.getElementById(elementId);
    if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior });
    }
}

/**
 * Get URL search params as object
 */
export function getSearchParams(url: string): Record<string, string> {
    const searchParams = new URL(url).searchParams;
    const params: Record<string, string> = {};
    searchParams.forEach((value, key) => {
        params[key] = value;
    });
    return params;
}

/**
 * Deep clone object
 */
export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Check if object is empty
 */
export function isEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
}

/**
 * Capitalize first letter
 */
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Get initials from name
 */
export function getInitials(name: string, maxLength: number = 2): string {
    return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, maxLength);
}
