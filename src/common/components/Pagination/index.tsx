import { useLocation } from "react-router-dom";
import { Wrapper, ChangePageButton, PageNumberInfo } from "./styled";
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

  const firstPageNumber = parseInt(firstPage, 10);
  const lastPageNumber = parseInt(lastPage, 10);

  let pageNumber = parseInt(queryNumber, 10);

  const replaceQueryParameter = useReplaceQueryParameter();

  const changePageHandler =
    (option: "nextPage" | "previousPage" | "firstPage" | "lastPage") => () => {
      switch (option) {
        case "nextPage":
          if (pageNumber === lastPageNumber) {
            break;
          }

          pageNumber = pageNumber + 1;
          break;
        case "previousPage":
          if (pageNumber === firstPageNumber) {
            break;
          }
          pageNumber = pageNumber - 1;

          break;
        case "firstPage":
          pageNumber = firstPageNumber;
          break;
        case "lastPage":
          pageNumber = lastPageNumber;
      }

      const pageNumberString = pageNumber.toString();

      replaceQueryParameter({ url, key, value: pageNumberString });
    };

  return (
    <Wrapper>
      <ChangePageButton
        onClick={changePageHandler("firstPage")}
        disabled={pageNumber === firstPageNumber}
      >
        First
      </ChangePageButton>

      <ChangePageButton
        onClick={changePageHandler("previousPage")}
        disabled={pageNumber === firstPageNumber}
      >
        Previous
      </ChangePageButton>

      <PageNumberInfo>
        Page {pageNumber} of {lastPage}
      </PageNumberInfo>

      <ChangePageButton
        onClick={changePageHandler("nextPage")}
        disabled={pageNumber === lastPageNumber}
      >
        Next
      </ChangePageButton>

      <ChangePageButton
        onClick={changePageHandler("lastPage")}
        disabled={pageNumber === lastPageNumber}
        $lastButton
      >
        Last
      </ChangePageButton>
    </Wrapper>
  );
};
