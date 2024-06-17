import { useState } from "react";
import { Wrapper, MenuButton, MenuImage, MenuText } from "./styled";
import { DropDownList } from "./DropDownList";

export const Menu = () => {
  const [mainListActive, setMainListActive] = useState(false);

  return (
    <Wrapper>
      <MenuButton onClick={() => setMainListActive(!mainListActive)}>
        <MenuImage />
        <MenuText>Menu</MenuText>
      </MenuButton>

      {mainListActive && (
        <DropDownList listItems={["Movies", "Series", "People"]} />
      )}
    </Wrapper>
  );
};
