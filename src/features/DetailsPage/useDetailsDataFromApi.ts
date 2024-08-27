import { useQuery } from "@tanstack/react-query";
import { fetchDataFromApi } from "../../common/api/fetchDataFromApi";

interface Genre {
  id: number;
  name: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface CastMember {
  id: number;
  profile_path: string;
  name: string;
  character: string;
}

interface Data {
  id: number;
  title: string;
  name: string;
  genres: Genre[];
  production_countries: ProductionCountry[];
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  overview: string;
  credits: {
    cast: CastMember[];
  };
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
