import { Wrapper, SearchContainer } from "./styled";
import { SearchType } from "./SearchType";
import { SearchInput } from "./SearchInput";

export const SearchBar = () => {
  return (
    <Wrapper>
      <SearchContainer>
        <SearchType />
        <SearchInput />
      </SearchContainer>
    </Wrapper>
  );
};
