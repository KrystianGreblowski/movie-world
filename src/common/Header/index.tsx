import {
  Wrapper,
  Content,
  AppInfo,
  AppLogo,
  AppName,
  SearchBar,
  SearchTypeContainer,
  SearchTypeName,
  SearchTypeArrow,
  SearchInputContainer,
  SearchInputText,
  SearchInputImage,
} from "./styled";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <AppInfo>
          <AppLogo />
          <AppName>MOVIE WORLD</AppName>
        </AppInfo>

        <Menu />

        <SearchBar>
          <SearchTypeContainer>
            <SearchTypeName>All</SearchTypeName>
            <SearchTypeArrow />
          </SearchTypeContainer>

          <SearchInputContainer>
            <SearchInputText placeholder="Search Movie World" />
            <SearchInputImage />
          </SearchInputContainer>
        </SearchBar>
      </Content>
    </Wrapper>
  );
};
