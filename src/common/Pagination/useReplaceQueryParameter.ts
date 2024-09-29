import { useLocation, useNavigate } from "react-router";

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return ({ url, key, value }: { url: string; key: string; value: string }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === "1") {
      searchParams.delete(key);
      navigate(`${url}`, {
        replace: true,
      });
    } else {
      searchParams.set(key, value);
      navigate(`${url}?${searchParams.toString()}`, {
        replace: true,
      });
    }
  };
};
