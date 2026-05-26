import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("news").order("desc").collect();
  },
});

function toSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function toExcerpt(body: string): string {
  const plain = body.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return plain.length <= 150 ? plain : plain.slice(0, 147) + "...";
}

export const create = mutation({
  args: {
    title: v.string(),
    body: v.string(),
    coverImageUrl: v.optional(v.string()),
    coverImageId: v.optional(v.id("_storage")),
    category: v.optional(v.string()),
    author: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    if (args.coverImageId) {
      const meta = await ctx.db.system.get(args.coverImageId);
      if (meta && meta.size > 150 * 1024) {
        throw new Error("Cover image must be 150 KB or smaller.");
      }
    }

    const slug = toSlug(args.title);
    const existing = await ctx.db
      .query("news")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .unique();
    if (existing) {
      throw new Error(`A news article with slug "${slug}" already exists.`);
    }

    const excerpt = toExcerpt(args.body);

    return await ctx.db.insert("news", {
      title: args.title,
      slug,
      excerpt,
      body: args.body,
      coverImageUrl: args.coverImageUrl,
      coverImageId: args.coverImageId,
      category: args.category,
      author: args.author,
      featured: args.featured,
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("news"),
    title: v.optional(v.string()),
    body: v.optional(v.string()),
    coverImageUrl: v.optional(v.string()),
    coverImageId: v.optional(v.id("_storage")),
    category: v.optional(v.string()),
    author: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;

    const existing = await ctx.db.get(id);
    if (!existing) throw new Error("News article not found.");

    if (fields.coverImageId) {
      const meta = await ctx.db.system.get(fields.coverImageId);
      if (meta && meta.size > 150 * 1024) {
        throw new Error("Cover image must be 150 KB or smaller.");
      }
    }

    const patch: Record<string, unknown> = { ...fields };

    if (fields.title !== undefined) {
      const slug = toSlug(fields.title);
      const conflict = await ctx.db
        .query("news")
        .withIndex("by_slug", (q) => q.eq("slug", slug))
        .unique();
      if (conflict && conflict._id !== id) {
        throw new Error(`A news article with slug "${slug}" already exists.`);
      }
      patch.slug = slug;
    }

    if (fields.body !== undefined) {
      patch.excerpt = toExcerpt(fields.body);
    }

    await ctx.db.patch(id, patch);
  },
});

export const remove = mutation({
  args: { id: v.id("news") },
  handler: async (ctx, args) => {
    const existing = await ctx.db.get(args.id);
    if (!existing) throw new Error("News article not found.");
    await ctx.db.delete(args.id);
  },
});
