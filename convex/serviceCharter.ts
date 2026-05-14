import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("serviceStandards").order("asc").take(200);
  },
});

export const listByClientType = query({
  args: { clientType: v.string() },
  handler: async (ctx, args) => {
    return ctx.db.query("serviceStandards").withIndex("by_clientType", (q) => q.eq("clientType", args.clientType)).collect();
  },
});

export const create = mutation({
  args: { clientType: v.string(), text: v.string(), order: v.number() },
  handler: async (ctx, args) => ctx.db.insert("serviceStandards", args),
});

export const update = mutation({
  args: {
    id: v.id("serviceStandards"),
    clientType: v.optional(v.string()),
    text: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const remove = mutation({
  args: { id: v.id("serviceStandards") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});
