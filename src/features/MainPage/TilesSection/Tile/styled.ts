import styled, { css } from "styled-components";

interface TileProps {
  $mainTile?: boolean;
  $asideTile?: boolean;
}

const defaultTileMaxHeightPX = 190;
const asideTileMaxHeightPX = 250;

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
  font-size: 20px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    font-size: 1.6vw;
    bottom: 15%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 3vw;
    bottom: 14%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 3.5vw;
    bottom: 15%;
  }

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      font-size: 40px;
      bottom: 9%;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        font-size: 3.4vw;
        bottom: 10%;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 6vw;
        bottom: 11%;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 6.4vw;
        bottom: 11%;
      }
    `}

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      font-size: 24px;
      bottom: 12%;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        font-size: 2vw;
        bottom: 13%;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 3vw;
        bottom: 14%;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 3.5vw;
        bottom: 15%;
      }
    `};
`;

export const GenresContainer = styled.div<TileProps>`
  position: absolute;
  z-index: 1;
  left: 3%;
  bottom: 4%;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    font-size: 1.2vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 2vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 2.3vw;
  }

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      font-size: 22px;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        font-size: 1.8vw;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 3vw;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 3.2vw;
      }
    `}

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      font-size: 15px;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        font-size: 1.3vw;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 2vw;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 2.2vw;
      }
    `}
`;

export const Genre = styled.p<TileProps>`
  margin: 0 0.4vw 0 0;

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      margin: 0 0.7vw 0 0;
    `}

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      margin: 0 0.5vw 0 0;
    `}
`;

export const ImageContainer = styled.div<TileProps>`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-height: ${defaultTileMaxHeightPX}px;
  box-shadow: inset 0 -110px 120px -80px ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    max-height: 180px;
  }

  ${({ $mainTile, theme }) =>
    $mainTile &&
    css`
      max-height: ${asideTileMaxHeightPX * 2 +
      theme.gapBetweenTiles.wideScreen.px}px;

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        max-height: 360px;
      }
    `}

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      max-height: ${asideTileMaxHeightPX}px;

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        max-height: 180px;
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
