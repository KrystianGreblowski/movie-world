import { useState } from "react";
import { Wrapper, MenuButton, MenuImage, MenuText } from "./styled";
import { DropdownItems } from "./DropdownItems";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <MenuButton
        onClick={() => setOpen((previousOpenState) => !previousOpenState)}
      >
        <MenuImage />
        <MenuText>Menu</MenuText>
      </MenuButton>

      {open && <DropdownItems items={["Movies", "Series", "People"]} />}
    </Wrapper>
  );
};
