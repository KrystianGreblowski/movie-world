import { SectionTilesContainer, SectionTitle, SectionWrapper } from "../styled";
import { usePopularSeriesData } from "./usePopularSeriesData";
import { Tile } from "../Tile";

export const PopularSeries = () => {
  const { isLoading, error, popularSeriesData } = usePopularSeriesData();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <SectionWrapper>
      <SectionTitle>Popular Series</SectionTitle>

      <SectionTilesContainer>
        {popularSeriesData.slice(0, 4).map((series) => (
          <Tile
            key={series.id}
            title={series.name}
            imagePath={series.backdrop_path}
            imageSize="w780"
          />
        ))}
      </SectionTilesContainer>
    </SectionWrapper>
  );
};
