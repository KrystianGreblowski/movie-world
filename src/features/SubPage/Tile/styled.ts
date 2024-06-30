import styled from "styled-components";
import { ReactComponent as Star } from "./star.svg";

export const Container = styled.div`
  width: 100%;
  height: auto;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.mineShaftDark};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
  padding: 12px;
`;

export const Image = styled.img`
  max-height: 400px;
  width: 100%;
  object-fit: cover;
  border-radius: 2px;
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
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 600;
  padding-top: 2px;
`;

export const ReleaseYear = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;

export const GenresContainer = styled.div`
  display: flex;
`;

export const Genre = styled.p`
  margin: 0 8px 0 0;
  padding: 8px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.doveGray};
  font-size: 16px;
  font-weight: 400;
`;

export const Overview = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  padding-right: 24px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 8px;
`;

export const RatingIcon = styled(Star)`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

export const Rating = styled.p`
  margin: 0 8px 0 0;
  font-size: 20px;
  font-weight: 600;
`;

export const NumberOfVotes = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 1px;
`;

export const NoVotes = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
`;
