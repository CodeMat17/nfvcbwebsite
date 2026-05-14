import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("lawEnforcementContent").order("asc").take(200);
  },
});

export const listBySection = query({
  args: { section: v.string() },
  handler: async (ctx, args) => {
    return ctx.db.query("lawEnforcementContent").withIndex("by_section", (q) => q.eq("section", args.section)).collect();
  },
});

export const create = mutation({
  args: {
    section: v.string(),
    parties: v.optional(v.string()),
    court: v.optional(v.string()),
    text: v.optional(v.string()),
    isMajor: v.optional(v.boolean()),
    order: v.number(),
  },
  handler: async (ctx, args) => ctx.db.insert("lawEnforcementContent", args),
});

export const update = mutation({
  args: {
    id: v.id("lawEnforcementContent"),
    section: v.optional(v.string()),
    parties: v.optional(v.string()),
    court: v.optional(v.string()),
    text: v.optional(v.string()),
    isMajor: v.optional(v.boolean()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const remove = mutation({
  args: { id: v.id("lawEnforcementContent") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});
