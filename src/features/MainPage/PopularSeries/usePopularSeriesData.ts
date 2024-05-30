import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../../common/fetchDataFromApi";

interface Series {
  id: number;
  name: string;
  genre_ids: number[];
  backdrop_path: string;
}

interface PopularSeriesData {
  results: Series[];
}

export const usePopularSeriesData = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["tv/popular", { language: "en-US", page: "1" }],
    queryFn: fetchDataFromApi<PopularSeriesData>,
  });

  const popularSeriesData = data?.data?.results || [];

  return { isLoading, error, popularSeriesData };
};
