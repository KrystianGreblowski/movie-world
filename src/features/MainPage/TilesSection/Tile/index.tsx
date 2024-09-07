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
import { toMovieDetails } from "../../../../core/routes";

interface MainPageTileProps {
  id: number;
  tileType: "movie" | "series";
  title: string;
  genres: number[];
  imagePath: string;
  imageSize: string;
  mainTile?: boolean;
  asideTile?: boolean;
}

export const Tile = ({
  id,
  tileType,
  title,
  genres,
  imagePath,
  imageSize,
  mainTile,
  asideTile,
}: MainPageTileProps) => {
  return (
    <Container to={toMovieDetails(id.toString())}>
      <Title $mainTile={mainTile} $asideTile={asideTile}>
        {title}
      </Title>

      <GenresContainer $mainTile={mainTile} $asideTile={asideTile}>
        {getGenresNamesFromGenresIds(genres, tileType, 3)?.map((name) => (
          <Genre key={name} $mainTile={mainTile} $asideTile={asideTile}>
            {name}
          </Genre>
        ))}
      </GenresContainer>

      <ImageContainer $mainTile={mainTile} $asideTile={asideTile}>
        <Image src={getImageSrc(imagePath, imageSize)} alt={title} />
      </ImageContainer>
    </Container>
  );
};
