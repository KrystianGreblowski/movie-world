import { Container, Content } from "./styled";
import { NavigationBar } from "./NavigationBar";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <Container>
      <Content>
        <NavigationBar />
        <SearchBar />
      </Content>
    </Container>
  );
};
