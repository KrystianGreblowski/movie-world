import { useState } from "react";
import { Wrapper, SearchContainer } from "./styled";
import { SearchType } from "./SearchType";
import { SearchInput } from "./SearchInput";
import { searchTypeItemsData } from "./SearchType/searchTypeItemsData";

export const SearchBar = () => {
  const [searchTypeTitle, setSearchTypeTitle] = useState(
    searchTypeItemsData[0].title,
  );

  const [searchTypeUrl, setSearchTypeUrl] = useState(
    searchTypeItemsData[0].url,
  );

  return (
    <Wrapper>
      <SearchContainer>
        <SearchType
          searchTypeTitle={searchTypeTitle}
          setSearchTypeTitle={setSearchTypeTitle}
          setSearchTypeUrl={setSearchTypeUrl}
        />
        <SearchInput
          searchTypeTitle={searchTypeTitle}
          searchTypeUrl={searchTypeUrl}
        />
      </SearchContainer>
    </Wrapper>
  );
};
