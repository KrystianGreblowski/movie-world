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
