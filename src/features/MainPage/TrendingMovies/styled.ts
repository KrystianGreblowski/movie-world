import styled from "styled-components";

const trendingTilesGap: number = 12;

export const Wrapper = styled.section``;

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${trendingTilesGap}px;
  line-height: 0;
`;

export const AsideTiles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${trendingTilesGap}px;
`;
