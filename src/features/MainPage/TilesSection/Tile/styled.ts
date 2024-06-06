import styled, { css } from "styled-components";

interface TileProps {
  $mainTile?: boolean;
  $asideTile?: boolean;
}

export const Container = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h2<TileProps>`
  position: absolute;
  z-index: 1;
  left: 3%;
  bottom: 14%;
  margin: 0;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    font-size: 1.3vw;
    bottom: 15%;
  }

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      font-size: 36px;
      bottom: 11%;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        font-size: 3vw;
        bottom: 11%;
      }
    `}

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      font-size: 20px;
      bottom: 13%;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        font-size: 1.6vw;
        bottom: 13%;
      }
    `};
`;

export const GenresContainer = styled.div<TileProps>`
  position: absolute;
  z-index: 1;
  left: 3%;
  bottom: 5%;
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    font-size: 1vw;
  }

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      font-size: 22px;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        font-size: 1.8vw;
      }
    `}

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      font-size: 15px;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        font-size: 1.2vw;
      }
    `}
`;

export const Genre = styled.p`
  margin: 0 8px 0 0;
`;

export const ImageContainer = styled.div<TileProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 -110px 120px -60px ${({ theme }) => theme.color.black};

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      max-height: 280px;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        max-height: 220px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
        max-height: 200px;
      }
    `}

  ${Container}:hover & img {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
  position: relative;
  z-index: -1;
  transition: transform 0.5s ease;
`;
