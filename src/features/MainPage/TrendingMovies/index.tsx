import { useTrendingMoviesData } from "./useTrendingMoviesData";
import { Wrapper, TilesContainer, AsideTiles } from "./styled";
import { SectionTitle } from "../styled";
import { MainPageTile } from "../../../common/Tiles/MainPageTile";

export const TrendingMovies = () => {
  const { isLoading, error, trendingMoviesData } = useTrendingMoviesData();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Wrapper>
      <SectionTitle>Trending</SectionTitle>

      <TilesContainer>
        <MainPageTile
          mainTile
          title={trendingMoviesData[0].original_title}
          imagePath={trendingMoviesData[0].backdrop_path}
          imageSize="w1280"
        />
        <AsideTiles>
          {trendingMoviesData.slice(1, 3).map((movie) => (
            <MainPageTile
              key={movie.id}
              asideTile
              title={movie.original_title}
              imagePath={movie.backdrop_path}
              imageSize="w780"
            />
          ))}
        </AsideTiles>
      </TilesContainer>
    </Wrapper>
  );
};
