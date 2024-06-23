import styled from "styled-components";
import { ReactComponent as SearchLoop } from "../../images/search-loop.svg";

export const SearchInputContainer = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  background-color: ${({ theme }) => theme.color.white};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const SearchInputText = styled.input`
  border: none;
  outline: none;
  padding: 0;
  margin-left: 12px;
  font-size: 16px;
  flex-grow: 1;
`;

export const SearchInputImage = styled(SearchLoop)`
  width: 24px;
  height: 24px;
  margin: 0 12px;
`;
