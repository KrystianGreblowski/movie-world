import { Wrapper, Title } from "./styled";
import { Tile } from "./Tile";
import { useDataFromApi } from "../../common/api/useDataFromApi";

interface SubPageProps {
  title: string;
  endpoint: string;
  params: Record<string, string>;
  dataType: "movie" | "series";
  topRated?: boolean;
}

export const SubPage = ({
  title,
  endpoint,
  params,
  dataType,
  topRated,
}: SubPageProps) => {
  const { isLoading, error, dataResults } = useDataFromApi({
    endpoint,
    params,
  });

  return (
    <Wrapper>
      <Title>{title}</Title>

      {dataResults?.map((dataResult, index) => (
        <Tile
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
          topRatedPosition={index + 1}
        />
      ))}
    </Wrapper>
  );
};
