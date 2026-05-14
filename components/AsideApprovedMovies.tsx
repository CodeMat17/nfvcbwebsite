import { approvedMoviesPosts } from '@/lib/approved-movies-data';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Film } from 'lucide-react';
import Link from 'next/link';

const AsideApprovedMovies = () => {

  const recentApproved = [...approvedMoviesPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5);

  return (
    <div className='rounded-xl border bg-card p-5'>
      <div className='flex items-center gap-2 mb-4'>
        <Film className='h-4 w-4 text-nfvcb-green' />
        <h2 className='text-sm font-black uppercase tracking-widest text-foreground'>
          Recently Approved Movies
        </h2>
      </div>
      <ul className='space-y-4'>
        {recentApproved.map((post) => {
          const ratingCounts = post.movies.reduce<Record<string, number>>(
            (acc, f) => {
              acc[f.rating] = (acc[f.rating] ?? 0) + 1;
              return acc;
            },
            {},
          );
          return (
            <li key={post.slug}>
              <Link
                href={`/approved-movies/${post.slug}`}
                className='group block'>
                <p className=' font-medium text-foreground group-hover:text-primary transition-colors leading-snug'>
                  {post.title}
                </p>
                <div className='text-[12px] text-muted-foreground mt-0.5'>
                  <div className='flex flex-wrap gap-1 mt-1 items-center'>
                    {Object.entries(ratingCounts)
                      .sort(([a], [b]) => {
                        const order = [
                          "G",
                          "PG",
                          "12",
                          "12A",
                          "15",
                          "18",
                          "RE",
                        ];
                        return order.indexOf(a) - order.indexOf(b);
                      })
                      .map(([r, count]) => (
                        <span
                          key={r}
                          className='text-[11px] px-2 py-0.5 bg-[#fea600]/5 text-[#fea600] rounded-full font-bold'>
                          {r} ({count})
                        </span>
                      ))}

                    <span className='italic text-muted-foreground text-xs'>
                       — {post.movies.length} movie
                      {post.movies.length !== 1 ? "s" : ""}{" "}
                    </span>
                  </div>
                </div>
              </Link>
              {recentApproved.indexOf(post) < recentApproved.length - 1 && (
                <Separator className="mt-4" />
              )}
            </li>
          );
        })}
      </ul>
      <Link
        href='/approved-movies'
        className='mt-5 flex items-center gap-1 text-xs text-primary font-medium hover:gap-2 transition-all'>
        View all approved films <ArrowRight className='h-3.5 w-3.5' />
      </Link>
    </div>
  );
}

export default AsideApprovedMovies