import { SectionTilesContainer, SectionTitle, SectionWrapper } from "../styled";
import { usePopularSeriesData } from "./usePopularSeriesData";
import { Tile } from "../Tile";
import { getArrayForPlaceholders } from "../getArrayForPlaceholders";

export const PopularSeries = () => {
  const { isLoading, error, popularSeriesData } = usePopularSeriesData();

  if (isLoading)
    return (
      <SectionWrapper>
        <SectionTitle>Popular Series</SectionTitle>

        <SectionTilesContainer>
          {getArrayForPlaceholders(4).map((placeholder) => (
            <Tile
              key={placeholder}
              tileType="series"
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
      <SectionTitle>Popular Series</SectionTitle>

      <SectionTilesContainer>
        {popularSeriesData.slice(0, 4).map((series) => (
          <Tile
            key={series.id}
            tileType="series"
            title={series.name}
            genres={series.genre_ids}
            imagePath={series.backdrop_path}
            imageSize="w780"
          />
        ))}
      </SectionTilesContainer>
    </SectionWrapper>
  );
};
