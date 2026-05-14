import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("faqs").order("asc").take(500);
  },
});

export const listByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return ctx.db.query("faqs").withIndex("by_category", (q) => q.eq("category", args.category)).collect();
  },
});

export const listPublished = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("faqs").withIndex("by_isPublished", (q) => q.eq("isPublished", true)).take(500);
  },
});

export const create = mutation({
  args: {
    category: v.string(),
    question: v.string(),
    answer: v.string(),
    order: v.number(),
    isPublished: v.boolean(),
  },
  handler: async (ctx, args) => ctx.db.insert("faqs", args),
});

export const update = mutation({
  args: {
    id: v.id("faqs"),
    category: v.optional(v.string()),
    question: v.optional(v.string()),
    answer: v.optional(v.string()),
    order: v.optional(v.number()),
    isPublished: v.optional(v.boolean()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const remove = mutation({
  args: { id: v.id("faqs") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});
