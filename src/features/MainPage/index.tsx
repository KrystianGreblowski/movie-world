import { Wrapper } from "./styled";

import { TilesSection } from "./TilesSection";

export const MainPage = () => {
  return (
    <Wrapper>
      <TilesSection
        mainSection
        title="Trending"
        numberOfTiles={3}
        tileType="movie"
        endpoint="trending/movie/day"
        params={{ language: "en-US" }}
      />

      <TilesSection
        title="Popular Movies"
        numberOfTiles={4}
        tileType="movie"
        endpoint="movie/popular"
        params={{ language: "en-US", page: "1" }}
      />

      <TilesSection
        title="Popular Series"
        numberOfTiles={4}
        tileType="series"
        endpoint="tv/popular"
        params={{ language: "en-US", page: "1" }}
      />

      <TilesSection
        title="Upcoming"
        numberOfTiles={4}
        tileType="movie"
        endpoint="movie/upcoming"
        params={{ language: "en-US", page: "1" }}
      />
    </Wrapper>
  );
};
