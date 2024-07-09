import styled from "styled-components";
import { ReactComponent as Star } from "./star.svg";

export const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.mineShaftDark};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
  padding: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding: 1.6vw;
    grid-gap: 2.8vw;
  }
`;

export const Image = styled.img`
  max-height: 340px;
  width: 100%;
  object-fit: cover;
  border-radius: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    max-height: 60vw;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Details = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-gap: 2.4vw;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  padding-top: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 6vw;
  }
`;

export const ReleaseYear = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 3.6vw;
  }
`;

export const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Genre = styled.p`
  margin: 0 8px 0 0;
  padding: 8px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.doveGray};
  font-size: 16px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 0 8px 8px 0;
    padding: 1.4vw;
    font-size: 3vw;
  }
`;

export const Overview = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  padding-right: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    padding-right: 0;
    font-size: 16px;
    line-height: 1.3;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: none;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding-bottom: 1vw;
  }
`;

export const RatingIcon = styled(Star)`
  width: 28px;
  height: 28px;
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 26px;
    height: 26px;
    margin-right: 8px;
  }
`;

export const Rating = styled.p`
  margin: 0 8px 0 0;
  font-size: 20px;
  font-weight: 600;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;

export const NumberOfVotes = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    padding-bottom: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;

export const NoVotes = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 14px;
  }
`;
