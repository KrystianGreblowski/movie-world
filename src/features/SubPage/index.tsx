import { Wrapper, Title } from "./styled";
import { Tile } from "./Tile";
import { useDataFromApi } from "../../common/api/useDataFromApi";
import { getArrayForPlaceholders } from "../../common/functions/getArrayForPlaceholders";
import { ErrorPage } from "../../common/ErrorPage";
import { useSearchParams } from "react-router-dom";
import { searchQueryParameterName } from "../../common/Header/SearchBar/SearchInput/searchQueryParameterName";
import { NoResults } from "./NoResults";
import { Pagination } from "../../common/Pagination";
import { paginationQueryParameterName } from "../../common/Pagination/paginationQueryParameterName";

interface SubPageProps {
  title: string;
  endpoint: string;
  params: Record<string, string>;
  dataType: "movie" | "series";
  searchResults: boolean;
  topRated?: boolean;
}

export const SubPage = ({
  title,
  endpoint,
  params,
  dataType,
  searchResults,
  topRated,
}: SubPageProps) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get(searchQueryParameterName) || "";
  const pageNumber =
    searchParams.get(paginationQueryParameterName) || params.page;

  const finalParams = searchResults
    ? { ...params, page: pageNumber, query: query }
    : { ...params, page: pageNumber };

  const { isLoading, error, dataResults, dataInfo } = useDataFromApi({
    endpoint,
    params: finalParams,
  });

  if (isLoading) {
    return (
      <Wrapper>
        <Title>{title}</Title>

        {getArrayForPlaceholders(20).map((placeholder) => (
          <Tile
            id={0}
            key={placeholder}
            title=""
            imagePath="placeholder"
            imageSize="w500"
            genres={[]}
            tileType={dataType}
            releaseDate=""
            voteAverage={0}
            numberOfVotes={0}
            overview=""
            topRatedPosition={placeholder + 1}
            isLoading={isLoading}
          />
        ))}
      </Wrapper>
    );
  }

  if (error) {
    return <ErrorPage />;
  }

  if (searchResults && !dataResults.length) {
    return <NoResults searchInput={query} />;
  }

  return (
    <Wrapper>
      <Title>{title}</Title>

      {dataInfo.totalPages !== undefined && dataInfo.totalPages > 1 && (
        <Pagination
          firstPage={params.page}
          lastPage={
            dataInfo.totalPages > 500 ? "500" : dataInfo.totalPages.toString()
          }
        />
      )}

      {dataResults?.map((dataResult, index) => (
        <Tile
          id={dataResult.id}
          key={dataResult.id}
          title={dataType === "movie" ? dataResult.title : dataResult.name}
          imagePath={dataResult.poster_path}
          imageSize="w500"
          genres={dataResult.genre_ids}
          tileType={dataType}
          releaseDate={
            dataType === "movie"
              ? dataResult.release_date
              : dataResult.first_air_date
          }
          voteAverage={dataResult.vote_average}
          numberOfVotes={dataResult.vote_count}
          overview={dataResult.overview}
          topRated={topRated}
          topRatedPosition={(parseInt(pageNumber, 10) - 1) * 20 + index + 1}
          isLoading={isLoading}
        />
      ))}
    </Wrapper>
  );
};
