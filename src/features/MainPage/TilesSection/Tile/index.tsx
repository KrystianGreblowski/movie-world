import {
  Container,
  GenresContainer,
  Genre,
  Image,
  ImageContainer,
  Title,
} from "./styled";
import { getGenresNamesFromGenresIds } from "../../../../common/functions/getGenresNamesFromGenresIds";
import { getImageSrc } from "./getImageSrc/getImageSrc";
import { toMovieDetails, toSeriesDetails } from "../../../../core/routes";

interface TileProps {
  id: number;
  tileType: "movie" | "series";
  title: string;
  genres: number[];
  numberOfGenres: number;
  imagePath: string;
  imageSize: string;
  mainTile?: boolean;
  asideTile?: boolean;
  character?: string;
}

export const Tile = ({
  id,
  tileType,
  title,
  genres,
  numberOfGenres,
  imagePath,
  imageSize,
  mainTile,
  asideTile,
}: TileProps) => {
  return (
    <Container
      to={
        tileType === "movie"
          ? toMovieDetails(id.toString())
          : toSeriesDetails(id.toString())
      }
    >
      <Title $mainTile={mainTile} $asideTile={asideTile}>
        {title}
      </Title>

      <GenresContainer $mainTile={mainTile} $asideTile={asideTile}>
        {getGenresNamesFromGenresIds(genres, tileType, numberOfGenres)?.map(
          (name) => (
            <Genre key={name} $mainTile={mainTile} $asideTile={asideTile}>
              {name}
            </Genre>
          ),
        )}
      </GenresContainer>

      <ImageContainer $mainTile={mainTile} $asideTile={asideTile}>
        <Image src={getImageSrc(imagePath, imageSize)} alt={title} />
      </ImageContainer>
    </Container>
  );
};
