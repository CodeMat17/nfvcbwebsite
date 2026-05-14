import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// ── About Content (functions, principles, goals) ──────────────────────────────

export const listContent = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("aboutContent").order("asc").take(200);
  },
});

export const listContentBySection = query({
  args: { section: v.string() },
  handler: async (ctx, args) => {
    return ctx.db.query("aboutContent").withIndex("by_section", (q) => q.eq("section", args.section)).collect();
  },
});

export const createContent = mutation({
  args: { section: v.string(), text: v.string(), order: v.number() },
  handler: async (ctx, args) => ctx.db.insert("aboutContent", args),
});

export const updateContent = mutation({
  args: {
    id: v.id("aboutContent"),
    section: v.optional(v.string()),
    text: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const removeContent = mutation({
  args: { id: v.id("aboutContent") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});

// ── Timeline ─────────────────────────────────────────────────────────────────

export const listTimeline = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("timeline").order("asc").take(50);
  },
});

export const createTimeline = mutation({
  args: { year: v.string(), event: v.string(), order: v.number() },
  handler: async (ctx, args) => ctx.db.insert("timeline", args),
});

export const updateTimeline = mutation({
  args: {
    id: v.id("timeline"),
    year: v.optional(v.string()),
    event: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const removeTimeline = mutation({
  args: { id: v.id("timeline") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});
