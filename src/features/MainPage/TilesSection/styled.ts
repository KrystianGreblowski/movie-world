import styled, { css } from "styled-components";

interface TilesSectionProps {
  $mainSection?: boolean;
}

const gapBetweenTilesPX: number = 12;
const gapBetweenTilesVW: number = 1;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    grid-gap: 1.3vw;
  }
`;

export const Title = styled.h2<TilesSectionProps>`
  font-size: 32px;
  font-weight: 600;
  margin: 0;
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    font-size: 2.6vw;
  }

  ${({ $mainSection }) =>
    $mainSection &&
    css`
      font-size: 44px;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        font-size: 3.6vw;
      }
    `}
`;

export const TilesContainer = styled.div<TilesSectionProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${gapBetweenTilesPX}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    grid-gap: ${gapBetweenTilesVW}vw;
  }

  ${({ $mainSection }) =>
    $mainSection &&
    css`
      grid-template-columns: 850px auto;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        grid-template-columns: 680px auto;
      }
    `}
`;

export const AsideTiles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${gapBetweenTilesPX}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    grid-gap: ${gapBetweenTilesVW}vw;
  }
`;
