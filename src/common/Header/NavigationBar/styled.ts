import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding-top: 12px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
