import { movieGenres } from "./movieGenres";
import { seriesGenres } from "./seriesGenres";

export const getGenresNamesFromGenresIds = (
  genresIds: number[],
  genresType: "movie" | "series",
  numberOfGenresToDisplay: number,
) => {
  if (genresType === "movie")
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
