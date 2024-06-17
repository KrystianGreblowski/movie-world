import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.color.codGray};
`;

export const Content = styled.div`
  max-width: 1384px;
  padding: 0 8px;
  width: 100%;
  height: inherit;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
