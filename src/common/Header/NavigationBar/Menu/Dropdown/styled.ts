import styled, { css } from "styled-components";

interface DropdownProps {
  $open?: boolean;
  $submenu?: boolean;
}

export const DropdownItemsContainer = styled.ul<DropdownProps>`
  list-style-type: none;
  margin: 0;
  position: absolute;
  top: 50px;
  border: 1px solid ${({ theme }) => theme.color.scorpion};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.codGray};
  padding: 6px 0;

  ${({ $submenu }) =>
    $submenu &&
    css`
      top: -7px;
      left: 118px;
    `}

  ${({ $open }) =>
    !$open &&
    css`
      display: none;
    `}
`;
