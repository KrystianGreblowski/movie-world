import styled from "styled-components";
import { ReactComponent as MovieIcon } from "./app-logo.svg";

export const Wrapper = styled.header`
  width: 100%;
  height: 120px;
  background-color: #171717;
`;

export const Content = styled.div`
  max-width: 1384px;
  padding: 0 8px;
  width: 100%;
  height: inherit;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AppInfo = styled.div`
  display: flex;
  flex-basis: 300px;
  align-items: center;
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
