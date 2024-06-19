import styled, { css } from "styled-components";
import { ReactComponent as MenuIcon } from "../../images/menu.svg";
import { ReactComponent as ArrowRight } from "../../images/arrow-right.svg";

interface MenuProps {
  $submenu: boolean;
}

export const Wrapper = styled.div<MenuProps>`
  position: relative;
  margin: 0 48px;

  ${({ $submenu }) =>
    $submenu &&
    css`
      margin: 0;
    `}
`;

export const MenuButton = styled.button`
  border: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: inherit;

  &:hover {
    cursor: pointer;
  }
`;

export const MenuImage = styled(MenuIcon)`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  flex-shrink: 0;
`;
export const MenuText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  font-weight: 500;
  flex-shrink: 0;
`;

export const DropdownItem = styled.li`
  position: relative;
  z-index: 10;
  padding: 0 12px;
  transition: background-color 0.4s;
  background-color: inherit;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.mineShaft};
  }
`;

export const DropdownItemLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  width: 94px;
`;

export const DropdownItemTitle = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

export const DropdownItemArrow = styled(ArrowRight)`
  width: 12px;
  height: 16px;
`;
