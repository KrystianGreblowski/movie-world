import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../../common/fetchDataFromApi";

interface Movie {
  id: number;
  original_title: string;
  backdrop_path: string;
}

interface PopularMoviesData {
  results: Movie[];
}

export const usePopularMoviesData = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movie/popular", { language: "en-US", page: "1" }],
    queryFn: fetchDataFromApi<PopularMoviesData>,
  });

  const popularMoviesData = data?.data?.results || [];

  return { isLoading, error, popularMoviesData };
};
