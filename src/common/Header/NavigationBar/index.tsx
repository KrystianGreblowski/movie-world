import { Wrapper } from "./styled";
import { Menu } from "./Menu";
import { Home } from "./Home";
import { menuItemsData } from "./menuItemsData";

export const NavigationBar = () => {
  const depthLevel = 0;

  return (
    <Wrapper>
      <Home />
      {menuItemsData.map((menu, index) => (
        <Menu items={menu} key={index} depthLevel={depthLevel} />
      ))}
    </Wrapper>
  );
};
