import styled from "styled-components";
import { ReactComponent as MovieIcon } from "./images/app-logo.svg";
import { ReactComponent as Arrow } from "./images/arrow.svg";
import { ReactComponent as SearchLoop } from "./images/search-loop.svg";
import { ReactComponent as MenuIcon } from "./images/menu.svg";

export const Wrapper = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.color.codGray};
`;

export const Content = styled.div`
  max-width: 1384px;
  padding: 0 8px;
  width: 100%;
  height: inherit;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AppInfo = styled.div`
  display: flex;
  flex-basis: 300px;
  flex-shrink: 0;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const AppLogo = styled(MovieIcon)`
  width: 60px;
  height: 60px;
`;

export const AppName = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 0 12px;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-basis: auto;
  flex-grow: 1;
  height: 44px;
`;

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

export const Menu = styled.button`
  border: none;
  background-color: inherit;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  align-items: center;
  margin: 0 48px;

  &:hover {
    cursor: pointer;
  }
`;

export const MenuImage = styled(MenuIcon)`
  width: 40px;
  height: 40px;
  margin-right: 8px;
`;
export const MenuText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  font-weight: 500;
`;
