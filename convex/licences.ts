import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("licences").order("asc").take(100);
  },
});

export const listBySection = query({
  args: { section: v.string() },
  handler: async (ctx, args) => {
    return ctx.db.query("licences").withIndex("by_section", (q) => q.eq("section", args.section)).collect();
  },
});

export const create = mutation({
  args: {
    section: v.string(),
    title: v.string(),
    processingFee: v.string(),
    licenceFee: v.string(),
    renewalBefore: v.optional(v.string()),
    renewalAfter: v.optional(v.string()),
    shareCapital: v.optional(v.string()),
    seating: v.optional(v.string()),
    description: v.string(),
    requirements: v.array(v.string()),
    order: v.number(),
  },
  handler: async (ctx, args) => ctx.db.insert("licences", args),
});

export const update = mutation({
  args: {
    id: v.id("licences"),
    section: v.optional(v.string()),
    title: v.optional(v.string()),
    processingFee: v.optional(v.string()),
    licenceFee: v.optional(v.string()),
    renewalBefore: v.optional(v.string()),
    renewalAfter: v.optional(v.string()),
    shareCapital: v.optional(v.string()),
    seating: v.optional(v.string()),
    description: v.optional(v.string()),
    requirements: v.optional(v.array(v.string())),
    order: v.optional(v.number()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const remove = mutation({
  args: { id: v.id("licences") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});
