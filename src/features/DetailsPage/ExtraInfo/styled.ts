import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
`;

export const Title = styled.h1`
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
`;

export const TilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 32px 16px;
`;

export const Tile = styled.div`
  height: auto;
  background-color: ${({ theme }) => theme.color.mineShaftDark};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
  border-radius: 2px;
`;

export const TileImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

export const TileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  padding: 0 12px 12px 12px;
`;

export const TileName = styled.p`
  margin: 0 0 12px 0;
  font-size: 22px;
  font-weight: 600;
`;
export const TileExtraInfo = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;
