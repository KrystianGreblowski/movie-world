export const toMainPage = () => `/`;

export const toPopularMovies = () => `/movies/popular`;
export const toTrendingMovies = () => `/movies/trending`;
export const toUpcomingMovies = () => `/movies/upcoming`;
export const toTopRatedMovies = () => `/movies/top-rated`;

export const toPopularSeries = () => `/series/popular`;
export const toTrendingSeries = () => `/series/trending`;
export const toUpcomingSeries = () => `/series/upcoming`;
export const toTopRatedSeries = () => `/series/top-rated`;

export const toMovieDetails = (id: string) => `/movie/${id}`;
export const toSeriesDetails = (id: string) => `/series/${id}`;
