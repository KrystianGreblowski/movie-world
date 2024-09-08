import { useParams } from "react-router-dom";
import { Wrapper } from "./styled";
import { useDetailsDataFromApi } from "./useDetailsDataFromApi";
import { MainInfo } from "./MainInfo";
import { ExtraInfo } from "./ExtraInfo";
import { Header } from "./Header";

interface DetailsPageProps {
  detailsType: "movie" | "tv";
  params: Record<string, string>;
}

export const DetailsPage = ({ detailsType, params }: DetailsPageProps) => {
  const { id } = useParams();

  const { isLoading, error, dataResults } = useDetailsDataFromApi({
    endpoint: `${detailsType}/${id}`,
    params: params,
  });

  if (isLoading) {
    return (
      <Wrapper>
        <Header imagePath="placeholder" imageSize="original" />

        <MainInfo
          title=""
          imagePath="placeholder"
          imageSize="w500"
          genres={[]}
          tileType="movie"
          productionCountries={[]}
          releaseDate=""
          director=""
          voteAverage={0}
          numberOfVotes={0}
          overview=""
          isLoading
        />

        <ExtraInfo title="" data={[]} />
      </Wrapper>
    );
  }

  if (error) {
    return <>Error</>;
  }

  return (
    <Wrapper>
      {dataResults && dataResults.backdrop_path && (
        <Header imagePath={dataResults.backdrop_path} imageSize="original" />
      )}

      {dataResults && (
        <MainInfo
          title={detailsType === "movie" ? dataResults.title : dataResults.name}
          imagePath={dataResults.poster_path}
          imageSize="w500"
          genres={dataResults.genres.map((genre) => genre.id)}
          tileType={detailsType === "movie" ? "movie" : "series"}
          productionCountries={dataResults.production_countries.map(
            (productionCountry) => productionCountry.name,
          )}
          releaseDate={
            detailsType === "movie"
              ? dataResults.release_date
              : dataResults.first_air_date
          }
          director={
            dataResults.credits.crew.some((crew) => crew.job === "Director")
              ? dataResults.credits.crew.filter(
                  (crew) => crew.job === "Director",
                )[0].name
              : ""
          }
          voteAverage={dataResults.vote_average}
          numberOfVotes={dataResults.vote_count}
          overview={dataResults.overview}
        />
      )}

      {dataResults && (
        <ExtraInfo title="Cast" data={dataResults.credits.cast} />
      )}
    </Wrapper>
  );
};
