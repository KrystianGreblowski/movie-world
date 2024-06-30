import { Wrapper, Title } from "./styled";
import { Tile } from "./Tile";
import { useDataFromApi } from "../../common/api/useDataFromApi";

interface SubPageProps {
  title: string;
  endpoint: string;
  params: Record<string, string>;
  tileType: "movie" | "series";
}

export const SubPage = ({
  title,
  endpoint,
  params,
  tileType,
}: SubPageProps) => {
  const { isLoading, error, dataResults } = useDataFromApi({
    endpoint,
    params,
  });

  return (
    <Wrapper>
      <Title>{title}</Title>

      {dataResults?.map((dataResult) => (
        <Tile
          key={dataResult.id}
          title={dataResult.title}
          imagePath={dataResult.poster_path}
          imageSize="w500"
          genres={dataResult.genre_ids}
          tileType={tileType}
          releaseDate={dataResult.release_date}
          voteAverage={dataResult.vote_average}
          numberOfVotes={dataResult.vote_count}
          overview={dataResult.overview}
        />
      ))}
    </Wrapper>
  );
};
