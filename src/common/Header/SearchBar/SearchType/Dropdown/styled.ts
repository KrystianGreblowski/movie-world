import styled, { css } from "styled-components";

interface DropdownProps {
  $open?: boolean;
}

export const DropdownItemsContainer = styled.ul<DropdownProps>`
  list-style-type: none;
  margin: 0;
  position: absolute;
  top: 70px;
  border: 1px solid ${({ theme }) => theme.color.scorpion};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.mineShaftDark};
  padding: 6px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    top: 182px;
  }

  ${({ $open }) =>
    !$open &&
    css`
      display: none;
    `}
`;

export const DropdownItem = styled.li`
  position: relative;
  z-index: 10;
  background-color: inherit;
`;

export const DropdownItemButton = styled.button`
  border: none;
  padding: 0 12px;
  background-color: inherit;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  width: 88px;
  transition: background-color 0.4s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.mineShaft};
  }
`;

export const DropdownItemTitle = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;
