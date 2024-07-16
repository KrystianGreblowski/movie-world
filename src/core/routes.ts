export const toMainPage = () => `/movie-world`;

export const toPopularMovies = () => `${toMainPage()}/movies/popular`;
export const toTrendingMovies = () => `${toMainPage()}/movies/trending`;
export const toUpcomingMovies = () => `${toMainPage()}/movies/upcoming`;
export const toTopRatedMovies = () => `${toMainPage()}/movies/top-rated`;

export const toPopularSeries = () => `${toMainPage()}/series/popular`;
export const toTrendingSeries = () => `${toMainPage()}/series/trending`;
export const toUpcomingSeries = () => `${toMainPage()}/series/upcoming`;
export const toTopRatedSeries = () => `${toMainPage()}/series/top-rated`;
