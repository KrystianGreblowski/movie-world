import styled, { css } from "styled-components";

interface PaginationStyledProps {
  $lastButton?: boolean;
}

export const Wrapper = styled.div`
  margin: 48px auto 0;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}px) {
    margin: 32px auto 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    margin: 36px auto 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 22px auto 0;
  }
`;

export const ChangePageButton = styled.button<PaginationStyledProps>`
  border: none;
  background-color: ${({ theme }) => theme.color.doveGray};
  color: ${({ theme }) => theme.color.white};
  padding: 6px 12px;
  margin-right: 8px;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 400;
  transition: filter 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 13px;
    padding: 6px 8px;
    margin-right: 6px;

    ${({ $lastButton }) =>
      $lastButton &&
      css`
        margin-right: 0;
      `}
  }

  &:hover {
    cursor: pointer;
    filter: brightness(1.3);
  }

  &:disabled {
    cursor: auto;
    filter: none;
    background-color: ${({ theme }) => theme.color.mineShaftDark};
  }

  ${({ $lastButton }) =>
    $lastButton &&
    css`
      margin-right: 0;
    `}
`;

export const PageNumberInfo = styled.p`
  padding: 0;
  margin: 0 8px 0 0;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 12px;
    margin: 0 6px 0 0;
  }
`;
