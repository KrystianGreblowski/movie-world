import styled from "styled-components";

export const Wrapper = styled.header``;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 1384px;
  max-height: 800px;
  box-shadow: inset 0 0 90px 70px ${({ theme }) => theme.color.black};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 1384px;
  max-height: 800px;
  object-fit: cover;
  border-radius: 2px;
  position: relative;
  z-index: -1;
`;
