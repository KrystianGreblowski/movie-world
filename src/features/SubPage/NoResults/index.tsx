import { Wrapper, Text, Image } from "./styled";

interface NoResultsProps {
  searchInput: string;
}

export const NoResults = ({ searchInput }: NoResultsProps) => {
  return (
    <Wrapper>
      <Text>Sorry, there are no results for “{searchInput}”</Text>
      <Image />
    </Wrapper>
  );
};
