import { useState } from "react";
import { Wrapper, MenuButton, MenuImage, MenuText } from "./styled";
import { DropdownItems } from "./DropdownItems";
import { useOutsideClick } from "../../../useOutsideClick";

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return (
    <Wrapper ref={ref}>
      <MenuButton onClick={() => setOpen(!open)}>
        <MenuImage />
        <MenuText>Menu</MenuText>
      </MenuButton>

      {open && <DropdownItems items={["Movies", "Series", "People"]} />}
    </Wrapper>
  );
};
