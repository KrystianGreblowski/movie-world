import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../common/api/fetchDataFromApi";

interface Data {
  id: number;
  title: string;
  name: string;
  genre_ids: number[];
  backdrop_path?: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  overview: string;
}

interface useDataParameters {
  endpoint: string;
  params: Record<string, string>;
}

export const useDetailsDataFromApi = ({
  endpoint,
  params,
}: useDataParameters) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [endpoint, params],
    queryFn: fetchDataFromApi<Data>,
  });

  const dataResults = data?.data;

  return { isLoading, error, dataResults };
};
