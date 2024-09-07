import { createHashRouter } from "react-router-dom";
import { App } from "./App";
import { MainPage } from "../features/MainPage";
import { SubPage } from "../features/SubPage";
import { DetailsPage } from "../features/DetailsPage";
import {
  toMainPage,
  toMovieDetails,
  toPopularMovies,
  toPopularSeries,
  toSeriesDetails,
  toTopRatedMovies,
  toTopRatedSeries,
  toTrendingMovies,
  toTrendingSeries,
  toUpcomingMovies,
  toUpcomingSeries,
} from "./routes";

export const router = createHashRouter([
  {
    element: <App />,
    errorElement: <>Error</>,
    children: [
      {
        path: toMainPage(),
        element: <MainPage />,
      },
      {
        path: toPopularMovies(),
        element: (
          <SubPage
            title="Popular Movies"
            endpoint="movie/popular"
            params={{ language: "en-US", page: "1" }}
            dataType="movie"
          />
        ),
      },
      {
        path: toTrendingMovies(),
        element: (
          <SubPage
            title="Trending Movies"
            endpoint="trending/movie/day"
            params={{ language: "en-US", page: "1" }}
            dataType="movie"
          />
        ),
      },
      {
        path: toUpcomingMovies(),
        element: (
          <SubPage
            title="Upcoming Movies"
            endpoint="movie/upcoming"
            params={{ language: "en-US", page: "1" }}
            dataType="movie"
          />
        ),
      },
      {
        path: toTopRatedMovies(),
        element: (
          <SubPage
            title="Top Rated Movies"
            endpoint="movie/top_rated"
            params={{ language: "en-US", page: "1" }}
            dataType="movie"
            topRated
          />
        ),
      },
      {
        path: toPopularSeries(),
        element: (
          <SubPage
            title="Popular Series"
            endpoint="tv/popular"
            params={{ language: "en-US", page: "1" }}
            dataType="series"
          />
        ),
      },
      {
        path: toTrendingSeries(),
        element: (
          <SubPage
            title="Trending Series"
            endpoint="trending/tv/day"
            params={{ language: "en-US", page: "1" }}
            dataType="series"
          />
        ),
      },
      {
        path: toUpcomingSeries(),
        element: (
          <SubPage
            title="Upcoming Series"
            endpoint="tv/on_the_air"
            params={{ language: "en-US", page: "1" }}
            dataType="series"
          />
        ),
      },
      {
        path: toTopRatedSeries(),
        element: (
          <SubPage
            title="Top Rated Series"
            endpoint="tv/top_rated"
            params={{ language: "en-US", page: "1" }}
            dataType="series"
            topRated
          />
        ),
      },

      {
        path: toMovieDetails(":id"),
        element: <DetailsPage detailsType="movie" />,
      },
      {
        path: toSeriesDetails(":id"),
        element: <DetailsPage detailsType="tv" />,
      },
    ],
  },
]);
