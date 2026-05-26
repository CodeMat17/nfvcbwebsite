

import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen px-4 py-12 '>Coming Soon!</div>
  )
}

export default page

// "use client";

// import { useState } from "react";
// import { useQuery, useMutation } from "convex/react";
// import { api } from "@/convex/_generated/api";
// import type { Id } from "@/convex/_generated/dataModel";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Pencil, Trash2, Plus, X, Check, Loader2 } from "lucide-react";

// type NewsDoc = {
//   _id: Id<"news">;
//   title: string;
//   slug: string;
//   excerpt: string;
//   body: string;
//   coverImageUrl?: string;
//   category?: string;
//   author?: string;
//   featured?: boolean;
// };

// const EMPTY_FORM = {
//   title: "",
//   body: "",
//   coverImageUrl: "",
//   category: "news",
//   author: "",
//   featured: false,
// };

// export default function UpdatePage() {
//   const items = useQuery(api.news.list) as NewsDoc[] | undefined;
//   const createNews = useMutation(api.news.create);
//   const updateNews = useMutation(api.news.update);
//   const removeNews = useMutation(api.news.remove);

//   const [form, setForm] = useState(EMPTY_FORM);
//   const [editingId, setEditingId] = useState<Id<"news"> | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [deletingId, setDeletingId] = useState<Id<"news"> | null>(null);

//   function startEdit(item: NewsDoc) {
//     setEditingId(item._id);
//     setForm({
//       title: item.title,
//       body: item.body,
//       coverImageUrl: item.coverImageUrl ?? "",
//       category: item.category ?? "news",
//       author: item.author ?? "",
//       featured: item.featured ?? false,
//     });
//     setError(null);
//     setSuccess(null);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   function cancelEdit() {
//     setEditingId(null);
//     setForm(EMPTY_FORM);
//     setError(null);
//     setSuccess(null);
//   }

//   async function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     if (!form.title.trim() || !form.body.trim()) {
//       setError("Title and body are required.");
//       return;
//     }
//     setLoading(true);
//     setError(null);
//     setSuccess(null);
//     try {
//       const payload = {
//         title: form.title.trim(),
//         body: form.body.trim(),
//         coverImageUrl: form.coverImageUrl.trim() || undefined,
//         category: form.category || undefined,
//         author: form.author.trim() || undefined,
//         featured: form.featured || undefined,
//       };
//       if (editingId) {
//         await updateNews({ id: editingId, ...payload });
//         setSuccess("Article updated.");
//         setEditingId(null);
//         setForm(EMPTY_FORM);
//       } else {
//         await createNews(payload);
//         setSuccess("Article created.");
//         setForm(EMPTY_FORM);
//       }
//     } catch (err: unknown) {
//       setError(err instanceof Error ? err.message : "Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function handleDelete(id: Id<"news">) {
//     setDeletingId(id);
//     setError(null);
//     setSuccess(null);
//     try {
//       await removeNews({ id });
//       setSuccess("Article deleted.");
//       if (editingId === id) cancelEdit();
//     } catch (err: unknown) {
//       setError(err instanceof Error ? err.message : "Delete failed.");
//     } finally {
//       setDeletingId(null);
//     }
//   }

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
//       <div>
//         <h1 className="text-2xl font-bold">News Management</h1>
//         <p className="text-muted-foreground text-sm mt-1">
//           Create, edit, and delete news articles.
//         </p>
//       </div>

//       {/* Form */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-base">
//             {editingId ? "Edit Article" : "New Article"}
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid sm:grid-cols-2 gap-4">
//               <div className="space-y-1">
//                 <label className="text-sm font-medium">Title *</label>
//                 <Input
//                   value={form.title}
//                   onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
//                   placeholder="Article title"
//                 />
//               </div>
//               <div className="space-y-1">
//                 <label className="text-sm font-medium">Author</label>
//                 <Input
//                   value={form.author}
//                   onChange={(e) => setForm((f) => ({ ...f, author: e.target.value }))}
//                   placeholder="Author name"
//                 />
//               </div>
//             </div>

//             <div className="grid sm:grid-cols-2 gap-4">
//               <div className="space-y-1">
//                 <label className="text-sm font-medium">Category</label>
//                 <Select
//                   value={form.category}
//                   onValueChange={(v) => setForm((f) => ({ ...f, category: v }))}
//                 >
//                   <SelectTrigger>
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="news">News</SelectItem>
//                     <SelectItem value="press-release">Press Release</SelectItem>
//                     <SelectItem value="announcement">Announcement</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="space-y-1">
//                 <label className="text-sm font-medium">Cover Image URL</label>
//                 <Input
//                   value={form.coverImageUrl}
//                   onChange={(e) => setForm((f) => ({ ...f, coverImageUrl: e.target.value }))}
//                   placeholder="https://..."
//                 />
//               </div>
//             </div>

//             <div className="flex items-center gap-2">
//               <input
//                 id="featured"
//                 type="checkbox"
//                 className="h-4 w-4 accent-[#009f3b]"
//                 checked={form.featured}
//                 onChange={(e) => setForm((f) => ({ ...f, featured: e.target.checked }))}
//               />
//               <label htmlFor="featured" className="text-sm font-medium cursor-pointer">
//                 Featured article
//               </label>
//             </div>

//             <div className="space-y-1">
//               <label className="text-sm font-medium">Body *</label>
//               <Textarea
//                 value={form.body}
//                 onChange={(e) => setForm((f) => ({ ...f, body: e.target.value }))}
//                 placeholder="Article body (HTML supported)"
//                 rows={10}
//                 className="font-mono text-sm"
//               />
//             </div>

//             {error && (
//               <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-md">
//                 {error}
//               </p>
//             )}
//             {success && (
//               <p className="text-sm text-[#009f3b] bg-[#009f3b]/10 px-3 py-2 rounded-md flex items-center gap-1.5">
//                 <Check className="h-4 w-4" /> {success}
//               </p>
//             )}

//             <div className="flex gap-2">
//               <Button type="submit" disabled={loading} className="bg-[#009f3b] hover:bg-[#007f2f]">
//                 {loading ? (
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                 ) : editingId ? (
//                   "Save Changes"
//                 ) : (
//                   <>
//                     <Plus className="h-4 w-4 mr-1" /> Create
//                   </>
//                 )}
//               </Button>
//               {editingId && (
//                 <Button type="button" variant="outline" onClick={cancelEdit}>
//                   <X className="h-4 w-4 mr-1" /> Cancel
//                 </Button>
//               )}
//             </div>
//           </form>
//         </CardContent>
//       </Card>

//       {/* Articles list */}
//       <div className="space-y-3">
//         <h2 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
//           All Articles ({items?.length ?? "…"})
//         </h2>

//         {items === undefined && (
//           <div className="py-10 flex justify-center">
//             <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
//           </div>
//         )}

//         {items?.map((item) => (
//           <Card key={item._id} className={editingId === item._id ? "border-[#009f3b]" : ""}>
//             <CardContent className="flex items-start gap-4 py-4">
//               <div className="flex-1 min-w-0">
//                 <div className="flex items-center gap-2 flex-wrap">
//                   <span className="font-medium text-sm line-clamp-1">{item.title}</span>
//                   {item.featured && (
//                     <Badge className="text-[10px] bg-[#fea600]/10 text-[#fea600] border-[#fea600]/20">
//                       Featured
//                     </Badge>
//                   )}
//                   {item.category && (
//                     <Badge variant="outline" className="text-[10px]">
//                       {item.category}
//                     </Badge>
//                   )}
//                 </div>
//                 <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{item.excerpt}</p>
//                 {item.author && (
//                   <p className="text-[11px] text-muted-foreground mt-0.5">by {item.author}</p>
//                 )}
//               </div>
//               <div className="flex gap-1 shrink-0">
//                 <Button
//                   size="icon"
//                   variant="ghost"
//                   className="h-8 w-8"
//                   onClick={() => startEdit(item)}
//                   title="Edit"
//                 >
//                   <Pencil className="h-4 w-4" />
//                 </Button>
//                 <Button
//                   size="icon"
//                   variant="ghost"
//                   className="h-8 w-8 text-destructive hover:text-destructive"
//                   onClick={() => handleDelete(item._id)}
//                   disabled={deletingId === item._id}
//                   title="Delete"
//                 >
//                   {deletingId === item._id ? (
//                     <Loader2 className="h-4 w-4 animate-spin" />
//                   ) : (
//                     <Trash2 className="h-4 w-4" />
//                   )}
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}

//         {items?.length === 0 && (
//           <p className="text-sm text-muted-foreground text-center py-10">
//             No articles yet. Create one above.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
