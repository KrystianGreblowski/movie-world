import { useState } from "react";
import {
  Wrapper,
  MenuButton,
  MenuImage,
  MenuTitle,
  DropdownItem,
  DropdownItemLink,
  DropdownItemArrow,
  DropdownItemTitle,
} from "./styled";
import { Dropdown } from "./Dropdown";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { MenuItemsData } from "../menuItemsData";

interface MenuProps {
  items: MenuItemsData | undefined;
  depthLevel: number;
}

export const Menu = ({ items, depthLevel }: MenuProps) => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  return (
    <Wrapper ref={ref} $submenu={depthLevel > 0}>
      {!depthLevel ? (
        <>
          <MenuButton
            onClick={() => setOpen((previousOpenState) => !previousOpenState)}
          >
            <MenuImage />
            <MenuTitle>{items?.title}</MenuTitle>
          </MenuButton>

          <Dropdown
            submenus={items?.submenu}
            open={open}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <DropdownItem
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {items?.submenu ? (
            <>
              <DropdownItemLink href={depthLevel === 1 ? undefined : items.url}>
                <DropdownItemTitle>{items.title}</DropdownItemTitle>
                <DropdownItemArrow />
              </DropdownItemLink>

              <Dropdown
                submenus={items.submenu}
                open={open}
                depthLevel={depthLevel}
              />
            </>
          ) : (
            <DropdownItemLink href={items?.url}>
              <DropdownItemTitle>{items?.title}</DropdownItemTitle>
            </DropdownItemLink>
          )}
        </DropdownItem>
      )}
    </Wrapper>
  );
};
