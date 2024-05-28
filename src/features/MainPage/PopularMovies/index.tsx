import { SectionTilesContainer, SectionTitle, SectionWrapper } from "../styled";
import { usePopularMoviesData } from "./usePopularMoviesData";
import { Tile } from "../Tile";

export const PopularMovies = () => {
  const { isLoading, error, popularMoviesData } = usePopularMoviesData();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <SectionWrapper>
      <SectionTitle>Popular Movies</SectionTitle>

      <SectionTilesContainer>
        {popularMoviesData.slice(0, 4).map((movie) => (
          <Tile
            key={movie.id}
            title={movie.original_title}
            imagePath={movie.backdrop_path}
            imageSize="w780"
          />
        ))}
      </SectionTilesContainer>
    </SectionWrapper>
  );
};
