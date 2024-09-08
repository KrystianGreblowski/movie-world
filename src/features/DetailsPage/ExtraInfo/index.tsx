import {
  Container,
  Title,
  TilesContainer,
  Tile,
  Image,
  Info,
  Name,
  About,
} from "./styled";
import { CastMember } from "../useDetailsDataFromApi";
import { getImageSrc } from "./getImageSrc/getImageSrc";
import { toPersonDetails } from "../../../core/routes";

interface ExtraInfoProps {
  title: string;
  data: CastMember[];
}

export const ExtraInfo = ({ title, data }: ExtraInfoProps) => {
  return (
    <Container>
      {data.length > 0 && <Title>{title}</Title>}

      <TilesContainer>
        {data.map((cast) => (
          <Tile to={toPersonDetails(cast.id.toString())} key={cast.id}>
            <Image src={getImageSrc(cast.profile_path, "h632")} alt={title} />
            <Info>
              <Name>{cast.name}</Name>
              <About>{cast.character}</About>
            </Info>
          </Tile>
        ))}
      </TilesContainer>
    </Container>
  );
};
