import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "./error.svg";

export const Wrapper = styled.div`
  max-width: 1384px;
  padding: 0 8px;
  margin: 128px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 64px auto;
  }
`;

export const Image = styled(ErrorIcon)`
  width: 80px;
  height: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 50px;
    height: 50px;
  }
`;

export const MainInfo = styled.h1`
  margin: 8px 0;
  font-size: 28px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 4px 0;
    font-size: 19px;
  }
`;

export const ExtraInfo = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 11px;
  }
`;
