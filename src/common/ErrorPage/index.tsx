import { Wrapper, Image, MainInfo, ExtraInfo } from "./styled";

export const ErrorPage = () => {
  return (
    <Wrapper>
      <Image>Error</Image>
      <MainInfo>Ooops! Something went wrong… </MainInfo>
      <ExtraInfo>Please check your network connection and try again</ExtraInfo>
    </Wrapper>
  );
};
