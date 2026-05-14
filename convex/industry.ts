import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// ── Forms ────────────────────────────────────────────────────────────────────

export const listForms = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("industryForms").order("asc").take(50);
  },
});

export const createForm = mutation({
  args: { name: v.string(), formType: v.string(), href: v.string(), order: v.number() },
  handler: async (ctx, args) => ctx.db.insert("industryForms", args),
});

export const updateForm = mutation({
  args: {
    id: v.id("industryForms"),
    name: v.optional(v.string()),
    formType: v.optional(v.string()),
    href: v.optional(v.string()),
    order: v.optional(v.number()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const removeForm = mutation({
  args: { id: v.id("industryForms") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});

// ── Submission Steps ──────────────────────────────────────────────────────────

export const listSteps = query({
  args: {},
  handler: async (ctx) => {
    return ctx.db.query("submissionSteps").order("asc").take(20);
  },
});

export const createStep = mutation({
  args: { step: v.number(), title: v.string(), description: v.string() },
  handler: async (ctx, args) => ctx.db.insert("submissionSteps", args),
});

export const updateStep = mutation({
  args: {
    id: v.id("submissionSteps"),
    step: v.optional(v.number()),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
  },
  handler: async (ctx, { id, ...fields }) => ctx.db.patch(id, fields),
});

export const removeStep = mutation({
  args: { id: v.id("submissionSteps") },
  handler: async (ctx, args) => ctx.db.delete(args.id),
});
