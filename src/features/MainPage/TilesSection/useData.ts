import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../../common/fetchDataFromApi";

interface Result {
  id: number;
  original_title: string;
  name: string;
  genre_ids: number[];
  backdrop_path: string;
}

interface DataResults {
  results: Result[];
}

interface useDataParameters {
  endpoint: string;
  params: Record<string, string>;
}

export const useData = ({ endpoint, params }: useDataParameters) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [endpoint, params],
    queryFn: fetchDataFromApi<DataResults>,
  });

  const dataResults = data?.data?.results || [];

  return { isLoading, error, dataResults };
};
