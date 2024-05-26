import styled, { css } from "styled-components";

interface TileProps {
  $mainTile?: boolean;
  $asideTile?: boolean;
}

const siteMaxWidth: number = 1368;

const trendingTiles = {
  mainTileWidth: 900,
  mainTileHeight: 500,
  numberOfAsideTiles: 2,
  gapWidth: 12,
} as const;

const asideTileWidth: number =
  siteMaxWidth - trendingTiles.mainTileWidth - trendingTiles.gapWidth;

const asideTileHeight: number =
  (trendingTiles.mainTileHeight -
    (trendingTiles.numberOfAsideTiles - 1) * trendingTiles.gapWidth) /
  trendingTiles.numberOfAsideTiles;

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Title = styled.h2<TileProps>`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 0;
  width: 100%;
  margin: 0;

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      left: 30px;
      bottom: 50px;
      font-size: 40px;
      font-weight: 500;
    `}

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      left: 16px;
      bottom: 28px;
      font-size: 20px;
      font-weight: 400;
    `}
`;

export const ImageContainer = styled.div<TileProps>`
  box-shadow: inset 0 -100px 120px -60px ${({ theme }) => theme.color.black};

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      width: ${trendingTiles.mainTileWidth}px;
      height: ${trendingTiles.mainTileHeight}px;
    `};

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      width: ${asideTileWidth}px;
      height: ${asideTileHeight}px;
    `}

  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img<TileProps>`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 2px;
  position: relative;
  z-index: -2;

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      width: ${trendingTiles.mainTileWidth}px;
      height: ${trendingTiles.mainTileHeight}px;
    `}

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      width: ${asideTileWidth}px;
      height: ${asideTileHeight}px;
    `}
`;
