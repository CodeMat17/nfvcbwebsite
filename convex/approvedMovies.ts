import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

const movieFields = {
  title: v.string(),
  duration: v.string(),
  producer: v.string(),
  director: v.string(),
  majorCast: v.string(),
  rating: v.string(),
  previewLocation: v.string(),
  language: v.string(),
  consumerAdvice: v.string(),
  dateOfApproval: v.string(),
  productionCompany: v.string(),
  featured: v.optional(v.boolean()),
  trailerUrl: v.optional(v.string()),
  juryNote: v.optional(v.string()),
  order: v.number(),
};

// ── Posts ────────────────────────────────────────────────────────────────────

export const listPosts = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("approvedMoviePosts").order("desc").take(100);
  },
});

export const getPost = query({
  args: { id: v.id("approvedMoviePosts") },
  handler: async (ctx, args) => ctx.db.get(args.id),
});

export const getPostBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return ctx.db.query("approvedMoviePosts").withIndex("by_slug", (q) => q.eq("slug", args.slug)).unique();
  },
});

export const createPost = mutation({
  args: {
    slug: v.string(),
    title: v.string(),
    date: v.string(),
    publishedBy: v.string(),
    coverImageId: v.optional(v.id("_storage")),
    coverImageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => ctx.db.insert("approvedMoviePosts", args),
});

export const updatePost = mutation({
  args: {
    id: v.id("approvedMoviePosts"),
    slug: v.optional(v.string()),
    title: v.optional(v.string()),
    date: v.optional(v.string()),
    publishedBy: v.optional(v.string()),
    coverImageId: v.optional(v.id("_storage")),
    coverImageUrl: v.optional(v.string()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const removePost = mutation({
  args: { id: v.id("approvedMoviePosts") },
  handler: async (ctx, args) => {
    const movies = await ctx.db.query("approvedMovies").withIndex("by_postId", (q) => q.eq("postId", args.id)).collect();
    for (const m of movies) await ctx.db.delete(m._id);
    const post = await ctx.db.get(args.id);
    if (post?.coverImageId) await ctx.storage.delete(post.coverImageId);
    await ctx.db.delete(args.id);
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => ctx.storage.generateUploadUrl(),
});

export const saveCoverImage = mutation({
  args: { id: v.id("approvedMoviePosts"), storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    const url = await ctx.storage.getUrl(args.storageId);
    await ctx.db.patch(args.id, { coverImageId: args.storageId, coverImageUrl: url ?? undefined });
  },
});

// ── Movies ───────────────────────────────────────────────────────────────────

export const listMovies = query({
  args: { postId: v.id("approvedMoviePosts") },
  handler: async (ctx, args) => {
    return ctx.db.query("approvedMovies").withIndex("by_postId", (q) => q.eq("postId", args.postId)).collect();
  },
});

export const addMovie = mutation({
  args: { postId: v.id("approvedMoviePosts"), ...movieFields },
  handler: async (ctx, args) => ctx.db.insert("approvedMovies", args),
});

export const updateMovie = mutation({
  args: {
    id: v.id("approvedMovies"),
    title: v.optional(v.string()),
    duration: v.optional(v.string()),
    producer: v.optional(v.string()),
    director: v.optional(v.string()),
    majorCast: v.optional(v.string()),
    rating: v.optional(v.string()),
    previewLocation: v.optional(v.string()),
    language: v.optional(v.string()),
    consumerAdvice: v.optional(v.string()),
    dateOfApproval: v.optional(v.string()),
    productionCompany: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    trailerUrl: v.optional(v.string()),
    juryNote: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const removeMovie = mutation({
  args: { id: v.id("approvedMovies") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});
