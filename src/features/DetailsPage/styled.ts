import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Wrapper = styled.main`
  max-width: 1384px;
  padding: 0 8px;
  margin: 64px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  opacity: 0;
  animation: ${fadeIn} 0.2s ease-in-out 0.5s forwards;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    grid-gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 32px auto;
    grid-gap: 10px;
  }
`;
