import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("actionPoints").order("asc").take(50);
  },
});

export const create = mutation({
  args: {
    number: v.number(),
    title: v.string(),
    objective: v.string(),
    strategies: v.array(v.string()),
    order: v.number(),
  },
  handler: async (ctx, args) => ctx.db.insert("actionPoints", args),
});

export const update = mutation({
  args: {
    id: v.id("actionPoints"),
    number: v.optional(v.number()),
    title: v.optional(v.string()),
    objective: v.optional(v.string()),
    strategies: v.optional(v.array(v.string())),
    order: v.optional(v.number()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const remove = mutation({
  args: { id: v.id("actionPoints") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});
