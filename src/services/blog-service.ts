import { getAllBlogPosts, getBlogPostBySlug, getBlogPostsByCategory, getFeaturedBlogPosts } from "@/data/blog";
import type { BlogPost } from "@/types";

export const BlogService = {
    getAll: async (): Promise<BlogPost[]> => {
        return getAllBlogPosts();
    },

    getFeatured: async (limit: number = 3): Promise<BlogPost[]> => {
        return getFeaturedBlogPosts(limit);
    },

    getBySlug: async (slug: string): Promise<BlogPost | undefined> => {
        return getBlogPostBySlug(slug);
    },

    getByCategory: async (category: string): Promise<BlogPost[]> => {
        return getBlogPostsByCategory(category);
    }
};
