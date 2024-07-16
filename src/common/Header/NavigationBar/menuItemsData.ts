import {
  toPopularMovies,
  toTopRatedMovies,
  toTrendingMovies,
  toUpcomingMovies,
} from "../../../core/routes";

export interface MenuItemsData {
  title: string;
  url: string;
  submenu?: MenuItemsData[];
}

export const menuItemsData: MenuItemsData[] = [
  {
    title: "Menu",
    url: "/menu",
    submenu: [
      {
        title: "Movies",
        url: toPopularMovies(),
        submenu: [
          { title: "Popular", url: toPopularMovies() },
          {
            title: "Trending",
            url: toTrendingMovies(),
          },
          { title: "Upcoming", url: toUpcomingMovies() },
          { title: "Top Rated", url: toTopRatedMovies() },
        ],
      },
      {
        title: "Series",
        url: "series",
        submenu: [
          {
            title: "Trending",
            url: "trending",
          },
          { title: "Popular", url: "popular" },
          { title: "Top Rated", url: "top-rated" },
        ],
      },
      {
        title: "People",
        url: "people",
        submenu: [
          {
            title: "Trending",
            url: "trending",
          },
          { title: "Popular", url: "popular" },
          { title: "Top Rated", url: "top-rated" },
        ],
      },
    ],
  },
];
