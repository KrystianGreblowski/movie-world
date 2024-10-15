import { useState } from "react";
import { Wrapper, SearchContainer } from "./styled";
import { SearchType } from "./SearchType";
import { SearchInput } from "./SearchInput";
import { searchTypeItemsData } from "./SearchType/searchTypeItemsData";

export const SearchBar = () => {
  const [searchType, setSearchType] = useState({
    title: searchTypeItemsData[0].title,
    url: searchTypeItemsData[0].url,
  });

  return (
    <Wrapper>
      <SearchContainer>
        <SearchType searchType={searchType} setSearchType={setSearchType} />
        <SearchInput searchType={searchType} />
      </SearchContainer>
    </Wrapper>
  );
};
