import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../../common/fetchDataFromApi";

interface Movie {
  id: number;
  original_title: string;
  backdrop_path: string;
}

interface UpcomingMoviesData {
  results: Movie[];
}

export const useUpcomingMoviesData = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["movie/upcoming", { language: "en-US", page: "1" }],
    queryFn: fetchDataFromApi<UpcomingMoviesData>,
  });

  const upcomingMoviesData = data?.data?.results || [];

  return { isLoading, error, upcomingMoviesData };
};
