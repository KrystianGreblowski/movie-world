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
`;

export const Title = styled.h2<TileProps>`
  position: absolute;
  z-index: 1;
  left: 5%;
  bottom: 10%;
  width: 100%;
  margin: 0;
  font-size: 16px;
  font-weight: 400;

  ${({ $mainTile }) =>
    $mainTile &&
    css`
      font-size: 32px;
      font-weight: 500;
    `}

  ${({ $asideTile }) =>
    $asideTile &&
    css`
      font-size: 20px;
    `}
`;

export const ImageContainer = styled.div<TileProps>`
  width: ${defaultTileWidth}px;
  height: ${defaultTileHeight}px;
  box-shadow: inset 0 -100px 120px -60px ${({ theme }) => theme.color.black};

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

  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img<TileProps>`
  width: ${defaultTileWidth}px;
  height: ${defaultTileHeight}px;
  object-fit: cover;
  border-radius: 2px;
  position: relative;
  z-index: -2;

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
`;