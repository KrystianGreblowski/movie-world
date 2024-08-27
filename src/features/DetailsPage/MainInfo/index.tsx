import {
  Container,
  InformationContainer,
  Image,
  Information,
  Details,
  Title,
  GenresContainer,
  Genre,
  ExtraInfoContainer,
  ExtraInfoTitle,
  ExtraInfoContent,
  ProductionCountryName,
  Overview,
  RatingContainer,
  RatingIcon,
  Rating,
  NumberOfVotes,
  NoVotes,
} from "./styled";
import { getImageSrc } from "./getImageSrc/getImageSrc";
import { getGenresNamesFromGenresIds } from "../../../common/functions/getGenresNamesFromGenresIds";
import { formatDate } from "./formatDate";

interface MainInfoProps {
  title: string;
  imagePath: string;
  imageSize: string;
  genres: number[];
  tileType: "movie" | "series";
  productionCountries: string[];
  releaseDate: string;
  director: string;
  voteAverage: number;
  numberOfVotes: number;
  overview: string;
}

export const MainInfo = ({
  title,
  imagePath,
  imageSize,
  genres,
  tileType,
  productionCountries,
  releaseDate,
  director,
  voteAverage,
  numberOfVotes,
  overview,
}: MainInfoProps) => {
  return (
    <Container>
      <InformationContainer>
        <Image src={getImageSrc(imagePath, imageSize)} />

        <Information>
          <Details>
            <Title>{title}</Title>

            <ExtraInfoContainer>
              <ExtraInfoTitle>Production:</ExtraInfoTitle>
              <ExtraInfoContent>
                {productionCountries.map((country, index) => (
                  <ProductionCountryName key={country}>
                    {country}
                    {index !== productionCountries.length - 1 && ","}
                  </ProductionCountryName>
                ))}
              </ExtraInfoContent>
            </ExtraInfoContainer>

            <ExtraInfoContainer>
              <ExtraInfoTitle>Release date:</ExtraInfoTitle>
              <ExtraInfoContent>{formatDate(releaseDate)}</ExtraInfoContent>
            </ExtraInfoContainer>

            <ExtraInfoContainer>
              <ExtraInfoTitle>Director:</ExtraInfoTitle>
              <ExtraInfoContent>{director}</ExtraInfoContent>
            </ExtraInfoContainer>

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
      </InformationContainer>

      <Overview>{overview}</Overview>
    </Container>
  );
};
