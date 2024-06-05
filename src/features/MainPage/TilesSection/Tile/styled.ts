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
  bottom: 16%;
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
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

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
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 -110px 120px -60px ${({ theme }) => theme.color.black};

  ${Container}:hover & img {
    transform: scale(1.1);
  }
`;

export const Image = styled.img<TileProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
  position: relative;
  z-index: -1;
  transition: transform 0.5s ease;
`;
