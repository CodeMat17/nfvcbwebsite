import { AnimatedSection } from "@/components/animated-section";
import { ShareButton } from "@/components/ShareButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await fetchQuery(api.news.getBySlug, { slug });
  if (!item) return { title: "Not Found" };
  const ogImage = item.coverImageUrl
    ? [{ url: item.coverImageUrl, width: 800, height: 500 }]
    : [{ url: "/opengraph-image-v2.png", width: 1200, height: 630 }];
  const dateStr =
    item.publishedAt ?? new Date(item._creationTime).toISOString();
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `https://nfvcb.gov.ng/news/${slug}` },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.excerpt,
      url: `https://nfvcb.gov.ng/news/${slug}`,
      publishedTime: dateStr,
      authors: item.author ? [item.author] : ["NFVCB"],
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.excerpt,
      images: ogImage.map((i) => i.url),
    },
  };
}

function categoryLabel(cat: string | undefined) {
  if (cat === "press-release") return "Press Release";
  if (cat === "announcement") return "Announcement";
  return "News";
}

function categoryColor(cat: string | undefined) {
  if (cat === "press-release")
    return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
  if (cat === "announcement")
    return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
  return "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20";
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const [item, allItems] = await Promise.all([
    fetchQuery(api.news.getBySlug, { slug }),
    fetchQuery(api.news.list),
  ]);

  if (!item) notFound();

  const related = allItems.filter((n) => n.slug !== slug).slice(0, 3);
  const dateStr =
    item.publishedAt ?? new Date(item._creationTime).toISOString();

  return (
    <>
      {/* Hero */}
      <section className='relative py-20 bg-green-950 overflow-hidden'>
        <div
          className='absolute inset-0 opacity-[0.05] pointer-events-none'
          aria-hidden>
          <Image
            src={item.coverImageUrl ?? "/logo.webp"}
            alt=''
            fill
            className='object-cover object-center blur-sm'
          />
        </div>
        <div className='absolute inset-0 bg-gradient-to-b from-green-950/80 to-green-950 pointer-events-none' />
        <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <AnimatedSection>
            <Link
              href='/news'
              className='inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors'>
              <ArrowLeft className='h-4 w-4' /> Back to News
            </Link>
            <br />
            <Badge
              className={`w-fit mb-4 text-xs ${categoryColor(item.category)}`}>
              {categoryLabel(item.category)}
            </Badge>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-balance'>
              {item.title}
            </h1>
            <div className='flex flex-wrap items-center gap-4 text-sm text-white/60'>
              <span className='flex items-center gap-1.5'>
                <User className='h-4 w-4 text-green-500' />{" "}
                {item.author ?? "NFVCB"}
              </span>
              <span className='flex items-center gap-1.5'>
                <Calendar className='h-4 w-4 text-green-500' />
                {new Date(dateStr).toLocaleDateString("en-NG", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className='flex items-center gap-1.5'>
                <Tag className='h-4 w-4 text-green-500' /> NFVCB Nigeria
              </span>
            </div>
            <div className='mt-6'>
              <ShareButton title={item.title} url={`/news/${slug}`} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid lg:grid-cols-3 gap-10'>
          {/* Main content */}
          <div className='lg:col-span-2'>
            <AnimatedSection>
              {item.coverImageUrl && (
                <div className='relative rounded-2xl overflow-hidden h-64 sm:h-80 bg-gradient-to-br from-green-950 to-emerald-700/40 flex items-center justify-center mb-8'>
                  <Image
                    src={item.coverImageUrl}
                    alt={item.title}
                    fill
                    className='object-cover'
                  />
                </div>
              )}
              <article
                className='news-article prose prose-sm sm:prose max-w-none dark:prose-invert
                  prose-headings:text-foreground prose-p:text-muted-foreground
                  prose-p:leading-relaxed prose-strong:text-foreground
                  prose-img:max-w-full prose-img:h-auto prose-img:rounded-lg
                  prose-pre:overflow-x-auto prose-pre:max-w-full
                  prose-table:block prose-table:overflow-x-auto prose-table:w-full
                  [&_*]:max-w-full [&_*]:break-words overflow-hidden'
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            <AnimatedSection delay={0.1}>
              <Card className='bg-muted/30'>
                <CardContent className='p-5'>
                  <p className='text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4'>
                    About NFVCB
                  </p>
                  <div className='flex items-center gap-3 mb-4'>
                    <Image
                      src='/logo.webp'
                      alt='NFVCB'
                      width={40}
                      height={40}
                      className='rounded-lg'
                    />
                    <div>
                      <p className='text-sm font-semibold text-foreground'>
                        NFVCB Nigeria
                      </p>
                      <p className='text-xs text-muted-foreground'>
                        Official Communications
                      </p>
                    </div>
                  </div>
                  <p className='text-xs text-muted-foreground leading-relaxed'>
                    The National Film and Video Censors Board — Nigeria&apos;s
                    film regulatory authority since 1993.
                  </p>
                  <Link
                    href='/about'
                    className='mt-3 block text-xs text-primary hover:underline'>
                    Learn more about NFVCB →
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <p className='text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4'>
                  Related Stories
                </p>
                <div className='space-y-4'>
                  {related.map((r) => (
                    <Link
                      key={r._id}
                      href={`/news/${r.slug}`}
                      className='group block'>
                      <Card className='overflow-hidden hover:shadow-md transition-all hover:border-primary/30'>
                        <CardContent className='p-4 flex gap-3'>
                          <div className='w-14 h-14 rounded-lg bg-gradient-to-br from-green-950 to-teal-600/30 flex items-center justify-center shrink-0 overflow-hidden relative'>
                            {r.coverImageUrl ? (
                              <Image
                                src={r.coverImageUrl}
                                alt=''
                                fill
                                className='object-cover opacity-80'
                                aria-hidden
                              />
                            ) : (
                              <Image
                                src='/logo.webp'
                                alt=''
                                width={24}
                                height={24}
                                className='opacity-100'
                                aria-hidden
                              />
                            )}
                          </div>
                          <div>
                            <p className='text-xs font-medium group-hover:text-primary transition-colors line-clamp-2 text-balance'>
                              {r.title}
                            </p>
                            <p className='text-[10px] text-muted-foreground mt-1'>
                              {new Date(
                                r.publishedAt ?? r._creationTime,
                              ).toLocaleDateString("en-NG", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className='bg-primary/5 border-primary/20'>
                <CardContent className='p-5 text-center'>
                  <p className='text-sm font-semibold text-foreground mb-2'>
                    Media Enquiries
                  </p>
                  <p className='text-xs text-muted-foreground mb-3'>
                    For press enquiries, contact the Corporate Affairs
                    Department.
                  </p>
                  <a
                    href='mailto:media@nfvcb.gov.ng'
                    className='text-xs text-primary hover:underline font-medium'>
                    media@nfvcb.gov.ng
                  </a>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  );
}
