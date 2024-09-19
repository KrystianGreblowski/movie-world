import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: 32px;
`;

export const Url = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.4s;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 1px;

  &:hover {
    color: ${({ theme }) => theme.color.silverChalice};
  }
`;

export const Icon = styled.a`
  fill: white;
  width: 30px;
  height: 30px;
  margin-right: 6px;
`;
