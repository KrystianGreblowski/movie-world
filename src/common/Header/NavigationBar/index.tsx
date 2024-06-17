import { Wrapper } from "./styled";
import { Menu } from "./Menu";
import { Home } from "./Home";

export const NavigationBar = () => {
  return (
    <Wrapper>
      <Home />
      <Menu />
    </Wrapper>
  );
};
