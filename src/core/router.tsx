import { createHashRouter } from "react-router-dom";
import { App } from "./App";
import { MainPage } from "../features/MainPage";
import { SubPage } from "../features/SubPage";
import { DetailsPage } from "../features/DetailsPage";
import { ErrorPage } from "../common/ErrorPage";
import {
  toMainPage,
  toMovieDetails,
  toPersonDetails,
  toPopularMovies,
  toPopularSeries,
  toSearchMovies,
  toSearchSeries,
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
    errorElement: <ErrorPage />,
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
            searchResults={false}
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
            searchResults={false}
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
            searchResults={false}
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
            searchResults={false}
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
            searchResults={false}
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
            searchResults={false}
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
            searchResults={false}
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
            searchResults={false}
            topRated
          />
        ),
      },

      {
        path: toPersonDetails(":id"),
        element: (
          <DetailsPage detailsType="person" params={{ language: "en-US" }} />
        ),
      },

      {
        path: toMovieDetails(":id"),
        element: (
          <DetailsPage
            detailsType="movie"
            params={{ language: "en-US", append_to_response: "credits" }}
          />
        ),
      },

      {
        path: toSeriesDetails(":id"),
        element: (
          <DetailsPage
            detailsType="tv"
            params={{ language: "en-US", append_to_response: "credits" }}
          />
        ),
      },

      {
        path: toSearchMovies(),
        element: (
          <SubPage
            title="Search results"
            endpoint="search/movie"
            params={{ language: "en-US", page: "1" }}
            dataType="movie"
            searchResults={true}
          />
        ),
      },

      {
        path: toSearchSeries(),
        element: (
          <SubPage
            title="Search results"
            endpoint="search/tv"
            params={{ language: "en-US", page: "1" }}
            dataType="series"
            searchResults={true}
          />
        ),
      },
    ],
  },
]);
