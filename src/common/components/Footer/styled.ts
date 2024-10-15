import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.color.codGray};
`;

export const Content = styled.div`
  max-width: 1384px;
  padding: 0 8px;
  margin: 0 auto;
  height: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    height: 108px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    height: 256px;
  }
`;

export const AboutMe = styled.p`
  margin: 0;
  align-self: flex-start;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    flex-direction: column;
    align-self: flex-start;
  }
`;

export const CopyrightNotice = styled.p`
  margin: 0;
  align-self: flex-end;
  font-size: 15px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    font-size: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 10px;
  }
`;
