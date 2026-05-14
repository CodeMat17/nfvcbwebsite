import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("policyContent").order("asc").take(100);
  },
});

export const listBySection = query({
  args: { section: v.string() },
  handler: async (ctx, args) => {
    return ctx.db.query("policyContent").withIndex("by_section", (q) => q.eq("section", args.section)).collect();
  },
});

export const create = mutation({
  args: {
    section: v.string(),
    type: v.optional(v.string()),
    text: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => ctx.db.insert("policyContent", args),
});

export const update = mutation({
  args: {
    id: v.id("policyContent"),
    section: v.optional(v.string()),
    type: v.optional(v.string()),
    text: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const remove = mutation({
  args: { id: v.id("policyContent") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});
