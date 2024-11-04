import { useEffect } from "react";
import { Wrapper, TilesContainer, Title, AsideTiles } from "./styled";
import { Tile } from "./Tile";
import { getArrayForPlaceholders } from "../../../common/functions/getArrayForPlaceholders";
import { useDataFromApi } from "../../../common/api/useDataFromApi";

interface TilesSectionProps {
  title: string;
  numberOfTiles: number;
  dataType: "movie" | "series";
  endpoint: string;
  params: Record<string, string>;
  mainSection?: boolean;
  sendErrorStatus: (error: boolean) => void;
}

export const TilesSection = ({
  title,
  numberOfTiles,
  dataType,
  endpoint,
  params,
  mainSection,
  sendErrorStatus,
}: TilesSectionProps) => {
  const { isLoading, error, dataResults } = useDataFromApi({
    endpoint,
    params,
  });

  useEffect(() => {
    error ? sendErrorStatus(true) : sendErrorStatus(false);
  }, [error, sendErrorStatus]);

  if (error) {
    return null;
  }

  switch (mainSection) {
    case true: {
      if (isLoading || !dataResults)
        return (
          <Wrapper>
            <Title $mainSection={mainSection}>{title}</Title>

            <TilesContainer $mainSection={mainSection}>
              <Tile
                id={0}
                mainTile
                tileType={dataType}
                title=""
                genres={[]}
                numberOfGenres={0}
                imagePath="placeholder"
                imageSize="w1280"
              />

              <AsideTiles>
                {getArrayForPlaceholders(numberOfTiles - 1).map(
                  (placeholder) => (
                    <Tile
                      id={0}
                      key={placeholder}
                      asideTile
                      tileType={dataType}
                      title=""
                      genres={[]}
                      numberOfGenres={0}
                      imagePath="placeholder"
                      imageSize="w780"
                    />
                  ),
                )}
              </AsideTiles>
            </TilesContainer>
          </Wrapper>
        );

      return (
        <Wrapper>
          <Title $mainSection={mainSection}>{title}</Title>

          <TilesContainer $mainSection={mainSection}>
            <Tile
              id={dataResults[0].id}
              mainTile
              tileType={dataType}
              title={dataResults[0].title}
              genres={dataResults[0].genre_ids}
              numberOfGenres={2}
              imagePath={dataResults[0].backdrop_path}
              imageSize="w1280"
            />

            <AsideTiles>
              {dataResults.slice(1, numberOfTiles).map((result) => (
                <Tile
                  id={result.id}
                  key={result.id}
                  asideTile
                  tileType={dataType}
                  title={result.title}
                  genres={result.genre_ids}
                  numberOfGenres={2}
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
      if (isLoading || !dataResults)
        return (
          <Wrapper>
            <Title>{title}</Title>

            <TilesContainer>
              {getArrayForPlaceholders(numberOfTiles).map((placeholder) => (
                <Tile
                  id={0}
                  key={placeholder}
                  tileType={dataType}
                  title=""
                  genres={[]}
                  numberOfGenres={0}
                  imagePath="placeholder"
                  imageSize="w780"
                />
              ))}
            </TilesContainer>
          </Wrapper>
        );

      return (
        <Wrapper>
          <Title>{title}</Title>

          <TilesContainer>
            {dataResults.slice(0, numberOfTiles).map((dataResult) => (
              <Tile
                id={dataResult.id}
                key={dataResult.id}
                tileType={dataType}
                title={
                  dataType === "movie" ? dataResult.title : dataResult.name
                }
                genres={dataResult.genre_ids}
                numberOfGenres={2}
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
