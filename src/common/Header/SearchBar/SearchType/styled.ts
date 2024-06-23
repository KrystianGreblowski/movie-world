import styled from "styled-components";
import { ReactComponent as Arrow } from "../../images/arrow-down.svg";

export const SearchTypeContainer = styled.button`
  border: none;
  padding: 0;
  display: flex;
  flex-basis: 80px;
  flex-shrink: 0;
  height: inherit;
  background-color: ${({ theme }) => theme.color.white};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.color.gray};

  &:hover {
    cursor: pointer;
  }
`;

export const SearchTypeName = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: 22px;
  font-weight: 600;
  margin: 0;
`;

export const SearchTypeArrow = styled(Arrow)`
  width: 20px;
  height: 20px;
  //transform: rotate(180deg);
  margin-left: 2px;
`;
