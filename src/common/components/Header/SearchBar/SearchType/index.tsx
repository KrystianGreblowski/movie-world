import React, { useState } from "react";
import {
  Wrapper,
  SearchTypeArrow,
  SearchTypeContainer,
  SearchTypeTitle,
} from "./styled";
import { Dropdown } from "./Dropdown";
import { searchTypeItemsData } from "./searchTypeItemsData";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";

interface SearchTypeProps {
  searchType: {
    title: string;
    url: string;
  };
  setSearchType: React.Dispatch<
    React.SetStateAction<{
      title: string;
      url: string;
    }>
  >;
}

export const SearchType = ({ searchType, setSearchType }: SearchTypeProps) => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  const getSearchTypeTitle = (index: number) => {
    setSearchType({
      title: searchTypeItemsData[index].title,
      url: searchTypeItemsData[index].url,
    });
    setOpen(false);
  };

  return (
    <Wrapper ref={ref}>
      <SearchTypeContainer
        onClick={() => setOpen((previousOpenState) => !previousOpenState)}
      >
        <SearchTypeTitle>{searchType.title}</SearchTypeTitle>
        <SearchTypeArrow $open={open} />
      </SearchTypeContainer>

      {open && (
        <Dropdown
          items={searchTypeItemsData}
          open={open}
          onGetSearchTypeTitle={getSearchTypeTitle}
        />
      )}
    </Wrapper>
  );
};
