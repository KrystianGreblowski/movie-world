import { useLocation, useNavigate } from "react-router";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return ({ url, key, value }: { url: string; key: string; value: string }) => {
    const searchParams = new URLSearchParams(location.search);

    value === "" ? searchParams.delete(key) : searchParams.set(key, value);

    navigate(`${url}?${searchParams.toString()}`, {
      replace: true,
    });
  };
};
