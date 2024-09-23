import { useLocation, useNavigate } from "react-router";
import { toSearchMovies } from "../../../../core/routes";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return ({ key, value }: { key: string; value: string }) => {
    const searchParams = new URLSearchParams(location.search);

    value === "" ? searchParams.delete(key) : searchParams.set(key, value);

    navigate(`${toSearchMovies()}?${searchParams.toString()}`, {
      replace: true,
    });
  };
};
