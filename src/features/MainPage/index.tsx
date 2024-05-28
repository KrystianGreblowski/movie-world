import { Wrapper } from "./styled";
import { TrendingMovies } from "./TrendingMovies";
import { PopularMovies } from "./PopularMovies";
import { PopularSeries } from "./PopularSeries";
import { UpcomingMovies } from "./UpcomingMovies";

export const MainPage = () => {
  return (
    <Wrapper>
      <TrendingMovies />
      <PopularMovies />
      <PopularSeries />
      <UpcomingMovies />
    </Wrapper>
  );
};
