import { createHashRouter } from "react-router-dom";
import { App } from "./App";
import { MainPage } from "../features/MainPage";
import { SubPage } from "../features/SubPage";
import { DetailsPage } from "../features/DetailsPage";
import { ErrorPage } from "../common/components/ErrorPage";
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
            title="Popular movies"
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
            title="Trending movies"
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
            title="Upcoming movies"
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
            title="Top rated movies"
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
            title="Popular series"
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
            title="Trending series"
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
            title="Upcoming series"
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
            title="Top rated series"
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
