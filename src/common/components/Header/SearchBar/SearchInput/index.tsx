import React from "react";
import {
  SearchInputContainer,
  SearchInputImage,
  SearchInputText,
} from "./styled";
import { useGetQueryParameter } from "./useGetQueryParameter";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";
import { searchQueryParameterName } from "./searchQueryParameterName";

interface SearchInputProps {
  searchType: {
    title: string;
    url: string;
  };
}

export const SearchInput = ({ searchType }: SearchInputProps) => {
  const query = useGetQueryParameter(searchQueryParameterName) || "";

  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange =
    (key: string) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const value = target.value;
      const url = searchType.url;

      replaceQueryParameter({ url, key, value });
    };

  return (
    <SearchInputContainer>
      <SearchInputText
        placeholder={`Search ${searchType.title}`}
        value={query}
        onChange={onInputChange(searchQueryParameterName)}
      />
      <SearchInputImage />
    </SearchInputContainer>
  );
};
