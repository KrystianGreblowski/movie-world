import {
  Wrapper,
  SearchInputContainer,
  SearchInputImage,
  SearchInputText,
  SearchTypeArrow,
  SearchTypeContainer,
  SearchTypeName,
} from "./styled";

export const SearchBar = () => {
  return (
    <Wrapper>
      <SearchTypeContainer>
        <SearchTypeName>All</SearchTypeName>
        <SearchTypeArrow />
      </SearchTypeContainer>

      <SearchInputContainer>
        <SearchInputText placeholder="Search Movie World" />
        <SearchInputImage />
      </SearchInputContainer>
    </Wrapper>
  );
};
