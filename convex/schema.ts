import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  newsItems: defineTable({
    title: v.string(),
    slug: v.string(),
    summary: v.optional(v.string()),
    body: v.string(),
    coverImageId: v.optional(v.id("_storage")),
    coverImageUrl: v.optional(v.string()),
    category: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    authorName: v.optional(v.string()),
    publishedAt: v.optional(v.number()),
    isPublished: v.boolean(),
  })
    .index("by_slug", ["slug"])
    .index("by_isPublished_and_publishedAt", ["isPublished", "publishedAt"])
    .index("by_category", ["category"])
    .searchIndex("search_title_body", {
      searchField: "title",
      filterFields: ["isPublished", "category"],
    }),

  // Inline images embedded within a news post body, stored separately to
  // avoid hitting the 1 MB document limit with an unbounded array.
  newsImages: defineTable({
    newsItemId: v.id("newsItems"),
    storageId: v.id("_storage"),
    // Client-supplied URL cached here so queries don't need a second round-trip.
    url: v.optional(v.string()),
    caption: v.optional(v.string()),
    // Position hint for ordering images within the post body.
    order: v.number(),
  }).index("by_newsItemId", ["newsItemId"]),
});
