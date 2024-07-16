import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as MenuIcon } from "../../images/menu.svg";
import { ReactComponent as ArrowRight } from "../../images/arrow-right.svg";

interface MenuProps {
  $submenu: boolean;
}

export const Wrapper = styled.div<MenuProps>`
  position: relative;
  margin: 0 36px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    margin: 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 8px 0 0 4px;
  }

  ${({ $submenu }) =>
    $submenu &&
    css`
      margin: 0;

      @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
        margin: 0;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
        margin: 0;
      }

      @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        margin: 0;
      }
    `}
`;

export const MenuButton = styled.button`
  border: none;
  padding: 2px 8px 2px 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  background-color: inherit;
  transition: background-color 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    padding: 4px 6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: 2px 8px 2px 6px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.mineShaft};
  }
`;

export const MenuImage = styled(MenuIcon)`
  width: 40px;
  height: 40px;
  margin-right: 8px;
  flex-shrink: 0;
  fill: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-right: 8px;
  }
`;

export const MenuTitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  font-weight: 500;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: block;
  }
`;

export const DropdownItem = styled.li`
  position: relative;
  z-index: 10;
  padding: 0 14px;
  transition: background-color 0.4s;
  background-color: inherit;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.mineShaft};
  }
`;

export const DropdownItemLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 38px;
  width: 100px;
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
