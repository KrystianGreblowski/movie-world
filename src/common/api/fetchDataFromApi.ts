import axios, { AxiosResponse } from "axios";

const API_KEY = "41ffdcbc63d2d58e19c2ae7bdcfaef4d";

interface QueryKey {
  queryKey: [string, Record<string, string>];
}

export const fetchDataFromApi = async <TypeData>({
  queryKey,
}: QueryKey): Promise<AxiosResponse<TypeData>> => {
  const [endpoint, params] = queryKey;
  const searchParams = new URLSearchParams(params);

  const API_URL = `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&${searchParams}`;

  return await axios.get(API_URL);
};
