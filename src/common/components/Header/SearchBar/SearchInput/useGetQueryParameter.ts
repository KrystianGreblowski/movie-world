import { useLocation } from "react-router";

export const useGetQueryParameter = (searchQueryParamName: string) => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(searchQueryParamName);
};
