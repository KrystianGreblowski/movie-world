import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { MainPage } from "../features/MainPage";
import { SubPage } from "../features/SubPage";
import {
  toMainPage,
  toPopularMovies,
  toTopRatedMovies,
  toTrendingMovies,
  toUpcomingMovies,
} from "./routes";

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <>Error</>,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
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
            tileType="movie"
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
            tileType="movie"
          />
        ),
      },
      {
        path: toUpcomingMovies(),
        element: (
          <SubPage
            title="Upcoming"
            endpoint="movie/upcoming"
            params={{ language: "en-US", page: "1" }}
            tileType="movie"
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
            tileType="movie"
          />
        ),
      },
    ],
  },
]);
