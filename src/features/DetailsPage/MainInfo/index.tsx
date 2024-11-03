import {
  Container,
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
  tileType: "movie" | "series" | "person";
  productionCountries: string[];
  releaseDate: string;
  director: string;
  voteAverage: number;
  numberOfVotes: number;
  overview: string;
  dateOfBirth: string;
  dateOfDeath: string;
  placeOfBirth: string;
  isLoading?: boolean;
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
  dateOfBirth,
  dateOfDeath,
  placeOfBirth,
  isLoading,
}: MainInfoProps) => {
  if (tileType === "person") {
    return (
      <Container>
        <Image src={getImageSrc(imagePath, imageSize)} />

        <Information>
          {!isLoading && (
            <Details>
              <Title>{title}</Title>

              {placeOfBirth && (
                <ExtraInfoContainer>
                  <ExtraInfoTitle>Place of birth:</ExtraInfoTitle>
                  <ExtraInfoContent>{placeOfBirth}</ExtraInfoContent>
                </ExtraInfoContainer>
              )}

              {dateOfBirth && (
                <ExtraInfoContainer>
                  <ExtraInfoTitle>Date of birth:</ExtraInfoTitle>
                  <ExtraInfoContent>{formatDate(dateOfBirth)}</ExtraInfoContent>
                </ExtraInfoContainer>
              )}

              {dateOfDeath && (
                <ExtraInfoContainer>
                  <ExtraInfoTitle>Date of death:</ExtraInfoTitle>
                  <ExtraInfoContent>{formatDate(dateOfDeath)}</ExtraInfoContent>
                </ExtraInfoContainer>
              )}
            </Details>
          )}
        </Information>

        {overview && <Overview $isLoading={isLoading}>{overview}</Overview>}
      </Container>
    );
  }

  return (
    <Container>
      <Image src={getImageSrc(imagePath, imageSize)} />

      <Information>
        {!isLoading && (
          <Details>
            <Title>{title}</Title>

            {productionCountries.length !== 0 && (
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
            )}

            {releaseDate && (
              <ExtraInfoContainer>
                <ExtraInfoTitle>Release date:</ExtraInfoTitle>
                <ExtraInfoContent>{formatDate(releaseDate)}</ExtraInfoContent>
              </ExtraInfoContainer>
            )}

            {director && (
              <ExtraInfoContainer>
                <ExtraInfoTitle>Director:</ExtraInfoTitle>
                <ExtraInfoContent>{director}</ExtraInfoContent>
              </ExtraInfoContainer>
            )}

            <GenresContainer>
              {getGenresNamesFromGenresIds(genres, tileType, 3)?.map((name) => (
                <Genre key={name}>{name}</Genre>
              ))}
            </GenresContainer>
          </Details>
        )}

        {!isLoading && (
          <>
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
          </>
        )}
      </Information>

      {overview && <Overview $isLoading={isLoading}>{overview}</Overview>}
    </Container>
  );
};
