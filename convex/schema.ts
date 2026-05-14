import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ─── News ───────────────────────────────────────────────────────────────────
  news: defineTable({
    title: v.string(),
    slug: v.string(),
    excerpt: v.optional(v.string()),
    body: v.string(),
    coverImageId: v.optional(v.id("_storage")),
    coverImageUrl: v.optional(v.string()),
    category: v.optional(v.string()),
    author: v.optional(v.string()),
    isPublished: v.boolean(),
  })
    .index("by_slug", ["slug"])
    .index("by_isPublished", ["isPublished"])
    .index("by_category", ["category"])
    .searchIndex("search_title_body", {
      searchField: "title",
      filterFields: ["isPublished", "category"],
    }),

  // Inline images embedded within a news post body, stored separately to
  // avoid hitting the 1 MB document limit with an unbounded array.
  newsImages: defineTable({
    newsId: v.id("news"),
    storageId: v.id("_storage"),
    url: v.optional(v.string()),
    caption: v.optional(v.string()),
    order: v.number(),
  }).index("by_newsId", ["newsId"]),

  // ─── Approved Movies ────────────────────────────────────────────────────────
  approvedMoviePosts: defineTable({
    slug: v.string(),
    title: v.string(),
    date: v.string(),
    publishedBy: v.string(),
    coverImageId: v.optional(v.id("_storage")),
    coverImageUrl: v.optional(v.string()),
  }).index("by_slug", ["slug"]),

  // Films are stored separately to avoid the 1 MB document limit.
  approvedMovies: defineTable({
    postId: v.id("approvedMoviePosts"),
    title: v.string(),
    duration: v.string(),
    producer: v.string(),
    director: v.string(),
    majorCast: v.string(),
    rating: v.string(),
    previewLocation: v.string(),
    language: v.string(),
    consumerAdvice: v.string(),
    dateOfApproval: v.string(),
    productionCompany: v.string(),
    featured: v.optional(v.boolean()),
    trailerUrl: v.optional(v.string()),
    juryNote: v.optional(v.string()),
    order: v.number(),
  }).index("by_postId", ["postId"]),

  // ─── FAQs ───────────────────────────────────────────────────────────────────
  faqs: defineTable({
    category: v.string(),
    question: v.string(),
    answer: v.string(),
    order: v.number(),
    isPublished: v.boolean(),
  })
    .index("by_category", ["category"])
    .index("by_isPublished", ["isPublished"]),

  // ─── Classification ─────────────────────────────────────────────────────────
  classificationRatings: defineTable({
    symbol: v.string(),
    name: v.string(),
    description: v.string(),
    color: v.string(),
    order: v.number(),
  }),

  classificationFees: defineTable({
    feeType: v.string(),
    runtime: v.optional(v.string()),
    category: v.optional(v.string()),
    localFee: v.string(),
    englishFee: v.optional(v.string()),
    foreignFee: v.optional(v.string()),
    note: v.optional(v.string()),
    order: v.number(),
  }).index("by_feeType", ["feeType"]),

  // ─── Licences ───────────────────────────────────────────────────────────────
  licences: defineTable({
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
  }).index("by_section", ["section"]),

  // ─── About ──────────────────────────────────────────────────────────────────
  aboutContent: defineTable({
    section: v.string(),
    text: v.string(),
    order: v.number(),
  }).index("by_section", ["section"]),

  timeline: defineTable({
    year: v.string(),
    event: v.string(),
    order: v.number(),
  }),

  // ─── Service Charter ────────────────────────────────────────────────────────
  serviceStandards: defineTable({
    clientType: v.string(),
    text: v.string(),
    order: v.number(),
  }).index("by_clientType", ["clientType"]),

  // ─── Action Plan ────────────────────────────────────────────────────────────
  actionPoints: defineTable({
    number: v.number(),
    title: v.string(),
    objective: v.string(),
    strategies: v.array(v.string()),
    order: v.number(),
  }),

  // ─── Policy ─────────────────────────────────────────────────────────────────
  policyContent: defineTable({
    section: v.string(),
    type: v.optional(v.string()),
    text: v.string(),
    order: v.number(),
  }).index("by_section", ["section"]),

  // ─── Industry ───────────────────────────────────────────────────────────────
  industryForms: defineTable({
    name: v.string(),
    formType: v.string(),
    href: v.string(),
    order: v.number(),
  }),

  submissionSteps: defineTable({
    step: v.number(),
    title: v.string(),
    description: v.string(),
  }),

  // ─── Law Enforcement ────────────────────────────────────────────────────────
  lawEnforcementContent: defineTable({
    section: v.string(),
    parties: v.optional(v.string()),
    court: v.optional(v.string()),
    text: v.optional(v.string()),
    isMajor: v.optional(v.boolean()),
    order: v.number(),
  }).index("by_section", ["section"]),
});
