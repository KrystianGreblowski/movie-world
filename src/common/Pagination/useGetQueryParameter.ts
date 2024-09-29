import { useLocation } from "react-router";

export const useGetQueryParameter = (paginationQueryParameterName: string) => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(paginationQueryParameterName);
};
