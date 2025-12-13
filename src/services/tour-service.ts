import { getAllTours, getFeaturedTours, getTourBySlug } from "@/data/tours";
import type { Tour } from "@/types";

export const TourService = {
    getAll: async (): Promise<Tour[]> => {
        // Simulating async/DB call for future CMS integration
        return getAllTours();
    },

    getFeatured: async (): Promise<Tour[]> => {
        return getFeaturedTours();
    },

    getBySlug: async (slug: string): Promise<Tour | undefined> => {
        return getTourBySlug(slug);
    }
};
