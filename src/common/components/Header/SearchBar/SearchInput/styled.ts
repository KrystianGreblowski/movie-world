import styled from "styled-components";
import { ReactComponent as SearchLoop } from "../../images/search-loop.svg";

export const SearchInputContainer = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const SearchInputText = styled.input`
  border: none;
  outline: none;
  padding: 0;
  margin-left: 12px;
  font-size: 13px;
  flex-grow: 1;
  width: 100px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin-left: 8px;
  }
`;

export const SearchInputImage = styled(SearchLoop)`
  width: 22px;
  height: 22px;
  margin: 0 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    margin: 0 8px;
  }
`;
