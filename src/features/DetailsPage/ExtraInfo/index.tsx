import {
  Container,
  Title,
  TilesContainer,
  Tile,
  TileImage,
  TileInfo,
  TileName,
  TileExtraInfo,
} from "./styled";
import { CastMember } from "../useDetailsDataFromApi";
import { getImageSrc } from "./getImageSrc/getImageSrc";

interface ExtraInfoProps {
  title: string;
  castData: CastMember[];
}

export const ExtraInfo = ({ title, castData }: ExtraInfoProps) => {
  return (
    <Container>
      <Title>{title}</Title>

      <TilesContainer>
        {castData.map((cast) => (
          <Tile key={cast.id}>
            <TileImage
              src={getImageSrc(cast.profile_path, "h632")}
              alt={title}
            />
            <TileInfo>
              <TileName>{cast.name}</TileName>
              <TileExtraInfo>{cast.character}</TileExtraInfo>
            </TileInfo>
          </Tile>
        ))}
      </TilesContainer>
    </Container>
  );
};
