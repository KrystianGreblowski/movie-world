import { useTrendingMoviesData } from "./useTrendingMoviesData";
import { Wrapper, TilesContainer, AsideTiles } from "./styled";
import { SectionTitle } from "../styled";
import { Tile } from "../Tile";

export const TrendingMovies = () => {
  const { isLoading, error, trendingMoviesData } = useTrendingMoviesData();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Wrapper>
      <SectionTitle>Trending</SectionTitle>

      <TilesContainer>
        <Tile
          mainTile
          tileType="movie"
          title={trendingMoviesData[0].original_title}
          genres={trendingMoviesData[0].genre_ids}
          imagePath={trendingMoviesData[0].backdrop_path}
          imageSize="w1280"
        />

        <AsideTiles>
          {trendingMoviesData.slice(1, 3).map((movie) => (
            <Tile
              key={movie.id}
              asideTile
              tileType="movie"
              title={movie.original_title}
              genres={movie.genre_ids}
              imagePath={movie.backdrop_path}
              imageSize="w780"
            />
          ))}
        </AsideTiles>
      </TilesContainer>
    </Wrapper>
  );
};
