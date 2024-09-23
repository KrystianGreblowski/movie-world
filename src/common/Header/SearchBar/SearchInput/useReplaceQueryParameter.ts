import { useLocation, useNavigate } from "react-router";
import { toSearchMovies } from "../../../../core/routes";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return ({ key, value }: { key: string; value: string }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value !== "") {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    navigate(`${toSearchMovies()}?${searchParams.toString()}`, {
      replace: true,
    });
  };
};
