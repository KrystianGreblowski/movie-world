import { Wrapper } from "./styled";
import { useDetailsDataFromApi } from "./useDetailsDataFromApi";
import { MainInfo } from "./MainInfo";
import { ExtraInfo } from "./ExtraInfo";
import { Header } from "./Header";

export const DetailsPage = () => {
  const { isLoading, error, dataResults } = useDetailsDataFromApi({
    endpoint: "movie/122",
    params: { language: "en-US", append_to_response: "credits" },
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
      {dataResults && (
        <Header imagePath={dataResults.backdrop_path} imageSize="original" />
      )}

      {dataResults && (
        <MainInfo
          title={dataResults.title}
          imagePath={dataResults.poster_path}
          imageSize="w500"
          genres={dataResults.genres.map((genre) => genre.id)}
          tileType="movie"
          productionCountries={dataResults.production_countries.map(
            (productionCountry) => productionCountry.name,
          )}
          releaseDate={dataResults.release_date}
          director={
            dataResults.credits.crew.filter(
              (crew) => crew.job === "Director",
            )[0].name
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
