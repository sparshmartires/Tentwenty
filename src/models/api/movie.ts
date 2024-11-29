declare module '@movie' {
  import {Movie} from '@movie';
  interface UpcomingMovieApiResponse {
    dates?: {
      maximum: string;
      minimum: string;
    };
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  }
}
