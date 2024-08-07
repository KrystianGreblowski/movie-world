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

interface MainPageTileProps {
  tileType: "movie" | "series";
  title: string;
  genres: number[];
  imagePath: string;
  imageSize: string;
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
