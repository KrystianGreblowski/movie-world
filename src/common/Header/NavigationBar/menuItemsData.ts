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
        url: "movies",
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
