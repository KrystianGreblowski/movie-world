import {
  SearchInputContainer,
  SearchInputImage,
  SearchInputText,
} from "./styled";

export const SearchInput = () => {
  return (
    <SearchInputContainer>
      <SearchInputText placeholder="Search Movie World" />
      <SearchInputImage />
    </SearchInputContainer>
  );
};
