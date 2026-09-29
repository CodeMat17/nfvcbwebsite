export interface Movie {
  title: string;
  month: string;
  duration: string;
  producer: string;
  director: string;
  majorCast: string;
  rating: string;
  previewLocation: string;
  language: string;
  consumerAdvice: string;
  dateOfApproval: string;
  productionCompany: string;
  featured?: boolean;
  trailerUrl?: string;
  juryNote?: string;
}

export interface ApprovedMoviesPost {
  slug: string;
  month: string;
  date: string;
  publishedBy: string;
  image?: string;
  movies: Movie[];
}

/** Listing shape: a post's film count and per-rating counts, without the films. */
export interface ApprovedMoviesPostSummary {
  slug: string;
  month: string;
  date: string;
  publishedBy: string;
  image?: string;
  movieCount: number;
  ratingCounts: Record<string, number>;
}

/** Maps a row from `api.approvedMovies.listPosts` to the listing shape. */
export function toPostSummary(post: {
  _creationTime: number;
  slug: string;
  month: string;
  author: string;
  date?: string;
  movieCount: number;
  ratingCounts: Record<string, number>;
}): ApprovedMoviesPostSummary {
  return {
    slug: post.slug,
    month: post.month,
    date: post.date ?? new Date(post._creationTime).toISOString().slice(0, 10),
    publishedBy: post.author,
    movieCount: post.movieCount,
    ratingCounts: post.ratingCounts,
  };
}
