import {
  Container,
  GenresContainer,
  Genre,
  Image,
  ImageContainer,
  Title,
} from "./styled";
import { getGenresNamesFromGenresIds } from "../../../common/getGenresNamesFromGenresIds";
import { getImageSrc } from "./getImageSrc";

interface MainPageTileProps {
  tileType: "movie" | "series";
  title: string;
  genres: number[];
  imagePath: string;
  imageSize: "w320" | "w780" | "w1280" | "original";
  mainTile?: boolean;
  asideTile?: boolean;
}

export const Tile = ({
  tileType,
  title,
  genres,
  imagePath,
  imageSize,
  mainTile,
  asideTile,
}: MainPageTileProps) => {
  return (
    <Container>
      <Title $mainTile={mainTile} $asideTile={asideTile}>
        {title}
      </Title>
      <GenresContainer $mainTile={mainTile} $asideTile={asideTile}>
        {getGenresNamesFromGenresIds(genres, tileType, 3)?.map((name) => (
          <Genre key={name}>{name}</Genre>
        ))}
      </GenresContainer>
      <ImageContainer $mainTile={mainTile} $asideTile={asideTile}>
        <Image
          src={getImageSrc(imagePath, imageSize)}
          alt={title}
          $mainTile={mainTile}
          $asideTile={asideTile}
        />
      </ImageContainer>
    </Container>
  );
};
