import styled from "styled-components";

const sectionTilesGap: number = 12;

export const Wrapper = styled.main`
  max-width: 1400px;
  padding: 0 16px;
  margin: 64px auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 64px;
`;

export const SectionWrapper = styled.section``;

export const SectionTitle = styled.h2`
  font-size: 38px;
  font-weight: 600;
  margin: 0 0 16px 0;
`;

export const SectionTilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${sectionTilesGap}px;
  line-height: 0;
`;
