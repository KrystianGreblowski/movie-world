import placeholder from "./placeholder.png";
import noImage from "./noImage.png";

export const getImageSrc = (imagePath: string, imageSize: string) => {
  switch (imagePath) {
    case "placeholder":
      return placeholder;
    case null:
      return noImage;
    default:
      return `https://image.tmdb.org/t/p/${imageSize}` + imagePath;
  }
};
