import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../../common/fetchDataFromApi";

export const useTrendingMoviesData = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["trending/movie/day", { language: "en-US" }],
    queryFn: fetchDataFromApi,
  });

  const trendingMoviesData = data?.data.results;

  return { isLoading, error, trendingMoviesData };
};
