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
import { Tile as MovieTile } from "../../MainPage/TilesSection/Tile/index";

interface ExtraInfoProps {
  dataType: "movie/series" | "person";
  title: string;
  data: CastMember[];
}

export const ExtraInfo = ({ dataType, title, data }: ExtraInfoProps) => {
  if (dataType === "person") {
    return (
      <Container>
        {data.length > 0 && <Title>{title}</Title>}

        <TilesContainer $movieTile>
          {data.map((movie) => (
            <MovieTile
              id={movie.id}
              key={movie.id}
              tileType="movie"
              title={movie.title}
              genres={movie.genre_ids}
              numberOfGenres={2}
              imagePath={movie.backdrop_path}
              imageSize="w780"
              character={movie.character}
            />
          ))}
        </TilesContainer>
      </Container>
    );
  }

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
