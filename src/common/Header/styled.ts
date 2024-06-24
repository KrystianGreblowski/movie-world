import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 76px;
  background-color: ${({ theme }) => theme.color.mineShaftDark};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    height: auto;
  }
`;

export const Content = styled.div`
  max-width: 1384px;
  padding: 0 8px;
  width: 100%;
  height: inherit;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: block;
  }
`;
