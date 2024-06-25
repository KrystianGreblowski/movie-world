import styled, { css } from "styled-components";
import { ReactComponent as Arrow } from "../../images/arrow-down.svg";

interface SearchTypeProps {
  $open: boolean;
}

export const Wrapper = styled.div`
  height: inherit;
  flex-shrink: 0;
`;

export const SearchTypeContainer = styled.button`
  border: none;
  padding: 0 8px 0 12px;
  display: flex;
  height: inherit;
  background-color: ${({ theme }) => theme.color.white};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.color.gray};
  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.alto};
  }
`;

export const SearchTypeTitle = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

export const SearchTypeArrow = styled(Arrow)<SearchTypeProps>`
  width: 18px;
  height: 18px;
  margin-left: 2px;
  fill: ${({ theme }) => theme.color.black};

  ${({ $open }) =>
    $open &&
    css`
      transform: rotate(180deg);
    `}
`;
