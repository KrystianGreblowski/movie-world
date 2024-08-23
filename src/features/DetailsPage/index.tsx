import { Header, HeaderImage, HeaderImageContainer, Wrapper } from "./styled";
import { useDetailsDataFromApi } from "./useDetailsDataFromApi";
import { getImageSrc } from "./getImageSrc/getImageSrc";

export const DetailsPage = () => {
  const { isLoading, error, dataResults } = useDetailsDataFromApi({
    endpoint: "movie/519182",
    params: { language: "en-US" },
  });

  console.log(dataResults);

  return (
    <Wrapper>
      <Header>
        <HeaderImageContainer>
          <HeaderImage
            src={getImageSrc(dataResults?.backdrop_path, "original")}
          />
        </HeaderImageContainer>
      </Header>
    </Wrapper>
  );
};
