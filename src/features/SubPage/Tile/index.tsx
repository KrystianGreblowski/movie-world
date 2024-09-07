import {
  Container,
  Image,
  Information,
  Details,
  Title,
  TopRatedPosition,
  GenresContainer,
  Genre,
  ReleaseYear,
  Overview,
  RatingContainer,
  RatingIcon,
  Rating,
  NumberOfVotes,
  NoVotes,
} from "./styled";
import { getImageSrc } from "./getImageSrc/getImageSrc";
import { getGenresNamesFromGenresIds } from "../../../common/functions/getGenresNamesFromGenresIds";
import { getYearFromDate } from "../../../common/functions/getYearFromDate";
import { toMovieDetails } from "../../../core/routes";

interface TileProps {
  id: number;
  title: string;
  imagePath: string;
  imageSize: string;
  genres: number[];
  tileType: "movie" | "series";
  releaseDate: string;
  voteAverage: number;
  numberOfVotes: number;
  overview: string;
  topRated?: boolean;
  topRatedPosition: number;
  isLoading: boolean;
}

export const Tile = ({
  id,
  title,
  imagePath,
  imageSize,
  genres,
  tileType,
  releaseDate,
  voteAverage,
  numberOfVotes,
  overview,
  topRated,
  topRatedPosition,
  isLoading,
}: TileProps) => {
  return (
    <Container to={toMovieDetails(id.toString())}>
      <Image src={getImageSrc(imagePath, imageSize)} />
      {topRated && <TopRatedPosition>{topRatedPosition}</TopRatedPosition>}

      {!isLoading && (
        <Information>
          <Details>
            <Title>{title}</Title>

            <ReleaseYear>{getYearFromDate(releaseDate)}</ReleaseYear>
            {overview.length < 400 && <Overview>{overview}</Overview>}

            <GenresContainer>
              {getGenresNamesFromGenresIds(genres, tileType, 3)?.map((name) => (
                <Genre key={name}>{name}</Genre>
              ))}
            </GenresContainer>
          </Details>

          {numberOfVotes > 0 ? (
            <RatingContainer>
              <RatingIcon />
              <Rating>{voteAverage.toFixed(1)}</Rating>
              <NumberOfVotes>
                {numberOfVotes} {numberOfVotes === 1 ? "vote" : "votes"}
              </NumberOfVotes>
            </RatingContainer>
          ) : (
            <NoVotes>No votes yet</NoVotes>
          )}
        </Information>
      )}
    </Container>
  );
};
