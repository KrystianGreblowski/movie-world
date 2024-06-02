import { TilesContainer, Title, Wrapper, AsideTiles } from "./styled";
import { Tile } from "../Tile";
import { getArrayForPlaceholders } from "../getArrayForPlaceholders";
import { useData } from "./useData";
import { SectionTitle } from "../styled";

interface TilesSectionProps {
  title: string;
  numberOfTiles: number;
  tileType: "movie" | "series";
  endpoint: string;
  params: Record<string, string>;
  mainSection?: boolean;
}

export const TilesSection = ({
  title,
  numberOfTiles,
  tileType,
  endpoint,
  params,
  mainSection,
}: TilesSectionProps) => {
  const { isLoading, error, dataResults } = useData({ endpoint, params });

  switch (mainSection) {
    case true: {
      if (isLoading)
        return (
          <Wrapper>
            <SectionTitle>{title}</SectionTitle>

            <TilesContainer $mainSection={mainSection}>
              <Tile
                mainTile
                tileType={tileType}
                title=""
                genres={[]}
                imagePath="placeholder"
                imageSize="w1280"
              />

              <AsideTiles>
                {getArrayForPlaceholders(numberOfTiles - 1).map(
                  (placeholder) => (
                    <Tile
                      key={placeholder}
                      asideTile
                      tileType={tileType}
                      title=""
                      genres={[]}
                      imagePath="placeholder"
                      imageSize="w780"
                    />
                  ),
                )}
              </AsideTiles>
            </TilesContainer>
          </Wrapper>
        );

      if (error) return <div>Error: {error.message}</div>;

      return (
        <Wrapper>
          <SectionTitle>Trending</SectionTitle>

          <TilesContainer>
            <Tile
              mainTile
              tileType={tileType}
              title={dataResults[0].original_title}
              genres={dataResults[0].genre_ids}
              imagePath={dataResults[0].backdrop_path}
              imageSize="w1280"
            />

            <AsideTiles>
              {dataResults.slice(1, numberOfTiles).map((result) => (
                <Tile
                  key={result.id}
                  asideTile
                  tileType={tileType}
                  title={result.original_title}
                  genres={result.genre_ids}
                  imagePath={result.backdrop_path}
                  imageSize="w780"
                />
              ))}
            </AsideTiles>
          </TilesContainer>
        </Wrapper>
      );
    }
    default: {
      if (isLoading)
        return (
          <Wrapper>
            <Title>{title}</Title>

            <TilesContainer>
              {getArrayForPlaceholders(numberOfTiles).map((placeholder) => (
                <Tile
                  key={placeholder}
                  tileType={tileType}
                  title=""
                  genres={[]}
                  imagePath="placeholder"
                  imageSize="w780"
                />
              ))}
            </TilesContainer>
          </Wrapper>
        );

      if (error) return <div>Error: {error.message}</div>;

      return (
        <Wrapper>
          <Title>{title}</Title>

          <TilesContainer>
            {dataResults.slice(0, numberOfTiles).map((dataResult) => (
              <Tile
                key={dataResult.id}
                tileType={tileType}
                title={
                  tileType === "movie"
                    ? dataResult.original_title
                    : dataResult.name
                }
                genres={dataResult.genre_ids}
                imagePath={dataResult.backdrop_path}
                imageSize="w780"
              />
            ))}
          </TilesContainer>
        </Wrapper>
      );
    }
  }
};
