import { getImageSrc } from "./getImageSrc/getImageSrc";
import { Wrapper, ImageContainer, Image } from "./styled";

interface HeaderProps {
  imagePath: string;
  imageSize: string;
}

export const Header = ({ imagePath, imageSize }: HeaderProps) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={getImageSrc(imagePath, imageSize)} />
      </ImageContainer>
    </Wrapper>
  );
};
