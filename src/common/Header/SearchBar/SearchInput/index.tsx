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
  searchTypeTitle: string;
  searchTypeUrl: string;
}

export const SearchInput = ({
  searchTypeTitle,
  searchTypeUrl,
}: SearchInputProps) => {
  const query = useGetQueryParameter(searchQueryParameterName) || "";

  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange =
    (key: string) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const value = target.value;
      const url = searchTypeUrl;

      replaceQueryParameter({ url, key, value });
    };

  return (
    <SearchInputContainer>
      <SearchInputText
        placeholder={`Search ${searchTypeTitle}`}
        value={query}
        onChange={onInputChange(searchQueryParameterName)}
      />
      <SearchInputImage />
    </SearchInputContainer>
  );
};
