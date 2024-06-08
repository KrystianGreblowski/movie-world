import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1392px;
  padding: 0 12px;
  margin: 64px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    grid-gap: 5vw;
  }
`;
