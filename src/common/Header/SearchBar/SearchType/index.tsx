import {
  Wrapper,
  SearchTypeArrow,
  SearchTypeContainer,
  SearchTypeTitle,
} from "./styled";
import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { searchTypeItemsData } from "./searchTypeItemsData";
import { useOutsideClick } from "../../../useOutsideClick";

export const SearchType = () => {
  const [open, setOpen] = useState(false);
  const [searchTypeTitle, setSearchTypeTitle] = useState(
    searchTypeItemsData[0].title,
  );

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  const getSearchTypeTitle = (index: number) => {
    setSearchTypeTitle(searchTypeItemsData[index].title);
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
