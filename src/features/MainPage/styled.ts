import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1384px;
  padding: 0 8px;
  margin: 64px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 96px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    margin: 48px auto;
    grid-gap: 8vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 32px auto;
    grid-gap: 12vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin: 16px auto;
    grid-gap: 16vw;
  }
`;
