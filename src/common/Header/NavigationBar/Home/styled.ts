import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as MovieIcon } from "../../images/app-logo.svg";

export const AppInfo = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const AppLogo = styled(MovieIcon)`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
`;

export const AppName = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 30px;
    margin: 0 0 0 8px;
  }
`;
