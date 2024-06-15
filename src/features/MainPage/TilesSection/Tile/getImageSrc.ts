import placeholder from "./placeholder.png";
import noImage from "./noImage.png";

export const getImageSrc = (
  imagePath: string,
  imageSize: "w320" | "w780" | "w1280" | "original",
) => {
  switch (imagePath) {
    case "placeholder":
      return placeholder;
    case null:
      return noImage;
    default:
      return `https://image.tmdb.org/t/p/${imageSize}` + imagePath;
  }
};
