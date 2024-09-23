import { toSearchMovies, toSearchSeries } from "../../../../core/routes";

export interface SearchTypeItemsData {
  title: string;
  url: string;
}

export const searchTypeItemsData: SearchTypeItemsData[] = [
  { title: "Movies", url: toSearchMovies() },
  { title: "Series", url: toSearchSeries() },
];
