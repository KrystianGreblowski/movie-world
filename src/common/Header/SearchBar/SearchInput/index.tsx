import {
  SearchInputContainer,
  SearchInputImage,
  SearchInputText,
} from "./styled";
import { useGetQueryParameter } from "./useGetQueryParameter";
import { useReplaceQueryParameter } from "./useReplaceQueryParameter";
import { searchQueryParameterName } from "./searchQueryParameterName";

export const SearchInput = () => {
  const query = useGetQueryParameter(searchQueryParameterName) || "";

  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange =
    (key: string) =>
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const value = target.value;

      replaceQueryParameter({ key, value });
    };

  return (
    <SearchInputContainer>
      <SearchInputText
        placeholder="Search Movie World"
        value={query}
        onChange={onInputChange(searchQueryParameterName)}
      />
      <SearchInputImage />
    </SearchInputContainer>
  );
};
