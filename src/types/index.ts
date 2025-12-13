// Type definitions for Favela-República

// Tour FAQ (simpler version for inline FAQs in tours)
export interface TourFAQ {
    id: string;
    question: {
        pt: string;
        en: string;
    };
    answer: {
        pt: string;
        en: string;
    };
}

// Tour Types
export interface Tour {
    id: string;
    slug: string;
    title: {
        pt: string;
        en: string;
    };
    subtitle: {
        pt: string;
        en: string;
    };
    description: {
        pt: string;
        en: string;
    };
    shortDescription: {
        pt: string;
        en: string;
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
    };
    notIncluded: {
        pt: string[];
        en: string[];
    };
    itinerary: ItineraryStep[];
    images: TourImage[];
    highlights: {
        pt: string[];
        en: string[];
    };
    meetingPoint: Location;
    faq: TourFAQ[];
    featured: boolean;
    order: number;
}

export interface ItineraryStep {
    order: number;
    title: {
        pt: string;
        en: string;
    };
    description: {
        pt: string;
        en: string;
    };
    duration?: string;
    icon?: string;
}

export interface TourImage {
    src: string;
    alt: {
        pt: string;
        en: string;
    };
    width: number;
    height: number;
    featured?: boolean;
}

// Location Types
export interface Location {
    name: {
        pt: string;
        en: string;
    };
    address: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    instructions?: {
        pt: string;
        en: string;
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
    | "community"
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
    };
    answer: {
        pt: string;
        en: string;
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
    };
    bio: {
        pt: string;
        en: string;
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
    };
    excerpt: {
        pt: string;
        en: string;
    };
    content: {
        pt: string;
        en: string;
    };
    author: string;
    publishedAt: string;
    updatedAt?: string;
    category: {
        pt: string;
        en: string;
    };
    tags: {
        pt: string[];
        en: string[];
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
