import styled, { css } from "styled-components";

interface TileProps {
  $mainTile?: boolean;
  $asideTile?: boolean;
}

const siteMaxWidth: number = 1368;
const gapWidth: number = 12;

const numberOfDefaultTiles: number = 4;
const numberOfAsideTiles: number = 2;

const defaultTileWidth: number =
  (siteMaxWidth - (numberOfDefaultTiles - 1) * gapWidth) / numberOfDefaultTiles;
const defaultTileHeight: number = 250;

const mainTileWidth: number = 900;
const mainTileHeight: number = 500;

const asideTileWidth: number = siteMaxWidth - mainTileWidth - gapWidth;
const asideTileHeight: number =
  (mainTileHeight - (numberOfAsideTiles - 1) * gapWidth) / numberOfAsideTiles;

export const Container = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h2<TileProps>`
  position: absolute;
  z-index: 1;
  left: 3%;
  bottom: 15%;
  width: 100%;
  margin: 0;
  font-size: 18px;
  font-weight: 400;

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      font-size: 36px;
      font-weight: 500;
    `}

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      font-size: 22px;
    `}
`;

export const GenresContainer = styled.div<TileProps>`
  position: absolute;
  z-index: 1;
  left: 3%;
  bottom: 7%;
  width: 100%;
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  flex-direction: row;

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      font-size: 28px;
      font-weight: 500;
    `}

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      font-size: 14px;
    `}
`;

export const Genre = styled.p`
  margin: 0 8px 0 0;
`;

export const ImageContainer = styled.div<TileProps>`
  width: ${defaultTileWidth}px;
  height: ${defaultTileHeight}px;
  box-shadow: inset 0 -110px 120px -60px ${({ theme }) => theme.color.black};

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      width: ${mainTileWidth}px;
      height: ${mainTileHeight}px;
    `};

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      width: ${asideTileWidth}px;
      height: ${asideTileHeight}px;
    `}
`;

export const Image = styled.img<TileProps>`
  width: ${defaultTileWidth}px;
  height: ${defaultTileHeight}px;
  object-fit: cover;
  border-radius: 2px;
  position: relative;
  z-index: -1;
  box-shadow: 0 0 3px 0 ${({ theme }) => theme.color.gray};
  transition: filter 0.3s ease;

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      width: ${mainTileWidth}px;
      height: ${mainTileHeight}px;
    `}

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      width: ${asideTileWidth}px;
      height: ${asideTileHeight}px;
    `}

  ${Container}:hover & {
    filter: brightness(1.2);
  }
`;
