import { movieGenres } from "../data/movieGenres";
import { seriesGenres } from "../data/seriesGenres";

export const getGenresNamesFromGenresIds = (
  genresIds: number[],
  tileType: "movie" | "series",
  numberOfGenresToDisplay: number,
) => {
  if (tileType === "movie")
    return movieGenres
      .filter((genre) =>
        genresIds.slice(0, numberOfGenresToDisplay).includes(genre.id),
      )
      .map((genre) => genre.name);

  return seriesGenres
    .filter((genre) =>
      genresIds.slice(0, numberOfGenresToDisplay).includes(genre.id),
    )
    .map((genre) => genre.name);
};
