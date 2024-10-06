import { useLocation, useNavigate } from "react-router";
import { toMainPage } from "../../../../core/routes";
import { paginationQueryParameterName } from "../../../Pagination/paginationQueryParameterName";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return ({ url, key, value }: { url: string; key: string; value: string }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value) {
      searchParams.delete(paginationQueryParameterName);
      searchParams.set(key, value);
      navigate(`${url}?${searchParams.toString()}`, {
        replace: true,
      });
    } else {
      searchParams.delete(key);
      navigate(toMainPage());
    }
  };
};
