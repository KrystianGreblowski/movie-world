import { Wrapper } from "./styled";

import { TilesSection } from "./TilesSection";

export const MainPage = () => {
  return (
    <Wrapper>
      <TilesSection
        mainSection
        title="Trending"
        numberOfTiles={3}
        dataType="movie"
        endpoint="trending/movie/day"
        params={{ language: "en-US" }}
      />

      <TilesSection
        title="Popular Movies"
        numberOfTiles={8}
        dataType="movie"
        endpoint="movie/popular"
        params={{ language: "en-US", page: "1" }}
      />

      <TilesSection
        title="Popular Series"
        numberOfTiles={8}
        dataType="series"
        endpoint="tv/popular"
        params={{ language: "en-US", page: "1" }}
      />

      <TilesSection
        title="Upcoming"
        numberOfTiles={8}
        dataType="movie"
        endpoint="movie/upcoming"
        params={{ language: "en-US", page: "1" }}
      />
    </Wrapper>
  );
};
