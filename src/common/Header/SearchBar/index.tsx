import { Wrapper } from "./styled";
import { SearchType } from "./SearchType";
import { SearchInput } from "./SearchInput";

export const SearchBar = () => {
  return (
    <Wrapper>
      <SearchType />
      <SearchInput />
    </Wrapper>
  );
};
