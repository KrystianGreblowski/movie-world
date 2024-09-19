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

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    margin: 48px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    grid-gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 32px auto;
    grid-gap: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin: 0 0 8px 0;
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 7vw;
    margin: 0 0 1.4vw 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 9vw;
  }
`;
