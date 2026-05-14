import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// ── Ratings ──────────────────────────────────────────────────────────────────

export const listRatings = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("classificationRatings").order("asc").take(20);
  },
});

export const createRating = mutation({
  args: {
    symbol: v.string(),
    name: v.string(),
    description: v.string(),
    color: v.string(),
    order: v.number(),
  },
  handler: async (ctx, args) => ctx.db.insert("classificationRatings", args),
});

export const updateRating = mutation({
  args: {
    id: v.id("classificationRatings"),
    symbol: v.optional(v.string()),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    color: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const removeRating = mutation({
  args: { id: v.id("classificationRatings") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});

// ── Fees ─────────────────────────────────────────────────────────────────────

export const listFees = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("classificationFees").order("asc").take(100);
  },
});

export const listFeesByType = query({
  args: { feeType: v.string() },
  handler: async (ctx, args) => {
    return ctx.db.query("classificationFees").withIndex("by_feeType", (q) => q.eq("feeType", args.feeType)).collect();
  },
});

export const createFee = mutation({
  args: {
    feeType: v.string(),
    runtime: v.optional(v.string()),
    category: v.optional(v.string()),
    localFee: v.string(),
    englishFee: v.optional(v.string()),
    foreignFee: v.optional(v.string()),
    note: v.optional(v.string()),
    order: v.number(),
  },
  handler: async (ctx, args) => ctx.db.insert("classificationFees", args),
});

export const updateFee = mutation({
  args: {
    id: v.id("classificationFees"),
    feeType: v.optional(v.string()),
    runtime: v.optional(v.string()),
    category: v.optional(v.string()),
    localFee: v.optional(v.string()),
    englishFee: v.optional(v.string()),
    foreignFee: v.optional(v.string()),
    note: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const removeFee = mutation({
  args: { id: v.id("classificationFees") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});
