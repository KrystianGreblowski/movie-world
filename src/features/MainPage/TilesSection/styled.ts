import styled, { css } from "styled-components";

interface TilesSectionProps {
  $mainSection?: boolean;
}

const sectionTilesGap: number = 12;

export const Wrapper = styled.section``;

export const Title = styled.h2`
  font-size: 38px;
  font-weight: 600;
  margin: 0 0 16px 0;
`;

export const TilesContainer = styled.div<TilesSectionProps>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${sectionTilesGap}px;
  line-height: 0;

  ${({ $mainSection }) =>
    $mainSection &&
    css`
      grid-template-columns: auto 1fr;
    `}
`;

export const AsideTiles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${sectionTilesGap}px;
`;
