import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../../common/fetchDataFromApi";

interface Movie {
  id: number;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
}

interface TrendingMoviesData {
  results: Movie[];
}

export const useTrendingMoviesData = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["trending/movie/day", { language: "en-US" }],
    queryFn: fetchDataFromApi<TrendingMoviesData>,
  });

  const trendingMoviesData = data?.data?.results || [];

  return { isLoading, error, trendingMoviesData };
};
