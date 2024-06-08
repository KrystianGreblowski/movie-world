import styled, { css } from "styled-components";

interface TilesSectionProps {
  $mainSection?: boolean;
}

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    grid-gap: 1.3vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-gap: 1.8vw;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 3.6vw;
  }

  ${({ $mainSection }) =>
    $mainSection &&
    css`
      font-size: 44px;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        font-size: 3.6vw;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 4.8vw;
      }
    `}
`;

export const TilesContainer = styled.div<TilesSectionProps>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${({ theme }) => theme.gapBetweenTiles.wideScreen.px}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    grid-gap: ${({ theme }) => theme.gapBetweenTiles.desktop.vw}vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${({ theme }) => theme.gapBetweenTiles.tablet.vw}vw;
  }

  ${({ $mainSection }) =>
    $mainSection &&
    css`
      grid-template-columns: 2fr 1fr;

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        grid-template-columns: 1fr;
      }
    `}
`;

export const AsideTiles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${({ theme }) => theme.gapBetweenTiles.wideScreen.px}px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    grid-gap: ${({ theme }) => theme.gapBetweenTiles.desktop.vw}vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${({ theme }) => theme.gapBetweenTiles.tablet.vw}vw;
  }
`;
