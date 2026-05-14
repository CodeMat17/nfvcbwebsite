import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { paginationOptsValidator } from "convex/server";

export const list = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    return ctx.db.query("news").order("desc").paginate(args.paginationOpts);
  },
});

export const listAll = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("news").order("desc").take(200);
  },
});

export const getById = query({
  args: { id: v.id("news") },
  handler: async (ctx, args) => {
    return ctx.db.get(args.id);
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return ctx.db.query("news").withIndex("by_slug", (q) => q.eq("slug", args.slug)).unique();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    excerpt: v.optional(v.string()),
    body: v.string(),
    coverImageId: v.optional(v.id("_storage")),
    coverImageUrl: v.optional(v.string()),
    category: v.optional(v.string()),
    author: v.optional(v.string()),
    isPublished: v.boolean(),
  },
  handler: async (ctx, args) => {
    return ctx.db.insert("news", args);
  },
});

export const update = mutation({
  args: {
    id: v.id("news"),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    body: v.optional(v.string()),
    coverImageId: v.optional(v.id("_storage")),
    coverImageUrl: v.optional(v.string()),
    category: v.optional(v.string()),
    author: v.optional(v.string()),
    isPublished: v.optional(v.boolean()),
  },
  handler: async (ctx, { id, ...fields }) => {
    await ctx.db.patch(id, fields);
  },
});

export const remove = mutation({
  args: { id: v.id("news") },
  handler: async (ctx, args) => {
    const images = await ctx.db.query("newsImages").withIndex("by_newsId", (q) => q.eq("newsId", args.id)).collect();
    for (const img of images) {
      await ctx.storage.delete(img.storageId);
      await ctx.db.delete(img._id);
    }
    const doc = await ctx.db.get(args.id);
    if (doc?.coverImageId) await ctx.storage.delete(doc.coverImageId);
    await ctx.db.delete(args.id);
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => ctx.storage.generateUploadUrl(),
});

export const saveCoverImage = mutation({
  args: { id: v.id("news"), storageId: v.id("_storage") },
  handler: async (ctx, args) => {
    const url = await ctx.storage.getUrl(args.storageId);
    await ctx.db.patch(args.id, { coverImageId: args.storageId, coverImageUrl: url ?? undefined });
  },
});
