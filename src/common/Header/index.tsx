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
  Menu,
  MenuImage,
  MenuText,
} from "./styled";

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <AppInfo>
          <AppLogo />
          <AppName>MOVIE WORLD</AppName>
        </AppInfo>

        <Menu>
          <MenuImage />
          <MenuText>Menu</MenuText>
        </Menu>

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
