import { SectionTilesContainer, SectionTitle, SectionWrapper } from "../styled";
import { useUpcomingMoviesData } from "./useUpcomingMoviesData";
import { Tile } from "../Tile";
import { getArrayForPlaceholders } from "../getArrayForPlaceholders";

export const UpcomingMovies = () => {
  const { isLoading, error, upcomingMoviesData } = useUpcomingMoviesData();

  if (isLoading)
    return (
      <SectionWrapper>
        <SectionTitle>Upcoming</SectionTitle>

        <SectionTilesContainer>
          {getArrayForPlaceholders(4).map((placeholder) => (
            <Tile
              key={placeholder}
              tileType="movie"
              title=""
              genres={[]}
              imagePath="placeholder"
              imageSize="w780"
            />
          ))}
        </SectionTilesContainer>
      </SectionWrapper>
    );

  if (error) return <div>Error: {error.message}</div>;

  return (
    <SectionWrapper>
      <SectionTitle>Upcoming</SectionTitle>

      <SectionTilesContainer>
        {upcomingMoviesData.slice(0, 4).map((movie) => (
          <Tile
            key={movie.id}
            tileType="movie"
            title={movie.original_title}
            genres={movie.genre_ids}
            imagePath={movie.backdrop_path}
            imageSize="w780"
          />
        ))}
      </SectionTilesContainer>
    </SectionWrapper>
  );
};
