import { Container, Image, ImageContainer, Title } from "./styled";

interface MainPageTileProps {
  title: string;
  imagePath: string;
  imageSize: "w320" | "w780" | "w1280" | "original";
  mainTile?: boolean;
  asideTile?: boolean;
}

export const Tile = ({
  title,
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
      <ImageContainer $mainTile={mainTile} $asideTile={asideTile}>
        <Image
          src={`https://image.tmdb.org/t/p/${imageSize}` + imagePath}
          alt={title}
          $mainTile={mainTile}
          $asideTile={asideTile}
        />
      </ImageContainer>
    </Container>
  );
};
