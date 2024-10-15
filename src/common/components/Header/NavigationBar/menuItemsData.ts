import {
  toPopularMovies,
  toPopularSeries,
  toTopRatedMovies,
  toTopRatedSeries,
  toTrendingMovies,
  toTrendingSeries,
  toUpcomingMovies,
  toUpcomingSeries,
} from "../../../../core/routes";

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
        url: toPopularSeries(),
        submenu: [
          { title: "Popular", url: toPopularSeries() },
          {
            title: "Trending",
            url: toTrendingSeries(),
          },
          { title: "Upcoming", url: toUpcomingSeries() },
          { title: "Top Rated", url: toTopRatedSeries() },
        ],
      },
    ],
  },
];
