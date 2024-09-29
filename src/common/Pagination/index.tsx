import { NextPageButton, PreviousPageButton, Wrapper } from "./styled";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";
import { toPopularMovies } from "../../core/routes";
import { useGetQueryParameter } from "../Header/SearchBar/SearchInput/useGetQueryParameter";
import { paginationQueryParameterName } from "./paginationQueryParameterName";

export const Pagination = () => {
  const queryNumber = useGetQueryParameter(paginationQueryParameterName) || "1";
  const url = toPopularMovies();
  const key = paginationQueryParameterName;

  let pageNumber = parseInt(queryNumber, 10);

  const replaceQueryParameter = useReplaceQueryParameter();

  const changePageHandler =
    (option: "nextPage" | "previousPage" | "firstPage" | "lastPage") => () => {
      switch (option) {
        case "nextPage":
          pageNumber = pageNumber + 1;
          break;
        case "previousPage":
          pageNumber = pageNumber - 1;
          break;
        case "firstPage":
          pageNumber = 1;
          break;
        case "lastPage":
          pageNumber = 500;
      }

      const pageNumberString = pageNumber.toString();

      replaceQueryParameter({ url, key, value: pageNumberString });
    };

  console.log(pageNumber);

  return (
    <Wrapper>
      <PreviousPageButton onClick={changePageHandler("previousPage")}>
        Previous page
      </PreviousPageButton>
      <NextPageButton onClick={changePageHandler("nextPage")}>
        Next Page
      </NextPageButton>
    </Wrapper>
  );
};
