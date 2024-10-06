import { useLocation } from "react-router-dom";
import { Wrapper, ChangePageButton } from "./styled";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";
import { useGetQueryParameter } from "../Header/SearchBar/SearchInput/useGetQueryParameter";
import { paginationQueryParameterName } from "./paginationQueryParameterName";

interface PaginationProps {
  firstPage: string;
  lastPage: string;
}

export const Pagination = ({ firstPage, lastPage }: PaginationProps) => {
  const location = useLocation();

  const queryNumber =
    useGetQueryParameter(paginationQueryParameterName) || firstPage;
  const url = location.pathname;
  const key = paginationQueryParameterName;

  let pageNumber = parseInt(queryNumber, 10);

  const replaceQueryParameter = useReplaceQueryParameter();

  const changePageHandler =
    (option: "nextPage" | "previousPage" | "firstPage" | "lastPage") => () => {
      switch (option) {
        case "nextPage":
          if (pageNumber === parseInt(lastPage, 10)) {
            break;
          }

          pageNumber = pageNumber + 1;
          break;
        case "previousPage":
          if (pageNumber === parseInt(firstPage, 10)) {
            break;
          }
          pageNumber = pageNumber - 1;

          break;
        case "firstPage":
          pageNumber = parseInt(firstPage, 10);
          break;
        case "lastPage":
          pageNumber = parseInt(lastPage, 10);
      }

      const pageNumberString = pageNumber.toString();

      replaceQueryParameter({ url, key, value: pageNumberString });
    };

  return (
    <Wrapper>
      <ChangePageButton onClick={changePageHandler("firstPage")}>
        First page
      </ChangePageButton>

      <ChangePageButton onClick={changePageHandler("previousPage")}>
        Previous page
      </ChangePageButton>

      <ChangePageButton onClick={changePageHandler("nextPage")}>
        Next page
      </ChangePageButton>

      <ChangePageButton onClick={changePageHandler("lastPage")}>
        Last page
      </ChangePageButton>
    </Wrapper>
  );
};
