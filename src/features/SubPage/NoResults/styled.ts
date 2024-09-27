import styled from "styled-components";
import { ReactComponent as NoResults } from "./no-results.svg";

export const Wrapper = styled.main`
  max-width: 1384px;
  padding: 0 8px;
  margin: 128px 0 512px 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 64px 0 256px 0;
  }
`;

export const Text = styled.h1`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 16px;
  }
`;

export const Image = styled(NoResults)`
  width: 50px;
  height: 50px;
  margin-top: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 36px;
    height: 36px;
    margin-top: 12px;
  }
`;
