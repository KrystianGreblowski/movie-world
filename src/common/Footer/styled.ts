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
`;

export const AboutMe = styled.p`
  margin: 0;
  align-self: flex-start;
  font-size: 18px;
  font-weight: 400;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CopyrightNotice = styled.p`
  margin: 0;
  align-self: flex-end;
  font-size: 15px;
  font-weight: 400;
`;
