import { Wrapper, Header, HeaderImage, HeaderImageContainer } from "./styled";
import { useDetailsDataFromApi } from "./useDetailsDataFromApi";
import { getImageSrc } from "./getImageSrc/getImageSrc";
import { MainInfo } from "./MainInfo";

export const DetailsPage = () => {
  const { isLoading, error, dataResults } = useDetailsDataFromApi({
    endpoint: "movie/533535",
    params: { language: "en-US" },
  });

  return (
    <Wrapper>
      <Header>
        <HeaderImageContainer>
          <HeaderImage
            src={getImageSrc(dataResults?.backdrop_path, "original")}
          />
        </HeaderImageContainer>
      </Header>

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
          voteAverage={dataResults.vote_average}
          numberOfVotes={dataResults.vote_count}
          overview={dataResults.overview}
        />
      )}
    </Wrapper>
  );
};
