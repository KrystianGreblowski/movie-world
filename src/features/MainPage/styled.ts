import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1400px;
  padding: 0 16px;
  margin: 64px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    grid-gap: 5vw;
  }
`;
