import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "./fetchDataFromApi";

interface Result {
  id: number;
  title: string;
  name: string;
  genre_ids: number[];
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  overview: string;
}

interface DataResults {
  results: Result[];
  total_results: number;
  total_pages: number;
}

interface useDataParameters {
  endpoint: string;
  params: Record<string, string>;
}

export const useDataFromApi = ({ endpoint, params }: useDataParameters) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [endpoint, params],
    queryFn: fetchDataFromApi<DataResults>,
  });

  const dataResults = data?.data?.results || [];

  const dataInfo = {
    totalResults: data?.data.total_results,
    totalPages: data?.data.total_pages,
  };

  return { isLoading, error, dataResults, dataInfo };
};
