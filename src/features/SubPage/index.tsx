import { Wrapper, Title } from "./styled";
import { Tile } from "./Tile";
import { useDataFromApi } from "../../common/api/useDataFromApi";
import { getArrayForPlaceholders } from "../../common/functions/getArrayForPlaceholders";

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

  console.log(isLoading);

  if (isLoading) {
    return (
      <Wrapper>
        <Title>{title}</Title>

        {getArrayForPlaceholders(20).map((placeholder) => (
          <Tile
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
          />
        ))}
      </Wrapper>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
