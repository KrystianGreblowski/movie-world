import styled, { css } from "styled-components";

interface DropdownProps {
  $open?: boolean;
  $submenu?: boolean;
}

export const DropdownItemsContainer = styled.ul<DropdownProps>`
  list-style-type: none;
  margin: 0;
  position: absolute;
  top: 54px;
  border: 1px solid ${({ theme }) => theme.color.scorpion};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.codGray};
  padding: 6px 0;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease,
    visibility 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    top: 50px;
  }

  ${({ $submenu }) =>
    $submenu &&
    css`
      top: -7px;
      left: 128px;

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        top: -7px;
      }
    `}

  ${({ $open }) =>
    $open &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;
