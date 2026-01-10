// Type definitions for Favela-República

// Tour FAQ (simpler version for inline FAQs in tours)
export interface TourFAQ {
    id: string;
    question: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    answer: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
}

// Tour Types
export interface Tour {
    id: string;
    slug: string;
    title: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    subtitle: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    description: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    shortDescription: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    duration: string;
    difficulty: "easy" | "moderate" | "challenging";
    priceFrom: number;
    currency: "BRL";
    groupSize: {
        min: number;
        max: number;
    };
    included: {
        pt: string[];
        en: string[];
        es: string[];
        fr: string[];
    };
    notIncluded: {
        pt: string[];
        en: string[];
        es: string[];
        fr: string[];
    };
    itinerary: ItineraryStep[];
    images: string[];
    highlights?: {
        pt: string[];
        en: string[];
        es: string[];
        fr: string[];
    };
    meetingPoint: Location;
    faq?: TourFAQ[];
    featured?: boolean;
    order?: number;
}

export interface ItineraryStep {
    order: number;
    title: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    description: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    duration?: string;
    icon?: string;
}

export interface TourImage {
    src: string;
    alt: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    width?: number; // Made optional as sometimes we just use path string in data/tours.ts (wait, really? data/tours.ts uses strings only right now. We might need to adjust data/tours.ts to match this object or change this type to allow string.)
    // BETTER: Update the type to match reality. data/tours.ts uses `images: string[]`.
    // BUT `Tour` interface says `images: TourImage[]`. This is the mismatch causing "Type 'string' is not assignable to type 'TourImage'".
    // User wants fixes. data/tours.ts has just strings.
    // let's change Tour definition for images to `string[] | TourImage[]` or just `string[]` if we want properly fixed.
    // Actually, let's keep TourImage but make it capable of being just a string in some contexts? No, Typescript doesn't work that way easily without union types.
    // The best fix is to Update `Tour` to allow `images: string[]` OR update `data/tours.ts` to be objects.
    // Given the recent `tours.ts` update used strings, I should update the `Tour` type to match.
    // BUT, I'll update the interfaces here first to include `es` `fr` for other things.
    height?: number;
    featured?: boolean;
}

// For now, let's keep TourImage objects structure but realize `tours.ts` is wrong.
// Wait, I will fix `tours.ts` images to be objects later if needed? No, easier to change type to `string[]` for now if that's what is used, or `(string | TourImage)[]`.
// Let's look at `data/tours.ts` again. It uses `images: ["/path/to/img"]`.
// So `Tour` interface `images` should be `string[]`.
// However, the `TourDetailClient` uses `tour.images[0].src`?
// Let's check `tour-detail.tsx`.
// Line 108: `const heroImage = tour.images[0];`
// Line 115: `src={heroImage?.src || ...}`
// So `TourDetailClient` expects objects!
// This means `data/tours.ts` IS WRONG to use strings.
// I must fix `data/tours.ts` to be objects.
// BUT I also need to update these types.

export interface Location {
    name: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    address: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    instructions?: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
}

// Testimonial Types
export interface Testimonial {
    id: string;
    name: string;
    country: string;
    countryCode: string;
    city?: string;
    avatar?: string;
    rating: number;
    quote: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    tourSlug?: string;
    date: string;
    source: "instagram" | "tripadvisor" | "google" | "direct";
    verified: boolean;
}

// Gallery Types
export interface GalleryImage {
    id: string;
    src: string;
    alt: {
        pt: string;
        en: string;
    };
    width: number;
    height: number;
    category: GalleryCategory;
    featured?: boolean;
    order?: number;
}

export type GalleryCategory =
    | "street-art"
    | "panoramic-views"
    | "favela"
    | "fifa-court"
    | "the-maze"
    | "experiences"
    | "nature";

// FAQ Types
export interface FAQ {
    id: string;
    question: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    answer: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    category: string;
    order: number;
}

// Team Member Types
export interface TeamMember {
    id: string;
    name: string;
    role: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    bio: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    image: string;
    languages: string[];
    specialties?: string[];
}

// Blog Types
export interface BlogPost {
    id: string;
    slug: string;
    title: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    excerpt: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    content: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    author: string;
    publishedAt: string;
    updatedAt?: string;
    category: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    tags: {
        pt: string[];
        en: string[];
        es: string[];
        fr: string[];
    };
    image: string;
    readTime: number;
    featured?: boolean;
}

// Contact Form Types
export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    tourInterest?: string;
    preferredDate?: string;
    groupSize?: number;
    message: string;
    source?: string;
}

// Navigation Types
export interface NavItem {
    label: {
        pt: string;
        en: string;
        es: string;
        fr: string;
    };
    href: string;
    children?: NavItem[];
    external?: boolean;
}

// Locale Types
export type Locale = "pt" | "en" | "es" | "fr";

// Social Media Types
export interface SocialLink {
    platform: "instagram" | "facebook" | "tripadvisor" | "whatsapp" | "youtube";
    url: string;
    label: string;
}

// SEO Types
export interface SEOData {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    noIndex?: boolean;
}

// Component Props Types
export interface SectionProps {
    className?: string;
    id?: string;
}

export interface ButtonProps {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    external?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

export interface CardProps {
    className?: string;
    children: React.ReactNode;
    hoverable?: boolean;
    onClick?: () => void;
}

export interface BadgeProps {
    variant?: "primary" | "secondary" | "accent" | "success" | "neutral";
    size?: "sm" | "md";
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
