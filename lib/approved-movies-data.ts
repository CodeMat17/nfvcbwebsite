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
