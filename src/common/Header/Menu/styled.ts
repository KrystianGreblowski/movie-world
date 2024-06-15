import styled from "styled-components";
import { ReactComponent as MenuIcon } from "../images/menu.svg";

export const Wrapper = styled.div`
  position: relative;
  margin: 0 48px;
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
