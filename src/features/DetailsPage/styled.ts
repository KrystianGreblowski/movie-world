import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Wrapper = styled.main`
  max-width: 1384px;
  padding: 0 8px;
  margin: 0 auto;
  opacity: 0;
  animation: ${fadeIn} 0.2s ease-in-out 0.5s forwards;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 64px;
`;

export const Header = styled.header``;

export const HeaderImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  max-width: 1384px;
  max-height: 800px;
  box-shadow: inset 0 0 90px 70px ${({ theme }) => theme.color.black};
`;

export const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 1384px;
  max-height: 800px;
  object-fit: cover;
  border-radius: 2px;
  position: relative;
  z-index: -1;
`;
