import styled from "styled-components";
import { ReactComponent as MovieIcon } from "../../images/app-logo.svg";

export const AppInfo = styled.div`
  display: flex;
  flex-basis: 300px;
  flex-shrink: 0;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const AppLogo = styled(MovieIcon)`
  width: 60px;
  height: 60px;
`;

export const AppName = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 0 12px;
`;
