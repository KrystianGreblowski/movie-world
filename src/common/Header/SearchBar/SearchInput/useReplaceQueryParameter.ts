import { useLocation, useNavigate } from "react-router";
import { toSearchMovies } from "../../../../core/routes";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return ({ key, value }: { key: string; value: string }) => {
    const searchParams = new URLSearchParams(location.search);

    value !== "" ? searchParams.set(key, value) : searchParams.delete(key);

    navigate(`${toSearchMovies()}?${searchParams.toString()}`, {
      replace: true,
    });
  };
};
