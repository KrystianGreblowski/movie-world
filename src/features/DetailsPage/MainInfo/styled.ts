import styled from "styled-components";
import { ReactComponent as Star } from "./star.svg";

export const Container = styled.div`
  height: auto;
  width: 100%;
  border-radius: 2px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
  margin-top: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-gap: 8px;
    margin-top: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-gap: 8px;
    margin-top: 24px;
  }
`;

export const Image = styled.img`
  height: 495px;
  width: 330px;
  object-fit: cover;
  border-radius: 2px;
  position: relative;
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    height: 315px;
    width: 210px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    height: 225px;
    width: 150px;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.mineShaftDark};
  padding: 10px;
  border-radius: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 6px;
  }
`;

export const Details = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    grid-gap: 1.4vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-gap: 1.8vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-gap: 2vw;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 48px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    font-size: 4.4vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 3.8vw;
  }
`;

export const ExtraInfoContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-gap: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-gap: 4px;
  }
`;

export const ExtraInfoTitle = styled.div`
  margin: 0;
  font-size: 22px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    font-size: 2vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 2.6vw;
  }
`;

export const ExtraInfoContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  font-size: 22px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    font-size: 2vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 2.6vw;
  }
`;

export const ProductionCountryName = styled.p`
  margin: 0 4px 0 0;
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
  font-size: 20px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    font-size: 1.8vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 0 8px 8px 0;
    padding: 1.2vw;
    font-size: 2.2vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 0 6px 6px 0;
  }
`;

export const Overview = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
  background-color: ${({ theme }) => theme.color.mineShaftDark};

  border-radius: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    font-size: 2vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 2.4vw;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-top: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 6px;
  }
`;

export const RatingIcon = styled(Star)`
  width: 32px;
  height: 32px;
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    width: 20px;
    height: 20px;
  }
`;

export const Rating = styled.p`
  margin: 0 8px 0 0;
  font-size: 22px;
  font-weight: 600;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    font-size: 21px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 16px;
    margin: 0 6px 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;

export const NumberOfVotes = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 2px;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    font-size: 16px;
    padding-bottom: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 14px;
    padding-bottom: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 11px;
  }
`;

export const NoVotes = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.laptop}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 12px;
  }
`;
