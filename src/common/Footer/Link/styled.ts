import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    margin-right: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 0 0 10px 0;
  }
`;

export const Url = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.4s;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    font-size: 13px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.silverChalice};
  }
`;

export const Icon = styled.a`
  fill: white;
  width: 30px;
  height: 30px;
  margin-right: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    width: 24px;
    height: 24px;
  }
`;
