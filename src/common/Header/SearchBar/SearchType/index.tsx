import React, { useState } from "react";
import {
  Wrapper,
  SearchTypeArrow,
  SearchTypeContainer,
  SearchTypeTitle,
} from "./styled";
import { Dropdown } from "./Dropdown";
import { searchTypeItemsData } from "./searchTypeItemsData";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

interface SearchTypeProps {
  searchTypeTitle: string;
  setSearchTypeTitle: React.Dispatch<React.SetStateAction<string>>;
  setSearchTypeUrl: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchType = ({
  searchTypeTitle,
  setSearchTypeTitle,
  setSearchTypeUrl,
}: SearchTypeProps) => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  const getSearchTypeTitle = (index: number) => {
    setSearchTypeTitle(searchTypeItemsData[index].title);
    setSearchTypeUrl(searchTypeItemsData[index].url);
    setOpen(false);
  };

  return (
    <Wrapper ref={ref}>
      <SearchTypeContainer
        onClick={() => setOpen((previousOpenState) => !previousOpenState)}
      >
        <SearchTypeTitle>{searchTypeTitle}</SearchTypeTitle>
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
