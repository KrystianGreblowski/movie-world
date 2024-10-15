import { useState } from "react";
import {
  Wrapper,
  MenuButton,
  MenuImage,
  MenuTitle,
  DropdownItem,
  DropdownItemButton,
  DropdownItemLink,
  DropdownItemArrow,
  DropdownItemTitle,
} from "./styled";
import { Dropdown } from "./Dropdown";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { MenuItemsData } from "../menuItemsData";

interface MenuProps {
  items: MenuItemsData;
  depthLevel: number;
  menuOpen: boolean;
  setMenuOpen: (
    open: boolean | ((previousMenuOpenState: boolean) => boolean),
  ) => void;
}

export const Menu = ({
  items,
  depthLevel,
  menuOpen,
  setMenuOpen,
}: MenuProps) => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setOpen(false);
    setMenuOpen(false);
  });

  const handleDropdownItemButtonClick = () => {
    setOpen(true);
    setMenuOpen(true);
  };

  const handleDropdownItemLinkClick = () => {
    setOpen(false);
    setMenuOpen(false);
  };

  return (
    <Wrapper ref={ref} $submenu={depthLevel > 0}>
      {!depthLevel ? (
        <>
          <MenuButton
            onClick={() =>
              setMenuOpen((previousMenuOpenState) => !previousMenuOpenState)
            }
          >
            <MenuImage />
            <MenuTitle>{items?.title}</MenuTitle>
          </MenuButton>

          <Dropdown
            submenus={items?.submenu}
            open={menuOpen}
            depthLevel={depthLevel}
            setMenuOpen={setMenuOpen}
          />
        </>
      ) : items?.submenu ? (
        <DropdownItem
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <DropdownItemButton onClick={handleDropdownItemButtonClick}>
            <DropdownItemTitle>{items.title}</DropdownItemTitle>
            <DropdownItemArrow />
          </DropdownItemButton>

          <Dropdown
            submenus={items.submenu}
            open={open}
            depthLevel={depthLevel}
            setMenuOpen={setMenuOpen}
          />
        </DropdownItem>
      ) : (
        <DropdownItem>
          <DropdownItemLink
            to={items.url}
            onClick={handleDropdownItemLinkClick}
          >
            <DropdownItemTitle>{items?.title}</DropdownItemTitle>
          </DropdownItemLink>
        </DropdownItem>
      )}
    </Wrapper>
  );
};
