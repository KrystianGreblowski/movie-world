import { useState } from "react";
import { Wrapper } from "./styled";
import { TilesSection } from "./TilesSection";
import { ErrorPage } from "../../common/ErrorPage";

export const MainPage = () => {
  const [error, setError] = useState(false);

  const errorStateHandler = (errorState: boolean) => {
    setError(errorState);
  };

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Wrapper>
      <TilesSection
        mainSection
        title="Trending"
        numberOfTiles={3}
        dataType="movie"
        endpoint="trending/movie/day"
        params={{ language: "en-US" }}
        sendErrorStatus={errorStateHandler}
      />

      <TilesSection
        title="Popular movies"
        numberOfTiles={8}
        dataType="movie"
        endpoint="movie/popular"
        params={{ language: "en-US", page: "1" }}
        sendErrorStatus={errorStateHandler}
      />

      <TilesSection
        title="Popular series"
        numberOfTiles={8}
        dataType="series"
        endpoint="tv/popular"
        params={{ language: "en-US", page: "1" }}
        sendErrorStatus={errorStateHandler}
      />

      <TilesSection
        title="Upcoming"
        numberOfTiles={8}
        dataType="movie"
        endpoint="movie/upcoming"
        params={{ language: "en-US", page: "1" }}
        sendErrorStatus={errorStateHandler}
      />
    </Wrapper>
  );
};
