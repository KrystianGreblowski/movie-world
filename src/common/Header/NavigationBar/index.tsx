import { Wrapper } from "./styled";
import { MenuItems } from "./Menu";
import { Home } from "./Home";
import { menuItemsData } from "./menuItemsData";

export const NavigationBar = () => {
  const depthLevel = 0;

  return (
    <Wrapper>
      <Home />
      {menuItemsData.map((menu, index) => (
        <MenuItems items={menu} key={index} depthLevel={depthLevel} />
      ))}
    </Wrapper>
  );
};
