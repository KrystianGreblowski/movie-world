import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: 16px 4px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-grow: 1;
  height: 36px;
`;
