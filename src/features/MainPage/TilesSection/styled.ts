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
    grid-gap: 2.3vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-gap: 2.8vw;
  }
`;

export const Title = styled.h2<TilesSectionProps>`
  font-size: 36px;
  font-weight: 600;
  margin: 0;
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    font-size: 3.2vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 5vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 7vw;
  }

  ${({ $mainSection }) =>
    $mainSection &&
    css`
      font-size: 50px;

      @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
        font-size: 4.4vw;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        font-size: 7vw;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        font-size: 9vw;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-gap: ${({ theme }) => theme.gapBetweenTiles.mobile.vw}vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-gap: ${({ theme }) => theme.gapBetweenTiles.mobile.vw}vw;
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

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-gap: ${({ theme }) => theme.gapBetweenTiles.mobile.vw}vw;
  }
`;
